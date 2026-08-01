/*

 ▗▄▄▖▗▖    ▗▄▖  ▗▄▄▖ ▗▄▄▖▗▄▄▄▖▗▖  ▗▖ ▗▄▄▖
▐▌   ▐▌   ▐▌ ▐▌▐▌   ▐▌     █  ▐▛▚▖▐▌▐▌
▐▌▝▜▌▐▌   ▐▌ ▐▌ ▝▀▚▖ ▝▀▚▖  █  ▐▌ ▝▜▌▐▌▝▜▌
▝▚▄▞▘▐▙▄▄▖▝▚▄▞▘▗▄▄▞▘▗▄▄▞▘▗▄█▄▖▐▌  ▐▌▝▚▄▞▘


------

If you like this and want to consider following me, I wouldn't hate it :p
  -> linktr.ee/glossing ✨

-----

This file is also available at glossing.dev/scripts.js for direct importing:

await import('https://glossing.dev/scripts.js')

*/

/*

Allows importing prebake scripts that include Kabelsalat code. The reason this is necessary is that
Kabelsalat-based functions require 'transpilation' which doesn't occur with a raw `import`

Just replace `await import(...)` with `await prebake(...)` :)
*/
window.prebake = async function (url) {
  window.__bakery ??= {}
  window.__bakery[url] ??= false
  if (window.__bakery[url]) return
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Response status: " + response.status)
    }
    const content = await response.text()
    await window.strudelMirror.repl.evaluate(content)
    // mini-off
    logger(`[prebake] Successfully loaded ${url}`)
    // mini-on
    window.__bakery[url] = true
  } catch (error) {
    console.error(error.message)
  }
}

/* Similar to set.mix but won't write over values that `vals` does not contain.
  This lets you do things like

  $: s("bd").n(5).room(0.1).rlp(1800).up(`<
    1 0.5 ~ 0.7:4
    1 0.5 ~ ~
    1 0.5 ~ [0.4:4 0.6:4]
    1 0.5 1:22:sd:1 ~
  >*8`.as("velocity:n:s:room"))

  to do Elektron-style parameter locks ++ set the rhythm of an element (similar to `struct`)
  at the same time
*/
window.up = register(
  "up",
  (vals, pat) =>
    pat
      .withValue(
        (v) => (vNew) =>
          Object.assign(
            v,
            Object.fromEntries(
              Object.entries(vNew).filter(([_, val]) => val !== undefined),
            ),
          ),
      )
      .appBoth(vals),
  false,
)

/* Plays a sound once (when the REPL is updated) but locked to a provided grid/quantize

So doing

s("downlifter").oneshot(4)

will play it, but only at the next 4-divisible cycle (t = 0, 4, 8, etc)
Useful for locking it into relevant parts of the arrangement

*/
window.oneshot = register("oneshot", (grid, pat) => {
  const t = getTime()
  const qt = Math.ceil(t / grid) * grid
  return pat.filterWhen((t) => t >= qt && t < qt + 1)
})

/* Executes a function when a specific control key matches a specific value. For example

$: s("bd hh sd hh").filtval("s", "bd", x => x.duck(2))

To only have the kicks trigger the sidechain

*/
window.filtval = register("filtval", (key, val, func, pat) => {
  return pat.when(
    pat.fmap((v) => v[key] === val),
    func,
  )
})

/* Polyphonic non-legato glide

This also has the nice feature of glide persisting across notes, so if you have a very long glide
it'll actually slowly drift between those targets rather than starting its glide over on
every new note

*/
window.glide = register(
  "glide",
  (time, pat) => {
    let curr = [],
      prev = [],
      lastT = null
    const query = (state) => {
      const trig = !!state.controls._cps // an actual trigger as opposed to lookahead
      const haps = pat.query(state)
      const output = []
      haps.map((hap) => {
        const { value, whole } = hap
        const t = Number(whole.begin)
        if (trig && (lastT == null || lastT !== t)) {
          prev = curr
          curr = []
          lastT = t
        }
        const glideHaps = time.query(state.setSpan(hap.wholeOrPart()))
        glideHaps.map((glideHap) => {
          const part = hap.part.intersection(glideHap.part)
          if (!part) return
          const context = hap.combineContext(glideHap)
          const glideT = glideHap.value
          const freqF = getFrequencyFromValue(
            value,
            value.s === "sbd" ? 29 : 36,
          ) // target
          const freqI = prev.length
            ? prev.reduce((closest, v) => {
                const phase = glideT > 0 ? Math.min((t - v.t) / glideT, 1) : 1
                const cand = v.freqI + phase * (v.freqF - v.freqI)
                if (closest == null) return cand
                return Math.abs(cand - freqF) < Math.abs(closest - freqF)
                  ? cand
                  : closest
              }, null)
            : freqF
          if (trig) {
            curr.push({ freqI, freqF, t })
          }
          let newVal = value
          if (Math.abs(freqF - freqI) > 1e-6) {
            newVal = {
              ...value,
              panchor: 0,
              psustain: 0,
              pattack: 0,
              pdecay: glideT,
              penv: -12 * Math.log2(freqF / freqI),
            }
          }
          output.push(new Hap(whole, part, newVal, context))
        })
      })
      return output
    }
    return new Pattern(query)
  },
  false,
)

/* Try all(x => x.glitch(rand)) to absolutely destroy your patterns :p <3

Fun to trigger at the end of bars for weird glitchy fills

*/
window.glitch = register("glitch", (amt, pat) => {
  return pat.withHap((hap) => {
    const t0 = Number(hap.part.begin)
    const v = { ...hap.value }
    const keys = Object.keys(v)
    const numKeys = keys.length
    const rands = getRandsAtTime(t0, numKeys)
    for (let i = 0; i < numKeys; i++) {
      const k = keys[i]
      if (["orbit", "duckorbit", "distorttype", "bus", "warpmode"].includes(k))
        continue
      const rand = 2 * rands[i] - 1
      const val = v[k]
      const isNumber = typeof val === "number"
      if (k === "note" && !isNumber) {
        const midi = noteToMidi(val)
        v[k] = Math.round(Math.max(midi * (1 + amt * 0.5 * rand), 24))
      } else if (isNumber) {
        v[k] *= 1 + rand * amt
        if (["cut", "n", "i"].includes(k)) {
          v[k] = Math.round(v[k])
        }
      }
    }
    return hap.withValue(() => v)
  })
})

/* Square ⬜️. Useful for making knobs / sliders feel smoother
 */
window.sq = register("sq", (pat) => pat.fmap((v) => v * v))

/* Strums chords

@example
$: s("gm_slap_bass_2")
  .note("a1,c2,e3,g4").clip(0.125).decay(0.2).delay(0.3)
  .strum(slider(0.0849, 0, 0.1))._pianoroll()

*/
window.strum = register("strum", (amt, pat) => {
  return pat.collect().withHaps((haps) => {
    return flatten(
      haps.map((hap) => {
        const collected = hap.value
        if (collected.length <= 1) {
          return collected
        }
        const l = collected.length - 1
        return collected.map((hap, idx) => {
          const offset = amt * ((2 * idx) / l - 1)
          return hap.withSpan((span) => span.withTime((t) => t + offset))
        })
      }),
    )
  })
})

/* Moves hits off the grid and adds velocity variation

@example
$: s("bd hh sd hh").humanize(slider(0.0328, 0, 1))
  .bank("tr909")
  ._pianoroll()
metronome: s("hh*8").n(9).dec(0.3)

*/
window.humanize = register("humanize", (amt, pat) => {
  const maxShift = clamp(amt, 0, 1) * 0.1
  const query = (state) => {
    const span = state.span
    return pat
      .query(
        state.setSpan(
          new TimeSpan(span.begin.sub(maxShift), span.end.add(maxShift)),
        ),
      )
      .map((hap) => {
        const t0 = Number(hap.part.begin)
        const offset = maxShift * (2 * getRandsAtTime(t0, 1, 0) - 1)
        const velocity =
          (hap.value.velocity ?? 1) +
          0.5 * maxShift * (2 * getRandsAtTime(t0, 1, 1) - 1)
        const shifted = hap
          .withValue((v) => ({ ...v, velocity }))
          .withSpan((hapSpan) => hapSpan.withTime((t) => t.add(offset)))
        return new Hap(
          shifted.whole,
          shifted.part.intersection(span),
          shifted.value,
          shifted.context,
        )
      })
  }
  return new Pattern(query).splitQueries()
})

/**
 * State
 */

/**
 * Resolves all patterns appearing in the `value` of the pattern into actual values
 * Similar to `outerJoin`, but applies to _all_ patterns within the value
 *
 * @name resolveValues
 * @memberof Pattern
 * @returns Pattern
 * @example
 * s("square")
 *   .withValue(() => ({ cutoff: run(8).slow(8).add(1).mul(200), note: "<[A,C,E] [G,B,D]>"}))
 *   .resolveValues()
 */
window.resolveValues = register("resolveValues", (pat) => {
  return pat.withHaps((haps, state) => {
    const out = []
    for (const hap of haps) {
      const baseWhole = hap.whole
      const basePart = hap.part
      const entries = Object.entries(hap.value || {})
      const resolvedValues = entries.map(([key, val]) => {
        if (val instanceof Pattern) {
          const vHaps = val.query(state) || []
          return vHaps.map((vHap) => ({
            key,
            val: vHap.value,
            part: vHap.part,
            context: vHap.context,
            locations: vHap.context.locations || [],
          }))
        }
        return [
          {
            key,
            val,
            part: basePart,
            context: {},
            locations: [],
          },
        ]
      })
      if (resolvedValues.length === 0) {
        out.push(hap)
        continue
      }
      const stack = [
        {
          count: 0,
          part: basePart,
          value: {},
          context: {},
          locations: [],
        },
      ]
      while (stack.length) {
        const { count, part, value, context, locations } = stack.pop()
        if (count === resolvedValues.length) {
          context.locations = locations
          out.push(new Hap(baseWhole, part, value, context))
          continue
        }
        for (const entry of resolvedValues[count]) {
          const newPart = part.intersection(entry.part)
          if (!newPart) continue
          stack.push({
            count: count + 1,
            part: newPart,
            value: { ...value, [entry.key]: entry.val },
            context: { ...context, ...entry.context },
            locations: [...locations, ...entry.locations],
          })
        }
      }
    }
    return out
  })
})

/**
 * Sets up `state` propagation on the pattern. The state will be updated on each timestep where there
 * is a trigger, via the provided `updateFn`.
 *
 * Note that all values on the state will automatically propagate, so you only need to return an object
 * that has the values you wish to update.
 *
 * The state provides a `__count` value to support things like [Isorhythms](https://en.wikipedia.org/wiki/Isorhythm) and
 * the `__time` of the current trigger.
 *
 * @name state
 * @memberof Pattern
 * @returns Pattern
 * @param {function} updateFn The function used to update the state
 * @example
 * s("tri").struct("x ~ [~ x] ~ x!2").duration(0.75).lpf(200).lpenv(2).delay(0.5)
 *   .state((s) => ({
 *     note: ["c#4", "f#2", "a#", "f#4", "g#3", "d#3"][s.__count % 6],
 *     room: _mod((s.room ?? 0) + 0.1, 1),
 *   }))
 */
window.state = register("state", (updateFn, pat) => {
  const state = { __count: 0, __time: 0 }
  Object.assign(state, updateFn(state))
  return pat
    .withValue((v) => ({ ...v, ...state }))
    .resolveValues()
    .onTrigger((hap) => {
      const t = Number(hap.part.begin)
      if (t === state.__time) return
      state.__time = t
      state.__count += 1
      Object.assign(state, updateFn(state))
    }, false)
})

/**
 * Turns the pattern into a [Markov chain](https://en.wikipedia.org/wiki/Markov_chain) with values
 * equal to an index from the `table` parameter, which defines the transition probabilities between
 * indices. Each trigger will sample from the distribution. Often paired with `pick` or `pickOut`.
 *
 * @name markov
 * @memberof Pattern
 * @returns Pattern
 * @param {number[][]} table Table of transition probabilities
 * @example
 * const markovTable = [[ 0, .2, .8], [ .3,  0, .7], [ .9, .1,  0]];
 * "x".beat("0, 3, 6, 8", 16)
 *   .markov(markovTable)
 *   .pickOut(['bd', 'sd', 'hh']).s().bank('tr909').log()
 *   .early(5)
 */
window.markov = register("markov", (table, pat) => {
  return pat
    .state((state) => {
      const cdf = table[state.value ?? 0].reduce((acc, p) => {
        return (acc.push((acc.at(-1) ?? 0) + p), acc)
      }, [])
      const sampled = getRandsAtTime(state.__time)
      const next = cdf.findIndex((element) => element > sampled)
      return {
        value: next,
      }
    })
    .fmap((v) => v.value)
})

Pattern.prototype.stadd = function (addPat) {
  return this.state((s, span) => {
    const v = addPat.queryArc(span.begin, span.end)[0].value
    for (const k of Object.keys(v)) {
      s[k] = (s[k] ?? 0) + v[k]
    }
    return s
  })
}

const _wrap = (x, max, min = 0) => min + _mod(x - min, max - min)
Pattern.prototype.wrap = function (maxPat, minPat) {
  return this.withHaps((haps, state) => {
    const vMax = maxPat.query(state)[0].value
    const vMin = minPat ? minPat.query(state)[0].value : undefined
    return haps.map((h) => {
      for (const k of Object.keys(vMax)) {
        const max = vMax[k] ?? Number.POSITIVE_INFINITY
        const min = vMin?.[k]
        h.value[k] = _wrap(h.value[k] ?? 0, max, min)
      }
      return h
    })
  })
}

// Converts db to linear values so you can do things like .gain(dbToLin(-5)) to reduce 5db
window.dbToLin = (db) => Math.pow(10, db / 20)

window.currScale = "G#:minor"

// Set the global scale
window.setScale = (scaleName) => (window.currScale = scaleName)

// Attach the global scale to the pattern (and shift the octave if provided)
// We use `ref` so scale changes later in the file still affect patterns above them
Pattern.prototype.sc = function (oct = 3) {
  return this.scale(ref(() => window.currScale)).trans(
    reify(oct).sub(3).mul(12),
  )
}

// Get segmented rands
window.rands = (div) => rand.seg(div)

// Like `up` but a shorthand for writing notes in the global scale
Pattern.prototype.upn = function (pat, oct = 3) {
  return this.up(pat.as("n")).sc(oct)
}

// Like `up` but a shorthand for setting `begin` of sounds and automatically setting clip(1)
// so they don't risk ringing out FOREVER
Pattern.prototype.upb = function (pat) {
  return this.up(pat.as("begin")).clip(1)
}

// Like postgain but faster to type & can be chained so that `pat.pg(0.5).pg(0.5)` will have overall
// postgain of 0.25
Pattern.prototype.pg = function (val) {
  return this.mul(postgain(val))
}

// Fit a sound to a given length. Useful for e.g. top loops and breaks. Note that typically what
// one would do is `pat.slow(len).fit()` which means that the pattern will only play every `len` cycles
// => you could be waiting a while after stopping the sound before it stops playing. This guarantees
// that the sound will only ever play for one cycle
Pattern.prototype.ifit = function (len) {
  return this.inside(len, fit).clip(1)
}

// Don't like counting to 8? THEN THIS IS THE FUNCTION FOR YOU!
// It automatically turns patterns like n("0@3 4@4 2@2") into n("<0@3 4@4 2>*8") (meaning that
// it sets it to the correct metric subdivision (8th notes) _and_ truncates the 2@2 down to just 2 since that
// would spill past the measure)
/*
  @example
  $: n("0@3 4@4 2@2").meter(8).scale("F:minor")._pianoroll()
*/
window.meter = register(
  "meter",
  (stepSize, pat) => {
    const total = pat._steps
    stepSize = Fraction(stepSize)
    if (total.lt(stepSize)) {
      const pad = stepSize.sub(total)
      return stepcat(pat, gap(pad)).pace(stepSize).restart("1")
    }
    const remainder = total.mod(stepSize)
    const newSteps = total.sub(remainder)
    const numCycles = newSteps.div(stepSize)
    return pat.take(newSteps).pace(stepSize).restart(pure(1).slow(numCycles))
  },
  true,
  false,
  (x) => x.stepJoin(),
)

// Chops up a sample and plays back those sections. Similar to ableton's "beat" mode. Useful for
// emphasizing transients in tops/breaks and to do time stretching
/*
  @example
  $: s("numbers:5").splay(16, 0.3, 2)
*/
Pattern.prototype.splay = function (cuts = 8, dec = 0.3, slow = 1) {
  return this.slice(cuts, run(cuts).slow(slow)).decay(dec).clip(1)
}

// Gives you access to velocity values. Useful for making other controls a function of velocity
/*
  @example
  $: s("saw").seg(8).note("F1").velocity(rand).vmap((v, x) => x.lpf(v.range(200, 4000)))
*/
window.vmap = register("vmap", (func, pat) => {
  return new Pattern((state) => {
    return pat.query(state).flatMap((hap) => {
      const span = hap.wholeOrPart()
      const vPat = pure(hap.value.velocity ?? 1)
      const hapPat = new Pattern((state2) => {
        return [
          new Hap(
            hap.whole,
            hap.part.intersection(state2.span),
            hap.value,
            hap.context,
          ),
        ]
      })
      return func(vPat, hapPat).query(state.setSpan(span))
    })
  })
})

// Lets you set the BPM (i.e. cpm x 4) in real time via a slider (or other control)
/*
  @example
  $: slider(100, 100, 200).setbpm()
*/
Pattern.prototype.setbpm = function () {
  const query = (state) => {
    if (!!state.controls.cyclist) {
      setCpm(Number(this.query(state)[0].value) / 4)
    }
    return []
  }
  return new Pattern(query)
}

// Shorthand for sending to a bus without allowing dry signal through
Pattern.prototype.bsend = function (id) {
  return this.bus(id).dry(0)
}

// Allows setting up various modes of a pattern
/*
  @example
  s("saw").modes("<0 1>", x => x, x => x.lfo({ c: "s" }))
*/
register("_modes", (mode, modeFnArr, pat) => {
  return modeFnArr[mode % modeFnArr.length](pat)
})
Pattern.prototype.modes = function (mode, ...modeFns) {
  return this.apply(reify(mode).pickmod(modeFns))
}

// Fade in a sound via a lowpass filter
Pattern.prototype.lpfade = function (t = 8, min = 200, max = 10000) {
  return this.FX(lpf(saw.slow(t).range(min, max)))
}

// Fade _out_ a sound via a highpass filter
Pattern.prototype.hpfade = function (t = 8, min = 200, max = 10000) {
  return this.FX(hpf(saw.sq().slow(t).range(min, max)))
}

// Add a customizable riser. You are given access to `rise` which is a 0-1 variable
// that indicates progress towards the end of the rise
/*
  @example
  $: riser(16, 8, (x, rise) => x.s("supersaw").detune(rise))
*/
window.riser = (speed = 16, cycles = 16, callback = (x, _rise) => x) => {
  return saw
    .slow(cycles)
    .fmap((v) => v * v)
    .apply((rise) =>
      s("pulse")
        .seg(speed)
        .note(rise.mul(24))
        .add(note("F1"))
        .lpf(rise.range(50, 20000))
        .apply((x) => callback(x, rise)),
    )
}

// Simple white noise sweep via exponential envelope
window.noiseSweep = (t = 8, bpm = 120) =>
  s("white")
    .slow(t)
    .hpf(800)
    .postgain(0)
    .env({
      da: 0.7,
      s: 1,
      a: reify(t)
        .mul(4 * 60)
        .div(reify(bpm)),
      ac: -0.8,
    })
    .rel(0.1)
    .sus(1)
    .compressor(-20)

// Arp(up). Instead of the normal arp which just cycles back around to the initial note when
// inputting an index above the total # of notes, `arpu` will change the octave up/down
/*
  @example
  $: note("[A2,C3,E5]").arpu("0 1 2 3 4 -1 -2 -3".fast(2))
*/
window.arpu = register(
  "arpu",
  (indices, pat) =>
    pat.arpWith((haps) =>
      reify(indices).fmap((i) => {
        const len = haps.length
        const oct = Math.floor(i / len)
        const base = haps[(i - oct * len) % len]
        return base.withValue((v) => ({
          ...v,
          note: parseNumeral(v.note) + 12 * oct,
        }))
      }),
    ),
  false,
)

// Pans each _voice_ of a chord individually
/*
  @example
  $: chord("<Am F G C>").voicing().panv("<0 0.25 0.75 1>").arp("0 1 2 3").s("piano")
*/
window.panv = register("panv", (amt, pat) => {
  return pat
    .collect()
    .fmap((haps) =>
      stack(
        ...haps.map((hap, idx) =>
          hap.withValue((v) => ({
            ...v,
            pan: idx % 2 === 0 ? amt : 1 - amt,
          })),
        ),
      ),
    )
    .innerJoin()
    .withHap(
      (h) => new Hap(h.whole, h.part, h.value.value, h.combineContext(h.value)),
    )
})

// Allows you to reverse a sound and use it as a sweep up
/*
  @example
  $: sweep("bd", 0.5, 1)
*/
window.sweep = (name, soundLen = 1, totLen = 8) => {
  return arrange(
    [totLen - soundLen, silence],
    [soundLen, s(name).slow(soundLen).fit().mul(speed(-1))],
  )
}

// Comb filter
Pattern.prototype.comb = function (delay = 0.005, feedback = 0.6) {
  delay = reify(delay)
  feedback = reify(feedback)
  return this.FX(
    K(() => {
      const d = S(delay)
      const q = S(feedback)
      return audioin()
        .add((x) => x.delay(d).mul(q))
        .add((x) => x.delay(2 * d).mul(q * q))
        .add((x) => x.delay(3 * d).mul(q * q * q))
        .add((x) => x.delay(4 * d).mul(q * q * q * q))
        .out()
    }),
  ).fxr(1)
}

// Fun lil bass guy
window.spinor = (alive = 1, dead = 0) =>
  s("wt_digital")
    .lfo({ dr: 0.05 })
    .wtrate(alive)
    .unison(3)
    .detune(alive)
    .compressor(-20)
    .fm(dead)
    .fmh(4)
    .FX(
      lpf(200)
        .lpe(4)
        .lpa(0.5)
        .lps(1)
        .K(() => {
          audioin()
            .sub((x) => x.bpf(sine(0.13).mul(S(rand))))
            .out()
        })
        .asym("0.3".mul(dead)),
      diode(0.7),
      gain(0.3),
    )
    .fxr(1)

// Same as `duck` but will scale down the depth based on the velocity of the triggering pattern
window.vduck = register("vduck", (target, pat) => {
  return pat.fmap((v) => ({
    ...v,
    duckorbit: target,
    duckdepth: (v.duckdepth ?? 1) * (v.velocity ?? 1),
  }))
})

// Ping pong delay
window.pong = register("pong", (mix, t, fb, pat) => {
  return pat
    .FX(
      K(() => {
        const mix = S(mix)
        const t = S(t)
        const fb = S(fb)
        const input = audioin()
        const L = add(0)
        const R = add(0)
        L.withIns(input, R.delay(t).mul(fb)).pan(-1)
        R.withIns(add(0), L.delay(t).mul(fb)).pan(1)
        const wet = poly(L, R).mix(2)
        return add(input.mix(2).mul(1 - mix), wet.mul(mix)).out()
      }),
    )
    .fxr(3)
})

Pattern.prototype.sophie = function (
  squish = 0.1,
  splat = 0.1,
  speed = 4,
  clang = 0.8,
) {
  clang = reify(clang).fmap((v) => clamp(v, 0, 0.999))
  squish = reify(squish).range(0.005, 0.05)
  splat = reify(splat).range(0.001, 0.5)
  return this.FX(
    delayt(squish)
      .lfo({ dc: 0, da: splat, s: speed })
      .delay(1)
      .dry(0)
      .delayfb(clang),
  ).fxr(2)
}

/* Trigger things!

control = what will cause the trigger to happen (cc(..), keyDown(..), etc)
grid = what time division to snap to. E.g. grid = 8 means triggering the sound will play it at the start of the next 8 bar section
length = # of cycles to play the sound for after it starts

@example
$: s("hh").trig(keyDown("Control:j"), 1, 1)
$: s("bd*4")

*/
Pattern.prototype.trig = function (control, length = 16, grid = 8) {
  let qt = -1e9
  const query = (state) => {
    const real = !!state.controls._cps
    const cch = control.query(state)
    const truthy = cch ? cch.some((h) => h.value > 0) : false
    if (real && truthy) {
      // Quantize
      qt = Math.ceil(getTime() / grid) * grid
    }
    return this.late(qt)
      .filterWhen((t) => t >= qt && t < qt + length)
      .query(state)
  }
  return new Pattern(query)
}

/* Pitchbend your sounds! Importantly, the bending (`bends`) pattern can have events
occurring _between_ events of the main pattern, which distinguishes it from the normal
pitch bend (`penv`).

@example
$: s("supersaw").detune(0.4).room(0.4).note("F1")
  .bend("<0 2 12@2 24 0 7 36>*16", "0 0.3", "0.3 0")
*/
const __semitoneBend = Math.pow(2, 1 / 12)
Pattern.prototype.bend = function (bends = 0, speedUp = 0.1, speedDown = 0.3) {
  window.__legatoBusID ??= 0
  const uuid = "bend_" + window.__legatoBusID++
  bends = reify(bends)
  speedUp = reify(speedUp)
  speedDown = reify(speedDown)
  // Create the bending pattern and make it play by tagging it with `p`
  bends
    .fmap((b) => (su) => (sd) => ({
      s: "one",
      attack: su,
      release: sd,
      bus: uuid,
      sustain: 1,
      dry: 0,
      gain: __semitoneBend ** b - 1,
      dc: 0,
    }))
    .appBoth(speedUp)
    .appBoth(speedDown)
    .p(uuid)
  // Modulate the original pattern
  return this.bmod({ c: "s", b: uuid, dr: 1 })
}

/* FM with a ✨ sound ✨

spat = the modulating sound (e.g. s('saw'))
config = configuration matching syntax of bmod plus an extra (optional)
parameter:
* rat = frequency ratio of modulator to carrier

@example

$: s("wt_digital")
  .n(0).note("F1").warpmode("bendmp")
  .wtrate(0.3)
  .sfm(
    s("wt_digital:3").wtrate(0.3).att(0.3),
    { c: "<s wt warp>", da: "<400 0.4 0.7>", rat: "<1 2 0.5>/4" },
  )
  ._spectrum()
*/
Pattern.prototype.sfm = function (spat, config = {}) {
  //target = 's', fm = 1, fmh = 2) {
  window.__sfmBusID ??= 0
  const uuid = "sfm_" + window.__sfmBusID++
  const { rat = 2, ...bmodConfig } = config
  bmodConfig.target ??= "s"
  // Create the modulating pattern and make it play by tagging it with `p`
  this.fmap((v) => (fmhV) => ({ freq: getFrequencyFromValue(v) * fmhV }))
    .appLeft(reify(rat))
    .set(reify(spat))
    .gain(1)
    .bus(uuid)
    .sustain(1)
    .dry(0)
    .p(uuid)
  // Modulate the original pattern
  return this.bmod({ b: uuid, ...bmodConfig })
}

/* ✨ Phase distortion ✨

spat = the modulating sound (e.g. s('saw'))
config = configuration matching syntax of bmod plus an extra (optional)
parameter:
* rat = frequency ratio of modulator to carrier

@example

$: s("wt_digital")
  .n(0).note("F1").warpmode("bendmp")
  .wtrate(0.3)
  .spd(
    s("wt_digital:3").wtrate(0.3).att(0.3),
    { da: "<400 0.4 0.7>", rat: "<1 2 0.5>/4" },
  )
  ._spectrum()
*/
Pattern.prototype.spd = function (spat, config = {}) {
  window.__spdBusID ??= 0
  const uuid = "spd_" + window.__spdBusID++
  const { rat = 2, ...bmodConfig } = config
  // Create the modulating pattern and make it play by tagging it with `p`
  this.fmap((v) => (pdhV) => ({ freq: getFrequencyFromValue(v) * pdhV }))
    .appLeft(reify(rat))
    .dry(0)
    .gain(1)
    .bus(uuid)
    .sustain(1)
    .set(reify(spat))
    .p(uuid)
  // Modulate the original pattern
  return this.FX(
    delay(1)
      .delayt(1e-10)
      .bmod({ b: uuid, ...bmodConfig })
      .delayfb(1e-10),
  )
}

window.getdur = async (s, n = 0) => {
  const { samples: bank, resolveUrl } = getSound(s).data
  const fakeHap = { s, n }
  const { buffer, playbackRate } = await getSampleBuffer(
    fakeHap,
    bank,
    resolveUrl,
  )
  return buffer.duration / playbackRate
}

const durCache = new Map()

Pattern.prototype.reese = function (xPat = 0, yPat = 0, spetunePat = 0.2) {
  xPat = reify(xPat)
  yPat = reify(yPat)
  spetunePat = reify(spetunePat)
  return this.withHaps((haps) => {
    return haps.flatMap((hap) => {
      const v = hap.value
      const vS = v.s,
        vN = v.n ?? 0
      if (vS == null) return hap
      const key = vS + ":" + vN
      let dur = durCache.get(key)
      if (!dur) {
        dur = getdur(vS, vN).then((d) => (durCache.set(key, d), d))
        durCache.set(key, dur)
      }
      const sampleDur = typeof dur === "number" ? dur : 1
      const freq = getFrequencyFromValue(v)
      const { note: _note, freq: _freq, ...filteredV } = v
      const fScale = freq * sampleDur
      const hapFunc = (isLeft) => (x) => (y) => (spetune) => {
        y = clamp(y, 0, 1) * 0.3
        spetune = clamp(spetune, 0, 1) * 0.02
        const dt = Math.pow(fScale, y - 1)
        const speed = Math.pow(fScale, y)
        const end = x + dt
        return {
          ...filteredV,
          loop: 1,
          loopBegin: x,
          loopEnd: end,
          begin: x,
          end,
          speed: speed * (isLeft ? 1 - spetune : 1 + spetune),
          pan: isLeft ? 0.3 : 0.7,
        }
      }
      const hapL = hap.withValue(() => hapFunc(true))
      const hapR = hap.withValue(() => hapFunc(false))
      return [hapL, hapR]
    })
  })
    .appLeft(xPat)
    .appLeft(yPat)
    .appLeft(spetunePat)
}

// HYPERDIMENSIONALITYYYYY
Pattern.prototype.hyper = function (config = {}) {
  return this.FX(
    K(() => {
      const x = audioin()
      const F = S(config.f ?? 0.5)
      const Q = S(config.q ?? 0.75)
      const SP = S(config.spacing ?? 1)
      const R = S(config.rate ?? 0.03)
      const b = sine(R)
        .mul(0.1)
        .add(add(0.002, sub(1, F).mul(0.05)))
      const m = (target) => 1 + (target - 1) * SP
      const taps = x
        .delay(b.mul(m(1)))
        .add(x.delay(b.mul(m(1.27))).mul(-1))
        .add(x.delay(b.mul(m(1.41))))
        .add(x.delay(b.mul(m(1.73))).mul(-1))
        .add(x.delay(b.mul(m(2.03))))
        .add(x.delay(b.mul(m(2.49))).mul(-1))
        .mul(0.99)
      return x.add(taps.mul(Q)).out()
    }),
  )
}

/* Adds a plucky tremolo effect.. to anything

@example
$: s("saw").gain(0).pluck(16, 1)

@example
$: s("saw").note("F1").lpf(200).pluck("8 16", 5000)

*/
Pattern.prototype.pluck = function (rate = 16, depth = 1) {
  return this.lfo({ s: rate, da: depth, dc: 0, sh: "saw" })
}

// Disperser
Pattern.prototype.disperse = function (config = {}) {
  return this.FX(
    K(() => {
      const x = audioin()
      const a = S(config.amount ?? 1)
      const s = S(config.size ?? 0.9)
      const r = S(config.rate ?? 0.05)
      const d = S(config.depth ?? 0.7)
      const t = 0.001 + 0.024 * s
      const lfo1 = sine(r).mul(0.5).add(0.5)
      const lfo2 = sine(1.7 * r)
        .mul(0.5)
        .add(0.5)

      const t1 = lfo1.mul(2).sub(1).mul(d).add(1).mul(t)
      const t2 = lfo2.mul(2).sub(1).mul(d).add(1).mul(t)

      const low = x.lpf(0.25)
      const mid = x.bpf(0.5, 0.6)
      const high = x.hpf(0.7)

      const dl1 = low.delay(t1).mul(lfo1.mul(2).sub(1).mul(0.15).add(0.7))
      const dm1 = mid
        .delay(t2.mul(0.8))
        .mul(lfo2.mul(2).sub(1).mul(0.2).add(0.8))
      const dh1 = high
        .delay(t1.mul(0.6))
        .mul(lfo1.mul(2).sub(1).mul(0.15).add(0.6))
      const dl2 = low.delay(t2.mul(1.9)).mul(-0.45)
      const dm2 = mid.delay(t1.mul(1.6)).mul(-0.55)
      const dm3 = mid.delay(t2.mul(2.4)).mul(0.35)
      const dh2 = high.delay(t2.mul(1.3)).mul(-0.4)

      let y = low
        .add(dl1)
        .add(dl2)
        .add(mid.add(dm1).add(dm2).add(dm3))
        .add(high.add(dh1).add(dh2))

      y = y.add(y.delay(t1.mul(2.7)).mul(0.25 * a))

      const pi = 3.14159265
      const norm = 2 / pi
      y = atan(y.mul(1.7)).mul(norm)

      const dry = x.mul(1 - a)
      const wet = y.mul(a)
      return dry.add(wet).out()
    }),
  )
}

// Neuro-y movement via notches
Pattern.prototype.neuro = function (config = {}) {
  return this.FX(
    K(() => {
      const x = audioin()

      const d = S(config.depth ?? 1)
      const r = S(config.rate ?? 0.05)
      const w = S(config.width ?? 0.8) * 0.3
      const g = S(config.drive ?? 0)

      const lfo1 = sine(r).mul(0.5).add(0.5)
      const lfo2 = sine(1.7 * r)
        .mul(0.5)
        .add(0.5)

      const f1 = lfo1.mul(0.6).add(0.15)
      const f2 = lfo2.mul(0.45).add(0.25)

      const x1 = x.mul(g * 2.0 + 1.0)

      const n1 = x1.sub(x1.bpf(f1, w).mul(d))
      const n2 = n1.sub(n1.bpf(f2, w * 0.8).mul(d * 0.7))

      let y = n2.add(n2.delay(0.03).mul(0.22))
      const pi = 3.14159265
      const norm = 2 / pi
      y = atan(y.mul(2.2)).mul(norm)

      return y.out()
    }),
  )
}

// Acid filter
Pattern.prototype.acid = function (config = {}) {
  return this.FX(
    K(() => {
      const x = audioin()
      const f = S(config.cutoff ?? 0.3)
      const q = clamp(S(config.resonance ?? 0.8), 0, 1)
      const d = S(config.drive ?? 0)
      const e = S(config.env ?? 0.5)
      const dec = S(config.decay ?? 0.3)
      const envelope = impulse(1).ad(0.01, dec).mul(e)
      const fEnv = clamp(envelope.add(f), 0, 1)
      const norm = 2 / 3.14159265
      const pre = atan(x.mul(1 + 4 * d)).mul(norm)
      const fb = pre.lpf(fEnv).lpf(fEnv).lpf(fEnv).lpf(fEnv).mul(q)
      const inp = pre.sub(fb)
      let y = inp.lpf(fEnv).lpf(fEnv).lpf(fEnv).lpf(fEnv)
      y = atan(y.mul(2.2)).mul(norm)
      return y.out()
    }),
  ).fxr(0.3)
}

// Just some nasty distortion
Pattern.prototype.nast = function (config = {}) {
  return this.FX(
    K(() => {
      const d = S(config.drive ?? 1)
      const a = 0.636619772
      const x = audioin()
      const pre = x.add(x.hpf(0.3).mul(0.6))
      const low = pre.lpf(0.3)
      const mid = pre.lpf(0.8).hpf(0.3)
      const high = pre.hpf(0.8)

      const lowD = atan(low.mul(d * 16.0))
        .lpf(0.6)
        .mul(a)
      const mid1 = fold(mid.mul(d * 3.5))
      const mid2 = clamp(mid1.add(pow(mid1, 2).mul(0.85)), -0.9, 0.9)
      const midD = atan(mid2.mul(d * 1.3)).mul(a)

      const high1 = high.mul(d * 1.0)
      const highD = fold(high1.mul(1.2))
      const y = lowD.add(midD).add(highD.mul(0.5))
      return atan(y.mul(2.5)).out()
    }),
  )
}

/* Keymapping

@example
$: s("tri").seg(8).n(irand(12)).scale("F:minor")
  .kmap((amt) => delay(amt))

*/
Pattern.prototype.kmap = function (func) {
  let minV = 24
  let maxV = 64
  return new Pattern((state) => {
    return this.query(state).flatMap((hap) => {
      let note = hap.value.note
      note = isNote(note) ? noteToMidi(note) : note
      const range = Math.max(1, maxV - minV)
      const amt = clamp((note - minV) / range, 0, 1)
      const span = hap.wholeOrPart()
      const hapPat = new Pattern((state2) => [
        new Hap(
          hap.whole,
          hap.part.intersection(state2.span),
          hap.value,
          hap.context,
        ),
      ])
      return func(amt, hapPat).query(state.setSpan(span))
    })
  }).onTrigger((hap) => {
    minV = Math.min(minV, noteToMidi(hap.value.note))
    maxV = Math.max(maxV, noteToMidi(hap.value.note))
  }, false)
}

/* Adds smoothed random noise to a parameter

Similar to lfo, env, bmod, this will affect the parameter immediately before it
unless 'c' is explicitly specified in the config

@example
$: s("saw").drift().seg(8).n(irand(12)).scale("F:minor")

*/
Pattern.prototype.drift = function (config = {}, speed = 16) {
  window.__driftID ??= 0
  const driftID = "drift_" + window.__driftID++
  gain(rand.seed(window.__driftID).seg(speed))
    .s("one")
    .att(1)
    .rel(1)
    .bus(driftID)
    .dry(0)
    .p(driftID)
  let cDefault = { b: driftID, dc: -0.5 }
  const depthKeys = ["depth", "dep", "dr", "depthabs", "da"]
  // If no depth information is provided, default it
  if (!depthKeys.some((k) => k in config)) {
    cDefault["da"] = 2
  }
  return this.bmod({ ...cDefault, ...config })
}

/* Adds sample and hold random noise to a parameter

Similar to lfo, env, bmod, this will affect the parameter immediately before it
unless 'c' is explicitly specified in the config

@example
$: s("saw").sandy().seg(8).n(irand(12)).scale("F:minor")
@example
$: s("saw").note("F1").lpf(200).sandy({ da: 2800, dc: 0 }, 4).scale("F:minor")
  ._spectrum()

*/
Pattern.prototype.sandy = function (config = {}, speed = 16) {
  window.__sandyID ??= 0
  const sandyID = "sandy_" + window.__sandyID++
  gain(rand.seed(window.__sandyID).seg(speed))
    .s("one")
    .att(0)
    .rel(0)
    .sus(1)
    .bus(sandyID)
    .dry(0)
    .p(sandyID)
  let cDefault = { b: sandyID, dc: -0.5 }
  const depthKeys = ["depth", "dep", "dr", "depthabs", "da"]
  // If no depth information is provided, default it
  if (!depthKeys.some((k) => k in config)) {
    cDefault["da"] = 2
  }
  return this.bmod({ ...cDefault, ...config })
}

// GRANULATOR II :p
Pattern.prototype.grain = function (config = {}) {
  const size = reify(config.size ?? 0.05)
  const sizerand = reify(config.sizerand ?? 0.05)
  const t = reify(config.begin ?? 0)
  const beginrand = reify(config.beginrand ?? 0.05)
  const gainrand = reify(config.gainrand ?? 1)
  return this.pg(0.3)
    .fast(pure(1).div(size.add(rand.mul(sizerand))))
    .gain(pure(1).sub(perlin.slow(8).mul(gainrand)))
    .begin(
      t
        .add(
          perlin.seed(2).slow(8).toBipolar().mul(beginrand).add(time.slow(32)),
        )
        .fmap((t) => t % 1),
    )
    .clip(0.8)
    .att(0.1)
    .sus(1)
    .rel(0.2)
    .room(0.5)
    .delay(0.5)
    .pan(rand.seed(3))
    .dry(0.3)
    .size(2)
    .delayfb(0.6)
}

// Haas effect
Pattern.prototype.haas = function () {
  return this.set(
    stack(pan(0), pan(1).FX(delay(1).delayt(0.005).dry(0).delayfb(1e-10))),
  )
}

/*

Everyone asks me for `co`. Here it is. It's set up for muting/unumuting on my
specific midi controller (Midi Fighter Twister), but maybe it helps to see it
so you can configure one for your own!

const cc = await midin('Midi Fighter Twister')
window.co = register('co', (id, pat) => pat.o(id).when(cc(id - 1, 2).gte(0.5), x => x.hush()));

*/

// Helper
const _findParenMatch = (str, start) => {
  let numLeft = 0
  for (let i = start; i < str.length; i++) {
    const ch = str[i]
    if (ch === "(") numLeft++
    else if (ch === ")") {
      numLeft--
      if (numLeft === 0) return i
    }
  }
  return -1
}

// Send a pattern away for a bit
// Useful for live performances
window.away = register("away", (dt, pat) => {
  const start = getTime()
  const mirror = window.strudelMirror
  const { code } = mirror
  const thisCmd = ".away("
  const thisIdx = code.lastIndexOf(thisCmd)
  const cmdEnd = _findParenMatch(code, thisIdx + thisCmd.length - 1) + 1
  const nextCycle = Math.ceil(start)
  const end = nextCycle + dt
  const query = (state) => {
    if (state.controls._cps && state.span.begin >= end) {
      const before = code.slice(0, thisIdx)
      const after = code.slice(cmdEnd)
      const newCode = before + after
      mirror.setCode(newCode)
      mirror.evaluate()
      return pat.query(state)
    }
    return pat.filterWhen((t) => t < nextCycle).query(state)
  }
  return new Pattern(query)
})

// mini-off
// Helper for some hotkey stuff
function _prompt(label = "Enter a number", def = 8) {
  return new Promise((resolve) => {
    const body = document.body
    const prevFocus = document.activeElement
    const wrap = document.createElement("div")
    wrap.className = "prompt-overlay"
    wrap.style.cssText = `
      position: fixed; inset: 0; display: grid; place-items: center;
      z-index: 999999;
    `
    const box = document.createElement("div")
    box.className = "prompt"
    box.style.cssText = `
      background: var(--background, #222);
      color: var(--foreground, #fff);
      padding: 18px 20px;
      width: min(92vw, 520px);
      min-width: 420px;
      border-radius: 14px;
      box-shadow: 0 18px 48px rgba(0,0,0,.45);
      display: grid; gap: 12px;
      font-family: inherit;
      border: 1px solid var(--foreground, #fff);
      transform: translateZ(0);
    `
    const lab = document.createElement("label")
    lab.textContent = label
    lab.style.cssText = `
      font-size: 16px; font-weight: 600;
    `
    const input = document.createElement("input")
    input.type = "number"
    input.value = def
    input.style.cssText = `
      width: 100%;
      padding: 12px 14px;
      font-size: 18px;
      line-height: 1.2;
      border-radius: 10px;
      border: 1px solid var(--gutterForeground, #8a919966);
      background: var(--lineBackground, #22222299);
      color: var(--foreground, #fff);
      outline: none;
    `

    const row = document.createElement("div")
    row.style.cssText = `display: flex; gap: 8px; justify-content: flex-end; margin-top: 6px;`

    const _button = (txt) => {
      const b = document.createElement("button")
      b.textContent = txt
      b.style.cssText = `
        padding: 10px 14px; font-size: 14px; border-radius: 10px; cursor: pointer;
        background: var(--lineBackground, #22222299);
        color: var(--foreground, #fff);
        border: 1px solid var(--gutterForeground, #8a919966);
      `
      return b
    }
    const cancelButton = _button("Cancel")
    const okayButton = _button("OK")
    okayButton.style.borderColor = "var(--caret, #ffcc00)"
    row.append(cancelButton, okayButton)

    const description = document.createElement("div")
    description.textContent = "Enter = OK · Esc = Cancel"
    description.style.cssText = `opacity:.75; font-size:12px; text-align:right;`

    box.append(lab, input, row, description)
    wrap.appendChild(box)
    document.body.appendChild(wrap)
    body.classList.add("darken")

    const resolveAndCleanUp = (value) => {
      body.classList.remove("darken")
      wrap.remove()
      resolve(value)
      prevFocus.focus()
    }
    setTimeout(() => {
      input.focus()
      input.select()
    }, 0)
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) resolveAndCleanUp(null)
    })
    wrap.addEventListener("keydown", (e) => {
      e.stopPropagation()
      if (e.key === "Escape") resolveAndCleanUp(null)
      if (e.key === "Enter") {
        resolveAndCleanUp(Number(input.value))
      }
    })
    cancelButton.addEventListener("click", () => resolveAndCleanUp(null))
    okayButton.addEventListener("click", () => {
      resolveAndCleanUp(Number(input.value))
    })
  })
}

// Random Normal (Box-Muller)
const _randn = () => {
  let u = 0,
    v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

// Random exponential helper
const _randExp = (lambda = 1) => {
  return -Math.log(1 - Math.random() * (1 - Math.exp(-lambda))) / lambda
}

// Configurable acid-like pattern generator that mostly stays near 0 but can jump up occasionally
const _randAcid = (acidity = 0) => {
  const mix = clamp(acidity, 0, 10) / 10
  const low = _randExp(0.5 + 7.5 * mix)
  const jumpChance = 0.02 + 0.14 * mix
  const jump = 1 - Math.pow(Math.random(), 3.5)
  const acid = Math.random() < jumpChance ? jump : low
  return Math.random() * (1 - mix) + acid * mix
}

// HOTKEYSSSSSSS
if (!window.__hotkeysAreSet) {
  const repl = window.strudelMirror
  window.addEventListener("keydown", async (event) => {
    if (event.repeat) return
    const meta = event.metaKey
    const shift = event.shiftKey
    window.anonIdx ??= 0
    // CMD + SHIFT + . = insert one-line 8th note wrapper
    if (meta && shift && event.key === ".") {
      event.preventDefault()
      const x = repl.getCursorLocation()
      repl.insertCode('"<>*8"', x)
      repl.setCursorLocation(x + 2)
    }
    // CMD + SHIFT + , = insert multi-line 8th note wrapper
    if (meta && shift && event.key === ",") {
      event.preventDefault()
      const x = repl.getCursorLocation()
      repl.insertCode("\`<\n  \n>*8\`", x)
      repl.setCursorLocation(x + 5)
    }
    // CMD + SHIFT + m = replace highlighted steps with value + ties
    if (meta && shift && event.key.toLowerCase() === "m") {
      event.preventDefault()
      const selection = repl.editor.state.selection.main
      const selected = repl.editor.state.doc
        .sliceString(selection.from, selection.to)
        .trim()
      const value = await _prompt("Value?", 1)
      const parts = selected.split(/\s+/).filter(Boolean)
      const replacement = [
        value,
        ...Array(Math.max(0, parts.length - 1)).fill("_"),
      ].join(" ")
      repl.replaceCode(replacement, selection.from, selection.to)
      repl.setCursorLocation(selection.from + replacement.length)
    }
    // CMD + SHIFT + c = count # of events highlighted
    if (meta && shift && event.key.toLowerCase() === "c") {
      event.preventDefault()
      const selection = repl.editor.state.selection.main
      const selected = repl.editor.state.doc
        .sliceString(selection.from, selection.to)
        .trim()
      const parts = selected.split(/\s+/).filter(Boolean)
      alert("Count: " + parts.length)
    }
    // CMD + SHIFT + b = interactive beat insertion
    if (meta && shift && event.key === "b") {
      event.preventDefault()
      const numBeats = await _prompt("How many beats?", 4)
      const density = await _prompt("Density (out of 10)?", 5)
      const x = repl.getCursorLocation()
      let beatString = ""
      const getChoice = () => Math.random() < density / 10
      for (let i = 0; i < numBeats; i++) {
        if (i > 0) beatString += " "
        const c1 = getChoice(),
          c2 = getChoice()
        if (c1 && c2) {
          beatString += "1"
        } else if (c1) {
          beatString += "[1 ~]"
        } else if (c2) {
          beatString += "[~ 1]"
        } else {
          beatString += "~"
        }
      }
      repl.insertCode(beatString, x)
      repl.setCursorLocation(x + beatString.length)
    }
    // CMD + SHIFT + / = insert 16 rests
    if (meta && shift && event.key === "/") {
      event.preventDefault()
      const x = repl.getCursorLocation()
      repl.insertCode("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~", x)
      repl.setCursorLocation(x + 31)
    }
    // CMD + SHIFT + ; = interactive melody/control insertion
    if (meta && shift && event.key === ";") {
      event.preventDefault()
      const x = repl.getCursorLocation()
      const numBeats = await _prompt("How many beats?", 8)
      const max = await _prompt("Max value?", 1)
      const quantize = await _prompt("Quantize?", 0)
      const restDensity = await _prompt("Rest density?", 0)
      const rhythm = await _prompt("Add rhythm?", 0)
      const acidity = await _prompt("Acidity? (0 uniform, 10 acid)", 0)
      const getChoice = (remainingBeats) => {
        const beats =
          rhythm > 0.5
            ? clamp(
                Math.max(1, Math.round(1 + _randn() * 2)),
                1,
                remainingBeats,
              )
            : 1
        if (10 * Math.random() < restDensity) {
          return ["~", beats]
        }
        const r = _randAcid(acidity) * max
        const choice = quantize > 0.5 ? Math.round(r) : r.toFixed(2)
        return [choice, beats]
      }
      let randString = ""
      let totalBeats = 0
      while (totalBeats < numBeats) {
        const [choice, beats] = getChoice(numBeats - totalBeats)
        randString += beats === 1 ? `${choice}` : `${choice}@${beats}`
        totalBeats += beats
        if (totalBeats < numBeats) {
          randString += " "
        }
      }
      repl.insertCode(randString, x)
    }
  })
}
window.__hotkeysAreSet = true

// mini-on

// FM in db units
register("fmd", (db, pat) => {
  return pat.fm(dbToLin(db) * 20)
})

// True random
window.truer = signal((_t) => Math.random())

/* Like 'as' but allows you to call functions (!)

@example
$: s("bd").set.out("1 1:0.1".asf("vel:late")).log()
 */
Pattern.prototype.asf = function (fnPat) {
  const pat = this
  const result = new Pattern((state) => {
    // We have to widen the range for, e.g., early/lates within `fns`
    const expanded = state.setSpan(
      new TimeSpan(state.span.begin.sub(1), state.span.end.add(1)),
    )
    return pat.query(expanded).flatMap((hap) => {
      const vals = Array.isArray(hap.value) ? hap.value : [hap.value]
      return fnPat
        .query(expanded.setSpan(hap.wholeOrPart()))
        .flatMap((fnHap) => {
          const fns = Array.isArray(fnHap.value) ? fnHap.value : [fnHap.value]
          let output = new Pattern((state2) => {
            const part = hap.part.intersection(state2.span)
            if (!part) return []
            return [new Hap(hap.whole, part, {}, hap.combineContext(fnHap))]
          })
          for (let i = 0; i < fns.length; ++i) {
            output = output[fns[i]](vals[i])
          }
          return output.query(state)
        })
    })
  }).splitQueries()

  result._steps = pat._steps
  return result
}

/* Lets you split a length of time into equal-length sections

@example
$: s("bd").ryt('15/3 1')._pianoroll()

This will take 15 out of the 16 parts of 1 measure (as divided into
16th notes) and play as many "length 3" (i.e. dotted 8th) notes as will
fit in there (5). And then 1 final 16th note. Very nice for quickly
sketching out rhythms
*/
Pattern.prototype.ryt = function (str, meter = 16) {
  const rhythm =
    "<" +
    str
      .split(" ")
      .map((s) => {
        let [len, dur] = s.split("/")
        dur ??= len
        const num = Math.floor(len / dur)
        return ("1@" + dur + " ").repeat(num)
      })
      .join("") +
    ">"
  return this.struct(m(rhythm).fast(meter))
}

/* Shorthand for writing patterned `beat`s

@example
setcpm(145 / 4)
$: s("bd")
  .bet(16,
       "0,2,4",
       "<0 3>",
       perlin.mul("16").round().seed("<4 5 7>,2,3,1"))
  .vel(0.5).n(irand(8))
  ._pianoroll()
*/
Pattern.prototype.bet = function (div, ...beats) {
  return this.beat(stack(...beats), div)
}

/* Stack patterns, mix them in a bus, and then continue patterning the output of that bus */
window.bstack = (...pats) => {
  window.__bstackID ??= -1
  const uuid = "bstack_" + window.__bstackID++
  stack(...pats)
    .bus(uuid)
    .dry(0)
    .p(uuid)
  return s("bus").n(uuid)
}

/* Gated randomness.

Set a threshold for one RNG to gate a second RNG.

Accepts a configuration of:
* threshold
* seed (to offset random seed of both generators)
* sil (whether to leave 0s as-is or turn them into silence (i.e.
  whether or not to emit a pattern event in that scenario. The former
  can be manipulated downstream. The latter cannot.))
* rib (for a second (temporal) seed)
* len (for looping)

*/
window.randy = (config = {}) => {
  const thresh = config.thresh ?? 0.5
  const seed = config.seed ?? 1
  const sil = config.silence ?? config.sil ?? 1
  const rib = config.rib
  const len = config.len ?? 1
  let outR = rand.seed(seed).mul(rand.seed(reify(seed).add(1)).gte(thresh))
  if (rib !== undefined) {
    outR = outR.rib(rib, len)
  }
  outR = outR.when(reify(sil).gte(0.5), (x) =>
    x.fmap((v) => (v === 0 ? silence : reify(v))).outerJoin(),
  )
  return outR
}

/*

Like `bend` but for anything (!)

@example
$: s("saw").lpf(200).move("0 0 500 0 2000 0")

*/
Pattern.prototype.move = function (moves = 0, config = {}) {
  window.__moveID ??= 0
  const uuid = "move_" + window.__moveID++
  moves = reify(moves)
  const speedUp = reify(config.speedUp ?? 0.1)
  const speedDown = reify(config.speedDown ?? 0.3)
  // Create the movement pattern and make it play by tagging it with `p`
  moves
    .fmap((b) => (su) => (sd) => ({
      s: "one",
      attack: su,
      release: sd,
      bus: uuid,
      sustain: 1,
      dry: 0,
      gain: b,
      dc: 0,
    }))
    .appBoth(speedUp)
    .appBoth(speedDown)
    .p(uuid)
  // Modulate the original pattern
  return this.bmod({ b: uuid, da: reify(config.depth ?? 1) })
}

/* Launchpad fingerdrumming

Precede this with
window.kb = await midikeys('My Midi Controller Name')

@example
$: drum({
  s1: "cb",
  n: "<0 5>",
})

*/
window.drum = (config = {}) => {
  const sources = [
    config.s0 ?? "bd",
    config.s1 ?? "sd",
    config.s2 ?? "hh",
    config.s3 ?? "oh",
    config.s4 ?? "perc",
    config.s5 ?? "ht",
    config.s6 ?? "mt",
    config.s7 ?? "lt",
  ]
  const cuts = [
    config.c0 ?? 1,
    config.c1 ?? 2,
    config.c2 ?? 3,
    config.c3 ?? 3,
    config.c4 ?? 4,
    config.c5 ?? 5,
    config.c6 ?? 5,
    config.c7 ?? 5,
  ]
  return kb()
    .fmap((v) => {
      let { note, ...filtered } = v
      note -= 36
      const vs = Math.floor(note / 8)
      const source = sources[vs]
      const n = note % 8
      const cut = cuts[vs]
      return reify(source).fmap((s) => ({
        ...filtered,
        n,
        s,
        cut,
      }))
    })
    .outerJoin()
    .add(n(config.n ?? 0))
    .clip(1)
}

/*

Arrange but..
* You can use patterns for start/duration.
* If duration is omitted, it defaults to `total - start`
* Start can be a mini-notation list like "0:4".

@example
arrange2(8,
  ["0:0.5, 1:2", "bd(3,8)"],
  ["<0 0.5>", "cp(3,8)"]
).sound()

*/
window.arrange2 = (total, ...parts) => {
  total = Fraction(total)
  parts = parts.map((part) => {
    if (part.length == 2) {
      return [part[0], undefined, part[1]]
    }
    return [part[0], part[1], part[2]]
  })
  const partPatterns = parts.map((part) => {
    let start, dur, pat
    if (part.length == 2) {
      ;[start, pat] = part
    } else {
      ;[start, dur, pat] = part
    }
    const startPat = reify(start)
    const durPat = dur === undefined ? dur : reify(dur)
    const pairPat = durPat
      ? startPat.fmap((s) => (d) => [s, d]).appLeft(durPat)
      : startPat
    return new Pattern((state) =>
      pairPat
        .query(state)
        .map((hap) => {
          let startVal
          let durVal
          if (durPat) {
            const [s, d] = hap.value
            startVal = Fraction(s)
            durVal = Fraction(d)
          } else if (Array.isArray(hap.value)) {
            startVal = Fraction(hap.value[0])
            durVal = Fraction(hap.value[1])
          } else {
            startVal = Fraction(hap.value)
            durVal = total.sub(startVal)
          }
          if (durVal.lte(0)) {
            return undefined
          }
          const begin = hap.part.begin.sam().add(startVal.div(total))
          const end = begin.add(durVal.div(total))
          const span = new TimeSpan(begin, end)
          return new Hap(span, span, reify(pat), hap.context)
        })
        .filter((x) => x),
    )
  })
  return stack(...partPatterns)
    .slow(total)
    .restartJoin()
}

/* TRANSCRIBE YOUR PATTERN
(with quantization)

@example
$: s("saw").seg(8).n(irand(8)).scale("F:minor")
  .scribe(4, 16)

*/
// mini-off
Pattern.prototype.scribe = function (duration = 4, grid = 16) {
  const start = Math.ceil(getTime())
  const end = start + duration
  const mirror = window.strudelMirror
  const { code } = mirror
  const transString = ".scribe("
  const transIdx = code.lastIndexOf(transString)
  const transStart = transIdx + transString.length - 1
  const transEnd = _findParenMatch(code, transStart)
  const snapStep = Fraction(1).div(grid)
  const quantizeStep = (value) => Fraction(value).div(snapStep).round()
  const formatValue = (value) => {
    if (typeof value === "number") {
      return Number.isInteger(value) ? String(value) : String(value.toFixed(2))
    }
    return String(value)
  }
  const parts = []
  const keyOrder = []
  const seenKeys = new Set()
  const seenParts = new Set()
  let didUpdate = false
  const query = (state) => {
    const haps = this.query(state)
    if (state.controls._cps) {
      for (const hap of haps) {
        if (!hap.hasOnset()) continue
        const begin = hap.whole.begin
        if (begin < start || begin >= end) continue
        const { duration, midikey, ...filtered } = hap.value
        const partKey = `${Fraction(begin).show()}|${Fraction(hap.whole.end).show()}|${JSON.stringify(filtered)}`
        if (seenParts.has(partKey)) continue
        seenParts.add(partKey)
        for (const key of Object.keys(filtered)) {
          if (!seenKeys.has(key)) {
            seenKeys.add(key)
            keyOrder.push(key)
          }
        }
        parts.push({
          beginStep: quantizeStep(Fraction(begin).sub(start)),
          durStep: quantizeStep(hap.whole.end.sub(begin)).max(Fraction(1)),
          value: filtered,
        })
      }
    }
    if (!didUpdate && getTime() >= end) {
      const totalSteps = quantizeStep(duration).max(Fraction(1)).valueOf()
      const constantKeys = keyOrder.filter((key) => {
        const first = parts[0].value[key]
        return parts.every(
          (part) => formatValue(part.value[key]) === formatValue(first),
        )
      })
      const varyingKeys = keyOrder.filter((key) => !constantKeys.includes(key))
      const steps = Array.from({ length: totalSteps }, () => [])
      parts
        .slice()
        .sort((a, b) => a.beginStep.sub(b.beginStep).valueOf())
        .forEach((part) => {
          const step = part.beginStep.valueOf()
          if (step < 0 || step >= steps.length) return
          const values = varyingKeys.map((key) => formatValue(part.value[key]))
          values.push(String(part.durStep.valueOf()))
          steps[step].push(values.join(":"))
        })
      const stepStrings = steps.map((step) => {
        if (!step.length) return "~"
        if (step.length === 1) return step[0]
        return `[${step.join(", ")}]`
      })
      const rows = []
      for (let i = 0; i < stepStrings.length; i += grid) {
        rows.push(`  ${stepStrings.slice(i, i + grid).join(" ")}`)
      }
      const mapping = [...varyingKeys, "clip"].join(":")
      const miniPattern = `\`<\n${rows.join("\n")}\n>*${grid}\`.as(${JSON.stringify(mapping)})`
      const constantPattern = constantKeys
        .map((key) => `${key}("${formatValue(parts[0].value[key])}")`)
        .join(".")
      const replacement = constantPattern
        ? `$: ${constantPattern}.set.out(${miniPattern})`
        : `$: ${miniPattern}`
      const before = code.slice(0, transIdx)
      const after = code.slice(transEnd + 1)
      const updatedCode = `${before}${after}`.trimEnd()
      mirror.setCode(`${updatedCode}\n${replacement}`)
      didUpdate = true
    }
    return haps
  }
  return new Pattern(query)
}
// mini-on

/* Swing :)
 */
Pattern.prototype.swin = function (config = {}) {
  const grid = reify(config.grid ?? 16)
  const amt = reify(config.amt ?? 0.5).mul(
    config.max ?? pure(4).div(grid.mul(16)),
  )
  return this.late(cat(0, amt.slow(grid)).fast(grid))
}

/* Noise, but mixed into the original signal via an audio bus
(can also use other forms of "noise" like "saw", "agogo", etc.)
*/
Pattern.prototype.noize = function (amt = 0.3, type = "white") {
  const b = bstack(this, this.s(type).clip(1).gain(amt))
  return this.outerBind(() => b)
}

// gain in db units
register("gd", (db, pat) => {
  return pat.mul(gain(dbToLin(db)))
})

// postgain in db units
register("pgd", (db, pat) => {
  return pat.pg(dbToLin(db))
})

/* Variation on mini notation where you write durations with :x instead of @x

This allows overlapping notes
*/
Pattern.prototype.no = function (pat, asPat = "n") {
  return this.set.out(
    pat.as(
      reify(asPat).fmap((a) => {
        const isArr = a instanceof Array
        return isArr ? [...a, "clip"] : [a, "clip"]
      }),
    ),
  )
}

/* Overlapping notation for notes */
Pattern.prototype.non = function (pat, oct = 3, asPat = "n") {
  return this.no(pat, asPat).sc(oct)
}

/* Overlapping notation for chopping samples with `begin` (which matches the
  `slice` integer-based indexing)
*/
Pattern.prototype.nob = function (pat, asPat = "begin") {
  return this.clip(1).no(pat, asPat)
}

Pattern.prototype.dust = function () {
  return this.FX(
    K(
      audioin()
        // Volume automation
        .mul(
          dust(S(irand(8)))
            .adsr(0.01, 0.02, 0, 0.1)
            .mul(0.75)
            .add(0.25),
        )
        .fold(0.5)
        .out(),
    ),
  )
}

Pattern.prototype.chorus = function () {
  return this.FX(
    K(
      audioin()
        .apply((inp) =>
          // Chorus
          inp.add(inp.delay(sine(0.25).range(0.01, 0.03))),
        )
        .out(),
    ),
  )
}

/*

Ghost ducking

@example
$: s("saw").note("F1").lpf(4800).gduck("1 1 0 1")

*/
Pattern.prototype.gduck = function (pat, config = {}) {
  window.__gduckID ??= 0
  const uuid = "gduck_" + window.__gduckID++
  // Infer the orbit
  let oInferred = 1
  const query = (state) => {
    const haps = this.query(state)
    // Actual trigger
    if (!!state.controls.cyclist) {
      for (const hap of haps) {
        const hapO = hap?.value?.orbit
        if (hap.hasOnset() && hapO !== undefined) {
          oInferred = hapO
          break
        }
      }
    }
    return haps
  }
  // Create the ghost pattern and make it play by tagging it with `p`
  pat
    .as("vel")
    .duckdepth(config.depth ?? 1)
    .duckatt(config.att ?? 0.3)
    .duckons(config.ons ?? 0)
    .vduck(config.o ?? ref(() => oInferred))
    .pg(0)
    .p(uuid)
  return new Pattern(query)
}

Pattern.prototype.gate = function (pat, config = {}) {
  window.__gateID ??= 0
  const uuid = "gate_" + window.__gateID++
  // Create the gating pattern and make it play by tagging it with `p`
  pat
    .as("vel")
    .s("one")
    .sus(1)
    .att(config.att ?? config.a ?? 0)
    .rel(config.rel ?? config.r ?? 0)
    .gain(1)
    .bsend(uuid)
    .p(uuid)
  return this.FX(gain(0).bmod({ b: uuid, da: 1 }))
}

/* Ring modulate (RM) with a ✨ sound ✨

spat = the modulating sound (e.g. s('saw'))
config = configuration matching syntax of bmod plus an extra (optional)
parameter:
* rat = frequency ratio of modulator to carrier

@example

$: s("wt_digital")
  .n(0).note("F1").warpmode("bendmp")
  .wtrate(0.3)
  .srm(s("wt_digital:3").wtrate(0.3).att(0.3), { rat: "<1 2 0.5>/4" })
  ._spectrum()
*/
Pattern.prototype.srm = function (spat, config) {
  return this.FX(gain(0).sfm(spat, config))
}

/* Amplitude modulate (AM) with a ✨ sound ✨

spat = the modulating sound (e.g. s('saw'))
config = configuration matching syntax of bmod plus an extra (optional)
parameter:
* rat = frequency ratio of modulator to carrier

@example

$: s("wt_digital")
  .n(0).note("F1").warpmode("bendmp")
  .wtrate(0.3)
  .sam(s("wt_digital:3").wtrate(0.3).att(0.3), { rat: "<1 2 0.5>/4" })
  ._spectrum()
*/
Pattern.prototype.sam = function (spat, config) {
  config.dc ??= -0.5
  spat = spat.pg(0.5)
  return this.FX(gain(0.5).sfm(spat, config))
}
