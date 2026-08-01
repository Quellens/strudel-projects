/**
 * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
 * separated by ':'.
 *
 * @name s
 * @tags superdough, samples
 * @param {string | Pattern} sound The sound / pattern of sounds to pick
 * @synonyms sound
 * @example
 * s("bd hh")
 * @example
 * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
 *
 */
function s(sound): Pattern

/**
 * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
 * separated by ':'.
 *
 * @name s
 * @tags superdough, samples
 * @param {string | Pattern} sound The sound / pattern of sounds to pick
 * @synonyms sound
 * @example
 * s("bd hh")
 * @example
 * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
 *
 */
function sound(sound): Pattern

/**
 * Position in the wavetable of the wavetable oscillator
 *
 * @name wt
 * @tags wavetable, superdough
 * @param {number | Pattern} position Position in the wavetable from 0 to 1
 * @synonyms wavetablePosition
 * @example
 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
 */
function wt(position): Pattern

/**
 * Position in the wavetable of the wavetable oscillator
 *
 * @name wt
 * @tags wavetable, superdough
 * @param {number | Pattern} position Position in the wavetable from 0 to 1
 * @synonyms wavetablePosition
 * @example
 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
 */
function wavetablePosition(position): Pattern

/**
 * Amount of envelope applied wavetable oscillator's position envelope
 *
 * @name wtenv
 * @tags wavetable, envelope, superdough
 * @param {number | Pattern} amount between 0 and 1
 */
function wtenv(amount): Pattern

/**
 * Attack time of the wavetable oscillator's position envelope
 *
 * @name wtattack
 * @tags wavetable, envelope, superdough
 * @synonyms wtatt
 * @param {number | Pattern} time attack time in seconds
 */
function wtattack(time): Pattern

/**
 * Attack time of the wavetable oscillator's position envelope
 *
 * @name wtattack
 * @tags wavetable, envelope, superdough
 * @synonyms wtatt
 * @param {number | Pattern} time attack time in seconds
 */
function wtatt(time): Pattern

/**
 * Decay time of the wavetable oscillator's position envelope
 *
 * @name wtdecay
 * @tags wavetable, envelope, superdough
 * @synonyms wtdec
 * @param {number | Pattern} time decay time in seconds
 */
function wtdecay(time): Pattern

/**
 * Decay time of the wavetable oscillator's position envelope
 *
 * @name wtdecay
 * @tags wavetable, envelope, superdough
 * @synonyms wtdec
 * @param {number | Pattern} time decay time in seconds
 */
function wtdec(time): Pattern

/**
 * Sustain time of the wavetable oscillator's position envelope
 *
 * @name wtsustain
 * @tags wavetable, envelope, superdough
 * @synonyms wtsus
 * @param {number | Pattern} gain sustain level (0 to 1)
 */
function wtsustain(gain): Pattern

/**
 * Sustain time of the wavetable oscillator's position envelope
 *
 * @name wtsustain
 * @tags wavetable, envelope, superdough
 * @synonyms wtsus
 * @param {number | Pattern} gain sustain level (0 to 1)
 */
function wtsus(gain): Pattern

/**
 * Release time of the wavetable oscillator's position envelope
 *
 * @name wtrelease
 * @tags wavetable, envelope, superdough
 * @synonyms wtrel
 * @param {number | Pattern} time release time in seconds
 */
function wtrelease(time): Pattern

/**
 * Release time of the wavetable oscillator's position envelope
 *
 * @name wtrelease
 * @tags wavetable, envelope, superdough
 * @synonyms wtrel
 * @param {number | Pattern} time release time in seconds
 */
function wtrel(time): Pattern

/**
 * Rate of the LFO for the wavetable oscillator's position
 *
 * @name wtrate
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} rate rate in hertz
 */
function wtrate(rate): Pattern

/**
 * cycle synced rate of the LFO for the wavetable oscillator's position
 *
 * @name wtsync
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} rate rate in cycles
 */
function wtsync(rate): Pattern

/**
 * Depth of the LFO for the wavetable oscillator's position
 *
 * @name wtdepth
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} depth depth of modulation
 */
function wtdepth(depth): Pattern

/**
 * Shape of the LFO for the wavetable oscillator's position
 *
 * @name wtshape
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
 */
function wtshape(shape): Pattern

/**
 * DC offset of the LFO for the wavetable oscillator's position
 *
 * @name wtdc
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
 */
function wtdc(dcoffset): Pattern

/**
 * Skew of the LFO for the wavetable oscillator's position
 *
 * @name wtskew
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} skew How much to bend the LFO shape
 */
function wtskew(skew): Pattern

/**
 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
 *
 * @name warp
 * @tags wavetable, superdough
 * @param {number | Pattern} amount Warp of the wavetable from 0 to 1
 * @synonyms wavetableWarp
 * @example
 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("spin")
 */
function warp(amount): Pattern

/**
 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
 *
 * @name warp
 * @tags wavetable, superdough
 * @param {number | Pattern} amount Warp of the wavetable from 0 to 1
 * @synonyms wavetableWarp
 * @example
 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("spin")
 */
function wavetableWarp(amount): Pattern

/**
 * Attack time of the wavetable oscillator's warp envelope
 *
 * @name warpattack
 * @tags wavetable, envelope, superdough
 * @synonyms warpatt
 * @param {number | Pattern} time attack time in seconds
 */
function warpattack(time): Pattern

/**
 * Attack time of the wavetable oscillator's warp envelope
 *
 * @name warpattack
 * @tags wavetable, envelope, superdough
 * @synonyms warpatt
 * @param {number | Pattern} time attack time in seconds
 */
function warpatt(time): Pattern

/**
 * Decay time of the wavetable oscillator's warp envelope
 *
 * @name warpdecay
 * @tags wavetable, envelope, superdough
 * @synonyms warpdec
 * @param {number | Pattern} time decay time in seconds
 */
function warpdecay(time): Pattern

/**
 * Decay time of the wavetable oscillator's warp envelope
 *
 * @name warpdecay
 * @tags wavetable, envelope, superdough
 * @synonyms warpdec
 * @param {number | Pattern} time decay time in seconds
 */
function warpdec(time): Pattern

/**
 * Sustain time of the wavetable oscillator's warp envelope
 *
 * @name warpsustain
 * @tags wavetable, envelope, superdough
 * @synonyms warpsus
 * @param {number | Pattern} gain sustain level (0 to 1)
 */
function warpsustain(gain): Pattern

/**
 * Sustain time of the wavetable oscillator's warp envelope
 *
 * @name warpsustain
 * @tags wavetable, envelope, superdough
 * @synonyms warpsus
 * @param {number | Pattern} gain sustain level (0 to 1)
 */
function warpsus(gain): Pattern

/**
 * Release time of the wavetable oscillator's warp envelope
 *
 * @name warprelease
 * @tags wavetable, envelope, superdough
 * @synonyms warprel
 * @param {number | Pattern} time release time in seconds
 */
function warprelease(time): Pattern

/**
 * Release time of the wavetable oscillator's warp envelope
 *
 * @name warprelease
 * @tags wavetable, envelope, superdough
 * @synonyms warprel
 * @param {number | Pattern} time release time in seconds
 */
function warprel(time): Pattern

/**
 * Rate of the LFO for the wavetable oscillator's warp
 *
 * @name warprate
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} rate rate in hertz
 */
function warprate(rate): Pattern

/**
 * Depth of the LFO for the wavetable oscillator's warp
 *
 * @name warpdepth
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} depth depth of modulation
 */
function warpdepth(depth): Pattern

/**
 * Shape of the LFO for the wavetable oscillator's warp
 *
 * @name warpshape
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
 */
function warpshape(shape): Pattern

/**
 * DC offset of the LFO for the wavetable oscillator's warp
 *
 * @name warpdc
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
 */
function warpdc(dcoffset): Pattern

/**
 * Skew of the LFO for the wavetable oscillator's warp
 *
 * @name warpskew
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} skew How much to bend the LFO shape
 */
function warpskew(skew): Pattern

/**
 * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
 *
 * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
 * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
 *
 * @name warpmode
 * @tags wavetable, superdough
 * @param {number | string | Pattern} mode Warp mode
 * @synonyms wavetableWarpMode
 * @example
 * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
 *
 */
function warpmode(mode): Pattern

/**
 * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
 *
 * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
 * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
 *
 * @name warpmode
 * @tags wavetable, superdough
 * @param {number | string | Pattern} mode Warp mode
 * @synonyms wavetableWarpMode
 * @example
 * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
 *
 */
function wavetableWarpMode(mode): Pattern

/**
 * Amount of randomness of the initial phase of the wavetable oscillator.
 *
 * @name wtphaserand
 * @tags wavetable, superdough
 * @param {number | Pattern} amount Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
 * @synonyms wavetablePhaseRand
 * @example
 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
 *
 */
function wtphaserand(amount): Pattern

/**
 * Amount of randomness of the initial phase of the wavetable oscillator.
 *
 * @name wtphaserand
 * @tags wavetable, superdough
 * @param {number | Pattern} amount Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
 * @synonyms wavetablePhaseRand
 * @example
 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
 *
 */
function wavetablePhaseRand(amount): Pattern

/**
 * Amount of envelope applied wavetable oscillator's position envelope
 *
 * @name warpenv
 * @tags wavetable, envelope, superdough
 * @param {number | Pattern} amount between 0 and 1
 */
function warpenv(amount): Pattern

/**
 * cycle synced rate of the LFO for the wavetable warp position
 *
 * @name warpsync
 * @tags wavetable, lfo, superdough
 * @param {number | Pattern} rate rate in cycles
 */
function warpsync(rate): Pattern

/**
 * Define a custom webaudio node to use as a sound source.
 *
 * @name source
 * @tags external_io, superdough
 * @synonyms src
 * @param {function} getSource
 * @synonyms src
 *
 */
function source(getSource): Pattern

/**
 * Define a custom webaudio node to use as a sound source.
 *
 * @name source
 * @tags external_io, superdough
 * @synonyms src
 * @param {function} getSource
 * @synonyms src
 *
 */
function src(getSource): Pattern

/**
 * Selects the given index:
 *  - for samples, it picks the sample by index, with wrap around
 *  - for scales, it picks the scale degree
 *  - for voicings, it picks the voice index
 *
 * @name n
 * @tags superdough, samples, tonal
 * @param {number | Pattern} value sample index starting from 0
 * @example
 * s("bd sd [~ bd] sd,hh*6").n("<0 1>")
 */
function n(value): Pattern

/**
 * Selects the given degree. Currently used in `xen` and `tune`:
 *
 * @name i
 * @tags tonal
 * @param {number | Pattern} value
 * @example
 * i("0 1 2 3 4 5 6 7").xen("<5edo 10edo 15edo hexany15>")
 */
function i(value): Pattern

/**
 * Plays the given note name or midi number. A note name consists of
 *
 * - a letter (a-g or A-G)
 * - optional accidentals (b or #)
 * - optional (possibly negative) octave number (0-9). Defaults to 3
 *
 * Examples of valid note names: `c`, `bb`, `Bb`, `f#`, `c3`, `A4`, `Eb2`, `c#5`
 *
 * You can also use midi numbers instead of note names, where 69 is mapped to A4 440Hz in 12EDO.
 *
 * @name note
 * @tags tonal
 * @example
 * note("c a f e")
 * @example
 * note("c4 a4 f4 e4")
 * @example
 * note("60 69 65 64")
 * @example
 * note("fbb1 a#0 cbbb-1 e##-2").sound("saw")
 */
function note(...args): Pattern

/**
 * A pattern of numbers that speed up (or slow down) samples while they play. Currently only supported by osc / superdirt.
 *
 * @name accelerate
 * @tags samples, superdirt
 * @param {number | Pattern} amount acceleration.
 * @superdirtOnly
 * @example
 * s("sax").accelerate("<0 1 2 4 8 16>").slow(2).osc()
 *
 */
function accelerate(amount): Pattern

/**
 * Sets the velocity from 0 to 1. Is multiplied together with gain.
 *
 * @name velocity
 * @tags amplitude, superdough, supradough
 * @synonyms vel
 * @example
 * s("hh*8")
 * .gain(".4!2 1 .4!2 1 .4 1")
 * .velocity(".4 1")
 */
function velocity(...args): Pattern

/**
 * Sets the velocity from 0 to 1. Is multiplied together with gain.
 *
 * @name velocity
 * @tags amplitude, superdough, supradough
 * @synonyms vel
 * @example
 * s("hh*8")
 * .gain(".4!2 1 .4!2 1 .4 1")
 * .velocity(".4 1")
 */
function vel(...args): Pattern

/**
 * Controls the gain by an exponential amount.
 *
 * @name gain
 * @tags amplitude, superdough, supradough
 * @param {number | Pattern} amount gain.
 * @example
 * s("hh*8").gain(".4!2 1 .4!2 1 .4 1").fast(2)
 *
 */
function gain(amount): Pattern

/**
 * Gain applied after all effects have been processed.
 *
 * @name postgain
 * @tags amplitude, superdough, supradough
 * @example
 * s("bd sd [~ bd] sd,hh*8")
 * .compressor("-20:20:10:.002:.02").postgain(1.5)
 *
 */
function postgain(...args): Pattern

/**
 * Like `gain`, but linear.
 *
 * @name amp
 * @tags amplitude, superdirt
 * @param {number | Pattern} amount gain.
 * @superdirtOnly
 * @example
 * s("bd*8").amp(".1*2 .5 .1*2 .5 .1 .5").osc()
 *
 */
function amp(amount): Pattern

/**
 * Sets the Frequency Modulation Harmonicity Ratio.
 * Controls the timbre of the sound.
 * Whole numbers and simple ratios sound more natural,
 * while decimal numbers and complex ratios sound metallic.
 *
 * A number may be added afterwards to control the harmonicity of
 * any of the 8 individual FMs (e.g. `fmh2`)
 *
 * @name fmh
 * @tags fm, superdough, supradough
 * @param {number | Pattern} harmonicity
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmh("<1 2 1.5 1.61>")
 * ._scope()
 *
 */
function fmh(harmonicity): Pattern

/**
 * Sets the Frequency Modulation of the synth.
 * Controls the modulation index, which defines the brightness of the sound.
 *
 * A number may be added afterwards to control the modulation index of
 * any of the 8 individual FMs (e.g. `fm3`). Also, FMs may be routed into
 * each other with matrix commands like `fm13`, which would send `fm1` back into
 * `fm3`
 *
 * @name fmi
 * @tags fm, superdough, supradough
 * @param {number | Pattern} brightness modulation index
 * @synonyms fm
 * @example
 * note("c e g b g e")
 * .fm("<0 1 2 8 32>")
 * ._scope()
 * @example
 * s("sine").note("F1").seg(8)
 *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
 *  .fmh(1.06).fmh2(10).fmh3(0.1)
 *
 */
function fmi(brightness): Pattern

/**
 * Sets the Frequency Modulation of the synth.
 * Controls the modulation index, which defines the brightness of the sound.
 *
 * A number may be added afterwards to control the modulation index of
 * any of the 8 individual FMs (e.g. `fm3`). Also, FMs may be routed into
 * each other with matrix commands like `fm13`, which would send `fm1` back into
 * `fm3`
 *
 * @name fmi
 * @tags fm, superdough, supradough
 * @param {number | Pattern} brightness modulation index
 * @synonyms fm
 * @example
 * note("c e g b g e")
 * .fm("<0 1 2 8 32>")
 * ._scope()
 * @example
 * s("sine").note("F1").seg(8)
 *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
 *  .fmh(1.06).fmh2(10).fmh3(0.1)
 *
 */
function fm(brightness): Pattern

/**
 * Ramp type of fm envelope. Exp might be a bit broken..
 *
 * A number may be added afterwards to control the envelope of
 * any of the 8 individual FMs (e.g. `fmenv4`)
 *
 * @name fmenv
 * @tags fm, envelope, superdough, supradough
 * @param {number | Pattern} type lin | exp
 * @synonyms fme
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay(.2)
 * .fmsustain(0)
 * .fmenv("<exp lin>")
 * ._scope()
 *
 */
function fmenv(type): Pattern

/**
 * Ramp type of fm envelope. Exp might be a bit broken..
 *
 * A number may be added afterwards to control the envelope of
 * any of the 8 individual FMs (e.g. `fmenv4`)
 *
 * @name fmenv
 * @tags fm, envelope, superdough, supradough
 * @param {number | Pattern} type lin | exp
 * @synonyms fme
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay(.2)
 * .fmsustain(0)
 * .fmenv("<exp lin>")
 * ._scope()
 *
 */
function fme(type): Pattern

/**
 * Attack time for the FM envelope: time it takes to reach maximum modulation
 *
 * A number may be added afterwards to control the attack of the envelope of
 * any of the 8 individual FMs (e.g. `fmatt5`)
 *
 * @name fmattack
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmatt
 * @param {number | Pattern} time attack time
 * @synonyms fmatt
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmattack("<0 .05 .1 .2>")
 * ._scope()
 *
 */
function fmattack(time): Pattern

/**
 * Attack time for the FM envelope: time it takes to reach maximum modulation
 *
 * A number may be added afterwards to control the attack of the envelope of
 * any of the 8 individual FMs (e.g. `fmatt5`)
 *
 * @name fmattack
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmatt
 * @param {number | Pattern} time attack time
 * @synonyms fmatt
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmattack("<0 .05 .1 .2>")
 * ._scope()
 *
 */
function fmatt(time): Pattern

/**
 * Waveform of the fm modulator
 *
 * A number may be added afterwards to control the waveform
 * any of the 8 individual FMs (e.g. `fmwave6`)
 *
 * @name fmwave
 * @tags fm, superdough, supradough
 * @param {number | Pattern} wave waveform
 * @example
 * n("0 1 2 3".fast(4)).scale("d:minor").s("sine").fmwave("<sine square sawtooth crackle>").fm(4).fmh(2.01)
 * @example
 * n("0 1 2 3".fast(4)).chord("<Dm Am F G>").voicing().s("sawtooth").fmwave("brown").fm(.6)
 *
 */
function fmwave(wave): Pattern

/**
 * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
 *
 * A number may be added afterwards to control the decay of the envelope of
 * any of the 8 individual FMs (e.g. `fmdec6`)
 *
 * @name fmdecay
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmdec
 * @param {number | Pattern} time decay time
 * @synonyms fmdec
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay("<.01 .05 .1 .2>")
 * .fmsustain(.4)
 * ._scope()
 *
 */
function fmdecay(time): Pattern

/**
 * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
 *
 * A number may be added afterwards to control the decay of the envelope of
 * any of the 8 individual FMs (e.g. `fmdec6`)
 *
 * @name fmdecay
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmdec
 * @param {number | Pattern} time decay time
 * @synonyms fmdec
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay("<.01 .05 .1 .2>")
 * .fmsustain(.4)
 * ._scope()
 *
 */
function fmdec(time): Pattern

/**
 * Sustain level for the FM envelope: how much modulation is applied after the decay phase
 *
 * A number may be added afterwards to control the sustain of the envelope of
 * any of the 8 individual FMs (e.g. `fmsus7`)
 *
 * @name fmsustain
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmsus
 * @param {number | Pattern} level sustain level
 * @synonyms fmsus
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay(.1)
 * .fmsustain("<1 .75 .5 0>")
 * ._scope()
 *
 */
function fmsustain(level): Pattern

/**
 * Sustain level for the FM envelope: how much modulation is applied after the decay phase
 *
 * A number may be added afterwards to control the sustain of the envelope of
 * any of the 8 individual FMs (e.g. `fmsus7`)
 *
 * @name fmsustain
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmsus
 * @param {number | Pattern} level sustain level
 * @synonyms fmsus
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay(.1)
 * .fmsustain("<1 .75 .5 0>")
 * ._scope()
 *
 */
function fmsus(level): Pattern

/**
 * Release time for the FM envelope: how much modulation is applied after the note is released
 *
 * A number may be added afterwards to control the release of the envelope of
 * any of the 8 individual FMs (e.g. `fmrel8`)
 *
 * @name fmrelease
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmrel
 * @param {number | Pattern} time release time
 *
 */
function fmrelease(time): Pattern

/**
 * Release time for the FM envelope: how much modulation is applied after the note is released
 *
 * A number may be added afterwards to control the release of the envelope of
 * any of the 8 individual FMs (e.g. `fmrel8`)
 *
 * @name fmrelease
 * @tags fm, envelope, superdough, supradough
 * @synonyms fmrel
 * @param {number | Pattern} time release time
 *
 */
function fmrel(time): Pattern

/**
 * Select the sound bank to use. To be used together with `s`. The bank name (+ "_") will be prepended to the value of `s`.
 *
 * @name bank
 * @tags samples, superdough
 * @param {string | Pattern} bank the name of the bank
 * @example
 * s("bd sd [~ bd] sd").bank('RolandTR909') // = s("RolandTR909_bd RolandTR909_sd")
 *
 */
function bank(bank): Pattern

/**
 * mix control for the chorus effect
 *
 * @name chorus
 * @tags pitch
 * @param {string | Pattern} chorus mix amount between 0 and 1
 * @example
 * note("d d a# a").s("sawtooth").chorus(.5)
 *
 */
function chorus(chorus): Pattern

/**
 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
 *
 * @name attack
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} attack time in seconds.
 * @synonyms att
 * @example
 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
 *
 */
function attack(attack): Pattern

/**
 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
 *
 * @name attack
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} attack time in seconds.
 * @synonyms att
 * @example
 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
 *
 */
function att(attack): Pattern

/**
 * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
 * Note that the decay is only audible if the sustain value is lower than 1.
 *
 * @name decay
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} time decay time in seconds
 * @synonyms dec
 * @example
 * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
 *
 */
function decay(time): Pattern

/**
 * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
 * Note that the decay is only audible if the sustain value is lower than 1.
 *
 * @name decay
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} time decay time in seconds
 * @synonyms dec
 * @example
 * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
 *
 */
function dec(time): Pattern

/**
 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
 *
 * @name sustain
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} gain sustain level between 0 and 1
 * @synonyms sus
 * @example
 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
 *
 */
function sustain(gain): Pattern

/**
 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
 *
 * @name sustain
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} gain sustain level between 0 and 1
 * @synonyms sus
 * @example
 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
 *
 */
function sus(gain): Pattern

/**
 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
 *
 * @name release
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} time release time in seconds
 * @synonyms rel
 * @example
 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
 *
 */
function release(time): Pattern

/**
 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
 *
 * @name release
 * @tags amplitude, envelope, superdough, supradough
 * @param {number | Pattern} time release time in seconds
 * @synonyms rel
 * @example
 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
 *
 */
function rel(time): Pattern

/**
 * Sets the center frequency of the **b**and-**p**ass **f**ilter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 *
 * @name bpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency center frequency
 * @synonyms bandf, bp
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 *
 */
function bpf(frequency): Pattern

/**
 * Sets the center frequency of the **b**and-**p**ass **f**ilter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 *
 * @name bpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency center frequency
 * @synonyms bandf, bp
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 *
 */
function bandf(frequency): Pattern

/**
 * Sets the center frequency of the **b**and-**p**ass **f**ilter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 *
 * @name bpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency center frequency
 * @synonyms bandf, bp
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 *
 */
function bp(frequency): Pattern

/**
 * Sets the **b**and-**p**ass **q**-factor (resonance).
 *
 * @name bpq
 * @tags filter, superdough, supradough
 * @param {number | Pattern} q q factor
 * @synonyms bandq
 * @example
 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
 *
 */
function bpq(q): Pattern

/**
 * Sets the **b**and-**p**ass **q**-factor (resonance).
 *
 * @name bpq
 * @tags filter, superdough, supradough
 * @param {number | Pattern} q q factor
 * @synonyms bandq
 * @example
 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
 *
 */
function bandq(q): Pattern

/**
 * A pattern of numbers from 0 to 1. Skips the beginning of each sample, e.g. `0.25` to cut off the first quarter from each sample.
 *
 * @name begin
 * @tags samples
 * @param {number | Pattern} amount between 0 and 1, where 1 is the length of the sample
 * @example
 * samples({ rave: 'rave/AREUREADY.wav' }, 'github:tidalcycles/dirt-samples')
 * s("rave").begin("<0 .25 .5 .75>").fast(2)
 *
 */
function begin(amount): Pattern

/**
 * Loops the sample.
 * Note that the tempo of the loop is not synced with the cycle tempo.
 * To change the loop region, use loopBegin / loopEnd.
 *
 * @name loop
 * @tags samples
 * @param {number | Pattern} on If 1, the sample is looped
 * @example
 * s("casio").loop(1)
 *
 */
function loop(on): Pattern

/**
 * Begin to loop at a specific point in the sample (inbetween `begin` and `end`).
 * Note that the loop point must be inbetween `begin` and `end`, and before `loopEnd`!
 * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
 *
 * @name loopBegin
 * @tags samples
 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
 * @synonyms loopb
 * @example
 * s("space").loop(1)
 * .loopBegin("<0 .125 .25>")._scope()
 */
function loopBegin(time): Pattern

/**
 * Begin to loop at a specific point in the sample (inbetween `begin` and `end`).
 * Note that the loop point must be inbetween `begin` and `end`, and before `loopEnd`!
 * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
 *
 * @name loopBegin
 * @tags samples
 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
 * @synonyms loopb
 * @example
 * s("space").loop(1)
 * .loopBegin("<0 .125 .25>")._scope()
 */
function loopb(time): Pattern

/**
 *
 * End the looping section at a specific point in the sample (inbetween `begin` and `end`).
 * Note that the loop point must be inbetween `begin` and `end`, and after `loopBegin`!
 *
 * @name loopEnd
 * @tags samples
 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
 * @synonyms loope
 * @example
 * s("space").loop(1)
 * .loopEnd("<1 .75 .5 .25>")._scope()
 */
function loopEnd(time): Pattern

/**
 *
 * End the looping section at a specific point in the sample (inbetween `begin` and `end`).
 * Note that the loop point must be inbetween `begin` and `end`, and after `loopBegin`!
 *
 * @name loopEnd
 * @tags samples
 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
 * @synonyms loope
 * @example
 * s("space").loop(1)
 * .loopEnd("<1 .75 .5 .25>")._scope()
 */
function loope(time): Pattern

/**
 * Bit crusher effect.
 *
 * @name crush
 * @tags superdough, supradough
 * @param {number | Pattern} depth between 1 (for drastic reduction in bit-depth) to 16 (for barely no reduction).
 * @example
 * s("<bd sd>,hh*3").fast(2).crush("<16 8 7 6 5 4 3 2>")
 *
 */
function crush(depth): Pattern

/**
 * Fake-resampling for lowering the sample rate. Caution: This effect seems to only work in chromium based browsers
 *
 * @name coarse
 * @tags superdough, supradough
 * @param {number | Pattern} factor 1 for original 2 for half, 3 for a third and so on.
 * @example
 * s("bd sd [~ bd] sd,hh*8").coarse("<1 4 8 16 32>")
 *
 */
function coarse(factor): Pattern

/**
 * Modulate the amplitude of a sound with a continuous waveform
 *
 * @name tremolo
 * @tags amplitude, lfo, superdough
 * @synonyms trem
 * @param {number | Pattern} speed modulation speed in HZ
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
 *
 */
function tremolo(speed): Pattern

/**
 * Modulate the amplitude of a sound with a continuous waveform
 *
 * @name tremolo
 * @tags amplitude, lfo, superdough
 * @synonyms trem
 * @param {number | Pattern} speed modulation speed in HZ
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
 *
 */
function trem(speed): Pattern

/**
 * Modulate the amplitude of a sound with a continuous waveform
 *
 * @name tremolosync
 * @tags amplitude, lfo, superdough
 * @synonyms tremsync
 * @param {number | Pattern} cycles modulation speed in cycles
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
 *
 */
function tremolosync(cycles): Pattern

/**
 * Modulate the amplitude of a sound with a continuous waveform
 *
 * @name tremolosync
 * @tags amplitude, lfo, superdough
 * @synonyms tremsync
 * @param {number | Pattern} cycles modulation speed in cycles
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
 *
 */
function tremsync(cycles): Pattern

/**
 * Depth of amplitude modulation
 *
 * @name tremolodepth
 * @tags amplitude, lfo, superdough
 * @synonyms tremdepth
 * @param {number | Pattern} depth
 * @example
 * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
 *
 */
function tremolodepth(depth): Pattern

/**
 * Depth of amplitude modulation
 *
 * @name tremolodepth
 * @tags amplitude, lfo, superdough
 * @synonyms tremdepth
 * @param {number | Pattern} depth
 * @example
 * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
 *
 */
function tremdepth(depth): Pattern

/**
 * Alter the shape of the modulation waveform
 *
 * @name tremoloskew
 * @tags amplitude, lfo, superdough
 * @synonyms tremskew
 * @param {number | Pattern} amount between 0 & 1, the shape of the waveform
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
 *
 */
function tremoloskew(amount): Pattern

/**
 * Alter the shape of the modulation waveform
 *
 * @name tremoloskew
 * @tags amplitude, lfo, superdough
 * @synonyms tremskew
 * @param {number | Pattern} amount between 0 & 1, the shape of the waveform
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
 *
 */
function tremskew(amount): Pattern

/**
 * Alter the phase of the modulation waveform
 *
 * @name tremolophase
 * @tags amplitude, lfo, superdough
 * @synonyms tremphase
 * @param {number | Pattern} offset the offset in cycles of the modulation
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
 *
 */
function tremolophase(offset): Pattern

/**
 * Alter the phase of the modulation waveform
 *
 * @name tremolophase
 * @tags amplitude, lfo, superdough
 * @synonyms tremphase
 * @param {number | Pattern} offset the offset in cycles of the modulation
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
 *
 */
function tremphase(offset): Pattern

/**
 * Shape of amplitude modulation
 *
 * @name tremoloshape
 * @tags amplitude, lfo, superdough
 * @synonyms tremshape
 * @param {number | Pattern} shape tri | square | sine | saw | ramp
 * @example
 * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
 *
 */
function tremoloshape(shape): Pattern

/**
 * Shape of amplitude modulation
 *
 * @name tremoloshape
 * @tags amplitude, lfo, superdough
 * @synonyms tremshape
 * @param {number | Pattern} shape tri | square | sine | saw | ramp
 * @example
 * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
 *
 */
function tremshape(shape): Pattern

/**
 * Filter overdrive for supported filter types
 *
 * @name drive
 * @tags filter, superdough
 * @param {number | Pattern} amount
 * @example
 * note("{f g g c d a a#}%16".sub(17)).s("supersaw").lpenv(8).lpf(150).lpq(.8).ftype('ladder').drive("<.5 4>")
 *
 */
function drive(amount): Pattern

/**
 * Modulate the amplitude of an orbit to create a "sidechain" like effect.
 *
 * Can be applied to multiple orbits with the ':' mininotation, e.g. `duckorbit("2:3")`
 *
 * @name duckorbit
 * @tags amplitude, orbit, superdough
 * @synonyms duck
 * @param {number | Pattern} orbit target orbit
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1)
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("hh*16").orbit(3)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth(1)
 *
 */
function duckorbit(orbit): Pattern

/**
 * Modulate the amplitude of an orbit to create a "sidechain" like effect.
 *
 * Can be applied to multiple orbits with the ':' mininotation, e.g. `duckorbit("2:3")`
 *
 * @name duckorbit
 * @tags amplitude, orbit, superdough
 * @synonyms duck
 * @param {number | Pattern} orbit target orbit
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1)
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("hh*16").orbit(3)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth(1)
 *
 */
function duck(orbit): Pattern

/**
 * The amount of ducking applied to target orbit
 *
 * Can vary across orbits with the ':' mininotation, e.g. `duckdepth("0.3:0.1")`.
 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
 *
 * @name duckdepth
 * @tags amplitude, orbit, superdough
 * @param {number | Pattern} depth depth of modulation from 0 to 1
 * @example
 * stack( n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2), s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth("<1 .9 .6 0>"))
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("hh*16").orbit(3)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth("1:0.5")
 *
 */
function duckdepth(depth): Pattern

/**
 * The time required for the ducked signal(s) to reach their lowest volume.
 * Can be used to prevent clicking or for creative rhythmic effects.
 *
 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
 *
 * @name duckonset
 * @tags amplitude, envelope, orbit, superdough
 * @synonyms duckons
 *
 * @param {number | Pattern} time The onset time in seconds
 * @example
 * // Clicks
 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
 * duckerWithClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0).postgain(0)
 * @example
 * // No clicks
 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
 * duckerWithoutClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0.01).postgain(0)
 * @example
 * // Rhythmic
 * noise: s("pink").distort("2:1").orbit(4) // used rhythmically with 0.3 onset below
 * hhat: s("hh*16").orbit(7)
 * ducker: s("bd*4").bank("tr909").duckorbit("4:7").duckonset("0.3:0.003").duckattack(0.25)
 *
 */
function duckonset(time): Pattern

/**
 * The time required for the ducked signal(s) to reach their lowest volume.
 * Can be used to prevent clicking or for creative rhythmic effects.
 *
 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
 *
 * @name duckonset
 * @tags amplitude, envelope, orbit, superdough
 * @synonyms duckons
 *
 * @param {number | Pattern} time The onset time in seconds
 * @example
 * // Clicks
 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
 * duckerWithClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0).postgain(0)
 * @example
 * // No clicks
 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
 * duckerWithoutClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0.01).postgain(0)
 * @example
 * // Rhythmic
 * noise: s("pink").distort("2:1").orbit(4) // used rhythmically with 0.3 onset below
 * hhat: s("hh*16").orbit(7)
 * ducker: s("bd*4").bank("tr909").duckorbit("4:7").duckonset("0.3:0.003").duckattack(0.25)
 *
 */
function duckons(time): Pattern

/**
 * The time required for the ducked signal(s) to return to their normal volume.
 *
 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
 *
 * @name duckattack
 * @tags amplitude, envelope, orbit, superdough
 * @synonyms duckatt, datt
 *
 * @param {number | Pattern} time The attack time in seconds
 * @example
 * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
 * @example
 * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * lessduck: s("hh*16").orbit(5)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
 *
 */
function duckattack(time): Pattern

/**
 * The time required for the ducked signal(s) to return to their normal volume.
 *
 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
 *
 * @name duckattack
 * @tags amplitude, envelope, orbit, superdough
 * @synonyms duckatt, datt
 *
 * @param {number | Pattern} time The attack time in seconds
 * @example
 * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
 * @example
 * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * lessduck: s("hh*16").orbit(5)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
 *
 */
function duckatt(time): Pattern

/**
 * The time required for the ducked signal(s) to return to their normal volume.
 *
 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
 *
 * @name duckattack
 * @tags amplitude, envelope, orbit, superdough
 * @synonyms duckatt, datt
 *
 * @param {number | Pattern} time The attack time in seconds
 * @example
 * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
 * @example
 * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * lessduck: s("hh*16").orbit(5)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
 *
 */
function datt(time): Pattern

/**
 * Create byte beats with custom expressions
 *
 * @name byteBeatExpression
 * @synonyms bbexpr, bb
 * @tags superdough
 *
 * @param {number | Pattern} byteBeatExpression bitwise expression for creating bytebeat
 * @example
 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
 *
 */
function byteBeatExpression(byteBeatExpression): Pattern

/**
 * Create byte beats with custom expressions
 *
 * @name byteBeatExpression
 * @synonyms bbexpr, bb
 * @tags superdough
 *
 * @param {number | Pattern} byteBeatExpression bitwise expression for creating bytebeat
 * @example
 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
 *
 */
function bbexpr(byteBeatExpression): Pattern

/**
 * Create byte beats with custom expressions
 *
 * @name byteBeatExpression
 * @synonyms bbexpr, bb
 * @tags superdough
 *
 * @param {number | Pattern} byteBeatExpression bitwise expression for creating bytebeat
 * @example
 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
 *
 */
function bb(byteBeatExpression): Pattern

/**
 * Create byte beats with custom expressions
 *
 * @name byteBeatStartTime
 * @synonyms bbst
 * @tags superdough
 *
 * @param {number | Pattern} byteBeatStartTime in samples (t)
 * @example
 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
 *
 */
function byteBeatStartTime(byteBeatStartTime): Pattern

/**
 * Create byte beats with custom expressions
 *
 * @name byteBeatStartTime
 * @synonyms bbst
 * @tags superdough
 *
 * @param {number | Pattern} byteBeatStartTime in samples (t)
 * @example
 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
 *
 */
function bbst(byteBeatStartTime): Pattern

/**
 * Allows you to set the output channels on the interface
 *
 * @name channels
 * @tags external_io, superdough
 * @synonyms ch
 *
 * @param {number | Pattern} channels pattern the output channels
 * @example
 * note("e a d b g").channels("3:4")
 *
 */
function channels(channels): Pattern

/**
 * Allows you to set the output channels on the interface
 *
 * @name channels
 * @tags external_io, superdough
 * @synonyms ch
 *
 * @param {number | Pattern} channels pattern the output channels
 * @example
 * note("e a d b g").channels("3:4")
 *
 */
function ch(channels): Pattern

/**
 * Controls the pulsewidth of the pulse oscillator
 *
 * @name pw
 * @tags superdough
 * @param {number | Pattern} pulsewidth
 * @example
 * note("{f a c e}%16").s("pulse").pw(".8:1:.2")
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0 .75 .5 1")
 */
function pw(pulsewidth): Pattern

/**
 * Controls the lfo rate for the pulsewidth of the pulse oscillator
 *
 * @name pwrate
 * @synonyms pwr
 * @tags superdough, lfo
 * @param {number | Pattern} rate
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")

 *
 */
function pwrate(rate): Pattern

/**
 * Controls the lfo rate for the pulsewidth of the pulse oscillator
 *
 * @name pwrate
 * @synonyms pwr
 * @tags superdough, lfo
 * @param {number | Pattern} rate
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")

 *
 */
function pwr(rate): Pattern

/**
 * Controls the lfo sweep for the pulsewidth of the pulse oscillator
 *
 * @name pwsweep
 * @synonyms pws
 * @tags superdough, lfo
 * @param {number | Pattern} sweep
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
 *
 */
function pwsweep(sweep): Pattern

/**
 * Controls the lfo sweep for the pulsewidth of the pulse oscillator
 *
 * @name pwsweep
 * @synonyms pws
 * @tags superdough, lfo
 * @param {number | Pattern} sweep
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
 *
 */
function pws(sweep): Pattern

/**
 * Phaser audio effect that approximates popular guitar pedals.
 *
 * @name phaser
 * @tags superdough
 * @synonyms ph
 * @param {number | Pattern} speed speed of modulation
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser("<1 2 4 8>")
 *
 */
function phaser(speed): Pattern

/**
 * Phaser audio effect that approximates popular guitar pedals.
 *
 * @name phaser
 * @tags superdough
 * @synonyms ph
 * @param {number | Pattern} speed speed of modulation
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser("<1 2 4 8>")
 *
 */
function ph(speed): Pattern

/**
 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
 *
 * @name phasersweep
 * @tags superdough, lfo
 * @synonyms phs
 * @param {number | Pattern} phasersweep most useful values are between 0 and 4000
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasersweep("<800 2000 4000>")
 *
 */
function phasersweep(phasersweep): Pattern

/**
 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
 *
 * @name phasersweep
 * @tags superdough, lfo
 * @synonyms phs
 * @param {number | Pattern} phasersweep most useful values are between 0 and 4000
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasersweep("<800 2000 4000>")
 *
 */
function phs(phasersweep): Pattern

/**
 * The center frequency of the phaser in HZ. Defaults to 1000
 *
 * @name phasercenter
 * @tags superdough
 * @synonyms phc
 * @param {number | Pattern} centerfrequency in HZ
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasercenter("<800 2000 4000>")
 *
 */
function phasercenter(centerfrequency): Pattern

/**
 * The center frequency of the phaser in HZ. Defaults to 1000
 *
 * @name phasercenter
 * @tags superdough
 * @synonyms phc
 * @param {number | Pattern} centerfrequency in HZ
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasercenter("<800 2000 4000>")
 *
 */
function phc(centerfrequency): Pattern

/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 *
 * @name phaserdepth
 * @tags superdough, superdirt
 * @synonyms phd, phasdp
 * @param {number | Pattern} depth number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 *
 */
function phaserdepth(depth): Pattern

/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 *
 * @name phaserdepth
 * @tags superdough, superdirt
 * @synonyms phd, phasdp
 * @param {number | Pattern} depth number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 *
 */
function phd(depth): Pattern

/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 *
 * @name phaserdepth
 * @tags superdough, superdirt
 * @synonyms phd, phasdp
 * @param {number | Pattern} depth number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 *
 */
function phasdp(depth): Pattern

/**
 * Choose the channel the pattern is sent to
 *
 * @name channel
 * @tags superdough
 * @param {number | Pattern} channel channel number
 *
 */
function channel(channel): Pattern

/**
 * In the style of classic drum-machines, `cut` will stop a playing sample as soon as another samples with in same cutgroup is to be played. An example would be an open hi-hat followed by a closed one, essentially muting the open.
 *
 * @name cut
 * @tags superdough
 * @param {number | Pattern} group cut group number
 * @example
 * s("[oh hh]*4").cut(1)
 *
 */
function cut(group): Pattern

/**
 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
 *
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 *
 * @name lpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency audible between 0 and 20000
 * @synonyms cutoff, ctf, lp
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 *
 */
function lpf(frequency): Pattern

/**
 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
 *
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 *
 * @name lpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency audible between 0 and 20000
 * @synonyms cutoff, ctf, lp
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 *
 */
function cutoff(frequency): Pattern

/**
 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
 *
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 *
 * @name lpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency audible between 0 and 20000
 * @synonyms cutoff, ctf, lp
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 *
 */
function ctf(frequency): Pattern

/**
 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
 *
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 *
 * @name lpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency audible between 0 and 20000
 * @synonyms cutoff, ctf, lp
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 *
 */
function lp(frequency): Pattern

/**
 * Sets the lowpass filter envelope modulation depth.
 * @name lpenv
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} modulation depth of the lowpass filter envelope between 0 and _n_
 * @synonyms lpe
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa(.5)
 * .lpenv("<4 2 1 0 -1 -2 -4>/4")
 */
function lpenv(modulation): Pattern

/**
 * Sets the lowpass filter envelope modulation depth.
 * @name lpenv
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} modulation depth of the lowpass filter envelope between 0 and _n_
 * @synonyms lpe
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa(.5)
 * .lpenv("<4 2 1 0 -1 -2 -4>/4")
 */
function lpe(modulation): Pattern

/**
 * Sets the highpass filter envelope modulation depth.
 * @name hpenv
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} modulation depth of the highpass filter envelope between 0 and _n_
 * @synonyms hpe
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa(.5)
 * .hpenv("<4 2 1 0 -1 -2 -4>/4")
 */
function hpenv(modulation): Pattern

/**
 * Sets the highpass filter envelope modulation depth.
 * @name hpenv
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} modulation depth of the highpass filter envelope between 0 and _n_
 * @synonyms hpe
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa(.5)
 * .hpenv("<4 2 1 0 -1 -2 -4>/4")
 */
function hpe(modulation): Pattern

/**
 * Sets the bandpass filter envelope modulation depth.
 * @name bpenv
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} modulation depth of the bandpass filter envelope between 0 and _n_
 * @synonyms bpe
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa(.5)
 * .bpenv("<4 2 1 0 -1 -2 -4>/4")
 */
function bpenv(modulation): Pattern

/**
 * Sets the bandpass filter envelope modulation depth.
 * @name bpenv
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} modulation depth of the bandpass filter envelope between 0 and _n_
 * @synonyms bpe
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa(.5)
 * .bpenv("<4 2 1 0 -1 -2 -4>/4")
 */
function bpe(modulation): Pattern

/**
 * Sets the attack duration for the lowpass filter envelope.
 * @name lpattack
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} attack time of the filter envelope
 * @synonyms lpa
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa("<.5 .25 .1 .01>/4")
 * .lpenv(4)
 */
function lpattack(attack): Pattern

/**
 * Sets the attack duration for the lowpass filter envelope.
 * @name lpattack
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} attack time of the filter envelope
 * @synonyms lpa
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa("<.5 .25 .1 .01>/4")
 * .lpenv(4)
 */
function lpa(attack): Pattern

/**
 * Sets the attack duration for the highpass filter envelope.
 * @name hpattack
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} attack time of the highpass filter envelope
 * @synonyms hpa
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa("<.5 .25 .1 .01>/4")
 * .hpenv(4)
 */
function hpattack(attack): Pattern

/**
 * Sets the attack duration for the highpass filter envelope.
 * @name hpattack
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} attack time of the highpass filter envelope
 * @synonyms hpa
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa("<.5 .25 .1 .01>/4")
 * .hpenv(4)
 */
function hpa(attack): Pattern

/**
 * Sets the attack duration for the bandpass filter envelope.
 * @name bpattack
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} attack time of the bandpass filter envelope
 * @synonyms bpa
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa("<.5 .25 .1 .01>/4")
 * .bpenv(4)
 */
function bpattack(attack): Pattern

/**
 * Sets the attack duration for the bandpass filter envelope.
 * @name bpattack
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} attack time of the bandpass filter envelope
 * @synonyms bpa
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa("<.5 .25 .1 .01>/4")
 * .bpenv(4)
 */
function bpa(attack): Pattern

/**
 * Sets the decay duration for the lowpass filter envelope.
 * @name lpdecay
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} decay time of the filter envelope
 * @synonyms lpd
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd("<.5 .25 .1 0>/4")
 * .lpenv(4)
 */
function lpdecay(decay): Pattern

/**
 * Sets the decay duration for the lowpass filter envelope.
 * @name lpdecay
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} decay time of the filter envelope
 * @synonyms lpd
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd("<.5 .25 .1 0>/4")
 * .lpenv(4)
 */
function lpd(decay): Pattern

/**
 * Sets the decay duration for the highpass filter envelope.
 * @name hpdecay
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} decay time of the highpass filter envelope
 * @synonyms hpd
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd("<.5 .25 .1 0>/4")
 * .hps(0.2)
 * .hpenv(4)
 */
function hpdecay(decay): Pattern

/**
 * Sets the decay duration for the highpass filter envelope.
 * @name hpdecay
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} decay time of the highpass filter envelope
 * @synonyms hpd
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd("<.5 .25 .1 0>/4")
 * .hps(0.2)
 * .hpenv(4)
 */
function hpd(decay): Pattern

/**
 * Sets the decay duration for the bandpass filter envelope.
 * @name bpdecay
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} decay time of the bandpass filter envelope
 * @synonyms bpd
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd("<.5 .25 .1 0>/4")
 * .bps(0.2)
 * .bpenv(4)
 */
function bpdecay(decay): Pattern

/**
 * Sets the decay duration for the bandpass filter envelope.
 * @name bpdecay
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} decay time of the bandpass filter envelope
 * @synonyms bpd
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd("<.5 .25 .1 0>/4")
 * .bps(0.2)
 * .bpenv(4)
 */
function bpd(decay): Pattern

/**
 * Sets the sustain amplitude for the lowpass filter envelope.
 * @name lpsustain
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} sustain amplitude of the lowpass filter envelope
 * @synonyms lps
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd(.5)
 * .lps("<0 .25 .5 1>/4")
 * .lpenv(4)
 */
function lpsustain(sustain): Pattern

/**
 * Sets the sustain amplitude for the lowpass filter envelope.
 * @name lpsustain
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} sustain amplitude of the lowpass filter envelope
 * @synonyms lps
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd(.5)
 * .lps("<0 .25 .5 1>/4")
 * .lpenv(4)
 */
function lps(sustain): Pattern

/**
 * Sets the sustain amplitude for the highpass filter envelope.
 * @name hpsustain
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} sustain amplitude of the highpass filter envelope
 * @synonyms hps
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd(.5)
 * .hps("<0 .25 .5 1>/4")
 * .hpenv(4)
 */
function hpsustain(sustain): Pattern

/**
 * Sets the sustain amplitude for the highpass filter envelope.
 * @name hpsustain
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} sustain amplitude of the highpass filter envelope
 * @synonyms hps
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd(.5)
 * .hps("<0 .25 .5 1>/4")
 * .hpenv(4)
 */
function hps(sustain): Pattern

/**
 * Sets the sustain amplitude for the bandpass filter envelope.
 * @name bpsustain
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} sustain amplitude of the bandpass filter envelope
 * @synonyms bps
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd(.5)
 * .bps("<0 .25 .5 1>/4")
 * .bpenv(4)
 */
function bpsustain(sustain): Pattern

/**
 * Sets the sustain amplitude for the bandpass filter envelope.
 * @name bpsustain
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} sustain amplitude of the bandpass filter envelope
 * @synonyms bps
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd(.5)
 * .bps("<0 .25 .5 1>/4")
 * .bpenv(4)
 */
function bps(sustain): Pattern

/**
 * Sets the release time for the lowpass filter envelope.
 * @name lprelease
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} release time of the filter envelope
 * @synonyms lpr
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .lpf(300)
 * .lpenv(4)
 * .lpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
function lprelease(release): Pattern

/**
 * Sets the release time for the lowpass filter envelope.
 * @name lprelease
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} release time of the filter envelope
 * @synonyms lpr
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .lpf(300)
 * .lpenv(4)
 * .lpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
function lpr(release): Pattern

/**
 * Sets the release time for the highpass filter envelope.
 * @name hprelease
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} release time of the highpass filter envelope
 * @synonyms hpr
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .hpf(500)
 * .hpenv(4)
 * .hpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
function hprelease(release): Pattern

/**
 * Sets the release time for the highpass filter envelope.
 * @name hprelease
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} release time of the highpass filter envelope
 * @synonyms hpr
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .hpf(500)
 * .hpenv(4)
 * .hpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
function hpr(release): Pattern

/**
 * Sets the release time for the bandpass filter envelope.
 * @name bprelease
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} release time of the bandpass filter envelope
 * @synonyms bpr
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .bpf(500)
 * .bpenv(4)
 * .bpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
function bprelease(release): Pattern

/**
 * Sets the release time for the bandpass filter envelope.
 * @name bprelease
 * @tags filter, envelope, superdough, supradough
 * @param {number | Pattern} release time of the bandpass filter envelope
 * @synonyms bpr
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .bpf(500)
 * .bpenv(4)
 * .bpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
function bpr(release): Pattern

/**
 * Sets the filter type. The ladder filter is more aggressive. More types might be added in the future.
 * @name ftype
 * @tags filter, superdough
 * @param {number | Pattern} type 12db (0), ladder (1), or 24db (2)
 * @example
 * note("{f g g c d a a#}%8").s("sawtooth").lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
 * @example
 * note("c f g g a c d4").fast(2)
 * .sound('sawtooth')
 * .lpf(200).fanchor(0)
 * .lpenv(3).lpq(1)
 * .ftype("<ladder 12db 24db>")
 */
function ftype(type): Pattern

/**
 * controls the center of the filter envelope. 0 is unipolar positive, .5 is bipolar, 1 is unipolar negative
 * @name fanchor
 * @tags filter, envelope, superdough
 * @param {number | Pattern} center 0 to 1
 * @example
 * note("{f g g c d a a#}%8").s("sawtooth").lpf("{1000}%2")
 * .lpenv(8).fanchor("<0 .5 1>")
 */
function fanchor(center): Pattern

/**
 * Applies the cutoff frequency of the **h**igh-**p**ass **f**ilter.
 *
 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
 *
 * @name hpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency audible between 0 and 20000
 * @synonyms hp, hcutoff
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
 *
 */
function hpf(frequency): Pattern

/**
 * Applies the cutoff frequency of the **h**igh-**p**ass **f**ilter.
 *
 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
 *
 * @name hpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency audible between 0 and 20000
 * @synonyms hp, hcutoff
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
 *
 */
function hp(frequency): Pattern

/**
 * Applies the cutoff frequency of the **h**igh-**p**ass **f**ilter.
 *
 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
 *
 * @name hpf
 * @tags filter, superdough, supradough
 * @param {number | Pattern} frequency audible between 0 and 20000
 * @synonyms hp, hcutoff
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
 *
 */
function hcutoff(frequency): Pattern

/**
 * Rate of the LFO for the lowpass filter
 *
 * @name lprate
 * @tags filter, lfo, superdough
 * @param {number | Pattern} rate rate in hertz
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lprate("<4 8 2 1>")
 */
function lprate(rate): Pattern

/**
 * Cycle-synced rate of the LFO for the lowpass filter
 *
 * @name lpsync
 * @tags filter, lfo, superdough
 * @param {number | Pattern} rate rate in cycles
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpsync("<4 8 2 1>")
 */
function lpsync(rate): Pattern

/**
 * Depth of the LFO for the lowpass filter
 *
 * @name lpdepth
 * @tags filter, lfo, superdough
 * @param {number | Pattern} depth depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepth("<1 .5 1.8 0>")
 */
function lpdepth(depth): Pattern

/**
 * Depth of the LFO for the lowpass filter, in HZ
 *
 * @name lpdepthfrequency
 * @tags filter, lfo, superdough
 * @synonyms lpdepthfreq
 * @param {number | Pattern} depth depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
 */
function lpdepthfrequency(depth): Pattern

/**
 * Depth of the LFO for the lowpass filter, in HZ
 *
 * @name lpdepthfrequency
 * @tags filter, lfo, superdough
 * @synonyms lpdepthfreq
 * @param {number | Pattern} depth depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
 */
function lpdepthfreq(depth): Pattern

/**
 * Shape of the LFO for the lowpass filter
 *
 * @name lpshape
 * @tags filter, lfo, superdough
 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
 */
function lpshape(shape): Pattern

/**
 * DC offset of the LFO for the lowpass filter
 *
 * @name lpdc
 * @tags filter, lfo, superdough
 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
 */
function lpdc(dcoffset): Pattern

/**
 * Skew of the LFO for the lowpass filter
 *
 * @name lpskew
 * @tags filter, lfo, superdough
 * @param {number | Pattern} skew How much to bend the LFO shape
 */
function lpskew(skew): Pattern

/**
 * Rate of the LFO for the bandpass filter
 *
 * @name bprate
 * @tags filter, lfo, superdough
 * @param {number | Pattern} rate rate in hertz
 */
function bprate(rate): Pattern

/**
 * Cycle-synced rate of the LFO for the bandpass filter
 *
 * @name bpsync
 * @tags filter, lfo, superdough
 * @param {number | Pattern} rate rate in cycles
 */
function bpsync(rate): Pattern

/**
 * Depth of the LFO for the bandpass filter
 *
 * @name bpdepth
 * @tags filter, lfo, superdough
 * @param {number | Pattern} depth depth of modulation
 */
function bpdepth(depth): Pattern

/**
 * Depth of the LFO for the bandpass filter, in HZ
 *
 * @name bpdepthfrequency
 * @tags filter, lfo, superdough
 * @synonyms bpdepthfreq
 * @param {number | Pattern} depth depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
 */
function bpdepthfrequency(depth): Pattern

/**
 * Depth of the LFO for the bandpass filter, in HZ
 *
 * @name bpdepthfrequency
 * @tags filter, lfo, superdough
 * @synonyms bpdepthfreq
 * @param {number | Pattern} depth depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
 */
function bpdepthfreq(depth): Pattern

/**
 * Shape of the LFO for the bandpass filter
 *
 * @name bpshape
 * @tags filter, lfo, superdough
 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
 */
function bpshape(shape): Pattern

/**
 * DC offset of the LFO for the bandpass filter
 *
 * @name bpdc
 * @tags filter, lfo, superdough
 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
 */
function bpdc(dcoffset): Pattern

/**
 * Skew of the LFO for the bandpass filter
 *
 * @name bpskew
 * @tags filter, lfo, superdough
 * @param {number | Pattern} skew How much to bend the LFO shape
 */
function bpskew(skew): Pattern

/**
 * Rate of the LFO for the highpass filter
 *
 * @name hprate
 * @tags filter, lfo, superdough
 * @param {number | Pattern} rate rate in hertz
 */
function hprate(rate): Pattern

/**
 * Cycle-synced rate of the LFO for the highpass filter
 *
 * @name hpsync
 * @tags filter, lfo, superdough
 * @param {number | Pattern} rate rate in cycles
 */
function hpsync(rate): Pattern

/**
 * Depth of the LFO for the highpass filter
 *
 * @name hpdepth
 * @tags filter, lfo, superdough
 * @param {number | Pattern} depth depth of modulation
 */
function hpdepth(depth): Pattern

/**
 * Depth of the LFO for the hipass filter, in hz
 *
 * @name hpdepthfrequency
 * @tags filter, lfo, superdough
 * @synonyms hpdepthfreq
 * @param {number | Pattern} depth depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
 */
function hpdepthfrequency(depth): Pattern

/**
 * Depth of the LFO for the hipass filter, in hz
 *
 * @name hpdepthfrequency
 * @tags filter, lfo, superdough
 * @synonyms hpdepthfreq
 * @param {number | Pattern} depth depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
 */
function hpdepthfreq(depth): Pattern

/**
 * Shape of the LFO for the highpass filter
 *
 * @name hpshape
 * @tags filter, lfo, superdough
 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
 */
function hpshape(shape): Pattern

/**
 * DC offset of the LFO for the highpass filter
 *
 * @name hpdc
 * @tags filter, lfo, superdough
 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
 */
function hpdc(dcoffset): Pattern

/**
 * Skew of the LFO for the highpass filter
 *
 * @name hpskew
 * @tags filter, lfo, superdough
 * @param {number | Pattern} skew How much to bend the LFO shape
 */
function hpskew(skew): Pattern

/**
 * Applies a vibrato to the frequency of the oscillator.
 *
 * @name vib
 * @tags pitch, lfo, superdough, supradough
 * @synonyms vibrato, v
 * @param {number | Pattern} frequency of the vibrato in hertz
 * @example
 * note("a e")
 * .vib("<.5 1 2 4 8 16>")
 * ._scope()
 * @example
 * // change the modulation depth with ":"
 * note("a e")
 * .vib("<.5 1 2 4 8 16>:12")
 * ._scope()
 */
function vib(frequency): Pattern

/**
 * Applies a vibrato to the frequency of the oscillator.
 *
 * @name vib
 * @tags pitch, lfo, superdough, supradough
 * @synonyms vibrato, v
 * @param {number | Pattern} frequency of the vibrato in hertz
 * @example
 * note("a e")
 * .vib("<.5 1 2 4 8 16>")
 * ._scope()
 * @example
 * // change the modulation depth with ":"
 * note("a e")
 * .vib("<.5 1 2 4 8 16>:12")
 * ._scope()
 */
function vibrato(frequency): Pattern

/**
 * Applies a vibrato to the frequency of the oscillator.
 *
 * @name vib
 * @tags pitch, lfo, superdough, supradough
 * @synonyms vibrato, v
 * @param {number | Pattern} frequency of the vibrato in hertz
 * @example
 * note("a e")
 * .vib("<.5 1 2 4 8 16>")
 * ._scope()
 * @example
 * // change the modulation depth with ":"
 * note("a e")
 * .vib("<.5 1 2 4 8 16>:12")
 * ._scope()
 */
function v(frequency): Pattern

/**
 * Adds pink noise to the mix
 *
 * @name noise
 * @tags generators, superdough, supradough
 * @param {number | Pattern} wet wet amount
 * @example
 * sound("<white pink brown>/2")
 */
function noise(wet): Pattern

/**
 * Sets the vibrato depth in semitones. Only has an effect if `vibrato` | `vib` | `v` is is also set
 *
 * @name vibmod
 * @tags pitch, lfo, superdough, supradough
 * @synonyms vmod
 * @param {number | Pattern} depth of vibrato (in semitones)
 * @example
 * note("a e").vib(4)
 * .vibmod("<.25 .5 1 2 12>")
 * ._scope()
 * @example
 * // change the vibrato frequency with ":"
 * note("a e")
 * .vibmod("<.25 .5 1 2 12>:8")
 * ._scope()
 */
function vibmod(depth): Pattern

/**
 * Sets the vibrato depth in semitones. Only has an effect if `vibrato` | `vib` | `v` is is also set
 *
 * @name vibmod
 * @tags pitch, lfo, superdough, supradough
 * @synonyms vmod
 * @param {number | Pattern} depth of vibrato (in semitones)
 * @example
 * note("a e").vib(4)
 * .vibmod("<.25 .5 1 2 12>")
 * ._scope()
 * @example
 * // change the vibrato frequency with ":"
 * note("a e")
 * .vibmod("<.25 .5 1 2 12>:8")
 * ._scope()
 */
function vmod(depth): Pattern

/**
 * Controls the **h**igh-**p**ass **q**-value.
 *
 * @name hpq
 * @tags filter, superdough, supradough
 * @param {number | Pattern} q resonance factor between 0 and 50
 * @synonyms hresonance
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
 *
 */
function hpq(q): Pattern

/**
 * Controls the **h**igh-**p**ass **q**-value.
 *
 * @name hpq
 * @tags filter, superdough, supradough
 * @param {number | Pattern} q resonance factor between 0 and 50
 * @synonyms hresonance
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
 *
 */
function hresonance(q): Pattern

/**
 * Controls the **l**ow-**p**ass **q**-value.
 *
 * @name lpq
 * @tags filter, superdough, supradough
 * @param {number | Pattern} q resonance factor between 0 and 50
 * @synonyms resonance
 * @example
 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
 *
 */
function lpq(q): Pattern

/**
 * Controls the **l**ow-**p**ass **q**-value.
 *
 * @name lpq
 * @tags filter, superdough, supradough
 * @param {number | Pattern} q resonance factor between 0 and 50
 * @synonyms resonance
 * @example
 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
 *
 */
function resonance(q): Pattern

/**
 * DJ filter, below 0.5 is low pass filter, above is high pass filter.
 *
 * @name djf
 * @tags filter, superdough
 * @param {number | Pattern} cutoff below 0.5 is low pass filter, above is high pass filter
 * @example
 * n(irand(16).seg(8)).scale("d:phrygian").s("supersaw").djf("<.5 .3 .2 .75>")
 *
 */
function djf(cutoff): Pattern

/**
 * Sets the level of the delay signal.
 *
 * When using mininotation, you can also optionally add the 'delaytime' and 'delayfeedback' parameter,
 * separated by ':'.
 *
 *
 * @name delay
 * @tags orbit, superdough, supradough
 * @param {number | Pattern} level between 0 and 1
 * @example
 * s("bd bd").delay("<0 .25 .5 1>")
 * @example
 * s("bd bd").delay("0.65:0.25:0.9 0.65:0.125:0.7")
 *
 */
function delay(level): Pattern

/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 *
 * @name delayfeedback
 * @tags orbit, superdough, supradough
 * @param {number | Pattern} feedback between 0 and 1
 * @synonyms delayfb, dfb
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 *
 */
function delayfeedback(feedback): Pattern

/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 *
 * @name delayfeedback
 * @tags orbit, superdough, supradough
 * @param {number | Pattern} feedback between 0 and 1
 * @synonyms delayfb, dfb
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 *
 */
function delayfb(feedback): Pattern

/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 *
 * @name delayfeedback
 * @tags orbit, superdough, supradough
 * @param {number | Pattern} feedback between 0 and 1
 * @synonyms delayfb, dfb
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 *
 */
function dfb(feedback): Pattern

/**
 * Sets the time of the delay effect.
 *
 * @name delayspeed
 * @tags supradough
 * @param {number | Pattern} delayspeed controls the pitch of the delay feedback
 * @synonyms delayt, dt
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 *
 */
function delayspeed(delayspeed): Pattern

/**
 * Sets the time of the delay effect.
 *
 * @name delayspeed
 * @tags supradough
 * @param {number | Pattern} delayspeed controls the pitch of the delay feedback
 * @synonyms delayt, dt
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 *
 */
function delayt(delayspeed): Pattern

/**
 * Sets the time of the delay effect.
 *
 * @name delayspeed
 * @tags supradough
 * @param {number | Pattern} delayspeed controls the pitch of the delay feedback
 * @synonyms delayt, dt
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 *
 */
function dt(delayspeed): Pattern

/**
 * Sets the time of the delay effect in seconds.
 *
 * @name delaytime
 * @tags orbit, superdough, supradough
 * @param {number | Pattern} delay in seconds
 * @synonyms delayt, dt
 * @example
 * note("d d a# a".fast(2))
 * .s("sawtooth")
 * .delay(.8)
 * .delaytime(1/2)
 * .delayspeed("<2 .5 -1 -2>")
 */
function delaytime(delay): Pattern

/**
 * Sets the time of the delay effect in seconds.
 *
 * @name delaytime
 * @tags orbit, superdough, supradough
 * @param {number | Pattern} delay in seconds
 * @synonyms delayt, dt
 * @example
 * note("d d a# a".fast(2))
 * .s("sawtooth")
 * .delay(.8)
 * .delaytime(1/2)
 * .delayspeed("<2 .5 -1 -2>")
 */
function delayt(delay): Pattern

/**
 * Sets the time of the delay effect in seconds.
 *
 * @name delaytime
 * @tags orbit, superdough, supradough
 * @param {number | Pattern} delay in seconds
 * @synonyms delayt, dt
 * @example
 * note("d d a# a".fast(2))
 * .s("sawtooth")
 * .delay(.8)
 * .delaytime(1/2)
 * .delayspeed("<2 .5 -1 -2>")
 */
function dt(delay): Pattern

/**
 * Sets the time of the delay effect in cycles.
 *
 * @name delaysync
 * @tags orbit, superdough
 * @param {number | Pattern} cycles delay length in cycles
 * @synonyms delays, ds
 * @example
 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
 *
 */
function delaysync(cycles): Pattern

/**
 * Sets the time of the delay effect in cycles.
 *
 * @name delaysync
 * @tags orbit, superdough
 * @param {number | Pattern} cycles delay length in cycles
 * @synonyms delays, ds
 * @example
 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
 *
 */
function delays(cycles): Pattern

/**
 * Sets the time of the delay effect in cycles.
 *
 * @name delaysync
 * @tags orbit, superdough
 * @param {number | Pattern} cycles delay length in cycles
 * @synonyms delays, ds
 * @example
 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
 *
 */
function ds(cycles): Pattern

/**
 * Specifies whether delaytime is calculated relative to cps.
 *
 * @name lock
 * @tags superdirt
 * @param {number | Pattern} enable When set to 1, delaytime is a direct multiple of a cycle.
 * @superdirtOnly
 * @example
 * s("sd").delay().lock(1).osc()
 *
 *
 */
function lock(enable): Pattern

/**
 * Set detune for stacked voices of supported oscillators.
 *
 * @name detune
 * @tags pitch, superdough
 * @param {number | Pattern} amount
 * @synonyms det
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
 *
 */
function detune(amount): Pattern

/**
 * Set detune for stacked voices of supported oscillators.
 *
 * @name detune
 * @tags pitch, superdough
 * @param {number | Pattern} amount
 * @synonyms det
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
 *
 */
function det(amount): Pattern

/**
 * Set number of stacked voices for supported oscillators.
 *
 * @name unison
 * @tags superdough
 * @param {number | Pattern} numvoices
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").unison("<1 2 7>")
 *
 */
function unison(numvoices): Pattern

/**
 * Set the stereo pan spread for supported oscillators
 *
 * @name spread
 * @tags superdough
 * @param {number | Pattern} spread between 0 and 1
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").spread("<0 .3 1>")
 *
 */
function spread(spread): Pattern

/**
 * Set dryness of reverb. See `room` and `size` for more information about reverb.
 *
 * @name dry
 * @tags superdirt
 * @param {number | Pattern} dry 0 = wet, 1 = dry
 * @example
 * n("[0,3,7](3,8)").s("superpiano").room(.7).dry("<0 .5 .75 1>").osc()
 * @superdirtOnly
 *
 */
function dry(dry): Pattern

/**
 * Used when using `begin`/`end` or `chop`/`striate` and friends, to change the fade out time of the 'grain' envelope.
 *
 * @name fadeTime
 * @tags superdirt
 * @synonyms fadeOutTime
 * @param {number | Pattern} time between 0 and 1
 * @example
 * s("oh*4").end(.1).fadeTime("<0 .2 .4 .8>").osc()
 *
 */
function fadeTime(time): Pattern

/**
 * Used when using `begin`/`end` or `chop`/`striate` and friends, to change the fade out time of the 'grain' envelope.
 *
 * @name fadeTime
 * @tags superdirt
 * @synonyms fadeOutTime
 * @param {number | Pattern} time between 0 and 1
 * @example
 * s("oh*4").end(.1).fadeTime("<0 .2 .4 .8>").osc()
 *
 */
function fadeOutTime(time): Pattern

/**
 * Set frequency of sound.
 *
 * @name freq
 * @tags pitch, superdough
 * @param {number | Pattern} frequency in Hz. the audible range is between 20 and 20000 Hz
 * @example
 * freq("220 110 440 110").s("superzow").osc()
 * @example
 * freq("110".mul.out(".5 1.5 .6 [2 3]")).s("superzow").osc()
 *
 */
function freq(frequency): Pattern

/**
 * Attack time of pitch envelope.
 *
 * @name pattack
 * @tags pitch, envelope, superdough, supradough
 * @synonyms patt
 * @param {number | Pattern} time time in seconds
 * @example
 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
 *
 */
function pattack(time): Pattern

/**
 * Attack time of pitch envelope.
 *
 * @name pattack
 * @tags pitch, envelope, superdough, supradough
 * @synonyms patt
 * @param {number | Pattern} time time in seconds
 * @example
 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
 *
 */
function patt(time): Pattern

/**
 * Decay time of pitch envelope.
 *
 * @name pdecay
 * @tags pitch, envelope, superdough, supradough
 * @synonyms pdec
 * @param {number | Pattern} time time in seconds
 * @example
 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
 *
 */
function pdecay(time): Pattern

/**
 * Decay time of pitch envelope.
 *
 * @name pdecay
 * @tags pitch, envelope, superdough, supradough
 * @synonyms pdec
 * @param {number | Pattern} time time in seconds
 * @example
 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
 *
 */
function pdec(time): Pattern

/**
 * Release time of pitch envelope
 *
 * @name prelease
 * @tags pitch, envelope, superdough, supradough
 * @synonyms prel
 * @param {number | Pattern} time time in seconds
 * @example
 * note("<c eb g bb> ~")
 * .release(.5) // to hear the pitch release
 * .prelease("<0 .1 .25 .5>")
 *
 */
function prelease(time): Pattern

/**
 * Release time of pitch envelope
 *
 * @name prelease
 * @tags pitch, envelope, superdough, supradough
 * @synonyms prel
 * @param {number | Pattern} time time in seconds
 * @example
 * note("<c eb g bb> ~")
 * .release(.5) // to hear the pitch release
 * .prelease("<0 .1 .25 .5>")
 *
 */
function prel(time): Pattern

/**
 * Amount of pitch envelope. Negative values will flip the envelope.
 * If you don't set other pitch envelope controls, `pattack:.2` will be the default.
 *
 * @name penv
 * @tags pitch, envelope, superdough, supradough
 * @param {number | Pattern} semitones change in semitones
 * @example
 * note("c")
 * .penv("<12 7 1 .5 0 -1 -7 -12>")
 *
 */
function penv(semitones): Pattern

/**
 * Curve of envelope. Defaults to linear. exponential is good for kicks
 *
 * @name pcurve
 * @tags pitch, envelope, superdough
 * @param {number | Pattern} type 0 = linear, 1 = exponential
 * @example
 * note("g1*4")
 * .s("sine").pdec(.5)
 * .penv(32)
 * .pcurve("<0 1>")
 *
 */
function pcurve(type): Pattern

/**
 * Sets the range anchor of the envelope:
 * - anchor 0: range = [note, note + penv]
 * - anchor 1: range = [note - penv, note]
 * If you don't set an anchor, the value will default to the psustain value.
 *
 * @name panchor
 * @tags pitch, envelope, superdough
 * @param {number | Pattern} anchor anchor offset
 * @example
 * note("c c4").penv(12).panchor("<0 .5 1 .5>")
 *
 */
function panchor(anchor): Pattern

/**
 * Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet.
 *
 * @name leslie
 * @tags superdirt
 * @param {number | Pattern} wet between 0 and 1
 * @example
 * n("0,4,7").s("supersquare").leslie("<0 .4 .6 1>").osc()
 * @superdirtOnly
 *
 */
function leslie(wet): Pattern

/**
 * Rate of modulation / rotation for leslie effect
 *
 * @name lrate
 * @tags superdirt
 * @param {number | Pattern} rate 6.7 for fast, 0.7 for slow
 * @example
 * n("0,4,7").s("supersquare").leslie(1).lrate("<1 2 4 8>").osc()
 * @superdirtOnly
 *
 */
function lrate(rate): Pattern

/**
 * Physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)
 *
 * @name lsize
 * @tags superdirt
 * @param {number | Pattern} meters somewhere between 0 and 1
 * @example
 * n("0,4,7").s("supersquare").leslie(1).lrate(2).lsize("<.1 .5 1>").osc()
 * @superdirtOnly
 *
 */
function lsize(meters): Pattern

/**
 * Sets the displayed text for an event on the pianoroll
 *
 * @name label
 * @tags visualization
 * @param {string} label text to display
 */
function label(label): Pattern

/**
 * Sets the default octave of a synth.
 *
 * @name octave
 * @tags superdirt
 * @synonyms oct
 * @param {number | Pattern} octave octave number
 * @example
 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
 */
function octave(octave): Pattern

/**
 * Sets the default octave of a synth.
 *
 * @name octave
 * @tags superdirt
 * @synonyms oct
 * @param {number | Pattern} octave octave number
 * @example
 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
 */
function oct(octave): Pattern

/**
 * An `orbit` is a global parameter context for patterns. Patterns with the same orbit will share the same global effects.
 *
 * @name orbit
 * @tags superdough
 * @synonyms o
 * @param {number | Pattern} number
 * @example
 * stack(
 *   s("hh*6").delay(.5).delaytime(.25).orbit(1),
 *   s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)
 * )
 */
function orbit(number): Pattern

/**
 * An `orbit` is a global parameter context for patterns. Patterns with the same orbit will share the same global effects.
 *
 * @name orbit
 * @tags superdough
 * @synonyms o
 * @param {number | Pattern} number
 * @example
 * stack(
 *   s("hh*6").delay(.5).delaytime(.25).orbit(1),
 *   s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)
 * )
 */
function o(number): Pattern

/**
 * A `bus` is a send which can be used for mixing patterns. It combines with..
 *   s("bus") to play that bus through another pattern (for, say, applying non-linear
 *   effects like distortion to multiple signals)
 *
 *   otherPat.bmod(..) (to modulate another pattern with the bus)
 *
 * @name bus
 * @tags superdirt
 * @param {number | Pattern} number
 */
function bus(number): Pattern

/**
 * Postgain multiplier prior to sending the signal to the audio bus.
 *
 * @name busgain
 * @tags superdirt
 * @synonyms bgain
 * @param {number | Pattern} number
 */
function busgain(number): Pattern

/**
 * Postgain multiplier prior to sending the signal to the audio bus.
 *
 * @name busgain
 * @tags superdirt
 * @synonyms bgain
 * @param {number | Pattern} number
 */
function bgain(number): Pattern

/**
 * Sets position in stereo.
 *
 * @name pan
 * @tags superdough, supradough
 * @param {number | Pattern} pan between 0 and 1, from left to right (assuming stereo), once round a circle (assuming multichannel)
 * @example
 * s("[bd hh]*2").pan("<.5 1 .5 0>")
 * @example
 * s("bd rim sd rim bd ~ cp rim").pan(sine.slow(2))
 *
 */
function pan(pan): Pattern

/**
 * Controls how much multichannel output is fanned out
 *
 * @name panspan
 * @tags superdirt
 * @param {number | Pattern} span between -inf and inf, negative is backwards ordering
 * @example
 * s("[bd hh]*2").pan("<.5 1 .5 0>").panspan("<0 .5 1>").osc()
 *
 */
function panspan(span): Pattern

/**
 * Controls how much multichannel output is spread
 *
 * @name pansplay
 * @tags superdirt
 * @param {number | Pattern} spread between 0 and 1
 * @example
 * s("[bd hh]*2").pan("<.5 1 .5 0>").pansplay("<0 .5 1>").osc()
 *
 */
function pansplay(spread): Pattern

/**
 * The chord to voice
 * @name chord
 * @tags tonal
 * @param {string | Pattern} symbols chord symbols to voice e.g., C, Eb, Fm7, G7. The symbols can be defined via addVoicings
 * @example
 * chord("<Am C D F Am E Am E>").voicing()
 **/
function chord(symbols): Pattern

/**
 * Which dictionary to use for the voicings. This falls back to the default dictionary if not provided
 *
 * @name dictionary
 * @tags tonal
 * @param {string} dictionaryName which dictionary (having been defined with `addVoicings`) to use
 * @example
 * addVoicings('house', {
'': ['7 12 16', '0 7 16', '4 7 12'],
'm': ['0 3 7']
})
chord("<Am C D F Am E Am E>")
.dict('house').anchor(66)
.voicing().room(.5)
 **/
function dictionary(dictionaryName): Pattern

/** The top note to align the voicing to. Defaults to c5
 *
 * @name anchor
 * @tags tonal
 * @param {string | Pattern} anchorNote the note to align the voicing or scale to
 * @example
 * anchor("<c4 g4 c5 g5>").chord("C").voicing()
 * @example
 * n("0 .. 7").anchor("<c4 g4 c5 g5>").scale("<C:major F:minor>")
 **/
function anchor(anchorNote): Pattern

/**
 * Sets how the voicing is offset from the anchored position
 *
 * @name offset
 * @tags tonal
 * @param {number | Pattern} shift the amount to shift the voicing up or down
 * @example
 * chord("<Am C D F Am E Am E>").offset("<0 1 2 3 4 5>") // alter the voicing each time
 **/
function offset(shift): Pattern

/**
 *  How many octaves are voicing steps spread apart, defaults to 1
 *
 *  @name octaves
 *  @tags tonal
 *  @param {number | Pattern} count the number of octaves
 *  @example
 *  chord("<Am C D F Am E Am E>").octaves("<2 4>").voicing()
 **/
function octaves(count): Pattern

/**
 * Remove anchor note from the voicing. Useful for melody harmonization
 *
 * @name mode
 * @tags tonal
 * @param {string | Pattern} modeName one of {below | above | duck | root}
 * @example
 * mode("<below above duck root>").chord("C").voicing()
 *
 **/
function mode(modeName): Pattern

/**
 * Sets the level of reverb.
 *
 * When using mininotation, you can also optionally add the 'size' parameter, separated by ':'.
 *
 * @name room
 * @tags orbit, superdough
 * @param {number | Pattern} level between 0 and 1
 * @example
 * s("bd sd [~ bd] sd").room("<0 .2 .4 .6 .8 1>")
 * @example
 * s("bd sd [~ bd] sd").room("<0.9:1 0.9:4>")
 *
 */
function room(level): Pattern

/**
 * Reverb lowpass starting frequency (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomlp
 * @tags orbit, superdough
 * @synonyms rlp
 * @param {number} frequency between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
 */
function roomlp(frequency): Pattern

/**
 * Reverb lowpass starting frequency (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomlp
 * @tags orbit, superdough
 * @synonyms rlp
 * @param {number} frequency between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
 */
function rlp(frequency): Pattern

/**
 * Reverb lowpass frequency at -60dB (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomdim
 * @tags orbit, superdough
 * @synonyms rdim
 * @param {number} frequency between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
 *
 */
function roomdim(frequency): Pattern

/**
 * Reverb lowpass frequency at -60dB (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomdim
 * @tags orbit, superdough
 * @synonyms rdim
 * @param {number} frequency between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
 *
 */
function rdim(frequency): Pattern

/**
 * Reverb fade time (in seconds).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomfade
 * @tags orbit, superdough
 * @synonyms rfade
 * @param {number} seconds for the reverb to fade
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
 *
 */
function roomfade(seconds): Pattern

/**
 * Reverb fade time (in seconds).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomfade
 * @tags orbit, superdough
 * @synonyms rfade
 * @param {number} seconds for the reverb to fade
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
 *
 */
function rfade(seconds): Pattern

/**
 * Sets the sample to use as an impulse response for the reverb.
 * @name iresponse
 * @tags orbit, superdough
 * @param {string | Pattern} sample to use as an impulse response
 * @synonyms ir
 * @example
 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
 *
 */
function iresponse(sample): Pattern

/**
 * Sets the sample to use as an impulse response for the reverb.
 * @name iresponse
 * @tags orbit, superdough
 * @param {string | Pattern} sample to use as an impulse response
 * @synonyms ir
 * @example
 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
 *
 */
function ir(sample): Pattern

/**
 * Sets speed of the sample for the impulse response.
 * @name irspeed
 * @tags orbit, superdough
 * @param {string | Pattern} speed
 * @example
 * samples('github:switchangel/pad')
 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.2).irspeed("<2 1 .5>/2").irbegin(.5).roomsize(.5)
 *
 */
function irspeed(speed): Pattern

/**
 * Sets the beginning of the IR response sample
 * @name irbegin
 * @tags orbit, superdough
 * @param {string | Pattern} begin between 0 and 1
 * @synonyms ir
 * @example
 * samples('github:switchangel/pad')
 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
 *
 */
function irbegin(begin): Pattern

/**
 * Sets the beginning of the IR response sample
 * @name irbegin
 * @tags orbit, superdough
 * @param {string | Pattern} begin between 0 and 1
 * @synonyms ir
 * @example
 * samples('github:switchangel/pad')
 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
 *
 */
function ir(begin): Pattern

/**
 * Sets the room size of the reverb, see `room`.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomsize
 * @tags orbit, superdough
 * @param {number | Pattern} size between 0 and 10
 * @synonyms rsize, sz, size
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 *
 */
function roomsize(size): Pattern

/**
 * Sets the room size of the reverb, see `room`.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomsize
 * @tags orbit, superdough
 * @param {number | Pattern} size between 0 and 10
 * @synonyms rsize, sz, size
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 *
 */
function rsize(size): Pattern

/**
 * Sets the room size of the reverb, see `room`.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomsize
 * @tags orbit, superdough
 * @param {number | Pattern} size between 0 and 10
 * @synonyms rsize, sz, size
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 *
 */
function sz(size): Pattern

/**
 * Sets the room size of the reverb, see `room`.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 *
 * @name roomsize
 * @tags orbit, superdough
 * @param {number | Pattern} size between 0 and 10
 * @synonyms rsize, sz, size
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 *
 */
function size(size): Pattern

/**
 * (Deprecated) Wave shaping distortion. WARNING: can suddenly get unpredictably loud.
 * Please use distort instead, which has a more predictable response curve
 * second option in optional array syntax (ex: ".9:.5") applies a postgain to the output
 *
 *
 * @name shape
 * @tags distortion, superdough
 * @param {number | Pattern} distortion between 0 and 1
 * @example
 * s("bd sd [~ bd] sd,hh*8").shape("<0 .2 .4 .6 .8>")
 *
 */
function shape(distortion): Pattern

/**
 * Wave shaping distortion. CAUTION: it can get loud.
 * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
 * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
 *
 * @name distort
 * @tags distortion, superdough, supradough
 * @synonyms dist
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 * @param {number | string | Pattern} type type of distortion to apply
 * @example
 * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
 * @example
 * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
 * @example
 * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
 *
 */
function distort(distortion,volume,type): Pattern

/**
 * Wave shaping distortion. CAUTION: it can get loud.
 * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
 * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
 *
 * @name distort
 * @tags distortion, superdough, supradough
 * @synonyms dist
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 * @param {number | string | Pattern} type type of distortion to apply
 * @example
 * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
 * @example
 * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
 * @example
 * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
 *
 */
function dist(distortion,volume,type): Pattern

/**
 * Postgain for waveshaping distortion.
 *
 * @name distortvol
 * @synonyms distortion, distvol
 * @tags superdough, supradough
 * @param {number | Pattern} volume linear postgain of the distortion
 * @example
 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
 */
function distortvol(volume): Pattern

/**
 * Postgain for waveshaping distortion.
 *
 * @name distortvol
 * @synonyms distortion, distvol
 * @tags superdough, supradough
 * @param {number | Pattern} volume linear postgain of the distortion
 * @example
 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
 */
function distortion(volume): Pattern

/**
 * Postgain for waveshaping distortion.
 *
 * @name distortvol
 * @synonyms distortion, distvol
 * @tags superdough, supradough
 * @param {number | Pattern} volume linear postgain of the distortion
 * @example
 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
 */
function distvol(volume): Pattern

/**
 * Type of waveshaping distortion to apply.
 *
 * @name distorttype
 * @tags distortion, superdough, supradough
 * @synonyms disttype
 * @param {number | string | Pattern} type type of distortion to apply
 * @example
 * s("bd*4").bank("tr909").distort(2).distorttype("<0 1 2>")
 *
 * @example
 * s("sine").note("F1*2").release(1)
 *   .penv(24).pdecay(0.05)
 *   .distort(rand.range(1, 8))
 *   .distorttype("<fold chebyshev scurve diode asym sinefold>")
 */
function distorttype(type): Pattern

/**
 * Type of waveshaping distortion to apply.
 *
 * @name distorttype
 * @tags distortion, superdough, supradough
 * @synonyms disttype
 * @param {number | string | Pattern} type type of distortion to apply
 * @example
 * s("bd*4").bank("tr909").distort(2).distorttype("<0 1 2>")
 *
 * @example
 * s("sine").note("F1*2").release(1)
 *   .penv(24).pdecay(0.05)
 *   .distort(rand.range(1, 8))
 *   .distorttype("<fold chebyshev scurve diode asym sinefold>")
 */
function disttype(type): Pattern

/**
 * Dynamics Compressor. The params are `compressor("threshold:ratio:knee:attack:release")`
 * More info [here](https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode?retiredLocale=de#instance_properties)
 *
 * @name compressor
 * @tags superdough
 * @example
 * s("bd sd [~ bd] sd,hh*8")
 * .compressor("-20:20:10:.002:.02")
 *
 */
function compressor(...args): Pattern

/**
 * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
 *
 * @name speed
 * @tags pitch, samples
 * @param {number | Pattern} speed -inf to inf, negative numbers play the sample backwards.
 * @example
 * s("bd*6").speed("1 2 4 1 -2 -4")
 * @example
 * speed("1 1.5*2 [2 1.1]").s("piano").clip(1)
 *
 */
function speed(speed): Pattern

/**
 * Changes the pitch of the sample without changing its speed.
 * The frequencies are multiplied by (factor + 1) for positive numbers
 * and by max(factor / 4 + 1, 0) for negative numbers.
 * So tuning up by octaves can be done with 1, 3, 7, ...
 * and tuning down by octaves with -2, -3, -3.5...
 *
 * @name stretch
 * @tags pitch, samples
 * @param {number | Pattern} factor between `-4` and `inf`. Positive increases pitch, 0 does nothing, negative decreases the pitch.
 * @example
 * s("gm_flute").stretch("<2 1 0 -2>")
 *
 */
function stretch(factor): Pattern

/**
 * Used in conjunction with `speed`, accepts values of "r" (rate, default behavior), "c" (cycles), or "s" (seconds). Using `unit "c"` means `speed` will be interpreted in units of cycles, e.g. `speed "1"` means samples will be stretched to fill a cycle. Using `unit "s"` means the playback speed will be adjusted so that the duration is the number of seconds specified by `speed`.
 *
 * @name unit
 * @tags superdirt
 * @param {number | string | Pattern} unit see description above
 * @example
 * speed("1 2 .5 3").s("bd").unit("c").osc()
 * @superdirtOnly
 *
 */
function unit(unit): Pattern

/**
 * Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. The SuperCollider manual defines Squiz as:
 *
 * "A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated."
 *
 * @name squiz
 * @tags superdirt
 * @param {number | Pattern} squiz Try passing multiples of 2 to it - 2, 4, 8 etc.
 * @example
 * squiz("2 4/2 6 [8 16]").s("bd").osc()
 * @superdirtOnly
 *
 */
function squiz(squiz): Pattern

/**
 *
 * Formant filter to make things sound like vowels.
 *
 * @name vowel
 * @tags superdough
 * @param {string | Pattern} vowel You can use a e i o u ae aa oe ue y uh un en an on, corresponding to [a] [e] [i] [o] [u] [æ] [ɑ] [ø] [y] [ɯ] [ʌ] [œ̃] [ɛ̃] [ɑ̃] [ɔ̃]. Aliases: aa = å = ɑ, oe = ø = ö, y = ı, ae = æ.
 * @example
 * note("[c2 <eb2 <g2 g1>>]*2").s('sawtooth')
 * .vowel("<a e i <o u>>")
 * @example
 * s("bd sd mt ht bd [~ cp] ht lt").vowel("[a|e|i|o|u]")
 *
 */
function vowel(vowel): Pattern

/**
 * crackle noise density
 *
 * @name density
 * @tags superdough
 * @param {number | Pattern} density between 0 and x
 * @example
 * s("crackle*4").density("<0.01 0.04 0.2 0.5>".slow(4))
 *
 */
function density(density): Pattern

/**
 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
 *
 * @name clip
 * @tags superdough
 * @synonyms legato
 * @param {number | Pattern} factor >= 0
 * @example
 * note("c a f e").s("piano").clip("<.5 1 2>")
 *
 */
function clip(factor): Pattern

/**
 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
 *
 * @name clip
 * @tags superdough
 * @synonyms legato
 * @param {number | Pattern} factor >= 0
 * @example
 * note("c a f e").s("piano").clip("<.5 1 2>")
 *
 */
function legato(factor): Pattern

/**
 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
 *
 * @name duration
 * @tags superdough
 * @synonyms dur
 * @param {number | Pattern} seconds >= 0
 * @example
 * note("c a f e").s("piano").dur("<.5 1 2>")
 *
 */
function duration(seconds): Pattern

/**
 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
 *
 * @name duration
 * @tags superdough
 * @synonyms dur
 * @param {number | Pattern} seconds >= 0
 * @example
 * note("c a f e").s("piano").dur("<.5 1 2>")
 *
 */
function dur(seconds): Pattern

/**
 * Sets the color of the hap in visualizations like pianoroll or highlighting.
 * @name color
 * @tags visualization
 * @synonyms colour
 * @param {string} color Hexadecimal or CSS color name
 */
function color(color): Pattern

/**
 * Sets the color of the hap in visualizations like pianoroll or highlighting.
 * @name color
 * @tags visualization
 * @synonyms colour
 * @param {string} color Hexadecimal or CSS color name
 */
function colour(color): Pattern

/**
 * ADSR envelope: Combination of Attack, Decay, Sustain, and Release.
 *
 * @name adsr
 * @tags envelope, amplitude
 * @param {number | Pattern} time attack time in seconds
 * @param {number | Pattern} time decay time in seconds
 * @param {number | Pattern} gain sustain level (0 to 1)
 * @param {number | Pattern} time release time in seconds
 * @example
 * note("[c3 bb2 f3 eb3]*2").sound("sawtooth").lpf(600).adsr(".1:.1:.5:.2")
 */
function adsr(time,time,gain,time): Pattern

/**
 * MIDI channel: Sets the MIDI channel for the event.
 *
 * @name midichan
 * @tags external_io, midi
 * @param {number | Pattern} channel MIDI channel number (0-15)
 * @example
 * note("c4").midichan(1).midi()
 */
function midichan(channel): Pattern

/**
 * MIDI port: Sets the MIDI port for the event.
 *
 * @name midiport
 * @tags external_io, midi
 * @param {number | Pattern} port MIDI port
 * @example
 * note("c a f e").midiport("<0 1 2 3>").midi()
 */
function midiport(port): Pattern

/**
 * MIDI command: Sends a MIDI command message.
 *
 * @name midicmd
 * @tags external_io, midi
 * @param {number | Pattern} command MIDI command
 * @example
 * midicmd("clock*48,<start stop>/2").midi()
 */
function midicmd(command): Pattern

/**
 * MIDI control: Sends a MIDI control change message.
 *
 * @name control
 * @tags external_io, midi
 * @param {number | Pattern}  MIDI control number (0-127)
 * @param {number | Pattern}  MIDI controller value (0-127)
 */
function control(MIDI,MIDI): Pattern

/**
 * MIDI control number: Sends a MIDI control change message.
 *
 * @name ccn
 * @tags external_io, midi
 * @param {number | Pattern}  MIDI control number (0-127)
 */
function ccn(MIDI): Pattern

/**
 * MIDI control value: Sends a MIDI control change message.
 *
 * @name ccv
 * @tags external_io, midi
 * @param {number | Pattern}  MIDI control value (0-127)
 */
function ccv(MIDI): Pattern

/**
 * MIDI NRPN non-registered parameter number: Sends a MIDI NRPN non-registered parameter number message.
 * @name nrpnn
 * @tags external_io, midi
 * @param {number | Pattern} nrpnn MIDI NRPN non-registered parameter number (0-127)
 * @example
 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
 */
function nrpnn(nrpnn): Pattern

/**
 * MIDI NRPN non-registered parameter value: Sends a MIDI NRPN non-registered parameter value message.
 * @name nrpv
 * @tags external_io, midi
 * @param {number | Pattern} nrpv MIDI NRPN non-registered parameter value (0-127)
 * @example
 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
 */
function nrpv(nrpv): Pattern

/**
 * MIDI program number: Sends a MIDI program change message.
 *
 * @name progNum
 * @tags external_io
 * @param {number | Pattern} program MIDI program number (0-127)
 * @example
 * note("c4").progNum(10).midichan(1).midi()
 */
function progNum(program): Pattern

/**
 * MIDI sysex: Sends a MIDI sysex message.
 * @name sysex
 * @tags external_io, midi
 * @param {number | Pattern} id Sysex ID
 * @param {number | Pattern} data Sysex data
 * @example
 * note("c4").sysex(["0x77", "0x01:0x02:0x03:0x04"]).midichan(1).midi()
 */
function sysex(id,data): Pattern

/**
 * MIDI sysex ID: Sends a MIDI sysex identifier message.
 * @name sysexid
 * @tags external_io, midi
 * @param {number | Pattern} id Sysex ID
 * @example
 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
 */
function sysexid(id): Pattern

/**
 * MIDI sysex data: Sends a MIDI sysex message.
 * @name sysexdata
 * @tags external_io, midi
 * @param {number | Pattern} data Sysex data
 * @example
 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
 */
function sysexdata(data): Pattern

/**
 * MIDI pitch bend: Sends a MIDI pitch bend message.
 * @name midibend
 * @tags external_io, midi
 * @param {number | Pattern} midibend MIDI pitch bend (-1 - 1)
 * @example
 * note("c4").midibend(sine.slow(4).range(-0.4,0.4)).midi()
 */
function midibend(midibend): Pattern

/**
 * MIDI key after touch: Sends a MIDI key after touch message.
 * @name miditouch
 * @tags external_io, midi
 * @param {number | Pattern} miditouch MIDI key after touch (0-1)
 * @example
 * note("c4").miditouch(sine.slow(4).range(0,1)).midi()
 */
function miditouch(miditouch): Pattern

/**
 * The host to send open sound control messages to. Requires running the OSC bridge.
 * @name oschost
 * @tags external_io
 * @param {string | Pattern} oschost e.g. 'localhost'
 * @example
 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
 */
function oschost(oschost): Pattern

/**
 * The port to send open sound control messages to. Requires running the OSC bridge.
 * @name oscport
 * @tags external_io
 * @param {number | Pattern} oscport e.g. 57120
 * @example
 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
 */
function oscport(oscport): Pattern

/**
 * Sets properties in a batch.
 *
 * @name as
 * @tags combiners
 * @param {String | Array} mapping the control names that are set
 * @example
 * "c:.5 a:1 f:.25 e:.8".as("note:clip")
 * @example
 * "{0@2 0.25 0 0.5 .3 .5}%8".as("begin").s("sax_vib").clip(1)
 */
function as(mapping): Pattern

/**
 * Configures an LFO. Can be called in sequence like pat.lfo(...).lfo(...) to set up multiple LFOs.
 * There are two ways to declare which control will be modulated:
 * 1. Explicitly put `control` in the config (e.g. `lfo({ c: "lpf" })`)
 * 2. If the control parameter is absent, the control _immediately before_ the `lfo` call will be used
 *   (e.g. `s("saw").lpf(500).lfo()` to modulate `lpf`)
 *
 * Modulators can be referred to by `id` so that they can be updated later e.g. inside
 * a `sometimes`. See example below.
 *
 * @name lfo
 * @tags lfo, superdough
 * @param {Object} config LFO configuration.
 * @param {string | Pattern} [config.control] Node to modulate. Aliases: c
 * @param {string | Pattern} [config.subControl] Sub-control name to append to the control key. Aliases: sc
 * @param {number | Pattern} [config.rate] Modulation rate. Aliases: r
 * @param {number | Pattern} [config.sync] Tempo-synced modulation rate. Aliases: s
 * @param {number | Pattern} [config.depth] Relative modulation depth. Aliases: dep, dr
 * @param {number | Pattern} [config.depthabs] Absolute modulation depth. Aliases: da
 * @param {number | Pattern} [config.dcoffset] DC offset / bias for the waveform. Aliases: dc
 * @param {number | Pattern} [config.shape] Shape index. Aliases: sh
 * @param {number | Pattern} [config.skew] Skew amount. Aliases: sk
 * @param {number | Pattern} [config.curve] Exponential curve amount. Aliases: cu
 * @param {number | Pattern} [config.retrig] If > 0.5, the LFO will retrigger on each event. Aliases: rt
 * @param {number | Pattern} [config.fxi] FX index to target
 * @param {string | Pattern} id ID to use for this modulator
 * @returns Pattern
 *
 * @example
 * s("saw").note("F1").lpf(500).lfo()
 *
 * @example
 * s("saw").lfo().lpf(500).lfo({ s: 0.3 })
 *
 * @example
 * s("saw").lpf(500).diode(0.3)
 *   .lfo({ c: "lpf" })
 *
 * @example
 * s("pulse").lpf(500).lfo()
 *   .lfo({ c: "s" })
 *   .diode(0.3)
 *   .sometimes(x => x.lfo({ s: "8" }, 1)) // lfo #1 (0-indexed)
 *
 * @example
 * s("pulse").lpf(500).lfo({ depth: 4 }, 'lpf_mod')
 *   .lfo({ c: "s" })
 *   .diode(0.3)
 *   .sometimes(x => x.lfo({ s: "8" }, 'lpf_mod'))
 */
function lfo(config,config.control,config.subControl,config.rate,config.sync,config.depth,config.depthabs,config.dcoffset,config.shape,config.skew,config.curve,config.retrig,config.fxi,id): Pattern

/**
 * Configures an envelope. Can be called in sequence like pat.env(...).env(...) to set up multiple envelopes
 * There are two ways to declare which control will be modulated:
 * 1. Explicitly put `control` in the config (e.g. `env({ c: "lpf" })`)
 * 2. If the control parameter is absent, the control _immediately before_ the `env` call will be used
 *   (e.g. `s("saw").lpf(500).env({ a: 1 })` to modulate `lpf`)
 *
 * Modulators can be referred to by `id` so that they can be updated later e.g. inside
 * a `sometimes`. See example below.
 *
 * @name env
 * @tags envelope, superdough
 * @param {Object} config Envelope configuration.
 * @param {string | Pattern} [config.control] Node to modulate. Aliases: c
 * @param {string | Pattern} [config.subControl] Sub-control name to append to the control key. Aliases: sc
 * @param {number | Pattern} [config.depth] Relative modulation depth. Aliases: dep, dr
 * @param {number | Pattern} [config.depthabs] Absolute modulation depth. Aliases: da
 * @param {number | Pattern} [config.attack] Time to reach depth. Aliases: att, a
 * @param {number | Pattern} [config.decay] Time to reach sustain. Aliases: dec, d
 * @param {number | Pattern} [config.sustain] Sustain depth. Aliases: sus, s
 * @param {number | Pattern} [config.release] Time to return to nominal value. Aliases: rel, r
 * @param {number | Pattern} [config.acurve] Snappiness of attack curve (-1 = relaxed, 1 = snappy). Aliases: ac
 * @param {number | Pattern} [config.dcurve] Snappiness of decay curve (-1 = relaxed, 1 = snappy). Aliases: dc
 * @param {number | Pattern} [config.rcurve] Snappiness of release curve (-1 = relaxed, 1 = snappy). Aliases: rc
 * @param {number | Pattern} [config.fxi] FX index to target
 * @param {string | Pattern} id ID to use for this modulator
 * @returns Pattern
 *
 * @example
 * s("saw").note("F1").lpf(500).env({ a: 1 })
 *
 * @example
 * s("saw").env({ d: 1 }).note("F1")
 *   .lpq(4).lpf(50)
 *   .env({ a: 0.1, d: 1, ac: 0.8, dc: 0.3, depth: 50 })
 *
 * @example
 * s("saw").lpf(500).diode(0.3)
 *   .env({ c: "lpf", a: 0.5, d: 0.5 })
 *
 * @example
 * s("pulse").lpf(500).env({ a: 1 })
 *   .env({ c: "s", a: 1 })
 *   .diode(0.3)
 *   .sometimes(x => x.env({ a: "0.5" }, 1)) // envelope #1 (0-indexed)
 *
 * @example
 * s("pulse").lpf(500).env({ a: 1 }, 'lpf_mod')
 *   .env({ c: "s", a: 1 })
 *   .diode(0.3)
 *   .sometimes(x => x.env({ a: "0.5" }, 'lpf_mod'))
 */
function env(config,config.control,config.subControl,config.depth,config.depthabs,config.attack,config.decay,config.sustain,config.release,config.acurve,config.dcurve,config.rcurve,config.fxi,id): Pattern

/**
 * Modulates with the output from a given `bus`.
 * Can be called in sequence like pat.bmod(...).bmod(...) to set up multiple modulators
 *
 * Send to an audio bus with `otherPat.bus(..)`.
 *
 * There are two ways to declare which control will be modulated:
 * 1. Explicitly put `control` in the config (e.g. `bmod({ id: 2, c: "lpf" })`)
 * 2. If the control parameter is absent, the control _immediately before_ the `bmod` call will be used
 *   (e.g. `s("saw").lpf(500).bmod({ id: 2 })` to modulate `lpf`)
 *
 * Modulators can be referred to by `id` so that they can be updated later e.g. inside
 * a `sometimes`. See example below.
 *
 * @name bmod
 * @tags superdough
 * @param {Object} config Bus modulation configuration.
 * @param {string | Pattern} [config.bus] Bus to get modulation signal from
 * @param {string | Pattern} [config.control] Node to modulate. Aliases: c
 * @param {string | Pattern} [config.subControl] Sub-control name to append to the control key. Aliases: sc
 * @param {number | Pattern} [config.depth] Relative modulation depth. Aliases: dep, dr
 * @param {number | Pattern} [config.depthabs] Absolute modulation depth. Aliases: da
 * @param {number | Pattern} [config.dc] DC offset prior to application
 * @param {number | Pattern} [config.fxi] FX index to target
 * @param {string | Pattern} id ID to use for this modulator
 * @returns Pattern
 *
 * @example
 * modulator: s("one").seg(64).gain(slider(0, 0, 1)).bus(1).dry(0)
 * carrier: s("saw").bmod({ b: 1 })
 *
 */
function bmod(config,config.bus,config.control,config.subControl,config.depth,config.depthabs,config.dc,config.fxi,id): Pattern

/**
 * Transient shaper. Gives independent control over the emphasis on transients
 * and sustains
 *
 * @name transient
 * @tags superdough
 * @param {number | Pattern} attack Emphasis on transients; between -1 (deaccentuate) and 1 (accentuate)
 * @param {number | Pattern} sustain Emphasis on the sustains; between -1 (deaccentuate) and 1 (accentuate)
 * @example
 * s("bd").transient("<-1 -0.5 0 0.5 1>")
 * @example
 * s("hh*16").bank("tr909").transient("<-1:1 1:-1>")
 */
function transient(attack,sustain): Pattern

/**
 * Intended for a debugging, drawLine renders the pattern as a string, where each character represents the same time span.
 * Should only be used with single characters as values, otherwise the character slots will be messed up.
 * Character legend:
 *
 * - "|" cycle separator
 * - "-" hold previous value
 * - "." silence
 *
 * @tags visualization
 * @param {Pattern} pattern the pattern to use
 * @param {number} chars max number of characters (approximately)
 * @returns string
 * @example
 * const line = drawLine("0 [1 2 3]", 10); // |0--123|0--123
 * console.log(line);
 * silence;
 */
function drawLine(pattern,chars): Pattern

/**
 * @example // A thirteenth-century Persian rhythm called Khafif-e-ramal.
 * note("c3").euclid(2,5)
 * @example // The archetypal pattern of the Cumbia from Colombia, as well as a Calypso rhythm from Trinidad.
 * note("c3").euclid(3,4)
 * @example // Another thirteenth century Persian rhythm by the name of Khafif-e-ramal, as well as a Rumanian folk-dance rhythm.
 * note("c3").euclidRot(3,5,2)
 * @example // A Ruchenitza rhythm used in a Bulgarian folk dance.
 * note("c3").euclid(3,7)
 * @example // The Cuban tresillo pattern.
 * note("c3").euclid(3,8)
 * @example // Another Ruchenitza Bulgarian folk-dance rhythm.
 * note("c3").euclid(4,7)
 * @example // The Aksak rhythm of Turkey.
 * note("c3").euclid(4,9)
 * @example // The metric pattern used by Frank Zappa in his piece titled Outside Now.
 * note("c3").euclid(4,11)
 * @example // Yields the York-Samai pattern, a popular Arab rhythm.
 * note("c3").euclid(5,6)
 * @example // The Nawakhat pattern, another popular Arab rhythm.
 * note("c3").euclid(5,7)
 * @example // The Cuban cinquillo pattern.
 * note("c3").euclid(5,8)
 * @example // A popular Arab rhythm called Agsag-Samai.
 * note("c3").euclid(5,9)
 * @example // The metric pattern used by Moussorgsky in Pictures at an Exhibition.
 * note("c3").euclid(5,11)
 * @example // The Venda clapping pattern of a South African children’s song.
 * note("c3").euclid(5,12)
 * @example // The Bossa-Nova rhythm necklace of Brazil.
 * note("c3").euclid(5,16)
 * @example // A typical rhythm played on the Bendir (frame drum).
 * note("c3").euclid(7,8)
 * @example // A common West African bell pattern.
 * note("c3").euclid(7,12)
 * @example // A Samba rhythm necklace from Brazil.
 * note("c3").euclidRot(7,16,14)
 * @example // A rhythm necklace used in the Central African Republic.
 * note("c3").euclid(9,16)
 * @example // A rhythm necklace of the Aka Pygmies of Central Africa.
 * note("c3").euclidRot(11,24,14)
 * @example // Another rhythm necklace of the Aka Pygmies of the upper Sangha.
 * note("c3").euclidRot(13,24,5)
 */
function _euclidRot(): Pattern

/**
 * Clears all user-defined variables and functions from the scope.
 * This removes variables created during block-based evaluation.
 * @name clearScope
 * @example
 * // After defining variables in blocks:
 * // let myVar = 5
 * // function myFunc() { return 10; }
 * clearScope() // removes myVar and myFunc from scope
 */
function clearScope(...args): Pattern

/**
 * Selects indices in in stacked notes.
 * @tags temporal
 * @example
 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
 * .arpWith(haps => haps[2])
 * */
function arpWith(...args): Pattern

/**
 * Selects indices in in stacked notes.
 * @tags temporal
 * @example
 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
 * .arp("0 [0,2] 1 [0,2]")
 * */
function arp(...args): Pattern

/**
 * Sets the default method of combining events from two patterns (aka [alignment](https://strudel.cc/technical-manual/alignment/)) in Strudel.
 * The default method is 'in', meaning that patterns to the left will (typically) dictate the event timings when combined with patterns to the right.
 * By changing alignment to 'out', the opposite will happen. With 'mix', they will combine their event timings.
 *
 * Note that we say the _default_ method, because alignments can also be set explicitly with calls like
 * 'add.mix', 'set.squeeze', etc.
 *
 * @param {string} method Default join method to use. Options: 'in', 'out', 'mix', 'squeeze', 'squeezeout', 'reset', 'restart', 'poly'
 * @tags combiners
 * @example
 * setDefaultJoin('mix') // also try 'in', 'out', 'squeeze', etc.
 * s("saw").vel("1 0.5").note("F A C E").delay("0 0.2 0.3")
 */
function setDefaultJoin(method): Pattern

/**
 * Does absolutely nothing, but with a given metrical 'steps'
 * @name gap
 * @tags generators
 * @param  {number} steps
 * @example
 * gap(3) // "~@3"
 */
function gap(steps): Pattern

/**
 * Does absolutely nothing..
 * @name silence
 * @tags generators
 * @example
 * silence // "~"
 */
function silence(...args): Pattern

/**
 * A discrete value that repeats once per cycle.
 *
 * @tags generators
 * @returns {Pattern}
 * @example
 * pure('e4') // "e4"
 * @noAutocomplete
 */
function pure(...args): Pattern

/**
 * Takes a list of patterns, and returns a pattern of lists.
 *
 * @tags temporal
 */
function sequenceP(...args): Pattern

/**
 * The given items are played at the same time at the same length.
 *
 * @tags temporal
 * @return {Pattern}
 * @synonyms polyrhythm, pr
 * @example
 * stack("g3", "b3", ["e4", "d4"]).note()
 * // "g3,b3,[e4 d4]".note()
 *
 * @example
 * // As a chained function:
 * s("hh*4").stack(
 *   note("c4(5,8)")
 * )
 */
function stack(...args): Pattern

/**
 * The given items are played at the same time at the same length.
 *
 * @tags temporal
 * @return {Pattern}
 * @synonyms polyrhythm, pr
 * @example
 * stack("g3", "b3", ["e4", "d4"]).note()
 * // "g3,b3,[e4 d4]".note()
 *
 * @example
 * // As a chained function:
 * s("hh*4").stack(
 *   note("c4(5,8)")
 * )
 */
function polyrhythm(...args): Pattern

/**
 * The given items are played at the same time at the same length.
 *
 * @tags temporal
 * @return {Pattern}
 * @synonyms polyrhythm, pr
 * @example
 * stack("g3", "b3", ["e4", "d4"]).note()
 * // "g3,b3,[e4 d4]".note()
 *
 * @example
 * // As a chained function:
 * s("hh*4").stack(
 *   note("c4(5,8)")
 * )
 */
function pr(...args): Pattern

/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
 *
 * @tags combiners
 * @return {Pattern}
 * @synonyms cat
 * @example
 * slowcat("e5", "b4", ["d5", "c5"])
 *
 */
function slowcat(...args): Pattern

/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
 *
 * @tags combiners
 * @return {Pattern}
 * @synonyms cat
 * @example
 * slowcat("e5", "b4", ["d5", "c5"])
 *
 */
function cat(...args): Pattern

/** Concatenation: combines a list of patterns, switching between them successively, one per cycle. Unlike slowcat, this version will skip cycles.
 * @tags combiners
 * @param {...any} items - The items to concatenate
 * @return {Pattern}
 */
function slowcatPrime(items): Pattern

/** The given items are con**cat**enated, where each one takes one cycle.
 *
 * @tags combiners
 * @param {...any} items - The items to concatenate
 * @synonyms slowcat
 * @return {Pattern}
 * @example
 * cat("e5", "b4", ["d5", "c5"]).note()
 * // "<e5 b4 [d5 c5]>".note()
 *
 * @example
 * // As a chained function:
 * s("hh*4").cat(
 *    note("c4(5,8)")
 * )
 */
function cat(items): Pattern

/** The given items are con**cat**enated, where each one takes one cycle.
 *
 * @tags combiners
 * @param {...any} items - The items to concatenate
 * @synonyms slowcat
 * @return {Pattern}
 * @example
 * cat("e5", "b4", ["d5", "c5"]).note()
 * // "<e5 b4 [d5 c5]>".note()
 *
 * @example
 * // As a chained function:
 * s("hh*4").cat(
 *    note("c4(5,8)")
 * )
 */
function slowcat(items): Pattern

/**
 * Allows to arrange multiple patterns together over multiple cycles.
 * Takes a variable number of arrays with two elements specifying the number of cycles and the pattern to use.
 *
 * @tags combiners
 * @return {Pattern}
 * @example
 * arrange(
 *   [4, "<c a f e>(3,8)"],
 *   [2, "<g a>(5,8)"]
 * ).note()
 */
function arrange(...args): Pattern

/**
 * Similarly to `arrange`, allows you to arrange multiple patterns together over multiple cycles.
 * Unlike `arrange`, you specify a start and stop time for each pattern rather than duration, which
 * means that patterns can overlap.
 * @tags combiners
 * @return {Pattern}
 * @example
seqPLoop(
  [0, 2, "bd(3,8)"],
  [1, 3, "cp(3,8)"]
).sound()
 */
function seqPLoop(...args): Pattern

/** See `fastcat`
 * @name sequence
 * @tags combiners
 */
function sequence(...args): Pattern

/** Like **cat**, but the items are crammed into one cycle.
 * @tags combiners
 * @synonyms fastcat
 * @example
 * seq("e5", "b4", ["d5", "c5"]).note()
 * // "e5 b4 [d5 c5]".note()
 *
 * @example
 * // As a chained function:
 * s("hh*4").seq(
 *   note("c4(5,8)")
 * )
 */
function seq(...args): Pattern

/** Like **cat**, but the items are crammed into one cycle.
 * @tags combiners
 * @synonyms fastcat
 * @example
 * seq("e5", "b4", ["d5", "c5"]).note()
 * // "e5 b4 [d5 c5]".note()
 *
 * @example
 * // As a chained function:
 * s("hh*4").seq(
 *   note("c4(5,8)")
 * )
 */
function fastcat(...args): Pattern

/**
 * Registers a new pattern method. The method is added to the Pattern class + the standalone function is returned from register.
 *
 * @tags functional
 * @param {string | string[]} name name of the function, or an array of names to be used as synonyms
 * @param {function} func function with 1 or more params, where last is the current pattern
 * @param {bool} patternify defaults to true; if set to false, you will have more control over the arguments to `func` as they will be
 *   in their raw form and it will be up to you to patternify them and/or query them for values
 * @example
 * const vlpf = register('vlpf', (freq, pat) => {
 *   return pat.fmap((v) => ({...v, cutoff: freq * (v.velocity ?? 1) }));
 * })
 * s("saw").seg(8).velocity(rand).vlpf(800)
 *
 */
function register(name,func,patternify): Pattern

/**
 * Assumes a numerical pattern, containing unipolar values in the range 0 ..
 * 1. Returns a new pattern with values scaled to the bipolar range -1 .. 1
 * @tags math
 * @returns Pattern
 * @noAutocomplete
 */
function toBipolar(...args): Pattern

/**
 * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
 * Returns a new pattern with values scaled to the unipolar range 0 .. 1
 * @tags math
 * @returns Pattern
 * @noAutocomplete
 */
function fromBipolar(...args): Pattern

/** Compress each cycle into the given timespan, leaving a gap
 * @tags temporal
 * @example
 * cat(
 *   s("bd sd").compress(.25,.75),
 *   s("~ bd sd ~")
 * )
 */
function compress(...args): Pattern

/**
 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
 * @tags temporal
 * @name fastGap
 * @synonyms fastgap
 * @example
 * s("bd sd").fastGap(2)
 */
function fastGap(...args): Pattern

/**
 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
 * @tags temporal
 * @name fastGap
 * @synonyms fastgap
 * @example
 * s("bd sd").fastGap(2)
 */
function fastgap(...args): Pattern

/**
 * Similar to `compress`, but doesn't leave gaps, and the 'focus' can be bigger than a cycle
 * @tags temporal
 * @example
 * s("bd hh sd hh").focus(1/4, 3/4)
 */
function focus(...args): Pattern

/** The ply function repeats each event the given number of times.
 * @tags temporal
 * @example
 * s("bd ~ sd cp").ply("<1 2 3>")
 */
function ply(...args): Pattern

/**
 * Both speeds up the pattern (like 'fast') and the sample playback (like 'speed').
 * @tags temporal
 * @example
 * s("bd sd:2").hurry("<1 2 4 3>").slow(1.5)
 */
function hurry(...args): Pattern

/**
 * Carries out an operation 'inside' a cycle.
 * @tags temporal
 * @example
 * "0 1 2 3 4 3 2 1".inside(4, rev).scale('C major').note()
 * // "0 1 2 3 4 3 2 1".slow(4).rev().fast(4).scale('C major').note()
 */
function inside(...args): Pattern

/**
 * Carries out an operation 'outside' a cycle.
 * @tags temporal
 * @example
 * "<[0 1] 2 [3 4] 5>".outside(4, rev).scale('C major').note()
 * // "<[0 1] 2 [3 4] 5>".fast(4).rev().slow(4).scale('C major').note()
 */
function outside(...args): Pattern

/**
 * Applies the given function to the pattern. Like layer, but with a single function:
 * @tags combiners
 * @name apply
 * @example
 * "<c3 eb3 g3>".scale('C minor').apply(scaleTranspose("0,2,4")).note()
 */
function apply(...args): Pattern

/**
 * Plays the pattern at the given cycles per minute.
 * @tags temporal
 * @deprecated
 * @example
 * s("<bd sd>,hh*2").cpm(90) // = 90 bpm
 */
function cpm(...args): Pattern

/**
 * Plays a portion of a pattern, specified by the beginning and end of a time span. The new resulting pattern is played over the time period of the original pattern:
 *
 * @tags temporal
 * @example
 * s("bd*2 hh*3 [sd bd]*2 perc").zoom(0.25, 0.75)
 * // s("hh*3 [sd bd]*2") // equivalent
 */
function zoom(...args): Pattern

/**
 * Splits a pattern into the given number of slices, and plays them according to a pattern of slice numbers.
 * Similar to `slice`, but slices up patterns rather than sound samples.
 * @tags temporal
 * @param {number} number of slices
 * @param {number} slices to play
 * @example
 * note("0 1 2 3 4 5 6 7".scale('c:mixolydian'))
 *.bite(4, "3 2 1 0")
 * @example
 * sound("bd - bd bd*2, - sd:6 - sd:5 sd:1 - [- sd:2] -, hh [- cp:7]")
  .bank("RolandTR909").speed(1.2)
  .bite(4, "0 0 [1 2] <3 2> 0 0 [2 1] 3")
 */
function bite(number,slices): Pattern

/**
 * Selects the given fraction of the pattern and repeats that part to fill the remainder of the cycle.
 * @tags temporal
 * @param {number} fraction fraction to select
 * @example
 * s("lt ht mt cp, [hh oh]*2").linger("<1 .5 .25 .125>")
 */
function linger(fraction): Pattern

/**
 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
 * @tags temporal
 * @name segment
 * @synonyms seg
 * @param {number} segments number of segments per cycle
 * @example
 * note(saw.range(40,52).segment(24))
 */
function segment(segments): Pattern

/**
 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
 * @tags temporal
 * @name segment
 * @synonyms seg
 * @param {number} segments number of segments per cycle
 * @example
 * note(saw.range(40,52).segment(24))
 */
function seg(segments): Pattern

/**
 * The function `swingBy x n` breaks each cycle into `n` slices, and then delays events in the second half of each slice by the amount `x`, which is relative to the size of the (half) slice. So if `x` is 0 it does nothing, `0.5` delays for half the note duration, and 1 will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm
 * @tags temporal
 * @param {number} subdivision
 * @param {number} offset
 * @example
 * s("hh*8").swingBy(1/3, 4)
 */
function swingBy(subdivision,offset): Pattern

/**
 * Shorthand for swingBy with 1/3:
 * @tags temporal
 * @param {number} subdivision
 * @example
 * s("hh*8").swing(4)
 * // s("hh*8").swingBy(1/3, 4)
 */
function swing(subdivision): Pattern

/**
 * Swaps 1s and 0s in a binary pattern.
 * @tags temporal
 * @name invert
 * @synonyms inv
 * @example
 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
 */
function invert(...args): Pattern

/**
 * Swaps 1s and 0s in a binary pattern.
 * @tags temporal
 * @name invert
 * @synonyms inv
 * @example
 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
 */
function inv(...args): Pattern

/**
 * Returns a new pattern where every other cycle is played once, twice as
 * fast, and offset in time by one quarter of a cycle. Creates a kind of
 * breakbeat feel.
 * @tags temporal
 * @returns Pattern
 */
function brak(...args): Pattern

/** Like press, but allows you to specify the amount by which each
 * event is shifted. pressBy(0.5) is the same as press, while
 * pressBy(1/3) shifts each event by a third of its timespan.
 * @tags temporal
 * @example
 * stack(s("hh*4"),
 *       s("bd mt sd ht").pressBy("<0 0.5 0.25>")
 *      ).slow(2)
 */
function pressBy(...args): Pattern

/**
 * Syncopates a rhythm, by shifting each event halfway into its timespan.
 * @tags temporal
 * @example
 * stack(s("hh*4"),
 *       s("bd mt sd ht").every(4, press)
 *      ).slow(2)
 */
function press(...args): Pattern

/**
 * Applies `rev` to a pattern every other cycle, so that the pattern alternates between forwards and backwards.
 * @tags temporal
 * @example
 * note("c d e g").palindrome()
 */
function palindrome(...args): Pattern

/**
 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
 * @tags temporal
 * @name juxBy
 * @synonyms juxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
 */
function juxBy(...args): Pattern

/**
 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
 * @tags temporal
 * @name juxBy
 * @synonyms juxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
 */
function juxby(...args): Pattern

/**
 * Like juxBy, except it flips the ears each cycle.
 * @name juxFlipBy
 * @synonyms juxflipby, fluxBy, fluxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
 */
function juxFlipBy(...args): Pattern

/**
 * Like juxBy, except it flips the ears each cycle.
 * @name juxFlipBy
 * @synonyms juxflipby, fluxBy, fluxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
 */
function juxflipby(...args): Pattern

/**
 * Like juxBy, except it flips the ears each cycle.
 * @name juxFlipBy
 * @synonyms juxflipby, fluxBy, fluxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
 */
function fluxBy(...args): Pattern

/**
 * Like juxBy, except it flips the ears each cycle.
 * @name juxFlipBy
 * @synonyms juxflipby, fluxBy, fluxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
 */
function fluxby(...args): Pattern

/**
 * The jux function creates strange stereo effects, by applying a function to a pattern, but only in the right-hand channel.
 * @tags temporal, superdough
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").jux(rev)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").jux(press)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").jux(iter(4))
 */
function jux(...args): Pattern

/**
 * Like jux, but flips the ears each cycle.
 * @name juxFlip
 * @synonyms juxflip, flux
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(rev)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(press)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(iter(4))
 */
function juxFlip(...args): Pattern

/**
 * Like jux, but flips the ears each cycle.
 * @name juxFlip
 * @synonyms juxflip, flux
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(rev)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(press)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(iter(4))
 */
function juxflip(...args): Pattern

/**
 * Like jux, but flips the ears each cycle.
 * @name juxFlip
 * @synonyms juxflip, flux
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(rev)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(press)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(iter(4))
 */
function flux(...args): Pattern

/**
 * Superimpose and offset multiple times, applying the given function each time.
 * @tags temporal, functional
 * @name echoWith
 * @synonyms echowith, stutWith, stutwith
 * @param {number} times how many times to repeat
 * @param {number} time cycle offset between iterations
 * @param {function} func function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
function echoWith(times,time,func): Pattern

/**
 * Superimpose and offset multiple times, applying the given function each time.
 * @tags temporal, functional
 * @name echoWith
 * @synonyms echowith, stutWith, stutwith
 * @param {number} times how many times to repeat
 * @param {number} time cycle offset between iterations
 * @param {function} func function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
function echowith(times,time,func): Pattern

/**
 * Superimpose and offset multiple times, applying the given function each time.
 * @tags temporal, functional
 * @name echoWith
 * @synonyms echowith, stutWith, stutwith
 * @param {number} times how many times to repeat
 * @param {number} time cycle offset between iterations
 * @param {function} func function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
function stutWith(times,time,func): Pattern

/**
 * Superimpose and offset multiple times, applying the given function each time.
 * @tags temporal, functional
 * @name echoWith
 * @synonyms echowith, stutWith, stutwith
 * @param {number} times how many times to repeat
 * @param {number} time cycle offset between iterations
 * @param {function} func function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
function stutwith(times,time,func): Pattern

/**
 * Deprecated. Like echo, but the last 2 parameters are flipped.
 * @tags temporal
 * @name stut
 * @param {number} times how many times to repeat
 * @param {number} feedback velocity multiplicator for each iteration
 * @param {number} time cycle offset between iterations
 * @example
 * s("bd sd").stut(3, .8, 1/6)
 */
function stut(times,feedback,time): Pattern

/**
 * The plyWith function repeats each event the given number of times, applying the given function to each event.\n
 * @tags temporal
 * @name plyWith
 * @synonyms plywith
 * @param {number} factor how many times to repeat
 * @param {function} func function to apply, given the pattern
 * @example
 * "<0 [2 4]>"
 * .plyWith(4, (p) => p.add(2))
 * .scale("C:minor").note()
 */
function plyWith(factor,func): Pattern

/**
 * The plyWith function repeats each event the given number of times, applying the given function to each event.\n
 * @tags temporal
 * @name plyWith
 * @synonyms plywith
 * @param {number} factor how many times to repeat
 * @param {function} func function to apply, given the pattern
 * @example
 * "<0 [2 4]>"
 * .plyWith(4, (p) => p.add(2))
 * .scale("C:minor").note()
 */
function plywith(factor,func): Pattern

/**
 * The plyForEach function repeats each event the given number of times, applying the given function to each event.
 * This version of ply uses the iteration index as an argument to the function, similar to echoWith.
 * @tags temporal
 * @name plyForEach
 * @synonyms plyforeach
 * @param {number} factor how many times to repeat
 * @param {function} func function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .plyForEach(4, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
function plyForEach(factor,func): Pattern

/**
 * The plyForEach function repeats each event the given number of times, applying the given function to each event.
 * This version of ply uses the iteration index as an argument to the function, similar to echoWith.
 * @tags temporal
 * @name plyForEach
 * @synonyms plyforeach
 * @param {number} factor how many times to repeat
 * @param {function} func function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .plyForEach(4, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
function plyforeach(factor,func): Pattern

/**
 * Loops the pattern inside an `offset` for `cycles`.
 * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
 * @tags temporal
 * @name ribbon
 * @synonyms rib
 * @param {number} offset start point of loop in cycles
 * @param {number} cycles loop length in cycles
 * @example
 * note("<c d e f>").ribbon(1, 2)
 * @example
 * // Looping a portion of randomness
 * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
 * @example
 * // rhythm generator
 * s("bd!16?").ribbon(29,.5)
 */
function ribbon(offset,cycles): Pattern

/**
 * Loops the pattern inside an `offset` for `cycles`.
 * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
 * @tags temporal
 * @name ribbon
 * @synonyms rib
 * @param {number} offset start point of loop in cycles
 * @param {number} cycles loop length in cycles
 * @example
 * note("<c d e f>").ribbon(1, 2)
 * @example
 * // Looping a portion of randomness
 * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
 * @example
 * // rhythm generator
 * s("bd!16?").ribbon(29,.5)
 */
function rib(offset,cycles): Pattern

/**
 * Tags each Hap with an identifier. Good for filtering. The function populates Hap.context.tags (Array).
 * @name tag
 * @tags temporal
 * @param {string} tag anything unique
 * @example
 * s("saw!16").note("F1")
 *   .lpf(tri.range(40, 80).slow(4)).lpenv(5).lpq(4).lpd(0.15)
 *   .when(rand.late(0.1).gte(0.5), x => x.transpose("12").tag('altered'))
 *   .when(rand.late(0.2).gte(0.5), x => x.s("square").tag('altered'))
 *   .when("<0 1>", x => x.filter((hap) => hap.hasTag('altered')))
 */
function tag(tag): Pattern

/**
 * Filters haps using the given function
 * @name filter
 * @tags temporal, functional
 * @param {Function} test function to test Hap
 * @example
 * s("hh!7 oh").filter(hap => hap.value.s === 'hh')
 */
function filter(test): Pattern

/**
 * Filters haps by their begin time
 * @name filterWhen
 * @tags temporal, functional
 * @param {Function} test function to test Hap.whole.begin
 * @example
 * oneCycle: s("bd*4").filterWhen((t) => t < 1)
 */
function filterWhen(test): Pattern

/**
 * Use within to apply a function to only a part of a pattern.
 * @name within
 * @tags temporal, functional
 * @param {number} start start within cycle (0 - 1)
 * @param {number} end end within cycle (0 - 1). Must be > start
 * @param {Function} func function to be applied to the sub-pattern
 */
function within(start,end,func): Pattern

/**
 * *Experimental*
 *
 * Speeds a pattern up or down, to fit to the given number of steps per cycle.
 * @tags stepwise
 * @example
 * sound("bd sd cp").pace(4)
 * // The same as sound("{bd sd cp}%4") or sound("<bd sd cp>*4")
 */
function pace(...args): Pattern

/**
 * *Experimental*
 *
 * Aligns the steps of the patterns, creating polymeters. The patterns are repeated until they all fit the cycle. For example, in the below the first pattern is repeated twice, and the second is repeated three times, to fit the lowest common multiple of six steps.
 * @tags stepwise
 * @synonyms pm
 * @example
 * // The same as note("{c eb g, c2 g2}%6")
 * polymeter("c eb g", "c2 g2").note()
 *
 */
function polymeter(...args): Pattern

/**
 * *Experimental*
 *
 * Aligns the steps of the patterns, creating polymeters. The patterns are repeated until they all fit the cycle. For example, in the below the first pattern is repeated twice, and the second is repeated three times, to fit the lowest common multiple of six steps.
 * @tags stepwise
 * @synonyms pm
 * @example
 * // The same as note("{c eb g, c2 g2}%6")
 * polymeter("c eb g", "c2 g2").note()
 *
 */
function pm(...args): Pattern

/** 'Concatenates' patterns like `fastcat`, but proportional to a number of steps per cycle.
 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
 * Has the alias `timecat`.
 * @name stepcat
 * @tags stepwise
 * @synonyms timeCat, timecat
 * @return {Pattern}
 * @example
 * stepcat([3,"e3"],[1, "g3"]).note()
 * // the same as "e3@3 g3".note()
 * @example
 * stepcat("bd sd cp","hh hh").sound()
 * // the same as "bd sd cp hh hh".sound()
 */
function stepcat(...args): Pattern

/** 'Concatenates' patterns like `fastcat`, but proportional to a number of steps per cycle.
 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
 * Has the alias `timecat`.
 * @name stepcat
 * @tags stepwise
 * @synonyms timeCat, timecat
 * @return {Pattern}
 * @example
 * stepcat([3,"e3"],[1, "g3"]).note()
 * // the same as "e3@3 g3".note()
 * @example
 * stepcat("bd sd cp","hh hh").sound()
 * // the same as "bd sd cp hh hh".sound()
 */
function timeCat(...args): Pattern

/** 'Concatenates' patterns like `fastcat`, but proportional to a number of steps per cycle.
 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
 * Has the alias `timecat`.
 * @name stepcat
 * @tags stepwise
 * @synonyms timeCat, timecat
 * @return {Pattern}
 * @example
 * stepcat([3,"e3"],[1, "g3"]).note()
 * // the same as "e3@3 g3".note()
 * @example
 * stepcat("bd sd cp","hh hh").sound()
 * // the same as "bd sd cp hh hh".sound()
 */
function timecat(...args): Pattern

/**
 * *Experimental*
 *
 * Concatenates patterns stepwise, according to an inferred 'steps per cycle'.
 * Similar to `stepcat`, but if an argument is a list, the whole pattern will alternate between the elements in the list.
 *
 * @tags stepwise
 * @return {Pattern}
 * @example
 * stepalt(["bd cp", "mt"], "bd").sound()
 * // The same as "bd cp bd mt bd".sound()
 */
function stepalt(...args): Pattern

/**
 * *Experimental*
 *
 * Takes the given number of steps from a pattern (dropping the rest).
 * A positive number will take steps from the start of a pattern, and a negative number from the end.
 * @tags stepwise
 * @return {Pattern}
 * @example
 * "bd cp ht mt".take("2").sound()
 * // The same as "bd cp".sound()
 * @example
 * "bd cp ht mt".take("1 2 3").sound()
 * // The same as "bd bd cp bd cp ht".sound()
 * @example
 * "bd cp ht mt".take("-1 -2 -3").sound()
 * // The same as "mt ht mt cp ht mt".sound()
 */
function take(...args): Pattern

/**
 * *Experimental*
 *
 * Drops the given number of steps from a pattern.
 * A positive number will drop steps from the start of a pattern, and a negative number from the end.
 * @tags stepwise
 * @return {Pattern}
 * @example
 * "tha dhi thom nam".drop("1").sound().bank("mridangam")
 * @example
 * "tha dhi thom nam".drop("-1").sound().bank("mridangam")
 * @example
 * "tha dhi thom nam".drop("0 1 2 3").sound().bank("mridangam")
 * @example
 * "tha dhi thom nam".drop("0 -1 -2 -3").sound().bank("mridangam")
 */
function drop(...args): Pattern

/**
 * *Experimental*
 *
 * `extend` is similar to `fast` in that it increases its density, but it also increases the step count
 * accordingly. So `stepcat("a b".extend(2), "c d")` would be the same as `"a b a b c d"`, whereas
 * `stepcat("a b".fast(2), "c d")` would be the same as `"[a b] [a b] c d"`.
 * @tags stepwise
 * @example
 * stepcat(
 *   sound("bd bd - cp").extend(2),
 *   sound("bd - sd -")
 * ).pace(8)
 */
function extend(...args): Pattern

/**
 * *Experimental*
 *
 * `replicate` is similar to `fast` in that it increases its density, but it also increases the step count
 * accordingly. So `stepcat("a b".replicate(2), "c d")` would be the same as `"a b a b c d"`, whereas
 * `stepcat("a b".fast(2), "c d")` would be the same as `"[a b] [a b] c d"`.
 *
 * TODO: find out how this function differs from extend
 * @tags stepwise
 * @example
 * stepcat(
 *   sound("bd bd - cp").replicate(2),
 *   sound("bd - sd -")
 * ).pace(8)
 */
function replicate(...args): Pattern

/**
 * *Experimental*
 *
 * Expands the step size of the pattern by the given factor.
 * @tags stepwise
 * @example
 * sound("tha dhi thom nam").bank("mridangam").expand("3 2 1 1 2 3").pace(8)
 */
function expand(...args): Pattern

/**
 * *Experimental*
 *
 * Contracts the step size of the pattern by the given factor. See also `expand`.
 * @tags stepwise
 * @example
 * sound("tha dhi thom nam").bank("mridangam").contract("3 2 1 1 2 3").pace(8)
 */
function contract(...args): Pattern

/**
 * *Experimental*
 *
 * Progressively shrinks the pattern by 'n' steps until there's nothing left, or if a second value is given (using mininotation list syntax with `:`),
 * that number of times.
 * A positive number will progressively drop steps from the start of a pattern, and a negative number from the end.
 * @tags stepwise
 * @return {Pattern}
 * @example
 * "tha dhi thom nam".shrink("1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".shrink("-1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".shrink("1 -1").sound().bank("mridangam").pace(4)
 * @example
 * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
   .shrink("1 -1").pace(8)

 */
function shrink(...args): Pattern

/**
 * *Experimental*
 *
 * Progressively grows the pattern by 'n' steps until the full pattern is played, or if a second value is given (using mininotation list syntax with `:`),
 * that number of times.
 * A positive number will progressively grow steps from the start of a pattern, and a negative number from the end.
 * @tags stepwise
 * @return {Pattern}
 * @example
 * "tha dhi thom nam".grow("1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".grow("-1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".grow("1 -1").sound().bank("mridangam").pace(4)
 * @example
 * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
   .grow("1 -1").pace(8)
 */
function grow(...args): Pattern

/**
 * *Experimental*
 * 
 * Inserts a pattern into a list of patterns. On the first repetition it will be inserted at the end of the list, then moved backwards through the list 
 * on successive repetitions. The patterns are added together stepwise, with all repetitions taking place over a single cycle. Using `pace` to set the 
 * number of steps per cycle is therefore usually recommended.
 *
 * @tags stepwise
 * @return {Pattern}
 * @example
 * "[c g]".tour("e f", "e f g", "g f e c").note()
   .sound("folkharp")
   .pace(8)
 */
function tour(...args): Pattern

/**
 * *Experimental*
 * 
 * 'zips' together the steps of the provided patterns. This can create a long repetition, taking place over a single, dense cycle. 
 * Using `pace` to set the number of steps per cycle is therefore usually recommended.
 * 
 * @tags stepwise
 * @returns {Pattern}
 * @example
 * zip("e f", "e f g", "g [f e] a f4 c").note()
   .sound("folkharp")
   .pace(8)
 */
function zip(...args): Pattern

/** Aliases for `stepcat` */
function timecat(...args): Pattern

/**
 * Works the same as slice, but changes the playback speed of each slice to match the duration of its step.
 * @name splice
 * @tags samples, pitch
 * @example
 * samples('github:tidalcycles/dirt-samples')
 * s("breaks165")
 * .splice(8,  "0 1 [2 3 0]@2 3 0@2 7")
 */
function splice(...args): Pattern

/**
 * Makes the sample fit its event duration. Good for rhythmical loops like drum breaks.
 * Similar to `loopAt`.
 * @name fit
 * @tags samples, pitch
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes/2").fit()
 */
function fit(...args): Pattern

/** exposes a custom value at query time. basically allows mutating state without evaluation
 * @tags internals
 */
function ref(...args): Pattern

/**
 * Cross-fades between left and right from 0 to 1:
 * - 0 = (full left, no right)
 * - .5 = (both equal)
 * - 1 = (no left, full right)
 *
 * @name xfade
 * @tags amplitude
 * @example
 * xfade(s("bd*2"), "<0 .25 .5 .75 1>", s("hh*8"))
 */
function xfade(...args): Pattern

/**
 * creates a structure pattern from divisions of a cycle
 * especially useful for creating rhythms
 * @name beat
 * @tags temporal
 * @example
 * s("bd").beat("0,7,10", 16)
 * @example
 * s("sd").beat("4,12", 16)
 */
function beat(...args): Pattern

/**
 * Takes two binary rhythms represented as lists of 1s and 0s, and a number
 * between 0 and 1 that morphs between them. The two lists should contain the same
 * number of true values.
 * @example
 * sound("hh").struct(morph([1,0,1,0,1,0,1,0], // straight rhythm
 *                          [1,1,0,1,0,1,0], // wonky rhythm
 *                          0.25 // creates a slightly wonky rhythm
 *                         )
 *                   )
 * @example
 * sound("hh").struct(morph("1:0:1:0:1:0:1:0", // straight rhythm
 *                          "1:1:0:1:0:1:0", // wonky rhythm
 *                          sine.slow(8) // slowly morph between the rhythms
 *                         )
 *                   )
 * @tags temporal
 */
function morph(...args): Pattern

/**
 * Soft-clipping distortion
 *
 * @name soft
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function soft(distortion,volume): Pattern

/**
 * Hard-clipping distortion
 *
 * @name hard
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function hard(distortion,volume): Pattern

/**
 * Cubic polynomial distortion
 *
 * @name cubic
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function cubic(distortion,volume): Pattern

/**
 * Diode-emulating distortion
 *
 * @name diode
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function diode(distortion,volume): Pattern

/**
 * Asymmetrical diode distortion
 *
 * @name asym
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function asym(distortion,volume): Pattern

/**
 * Wavefolding distortion
 *
 * @name fold
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function fold(distortion,volume): Pattern

/**
 * Wavefolding distortion composed with sinusoid
 *
 * @name sinefold
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function sinefold(distortion,volume): Pattern

/**
 * Distortion via Chebyshev polynomials
 *
 * @name chebyshev
 * @tags distortion, superdough
 * @param {number | Pattern} distortion amount of distortion to apply
 * @param {number | Pattern} volume linear postgain of the distortion
 *
 */
function chebyshev(distortion,volume): Pattern

/**
 * Turns a list of patterns into a single pattern which outputs list-values
 *
 * @name parray
 * @tags combiners
 * @returns Pattern
 */
function parray(...args): Pattern

/**
 * Scale the magnitude of the harmonics of one of the core synths ('sine', 'tri', 'saw', ..)
 *
 * Can also be used to create a new synth via `s('user').partials(...)`
 *
 * @name partials
 * @tags superdough
 * @param {number[] | Pattern} magnitudes List of [0, 1] magnitudes for partials. 0th entry is the fundamental harmonic (i.e. DC offset is skipped)
 * @example
 * s("user").seg(16).n(irand(8)).scale("A:major")
 *   .partials([1, 0, 1, 0, 0, 1])
 * @example
 * s("saw").seg(8).n(irand(12)).scale("G#:minor")
 *   .partials(binaryL(irand(256).add("1")))
 */
function partials(magnitudes): Pattern

/**
 * Rotates the harmonics of one of the core synths ('sine', 'tri', 'saw', 'user', ..) by a list of phases
 *
 * @name phases
 * @tags superdough
 * @param {number[] | Pattern} phases List of [0, 1) phases for partials. 0th entry is the fundamental phase (i.e. DC offset is skipped)
 * @example
 * // Phase cancellation
 * s("saw").seg(8).n(irand(12)).scale("G#1:minor")
 *   .partials(partials([1, 1, 1]))
 *   .superimpose(x => x.phases([0.5, 0.5, 0.5]))
 */
function phases(phases): Pattern

/**
 * Creates a pattern of numbers in base b from a number or pattern of numbers
 * limited to d digits long from the right
 *
 * @name base
 * @tags generators
 * @param {number} n - number to convert (can be a pattern or array)
 * @param {number} b - base to convert to (defaults to 10) (can be a pattern)
 * @param {number} d - max number of digits to produce for each n (defaults to 0 for all) (can be a pattern)
 * @example
 * $: note(base("7175 543", 10, 3)).scale("c:major").s("saw")
 * // $: note("1 7 5 5 4 3").scale("c:major").s("saw")
 */
function base(n,b,d): Pattern

/** * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
 * Similar to `inhabit`, but maintains the structure of the original patterns.
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 * @example
 * note("<0 1 2!2 3>".pick(["g a", "e f", "f g f g" , "g c d"]))
 * @example
 * sound("<0 1 [2,0]>".pick(["bd sd", "cp cp", "hh hh"]))
 * @example
 * sound("<0!2 [0,1] 1>".pick(["bd(3,8)", "sd sd"]))
 * @example
 * s("<a!2 [a,b] b>".pick({a: "bd(3,8)", b: "sd sd"}))
 */
function pick(pat,xs): Pattern

/** * The same as `pick`, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function pickmod(pat,xs): Pattern

/** * pickF lets you use a pattern of numbers to pick which function to apply to another pattern.
 * @tags combiners, functional
 * @param {Pattern} pat
 * @param {Pattern} lookup a pattern of indices or names
 * @param {function[] | object} lookup the array or lookup object of functions from which to pull
 * @returns {Pattern}
 * @example
 * s("bd [rim hh]").pickF("<0 1 2>", [rev,jux(rev),fast(2)])
 * @example
 * note("<c2 d2>(3,8)").s("square")
 * .pickF("<0 2> 1", [jux(rev), fast(2), x=>x.lpf(800)])
 * @example
 * note("<c2 d2>(3,8)").s("square")
 * .pickF("<jr l> f", { jr:jux(rev), f:fast(2), l:x=>x.lpf(800) })
 */
function pickF(pat,lookup,lookup): Pattern

/** * The same as `pickF`, but if you pick a number greater than the size of the functions list,
 * it wraps around, rather than sticking at the maximum value.
 * @tags combiners
 * @param {Pattern} pat
 * @param {Pattern} lookup a pattern of indices or names
 * @param {function[] | object} lookup the array or lookup object of functions from which to pull
 * @returns {Pattern}
 */
function pickmodF(pat,lookup,lookup): Pattern

/** * Similar to `pick`, but it applies an outerJoin instead of an innerJoin.
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function pickOut(pat,xs): Pattern

/** * The same as `pickOut`, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function pickmodOut(pat,xs): Pattern

/** * Similar to `pick`, but the choosen pattern is restarted when its index is triggered.
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function pickRestart(pat,xs): Pattern

/** * The same as `pickRestart`, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * @tags combiners
   * @param {Pattern} pat
   * @param {*} xs
   * @returns {Pattern}
   * @example
   * "<a@2 b@2 c@2 d@2>".pickRestart({
        a: n("0 1 2 0"),
        b: n("2 3 4 ~"),
        c: n("[4 5] [4 3] 2 0"),
        d: n("0 -3 0 ~")
      }).scale("C:major").s("piano")
   */
function pickmodRestart(pat,xs): Pattern

/** * Similar to `pick`, but the choosen pattern is reset when its index is triggered.
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function pickReset(pat,xs): Pattern

/** * The same as `pickReset`, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function pickmodReset(pat,xs): Pattern

/** Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
 * Similar to `pick`, but cycles are squeezed into the target ('inhabited') pattern.
 * @name inhabit
 * @tags combiners
 * @synonyms pickSqueeze
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 * @example
 * let a = s("bd(3,8)")
 * let b = s("cp sd")
 * "<a b [a,b]>".inhabit({ a, b })
 * @example
 * s("a@2 [a b] a"
 * .inhabit({a: "bd(3,8)", b: "sd sd"}))
 * .slow(4)
 */
function inhabit(pat,xs): Pattern

/** Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
 * Similar to `pick`, but cycles are squeezed into the target ('inhabited') pattern.
 * @name inhabit
 * @tags combiners
 * @synonyms pickSqueeze
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 * @example
 * let a = s("bd(3,8)")
 * let b = s("cp sd")
 * "<a b [a,b]>".inhabit({ a, b })
 * @example
 * s("a@2 [a b] a"
 * .inhabit({a: "bd(3,8)", b: "sd sd"}))
 * .slow(4)
 */
function pickSqueeze(pat,xs): Pattern

/** * The same as `inhabit`, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * @name inhabitmod
 * @synonyms pickmodSqueeze
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function inhabitmod(pat,xs): Pattern

/** * The same as `inhabit`, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * @name inhabitmod
 * @synonyms pickmodSqueeze
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function pickmodSqueeze(pat,xs): Pattern

/**
 * Pick from the list of values (or patterns of values) via the index using the given
 * pattern of integers. The selected pattern will be compressed to fit the duration of the selecting event
 * @tags combiners
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 * @example
 * note(squeeze("<0@2 [1!2] 2>", ["g a", "f g f g" , "g a c d"]))
 */
function squeeze(pat,xs): Pattern

/**
   * Changes the global tempo to the given cycles per minute
   *
   * @name setcpm
   * @tags temporal
   * @alias setCpm
   * @param {number} cpm cycles per minute
   * @example
   * setcpm(140/4) // =140 bpm in 4/4
   * $: s("bd*4,[- sd]*2").bank('tr707')
   */
function setcpm(cpm): Pattern

/**
 *  A sawtooth signal between 0 and 1.
 *
 * @return {Pattern}
 * @tags generators
 * @example
 * note("<c3 [eb3,g3] g2 [g3,bb3]>*8")
 * .clip(saw.slow(2))
 * @example
 * n(saw.range(0,8).segment(8))
 * .scale('C major')
 *
 */
function saw(...args): Pattern

/**
 *  A sawtooth signal between -1 and 1 (like `saw`, but bipolar).
 *
 * @return {Pattern}
 * @tags generators
 */
function saw2(...args): Pattern

/**
 *  A sawtooth signal between 1 and 0 (like `saw`, but flipped).
 *
 * @return {Pattern}
 * @tags generators
 * @example
 * note("<c3 [eb3,g3] g2 [g3,bb3]>*8")
 * .clip(isaw.slow(2))
 * @example
 * n(isaw.range(0,8).segment(8))
 * .scale('C major')
 *
 */
function isaw(...args): Pattern

/**
 *  A sawtooth signal between 1 and -1 (like `saw2`, but flipped).
 *
 * @return {Pattern}
 * @tags generators
 */
function isaw2(...args): Pattern

/**
 *  A sine signal between -1 and 1 (like `sine`, but bipolar).
 *
 * @return {Pattern}
 * @tags generators
 */
function sine2(...args): Pattern

/**
 *  A sine signal between 0 and 1.
 * @return {Pattern}
 * @tags generators
 * @example
 * n(sine.segment(16).range(0,15))
 * .scale("C:minor")
 *
 */
function sine(...args): Pattern

/**
 *  A cosine signal between 0 and 1.
 *
 * @return {Pattern}
 * @tags generators
 * @example
 * n(stack(sine,cosine).segment(16).range(0,15))
 * .scale("C:minor")
 *
 */
function cosine(...args): Pattern

/**
 *  A cosine signal between -1 and 1 (like `cosine`, but bipolar).
 *
 * @return {Pattern}
 * @tags generators
 */
function cosine2(...args): Pattern

/**
 *  A square signal between 0 and 1.
 * @return {Pattern}
 * @tags generators
 * @example
 * n(square.segment(4).range(0,7)).scale("C:minor")
 *
 */
function square(...args): Pattern

/**
 *  A square signal between -1 and 1 (like `square`, but bipolar).
 *
 * @return {Pattern}
 * @tags generators
 */
function square2(...args): Pattern

/**
 *  A triangle signal between 0 and 1.
 *
 * @return {Pattern}
 * @tags generators
 * @example
 * n(tri.segment(8).range(0,7)).scale("C:minor")
 *
 */
function tri(...args): Pattern

/**
 *  A triangle signal between -1 and 1 (like `tri`, but bipolar).
 *
 * @return {Pattern}
 * @tags generators
 */
function tri2(...args): Pattern

/**
 *  An inverted triangle signal between 1 and 0 (like `tri`, but flipped).
 *
 * @return {Pattern}
 * @tags generators
 * @example
 * n(itri.segment(8).range(0,7)).scale("C:minor")
 *
 */
function itri(...args): Pattern

/**
 *  An inverted triangle signal between -1 and 1 (like `itri`, but bipolar).
 *
 * @return {Pattern}
 * @tags generators
 */
function itri2(...args): Pattern

/**
 *  A signal representing the cycle time.
 *
 * @return {Pattern}
 * @tags generators
 */
function time(...args): Pattern

/**
 *  The mouse's x position value ranges from 0 to 1.
 * @name mousex
 * @return {Pattern}
 * @tags external_io
 * @example
 * n(mousex.segment(4).range(0,7)).scale("C:minor")
 *
 */
function mousex(...args): Pattern

/**
 *  The mouse's y position value ranges from 0 to 1.
 * @name mousey
 * @return {Pattern}
 * @tags external_io
 * @example
 * n(mousey.segment(4).range(0,7)).scale("C:minor")
 *
 */
function mousey(...args): Pattern

/**
 * Sets which random number generator to use. Historically Strudel would
 * use `useRNG('legacy')`, which remains the default. To use a new more statistically
 * precise RNG, try `useRNG('precise')`.
 *
 * @name useRNG
 * @tags generators, math
 * @param {string} mod - Mode. One of 'legacy', 'precise'
 * @example
 * useRNG('legacy')
 * // Repeats every 300 cycles
 * $: n(irand(50)).seg(16).scale("C:minor").ribbon(88, 32)
 * $: n(irand(50)).seg(16).scale("C:minor").ribbon(388, 32)
 */
function useRNG(mod): Pattern

/**
 * A discrete pattern of numbers from 0 to n-1
 * @tags generators
 * @example
 * n(run(4)).scale("C4:pentatonic")
 * // n("0 1 2 3").scale("C4:pentatonic")
 */
function run(...args): Pattern

/**
 * Creates a binary pattern from a number.
 *
 * @name binary
 * @tags generators
 * @param {number} n - input number to convert to binary
 * @example
 * "hh".s().struct(binary(5))
 * // "hh".s().struct("1 0 1")
 */
function binary(n): Pattern

/**
 * Creates a binary pattern from a number, padded to n bits long.
 *
 * @name binaryN
 * @tags generators
 * @param {number} n - input number to convert to binary
 * @param {number} nBits - pattern length, defaults to 16
 * @example
 * "hh".s().struct(binaryN(55532, 16))
 * // "hh".s().struct("1 1 0 1 1 0 0 0 1 1 1 0 1 1 0 0")
 */
function binaryN(n,nBits): Pattern

/**
 * Creates a binary list pattern from a number.
 *
 * @name binaryL
 * @tags generators
 * @param {number} n - input number to convert to binary
 * s("saw").seg(8)
 *   .partials(binaryL(irand(4096).add(1)))
 */
function binaryL(n): Pattern

/**
 * Creates a binary list pattern from a number, padded to n bits long.
 *
 * @name binaryNL
 * @tags generators
 * @param {number} n - input number to convert to binary
 * @param {number} nBits - pattern length, defaults to 16
 */
function binaryNL(n,nBits): Pattern

/**
 * Creates a list of random numbers of the given length
 *
 * @name randL
 * @tags generators
 * @param {number} n Number of random numbers to sample
 * @example
 * s("saw").seg(16).n(irand(12)).scale("F1:minor")
 *   .partials(randL(8))
 */
function randL(n): Pattern

/**
 * Slices a pattern into the given number of parts, then plays those parts in random order.
 * Each part will be played exactly once per cycle.
 * @name shuffle
 * @tags temporal
 * @example
 * note("c d e f").sound("piano").shuffle(4)
 * @example
 * seq("c d e f".shuffle(4), "g").note().sound("piano")
 */
function shuffle(...args): Pattern

/**
 * Slices a pattern into the given number of parts, then plays those parts at random. Similar to `shuffle`,
 * but parts might be played more than once, or not at all, per cycle.
 * @name scramble
 * @tags temporal
 * @example
 * note("c d e f").sound("piano").scramble(4)
 * @example
 * seq("c d e f".scramble(4), "g").note().sound("piano")
 */
function scramble(...args): Pattern

/**
 * Modify a pattern by applying a function to the `randomSeed` control if present
 *
 * @tags math
 * @param {Function} func Function from seed (or undefined) to seed (or undefined)
 * @param {Pattern} pat Pattern to update
 * @returns Pattern
 */
function withSeed(func,pat): Pattern

/**
 * Change the seed for random signals. Normally, random signals depend on time,
 * so two patterns at the same time will have the same random values. Specifying
 * a new seed changes the signal output by `rand`. This also affects other functions
 * that use randomness, like `shuffle` and `sometimes`.
 *
 * @name seed
 * @tags math
 * @param {number} n A new seed. Can be any number.
 * @example
 * $: s("hh*4").degrade();
 * $: s("bd*4").degrade().seed(1); // Will degrade different events from the hi-hat
 */
function seed(n): Pattern

/**
 * A continuous pattern of random numbers, between 0 and 1.
 *
 * @name rand
 * @tags generators
 * @example
 * // randomly change the cutoff
 * s("bd*4,hh*8").cutoff(rand.range(500,8000))
 *
 */
function rand(...args): Pattern

/**
 * A continuous pattern of random numbers, between -1 and 1
 * @tags generators
 */
function rand2(...args): Pattern

/**
 * A continuous pattern of 0 or 1 (binary random), with a probability for the value being 1
 *
 * @name brandBy
 * @tags generators
 * @param {number} probability - a number between 0 and 1
 * @example
 * s("hh*10").pan(brandBy(0.2))
 */
function brandBy(probability): Pattern

/**
 * A continuous pattern of 0 or 1 (binary random)
 *
 * @name brand
 * @tags generators
 * @example
 * s("hh*10").pan(brand)
 */
function brand(...args): Pattern

/**
 * A continuous pattern of random integers, between 0 and n-1.
 *
 * @name irand
 * @tags generators
 * @param {number} n max value (exclusive)
 * @example
 * // randomly select scale notes from 0 - 7 (= C to C)
 * n(irand(8)).struct("x x*2 x x*3").scale("C:minor")
 *
 */
function irand(n): Pattern

/**
 * Choose from the list of values (or patterns of values) using the given
 * pattern of numbers, which should be in the range of 0..1
 * @tags temporal
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 * @example
 * note("c2 g2!2 d2 f1").s(chooseWith(sine.fast(2), ["sawtooth", "triangle", "bd:6"]))
 */
function chooseWith(pat,xs): Pattern

/**
 * As with {chooseWith}, but the structure comes from the chosen values, rather
 * than the pattern you're using to choose with.
 * @tags temporal
 * @param {Pattern} pat
 * @param {*} xs
 * @returns {Pattern}
 */
function chooseInWith(pat,xs): Pattern

/**
 * Chooses randomly from the given list of elements.
 * @tags temporal
 * @param  {...any} xs values / patterns to choose from.
 * @returns {Pattern} - a continuous pattern.
 * @example
 * note("c2 g2!2 d2 f1").s(choose("sine", "triangle", "bd:6"))
 */
function choose(xs): Pattern

/**
 * Picks one of the elements at random each cycle.
 * @tags temporal
 * @synonyms randcat
 * @returns {Pattern}
 * @example
 * chooseCycles("bd", "hh", "sd").s().fast(8)
 * @example
 * s("bd | hh | sd").fast(8)
 */
function chooseCycles(...args): Pattern

/**
 * Picks one of the elements at random each cycle.
 * @tags temporal
 * @synonyms randcat
 * @returns {Pattern}
 * @example
 * chooseCycles("bd", "hh", "sd").s().fast(8)
 * @example
 * s("bd | hh | sd").fast(8)
 */
function randcat(...args): Pattern

/**
 * Chooses randomly from the given list of elements by giving a probability to each element
 * @tags temporal
 * @param {...any} pairs arrays of value and weight
 * @returns {Pattern} - a continuous pattern.
 * @example
 * note("c2 g2!2 d2 f1").s(wchoose(["sine",10], ["triangle",1], ["bd:6",1]))
 */
function wchoose(pairs): Pattern

/**
 * Picks one of the elements at random each cycle by giving a probability to each element
 * @tags temporal
 * @synonyms wrandcat
 * @returns {Pattern}
 * @example
 * wchooseCycles(["bd",10], ["hh",1], ["sd",1]).s().fast(8)
 * @example
 * wchooseCycles(["c c c",5], ["a a a",3], ["f f f",1]).fast(4).note()
 * @example
 * // The probability can itself be a pattern
 * wchooseCycles(["bd(3,8)","<5 0>"], ["hh hh hh",3]).fast(4).s()
 */
function wchooseCycles(...args): Pattern

/**
 * Picks one of the elements at random each cycle by giving a probability to each element
 * @tags temporal
 * @synonyms wrandcat
 * @returns {Pattern}
 * @example
 * wchooseCycles(["bd",10], ["hh",1], ["sd",1]).s().fast(8)
 * @example
 * wchooseCycles(["c c c",5], ["a a a",3], ["f f f",1]).fast(4).note()
 * @example
 * // The probability can itself be a pattern
 * wchooseCycles(["bd(3,8)","<5 0>"], ["hh hh hh",3]).fast(4).s()
 */
function wrandcat(...args): Pattern

/**
 * Generates a continuous pattern of [perlin noise](https://en.wikipedia.org/wiki/Perlin_noise), in the range 0..1.
 *
 * @tags generators
 * @name perlin
 * @example
 * // randomly change the cutoff
 * s("bd*4,hh*8").cutoff(perlin.range(500,8000))
 *
 */
function perlin(...args): Pattern

/**
 * Generates a continuous pattern of [berlin noise](conceived by Jame Coyne and Jade Rowland as a joke but turned out to be surprisingly cool and useful,
 * like perlin noise but with sawtooth waves), in the range 0..1.
 *
 * @tags generators
 * @name berlin
 * @example
 * // ascending arpeggios
 * n("0!16".add(berlin.fast(4).mul(14))).scale("d:minor")
 *
 */
function berlin(...args): Pattern

/**
 * A pattern measuring the duration of events,
 * in cycles per event. `cyclesPer` doesn't have structure itself, but takes structure, and therefore
 * event durations, from the pattern that it is combined with.
 * For example `cyclesPer.struct("1 1 [1 1] 1")` would give the same as `"0.25 0.25 [0.125 0.125] 0.25"`.
 * See also its reciprocal, `per`, also known as `perCycle`.
 *
 * @tags temporal
 * @example
 * // Shorter events are lower in pitch
 * sound("saw saw [saw saw] saw")
 *   .note(cyclesPer.range(50, 100))
 * @example
 * sound("bd sd [bd bd] sd*4 [- sd] [bd [bd bd]]")
 *   .note(cyclesPer.add(20))
 */
function cyclesPer(...args): Pattern

/**
 * A pattern measuring the 'shortness' of events, or in other words, the duration of pattern events,
 * in events per cycle. `per` doesn't have structure itself, but takes structure, and therefore
 * event durations, from the pattern that it is combined with.
 * For example `per.struct("1 1 [1 1] 1")` would give the same as `"4 4 [8 8] 4"`.
 * See also its reciprocal, `cyclesPer`.
 * @tags temporal
 * @synonyms perCycle
 * @example
 * // Shorter events are more distorted
 * n("0 0*2 0 0*2 0 [0 0 0]@2").sound("bd")
 *  .distort(per.div(2))
 */
function per(...args): Pattern

/**
 * A pattern measuring the 'shortness' of events, or in other words, the duration of pattern events,
 * in events per cycle. `per` doesn't have structure itself, but takes structure, and therefore
 * event durations, from the pattern that it is combined with.
 * For example `per.struct("1 1 [1 1] 1")` would give the same as `"4 4 [8 8] 4"`.
 * See also its reciprocal, `cyclesPer`.
 * @tags temporal
 * @synonyms perCycle
 * @example
 * // Shorter events are more distorted
 * n("0 0*2 0 0*2 0 [0 0 0]@2").sound("bd")
 *  .distort(per.div(2))
 */
function perCycle(...args): Pattern

/**
 * Like `per` but measures the shortness of events according to an exponential curve. In
 * particular, where the event duration halves, the
 * returned value increases by one. `perx.struct("1 1 [1 [1 1]] 1")` would therefore be
 * the same as `"3 3 [4 [5 5]] 3"`.
 * @tags temporal
 */
function perx(...args): Pattern

/**
 * @deprecated does not appear to be referenced or invoked anywhere in the codebase
 * @noAutocomplete
 */
function getFreq(...args): Pattern

/**
 * @deprecated only used in workshop (first-notes)
 * @noAutocomplete
 */
function midi2note(...args): Pattern

interface Pattern {
	/**
	 * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
	 * separated by ':'.
	 *
	 * @name s
	 * @tags superdough, samples
	 * @param {string | Pattern} sound The sound / pattern of sounds to pick
	 * @synonyms sound
	 * @example
	 * s("bd hh")
	 * @example
	 * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
	 *
	 */
	s(sound): this

	/**
	 * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
	 * separated by ':'.
	 *
	 * @name s
	 * @tags superdough, samples
	 * @param {string | Pattern} sound The sound / pattern of sounds to pick
	 * @synonyms sound
	 * @example
	 * s("bd hh")
	 * @example
	 * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
	 *
	 */
	sound(sound): this

	/**
	 * Position in the wavetable of the wavetable oscillator
	 *
	 * @name wt
	 * @tags wavetable, superdough
	 * @param {number | Pattern} position Position in the wavetable from 0 to 1
	 * @synonyms wavetablePosition
	 * @example
	 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
	 */
	wt(position): this

	/**
	 * Position in the wavetable of the wavetable oscillator
	 *
	 * @name wt
	 * @tags wavetable, superdough
	 * @param {number | Pattern} position Position in the wavetable from 0 to 1
	 * @synonyms wavetablePosition
	 * @example
	 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
	 */
	wavetablePosition(position): this

	/**
	 * Amount of envelope applied wavetable oscillator's position envelope
	 *
	 * @name wtenv
	 * @tags wavetable, envelope, superdough
	 * @param {number | Pattern} amount between 0 and 1
	 */
	wtenv(amount): this

	/**
	 * Attack time of the wavetable oscillator's position envelope
	 *
	 * @name wtattack
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtatt
	 * @param {number | Pattern} time attack time in seconds
	 */
	wtattack(time): this

	/**
	 * Attack time of the wavetable oscillator's position envelope
	 *
	 * @name wtattack
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtatt
	 * @param {number | Pattern} time attack time in seconds
	 */
	wtatt(time): this

	/**
	 * Decay time of the wavetable oscillator's position envelope
	 *
	 * @name wtdecay
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtdec
	 * @param {number | Pattern} time decay time in seconds
	 */
	wtdecay(time): this

	/**
	 * Decay time of the wavetable oscillator's position envelope
	 *
	 * @name wtdecay
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtdec
	 * @param {number | Pattern} time decay time in seconds
	 */
	wtdec(time): this

	/**
	 * Sustain time of the wavetable oscillator's position envelope
	 *
	 * @name wtsustain
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtsus
	 * @param {number | Pattern} gain sustain level (0 to 1)
	 */
	wtsustain(gain): this

	/**
	 * Sustain time of the wavetable oscillator's position envelope
	 *
	 * @name wtsustain
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtsus
	 * @param {number | Pattern} gain sustain level (0 to 1)
	 */
	wtsus(gain): this

	/**
	 * Release time of the wavetable oscillator's position envelope
	 *
	 * @name wtrelease
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtrel
	 * @param {number | Pattern} time release time in seconds
	 */
	wtrelease(time): this

	/**
	 * Release time of the wavetable oscillator's position envelope
	 *
	 * @name wtrelease
	 * @tags wavetable, envelope, superdough
	 * @synonyms wtrel
	 * @param {number | Pattern} time release time in seconds
	 */
	wtrel(time): this

	/**
	 * Rate of the LFO for the wavetable oscillator's position
	 *
	 * @name wtrate
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} rate rate in hertz
	 */
	wtrate(rate): this

	/**
	 * cycle synced rate of the LFO for the wavetable oscillator's position
	 *
	 * @name wtsync
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} rate rate in cycles
	 */
	wtsync(rate): this

	/**
	 * Depth of the LFO for the wavetable oscillator's position
	 *
	 * @name wtdepth
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} depth depth of modulation
	 */
	wtdepth(depth): this

	/**
	 * Shape of the LFO for the wavetable oscillator's position
	 *
	 * @name wtshape
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
	 */
	wtshape(shape): this

	/**
	 * DC offset of the LFO for the wavetable oscillator's position
	 *
	 * @name wtdc
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
	 */
	wtdc(dcoffset): this

	/**
	 * Skew of the LFO for the wavetable oscillator's position
	 *
	 * @name wtskew
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} skew How much to bend the LFO shape
	 */
	wtskew(skew): this

	/**
	 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
	 *
	 * @name warp
	 * @tags wavetable, superdough
	 * @param {number | Pattern} amount Warp of the wavetable from 0 to 1
	 * @synonyms wavetableWarp
	 * @example
	 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
	 *   .warpmode("spin")
	 */
	warp(amount): this

	/**
	 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
	 *
	 * @name warp
	 * @tags wavetable, superdough
	 * @param {number | Pattern} amount Warp of the wavetable from 0 to 1
	 * @synonyms wavetableWarp
	 * @example
	 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
	 *   .warpmode("spin")
	 */
	wavetableWarp(amount): this

	/**
	 * Attack time of the wavetable oscillator's warp envelope
	 *
	 * @name warpattack
	 * @tags wavetable, envelope, superdough
	 * @synonyms warpatt
	 * @param {number | Pattern} time attack time in seconds
	 */
	warpattack(time): this

	/**
	 * Attack time of the wavetable oscillator's warp envelope
	 *
	 * @name warpattack
	 * @tags wavetable, envelope, superdough
	 * @synonyms warpatt
	 * @param {number | Pattern} time attack time in seconds
	 */
	warpatt(time): this

	/**
	 * Decay time of the wavetable oscillator's warp envelope
	 *
	 * @name warpdecay
	 * @tags wavetable, envelope, superdough
	 * @synonyms warpdec
	 * @param {number | Pattern} time decay time in seconds
	 */
	warpdecay(time): this

	/**
	 * Decay time of the wavetable oscillator's warp envelope
	 *
	 * @name warpdecay
	 * @tags wavetable, envelope, superdough
	 * @synonyms warpdec
	 * @param {number | Pattern} time decay time in seconds
	 */
	warpdec(time): this

	/**
	 * Sustain time of the wavetable oscillator's warp envelope
	 *
	 * @name warpsustain
	 * @tags wavetable, envelope, superdough
	 * @synonyms warpsus
	 * @param {number | Pattern} gain sustain level (0 to 1)
	 */
	warpsustain(gain): this

	/**
	 * Sustain time of the wavetable oscillator's warp envelope
	 *
	 * @name warpsustain
	 * @tags wavetable, envelope, superdough
	 * @synonyms warpsus
	 * @param {number | Pattern} gain sustain level (0 to 1)
	 */
	warpsus(gain): this

	/**
	 * Release time of the wavetable oscillator's warp envelope
	 *
	 * @name warprelease
	 * @tags wavetable, envelope, superdough
	 * @synonyms warprel
	 * @param {number | Pattern} time release time in seconds
	 */
	warprelease(time): this

	/**
	 * Release time of the wavetable oscillator's warp envelope
	 *
	 * @name warprelease
	 * @tags wavetable, envelope, superdough
	 * @synonyms warprel
	 * @param {number | Pattern} time release time in seconds
	 */
	warprel(time): this

	/**
	 * Rate of the LFO for the wavetable oscillator's warp
	 *
	 * @name warprate
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} rate rate in hertz
	 */
	warprate(rate): this

	/**
	 * Depth of the LFO for the wavetable oscillator's warp
	 *
	 * @name warpdepth
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} depth depth of modulation
	 */
	warpdepth(depth): this

	/**
	 * Shape of the LFO for the wavetable oscillator's warp
	 *
	 * @name warpshape
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
	 */
	warpshape(shape): this

	/**
	 * DC offset of the LFO for the wavetable oscillator's warp
	 *
	 * @name warpdc
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
	 */
	warpdc(dcoffset): this

	/**
	 * Skew of the LFO for the wavetable oscillator's warp
	 *
	 * @name warpskew
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} skew How much to bend the LFO shape
	 */
	warpskew(skew): this

	/**
	 * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
	 *
	 * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
	 * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
	 *
	 * @name warpmode
	 * @tags wavetable, superdough
	 * @param {number | string | Pattern} mode Warp mode
	 * @synonyms wavetableWarpMode
	 * @example
	 * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
	 *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
	 *
	 */
	warpmode(mode): this

	/**
	 * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
	 *
	 * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
	 * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
	 *
	 * @name warpmode
	 * @tags wavetable, superdough
	 * @param {number | string | Pattern} mode Warp mode
	 * @synonyms wavetableWarpMode
	 * @example
	 * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
	 *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
	 *
	 */
	wavetableWarpMode(mode): this

	/**
	 * Amount of randomness of the initial phase of the wavetable oscillator.
	 *
	 * @name wtphaserand
	 * @tags wavetable, superdough
	 * @param {number | Pattern} amount Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
	 * @synonyms wavetablePhaseRand
	 * @example
	 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
	 *
	 */
	wtphaserand(amount): this

	/**
	 * Amount of randomness of the initial phase of the wavetable oscillator.
	 *
	 * @name wtphaserand
	 * @tags wavetable, superdough
	 * @param {number | Pattern} amount Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
	 * @synonyms wavetablePhaseRand
	 * @example
	 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
	 *
	 */
	wavetablePhaseRand(amount): this

	/**
	 * Amount of envelope applied wavetable oscillator's position envelope
	 *
	 * @name warpenv
	 * @tags wavetable, envelope, superdough
	 * @param {number | Pattern} amount between 0 and 1
	 */
	warpenv(amount): this

	/**
	 * cycle synced rate of the LFO for the wavetable warp position
	 *
	 * @name warpsync
	 * @tags wavetable, lfo, superdough
	 * @param {number | Pattern} rate rate in cycles
	 */
	warpsync(rate): this

	/**
	 * Define a custom webaudio node to use as a sound source.
	 *
	 * @name source
	 * @tags external_io, superdough
	 * @synonyms src
	 * @param {function} getSource
	 * @synonyms src
	 *
	 */
	source(getSource): this

	/**
	 * Define a custom webaudio node to use as a sound source.
	 *
	 * @name source
	 * @tags external_io, superdough
	 * @synonyms src
	 * @param {function} getSource
	 * @synonyms src
	 *
	 */
	src(getSource): this

	/**
	 * Selects the given index:
	 *  - for samples, it picks the sample by index, with wrap around
	 *  - for scales, it picks the scale degree
	 *  - for voicings, it picks the voice index
	 *
	 * @name n
	 * @tags superdough, samples, tonal
	 * @param {number | Pattern} value sample index starting from 0
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").n("<0 1>")
	 */
	n(value): this

	/**
	 * Selects the given degree. Currently used in `xen` and `tune`:
	 *
	 * @name i
	 * @tags tonal
	 * @param {number | Pattern} value
	 * @example
	 * i("0 1 2 3 4 5 6 7").xen("<5edo 10edo 15edo hexany15>")
	 */
	i(value): this

	/**
	 * Plays the given note name or midi number. A note name consists of
	 *
	 * - a letter (a-g or A-G)
	 * - optional accidentals (b or #)
	 * - optional (possibly negative) octave number (0-9). Defaults to 3
	 *
	 * Examples of valid note names: `c`, `bb`, `Bb`, `f#`, `c3`, `A4`, `Eb2`, `c#5`
	 *
	 * You can also use midi numbers instead of note names, where 69 is mapped to A4 440Hz in 12EDO.
	 *
	 * @name note
	 * @tags tonal
	 * @example
	 * note("c a f e")
	 * @example
	 * note("c4 a4 f4 e4")
	 * @example
	 * note("60 69 65 64")
	 * @example
	 * note("fbb1 a#0 cbbb-1 e##-2").sound("saw")
	 */
	note(...args): this

	/**
	 * A pattern of numbers that speed up (or slow down) samples while they play. Currently only supported by osc / superdirt.
	 *
	 * @name accelerate
	 * @tags samples, superdirt
	 * @param {number | Pattern} amount acceleration.
	 * @superdirtOnly
	 * @example
	 * s("sax").accelerate("<0 1 2 4 8 16>").slow(2).osc()
	 *
	 */
	accelerate(amount): this

	/**
	 * Sets the velocity from 0 to 1. Is multiplied together with gain.
	 *
	 * @name velocity
	 * @tags amplitude, superdough, supradough
	 * @synonyms vel
	 * @example
	 * s("hh*8")
	 * .gain(".4!2 1 .4!2 1 .4 1")
	 * .velocity(".4 1")
	 */
	velocity(...args): this

	/**
	 * Sets the velocity from 0 to 1. Is multiplied together with gain.
	 *
	 * @name velocity
	 * @tags amplitude, superdough, supradough
	 * @synonyms vel
	 * @example
	 * s("hh*8")
	 * .gain(".4!2 1 .4!2 1 .4 1")
	 * .velocity(".4 1")
	 */
	vel(...args): this

	/**
	 * Controls the gain by an exponential amount.
	 *
	 * @name gain
	 * @tags amplitude, superdough, supradough
	 * @param {number | Pattern} amount gain.
	 * @example
	 * s("hh*8").gain(".4!2 1 .4!2 1 .4 1").fast(2)
	 *
	 */
	gain(amount): this

	/**
	 * Gain applied after all effects have been processed.
	 *
	 * @name postgain
	 * @tags amplitude, superdough, supradough
	 * @example
	 * s("bd sd [~ bd] sd,hh*8")
	 * .compressor("-20:20:10:.002:.02").postgain(1.5)
	 *
	 */
	postgain(...args): this

	/**
	 * Like `gain`, but linear.
	 *
	 * @name amp
	 * @tags amplitude, superdirt
	 * @param {number | Pattern} amount gain.
	 * @superdirtOnly
	 * @example
	 * s("bd*8").amp(".1*2 .5 .1*2 .5 .1 .5").osc()
	 *
	 */
	amp(amount): this

	/**
	 * Sets the Frequency Modulation Harmonicity Ratio.
	 * Controls the timbre of the sound.
	 * Whole numbers and simple ratios sound more natural,
	 * while decimal numbers and complex ratios sound metallic.
	 *
	 * A number may be added afterwards to control the harmonicity of
	 * any of the 8 individual FMs (e.g. `fmh2`)
	 *
	 * @name fmh
	 * @tags fm, superdough, supradough
	 * @param {number | Pattern} harmonicity
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmh("<1 2 1.5 1.61>")
	 * ._scope()
	 *
	 */
	fmh(harmonicity): this

	/**
	 * Sets the Frequency Modulation of the synth.
	 * Controls the modulation index, which defines the brightness of the sound.
	 *
	 * A number may be added afterwards to control the modulation index of
	 * any of the 8 individual FMs (e.g. `fm3`). Also, FMs may be routed into
	 * each other with matrix commands like `fm13`, which would send `fm1` back into
	 * `fm3`
	 *
	 * @name fmi
	 * @tags fm, superdough, supradough
	 * @param {number | Pattern} brightness modulation index
	 * @synonyms fm
	 * @example
	 * note("c e g b g e")
	 * .fm("<0 1 2 8 32>")
	 * ._scope()
	 * @example
	 * s("sine").note("F1").seg(8)
	 *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
	 *  .fmh(1.06).fmh2(10).fmh3(0.1)
	 *
	 */
	fmi(brightness): this

	/**
	 * Sets the Frequency Modulation of the synth.
	 * Controls the modulation index, which defines the brightness of the sound.
	 *
	 * A number may be added afterwards to control the modulation index of
	 * any of the 8 individual FMs (e.g. `fm3`). Also, FMs may be routed into
	 * each other with matrix commands like `fm13`, which would send `fm1` back into
	 * `fm3`
	 *
	 * @name fmi
	 * @tags fm, superdough, supradough
	 * @param {number | Pattern} brightness modulation index
	 * @synonyms fm
	 * @example
	 * note("c e g b g e")
	 * .fm("<0 1 2 8 32>")
	 * ._scope()
	 * @example
	 * s("sine").note("F1").seg(8)
	 *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
	 *  .fmh(1.06).fmh2(10).fmh3(0.1)
	 *
	 */
	fm(brightness): this

	/**
	 * Ramp type of fm envelope. Exp might be a bit broken..
	 *
	 * A number may be added afterwards to control the envelope of
	 * any of the 8 individual FMs (e.g. `fmenv4`)
	 *
	 * @name fmenv
	 * @tags fm, envelope, superdough, supradough
	 * @param {number | Pattern} type lin | exp
	 * @synonyms fme
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmdecay(.2)
	 * .fmsustain(0)
	 * .fmenv("<exp lin>")
	 * ._scope()
	 *
	 */
	fmenv(type): this

	/**
	 * Ramp type of fm envelope. Exp might be a bit broken..
	 *
	 * A number may be added afterwards to control the envelope of
	 * any of the 8 individual FMs (e.g. `fmenv4`)
	 *
	 * @name fmenv
	 * @tags fm, envelope, superdough, supradough
	 * @param {number | Pattern} type lin | exp
	 * @synonyms fme
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmdecay(.2)
	 * .fmsustain(0)
	 * .fmenv("<exp lin>")
	 * ._scope()
	 *
	 */
	fme(type): this

	/**
	 * Attack time for the FM envelope: time it takes to reach maximum modulation
	 *
	 * A number may be added afterwards to control the attack of the envelope of
	 * any of the 8 individual FMs (e.g. `fmatt5`)
	 *
	 * @name fmattack
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmatt
	 * @param {number | Pattern} time attack time
	 * @synonyms fmatt
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmattack("<0 .05 .1 .2>")
	 * ._scope()
	 *
	 */
	fmattack(time): this

	/**
	 * Attack time for the FM envelope: time it takes to reach maximum modulation
	 *
	 * A number may be added afterwards to control the attack of the envelope of
	 * any of the 8 individual FMs (e.g. `fmatt5`)
	 *
	 * @name fmattack
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmatt
	 * @param {number | Pattern} time attack time
	 * @synonyms fmatt
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmattack("<0 .05 .1 .2>")
	 * ._scope()
	 *
	 */
	fmatt(time): this

	/**
	 * Waveform of the fm modulator
	 *
	 * A number may be added afterwards to control the waveform
	 * any of the 8 individual FMs (e.g. `fmwave6`)
	 *
	 * @name fmwave
	 * @tags fm, superdough, supradough
	 * @param {number | Pattern} wave waveform
	 * @example
	 * n("0 1 2 3".fast(4)).scale("d:minor").s("sine").fmwave("<sine square sawtooth crackle>").fm(4).fmh(2.01)
	 * @example
	 * n("0 1 2 3".fast(4)).chord("<Dm Am F G>").voicing().s("sawtooth").fmwave("brown").fm(.6)
	 *
	 */
	fmwave(wave): this

	/**
	 * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
	 *
	 * A number may be added afterwards to control the decay of the envelope of
	 * any of the 8 individual FMs (e.g. `fmdec6`)
	 *
	 * @name fmdecay
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmdec
	 * @param {number | Pattern} time decay time
	 * @synonyms fmdec
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmdecay("<.01 .05 .1 .2>")
	 * .fmsustain(.4)
	 * ._scope()
	 *
	 */
	fmdecay(time): this

	/**
	 * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
	 *
	 * A number may be added afterwards to control the decay of the envelope of
	 * any of the 8 individual FMs (e.g. `fmdec6`)
	 *
	 * @name fmdecay
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmdec
	 * @param {number | Pattern} time decay time
	 * @synonyms fmdec
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmdecay("<.01 .05 .1 .2>")
	 * .fmsustain(.4)
	 * ._scope()
	 *
	 */
	fmdec(time): this

	/**
	 * Sustain level for the FM envelope: how much modulation is applied after the decay phase
	 *
	 * A number may be added afterwards to control the sustain of the envelope of
	 * any of the 8 individual FMs (e.g. `fmsus7`)
	 *
	 * @name fmsustain
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmsus
	 * @param {number | Pattern} level sustain level
	 * @synonyms fmsus
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmdecay(.1)
	 * .fmsustain("<1 .75 .5 0>")
	 * ._scope()
	 *
	 */
	fmsustain(level): this

	/**
	 * Sustain level for the FM envelope: how much modulation is applied after the decay phase
	 *
	 * A number may be added afterwards to control the sustain of the envelope of
	 * any of the 8 individual FMs (e.g. `fmsus7`)
	 *
	 * @name fmsustain
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmsus
	 * @param {number | Pattern} level sustain level
	 * @synonyms fmsus
	 * @example
	 * note("c e g b g e")
	 * .fm(4)
	 * .fmdecay(.1)
	 * .fmsustain("<1 .75 .5 0>")
	 * ._scope()
	 *
	 */
	fmsus(level): this

	/**
	 * Release time for the FM envelope: how much modulation is applied after the note is released
	 *
	 * A number may be added afterwards to control the release of the envelope of
	 * any of the 8 individual FMs (e.g. `fmrel8`)
	 *
	 * @name fmrelease
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmrel
	 * @param {number | Pattern} time release time
	 *
	 */
	fmrelease(time): this

	/**
	 * Release time for the FM envelope: how much modulation is applied after the note is released
	 *
	 * A number may be added afterwards to control the release of the envelope of
	 * any of the 8 individual FMs (e.g. `fmrel8`)
	 *
	 * @name fmrelease
	 * @tags fm, envelope, superdough, supradough
	 * @synonyms fmrel
	 * @param {number | Pattern} time release time
	 *
	 */
	fmrel(time): this

	/**
	 * Select the sound bank to use. To be used together with `s`. The bank name (+ "_") will be prepended to the value of `s`.
	 *
	 * @name bank
	 * @tags samples, superdough
	 * @param {string | Pattern} bank the name of the bank
	 * @example
	 * s("bd sd [~ bd] sd").bank('RolandTR909') // = s("RolandTR909_bd RolandTR909_sd")
	 *
	 */
	bank(bank): this

	/**
	 * mix control for the chorus effect
	 *
	 * @name chorus
	 * @tags pitch
	 * @param {string | Pattern} chorus mix amount between 0 and 1
	 * @example
	 * note("d d a# a").s("sawtooth").chorus(.5)
	 *
	 */
	chorus(chorus): this

	/**
	 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
	 *
	 * @name attack
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} attack time in seconds.
	 * @synonyms att
	 * @example
	 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
	 *
	 */
	attack(attack): this

	/**
	 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
	 *
	 * @name attack
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} attack time in seconds.
	 * @synonyms att
	 * @example
	 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
	 *
	 */
	att(attack): this

	/**
	 * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
	 * Note that the decay is only audible if the sustain value is lower than 1.
	 *
	 * @name decay
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} time decay time in seconds
	 * @synonyms dec
	 * @example
	 * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
	 *
	 */
	decay(time): this

	/**
	 * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
	 * Note that the decay is only audible if the sustain value is lower than 1.
	 *
	 * @name decay
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} time decay time in seconds
	 * @synonyms dec
	 * @example
	 * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
	 *
	 */
	dec(time): this

	/**
	 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
	 *
	 * @name sustain
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} gain sustain level between 0 and 1
	 * @synonyms sus
	 * @example
	 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
	 *
	 */
	sustain(gain): this

	/**
	 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
	 *
	 * @name sustain
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} gain sustain level between 0 and 1
	 * @synonyms sus
	 * @example
	 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
	 *
	 */
	sus(gain): this

	/**
	 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
	 *
	 * @name release
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} time release time in seconds
	 * @synonyms rel
	 * @example
	 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
	 *
	 */
	release(time): this

	/**
	 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
	 *
	 * @name release
	 * @tags amplitude, envelope, superdough, supradough
	 * @param {number | Pattern} time release time in seconds
	 * @synonyms rel
	 * @example
	 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
	 *
	 */
	rel(time): this

	/**
	 * Sets the center frequency of the **b**and-**p**ass **f**ilter. When using mininotation, you
	 * can also optionally supply the 'bpq' parameter separated by ':'.
	 *
	 * @name bpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency center frequency
	 * @synonyms bandf, bp
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
	 *
	 */
	bpf(frequency): this

	/**
	 * Sets the center frequency of the **b**and-**p**ass **f**ilter. When using mininotation, you
	 * can also optionally supply the 'bpq' parameter separated by ':'.
	 *
	 * @name bpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency center frequency
	 * @synonyms bandf, bp
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
	 *
	 */
	bandf(frequency): this

	/**
	 * Sets the center frequency of the **b**and-**p**ass **f**ilter. When using mininotation, you
	 * can also optionally supply the 'bpq' parameter separated by ':'.
	 *
	 * @name bpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency center frequency
	 * @synonyms bandf, bp
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
	 *
	 */
	bp(frequency): this

	/**
	 * Sets the **b**and-**p**ass **q**-factor (resonance).
	 *
	 * @name bpq
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} q q factor
	 * @synonyms bandq
	 * @example
	 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
	 *
	 */
	bpq(q): this

	/**
	 * Sets the **b**and-**p**ass **q**-factor (resonance).
	 *
	 * @name bpq
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} q q factor
	 * @synonyms bandq
	 * @example
	 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
	 *
	 */
	bandq(q): this

	/**
	 * A pattern of numbers from 0 to 1. Skips the beginning of each sample, e.g. `0.25` to cut off the first quarter from each sample.
	 *
	 * @name begin
	 * @tags samples
	 * @param {number | Pattern} amount between 0 and 1, where 1 is the length of the sample
	 * @example
	 * samples({ rave: 'rave/AREUREADY.wav' }, 'github:tidalcycles/dirt-samples')
	 * s("rave").begin("<0 .25 .5 .75>").fast(2)
	 *
	 */
	begin(amount): this

	/**
	 * The same as .begin, but cuts off the end off each sample.
	 *
	 * @memberof Pattern
	 * @name end
	 * @tags samples
	 * @param {number | Pattern} length 1 = whole sample, .5 = half sample, .25 = quarter sample etc..
	 * @example
	 * s("bd*2,oh*4").end("<.1 .2 .5 1>").fast(2)
	 *
	 */
	end(length): this

	/**
	 * Loops the sample.
	 * Note that the tempo of the loop is not synced with the cycle tempo.
	 * To change the loop region, use loopBegin / loopEnd.
	 *
	 * @name loop
	 * @tags samples
	 * @param {number | Pattern} on If 1, the sample is looped
	 * @example
	 * s("casio").loop(1)
	 *
	 */
	loop(on): this

	/**
	 * Begin to loop at a specific point in the sample (inbetween `begin` and `end`).
	 * Note that the loop point must be inbetween `begin` and `end`, and before `loopEnd`!
	 * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
	 *
	 * @name loopBegin
	 * @tags samples
	 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
	 * @synonyms loopb
	 * @example
	 * s("space").loop(1)
	 * .loopBegin("<0 .125 .25>")._scope()
	 */
	loopBegin(time): this

	/**
	 * Begin to loop at a specific point in the sample (inbetween `begin` and `end`).
	 * Note that the loop point must be inbetween `begin` and `end`, and before `loopEnd`!
	 * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
	 *
	 * @name loopBegin
	 * @tags samples
	 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
	 * @synonyms loopb
	 * @example
	 * s("space").loop(1)
	 * .loopBegin("<0 .125 .25>")._scope()
	 */
	loopb(time): this

	/**
	 *
	 * End the looping section at a specific point in the sample (inbetween `begin` and `end`).
	 * Note that the loop point must be inbetween `begin` and `end`, and after `loopBegin`!
	 *
	 * @name loopEnd
	 * @tags samples
	 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
	 * @synonyms loope
	 * @example
	 * s("space").loop(1)
	 * .loopEnd("<1 .75 .5 .25>")._scope()
	 */
	loopEnd(time): this

	/**
	 *
	 * End the looping section at a specific point in the sample (inbetween `begin` and `end`).
	 * Note that the loop point must be inbetween `begin` and `end`, and after `loopBegin`!
	 *
	 * @name loopEnd
	 * @tags samples
	 * @param {number | Pattern} time between 0 and 1, where 1 is the length of the sample
	 * @synonyms loope
	 * @example
	 * s("space").loop(1)
	 * .loopEnd("<1 .75 .5 .25>")._scope()
	 */
	loope(time): this

	/**
	 * Bit crusher effect.
	 *
	 * @name crush
	 * @tags superdough, supradough
	 * @param {number | Pattern} depth between 1 (for drastic reduction in bit-depth) to 16 (for barely no reduction).
	 * @example
	 * s("<bd sd>,hh*3").fast(2).crush("<16 8 7 6 5 4 3 2>")
	 *
	 */
	crush(depth): this

	/**
	 * Fake-resampling for lowering the sample rate. Caution: This effect seems to only work in chromium based browsers
	 *
	 * @name coarse
	 * @tags superdough, supradough
	 * @param {number | Pattern} factor 1 for original 2 for half, 3 for a third and so on.
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").coarse("<1 4 8 16 32>")
	 *
	 */
	coarse(factor): this

	/**
	 * Modulate the amplitude of a sound with a continuous waveform
	 *
	 * @name tremolo
	 * @tags amplitude, lfo, superdough
	 * @synonyms trem
	 * @param {number | Pattern} speed modulation speed in HZ
	 * @example
	 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
	 *
	 */
	tremolo(speed): this

	/**
	 * Modulate the amplitude of a sound with a continuous waveform
	 *
	 * @name tremolo
	 * @tags amplitude, lfo, superdough
	 * @synonyms trem
	 * @param {number | Pattern} speed modulation speed in HZ
	 * @example
	 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
	 *
	 */
	trem(speed): this

	/**
	 * Modulate the amplitude of a sound with a continuous waveform
	 *
	 * @name tremolosync
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremsync
	 * @param {number | Pattern} cycles modulation speed in cycles
	 * @example
	 * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
	 *
	 */
	tremolosync(cycles): this

	/**
	 * Modulate the amplitude of a sound with a continuous waveform
	 *
	 * @name tremolosync
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremsync
	 * @param {number | Pattern} cycles modulation speed in cycles
	 * @example
	 * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
	 *
	 */
	tremsync(cycles): this

	/**
	 * Depth of amplitude modulation
	 *
	 * @name tremolodepth
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremdepth
	 * @param {number | Pattern} depth
	 * @example
	 * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
	 *
	 */
	tremolodepth(depth): this

	/**
	 * Depth of amplitude modulation
	 *
	 * @name tremolodepth
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremdepth
	 * @param {number | Pattern} depth
	 * @example
	 * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
	 *
	 */
	tremdepth(depth): this

	/**
	 * Alter the shape of the modulation waveform
	 *
	 * @name tremoloskew
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremskew
	 * @param {number | Pattern} amount between 0 & 1, the shape of the waveform
	 * @example
	 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
	 *
	 */
	tremoloskew(amount): this

	/**
	 * Alter the shape of the modulation waveform
	 *
	 * @name tremoloskew
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremskew
	 * @param {number | Pattern} amount between 0 & 1, the shape of the waveform
	 * @example
	 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
	 *
	 */
	tremskew(amount): this

	/**
	 * Alter the phase of the modulation waveform
	 *
	 * @name tremolophase
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremphase
	 * @param {number | Pattern} offset the offset in cycles of the modulation
	 * @example
	 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
	 *
	 */
	tremolophase(offset): this

	/**
	 * Alter the phase of the modulation waveform
	 *
	 * @name tremolophase
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremphase
	 * @param {number | Pattern} offset the offset in cycles of the modulation
	 * @example
	 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
	 *
	 */
	tremphase(offset): this

	/**
	 * Shape of amplitude modulation
	 *
	 * @name tremoloshape
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremshape
	 * @param {number | Pattern} shape tri | square | sine | saw | ramp
	 * @example
	 * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
	 *
	 */
	tremoloshape(shape): this

	/**
	 * Shape of amplitude modulation
	 *
	 * @name tremoloshape
	 * @tags amplitude, lfo, superdough
	 * @synonyms tremshape
	 * @param {number | Pattern} shape tri | square | sine | saw | ramp
	 * @example
	 * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
	 *
	 */
	tremshape(shape): this

	/**
	 * Filter overdrive for supported filter types
	 *
	 * @name drive
	 * @tags filter, superdough
	 * @param {number | Pattern} amount
	 * @example
	 * note("{f g g c d a a#}%16".sub(17)).s("supersaw").lpenv(8).lpf(150).lpq(.8).ftype('ladder').drive("<.5 4>")
	 *
	 */
	drive(amount): this

	/**
	 * Modulate the amplitude of an orbit to create a "sidechain" like effect.
	 *
	 * Can be applied to multiple orbits with the ':' mininotation, e.g. `duckorbit("2:3")`
	 *
	 * @name duckorbit
	 * @tags amplitude, orbit, superdough
	 * @synonyms duck
	 * @param {number | Pattern} orbit target orbit
	 * @example
	 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
	 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1)
	 * @example
	 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
	 * $: s("hh*16").orbit(3)
	 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth(1)
	 *
	 */
	duckorbit(orbit): this

	/**
	 * Modulate the amplitude of an orbit to create a "sidechain" like effect.
	 *
	 * Can be applied to multiple orbits with the ':' mininotation, e.g. `duckorbit("2:3")`
	 *
	 * @name duckorbit
	 * @tags amplitude, orbit, superdough
	 * @synonyms duck
	 * @param {number | Pattern} orbit target orbit
	 * @example
	 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
	 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1)
	 * @example
	 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
	 * $: s("hh*16").orbit(3)
	 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth(1)
	 *
	 */
	duck(orbit): this

	/**
	 * The amount of ducking applied to target orbit
	 *
	 * Can vary across orbits with the ':' mininotation, e.g. `duckdepth("0.3:0.1")`.
	 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
	 *
	 * @name duckdepth
	 * @tags amplitude, orbit, superdough
	 * @param {number | Pattern} depth depth of modulation from 0 to 1
	 * @example
	 * stack( n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2), s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth("<1 .9 .6 0>"))
	 * @example
	 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
	 * $: s("hh*16").orbit(3)
	 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth("1:0.5")
	 *
	 */
	duckdepth(depth): this

	/**
	 * The time required for the ducked signal(s) to reach their lowest volume.
	 * Can be used to prevent clicking or for creative rhythmic effects.
	 *
	 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
	 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
	 *
	 * @name duckonset
	 * @tags amplitude, envelope, orbit, superdough
	 * @synonyms duckons
	 *
	 * @param {number | Pattern} time The onset time in seconds
	 * @example
	 * // Clicks
	 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
	 * duckerWithClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0).postgain(0)
	 * @example
	 * // No clicks
	 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
	 * duckerWithoutClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0.01).postgain(0)
	 * @example
	 * // Rhythmic
	 * noise: s("pink").distort("2:1").orbit(4) // used rhythmically with 0.3 onset below
	 * hhat: s("hh*16").orbit(7)
	 * ducker: s("bd*4").bank("tr909").duckorbit("4:7").duckonset("0.3:0.003").duckattack(0.25)
	 *
	 */
	duckonset(time): this

	/**
	 * The time required for the ducked signal(s) to reach their lowest volume.
	 * Can be used to prevent clicking or for creative rhythmic effects.
	 *
	 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
	 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
	 *
	 * @name duckonset
	 * @tags amplitude, envelope, orbit, superdough
	 * @synonyms duckons
	 *
	 * @param {number | Pattern} time The onset time in seconds
	 * @example
	 * // Clicks
	 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
	 * duckerWithClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0).postgain(0)
	 * @example
	 * // No clicks
	 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
	 * duckerWithoutClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0.01).postgain(0)
	 * @example
	 * // Rhythmic
	 * noise: s("pink").distort("2:1").orbit(4) // used rhythmically with 0.3 onset below
	 * hhat: s("hh*16").orbit(7)
	 * ducker: s("bd*4").bank("tr909").duckorbit("4:7").duckonset("0.3:0.003").duckattack(0.25)
	 *
	 */
	duckons(time): this

	/**
	 * The time required for the ducked signal(s) to return to their normal volume.
	 *
	 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
	 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
	 *
	 * @name duckattack
	 * @tags amplitude, envelope, orbit, superdough
	 * @synonyms duckatt, datt
	 *
	 * @param {number | Pattern} time The attack time in seconds
	 * @example
	 * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
	 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
	 * @example
	 * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
	 * lessduck: s("hh*16").orbit(5)
	 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
	 *
	 */
	duckattack(time): this

	/**
	 * The time required for the ducked signal(s) to return to their normal volume.
	 *
	 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
	 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
	 *
	 * @name duckattack
	 * @tags amplitude, envelope, orbit, superdough
	 * @synonyms duckatt, datt
	 *
	 * @param {number | Pattern} time The attack time in seconds
	 * @example
	 * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
	 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
	 * @example
	 * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
	 * lessduck: s("hh*16").orbit(5)
	 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
	 *
	 */
	duckatt(time): this

	/**
	 * The time required for the ducked signal(s) to return to their normal volume.
	 *
	 * Can vary across orbits with the ':' mininotation, e.g. `duckonset("0:0.003")`.
	 * Note: this requires first applying the effect to multiple orbits with e.g. `duckorbit("2:3")`.
	 *
	 * @name duckattack
	 * @tags amplitude, envelope, orbit, superdough
	 * @synonyms duckatt, datt
	 *
	 * @param {number | Pattern} time The attack time in seconds
	 * @example
	 * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
	 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
	 * @example
	 * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
	 * lessduck: s("hh*16").orbit(5)
	 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
	 *
	 */
	datt(time): this

	/**
	 * Create byte beats with custom expressions
	 *
	 * @name byteBeatExpression
	 * @synonyms bbexpr, bb
	 * @tags superdough
	 *
	 * @param {number | Pattern} byteBeatExpression bitwise expression for creating bytebeat
	 * @example
	 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
	 *
	 */
	byteBeatExpression(byteBeatExpression): this

	/**
	 * Create byte beats with custom expressions
	 *
	 * @name byteBeatExpression
	 * @synonyms bbexpr, bb
	 * @tags superdough
	 *
	 * @param {number | Pattern} byteBeatExpression bitwise expression for creating bytebeat
	 * @example
	 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
	 *
	 */
	bbexpr(byteBeatExpression): this

	/**
	 * Create byte beats with custom expressions
	 *
	 * @name byteBeatExpression
	 * @synonyms bbexpr, bb
	 * @tags superdough
	 *
	 * @param {number | Pattern} byteBeatExpression bitwise expression for creating bytebeat
	 * @example
	 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
	 *
	 */
	bb(byteBeatExpression): this

	/**
	 * Create byte beats with custom expressions
	 *
	 * @name byteBeatStartTime
	 * @synonyms bbst
	 * @tags superdough
	 *
	 * @param {number | Pattern} byteBeatStartTime in samples (t)
	 * @example
	 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
	 *
	 */
	byteBeatStartTime(byteBeatStartTime): this

	/**
	 * Create byte beats with custom expressions
	 *
	 * @name byteBeatStartTime
	 * @synonyms bbst
	 * @tags superdough
	 *
	 * @param {number | Pattern} byteBeatStartTime in samples (t)
	 * @example
	 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
	 *
	 */
	bbst(byteBeatStartTime): this

	/**
	 * Allows you to set the output channels on the interface
	 *
	 * @name channels
	 * @tags external_io, superdough
	 * @synonyms ch
	 *
	 * @param {number | Pattern} channels pattern the output channels
	 * @example
	 * note("e a d b g").channels("3:4")
	 *
	 */
	channels(channels): this

	/**
	 * Allows you to set the output channels on the interface
	 *
	 * @name channels
	 * @tags external_io, superdough
	 * @synonyms ch
	 *
	 * @param {number | Pattern} channels pattern the output channels
	 * @example
	 * note("e a d b g").channels("3:4")
	 *
	 */
	ch(channels): this

	/**
	 * Controls the pulsewidth of the pulse oscillator
	 *
	 * @name pw
	 * @tags superdough
	 * @param {number | Pattern} pulsewidth
	 * @example
	 * note("{f a c e}%16").s("pulse").pw(".8:1:.2")
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0 .75 .5 1")
	 */
	pw(pulsewidth): this

	/**
	 * Controls the lfo rate for the pulsewidth of the pulse oscillator
	 *
	 * @name pwrate
	 * @synonyms pwr
	 * @tags superdough, lfo
	 * @param {number | Pattern} rate
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
	
	 *
	 */
	pwrate(rate): this

	/**
	 * Controls the lfo rate for the pulsewidth of the pulse oscillator
	 *
	 * @name pwrate
	 * @synonyms pwr
	 * @tags superdough, lfo
	 * @param {number | Pattern} rate
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
	
	 *
	 */
	pwr(rate): this

	/**
	 * Controls the lfo sweep for the pulsewidth of the pulse oscillator
	 *
	 * @name pwsweep
	 * @synonyms pws
	 * @tags superdough, lfo
	 * @param {number | Pattern} sweep
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
	 *
	 */
	pwsweep(sweep): this

	/**
	 * Controls the lfo sweep for the pulsewidth of the pulse oscillator
	 *
	 * @name pwsweep
	 * @synonyms pws
	 * @tags superdough, lfo
	 * @param {number | Pattern} sweep
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
	 *
	 */
	pws(sweep): this

	/**
	 * Phaser audio effect that approximates popular guitar pedals.
	 *
	 * @name phaser
	 * @tags superdough
	 * @synonyms ph
	 * @param {number | Pattern} speed speed of modulation
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser("<1 2 4 8>")
	 *
	 */
	phaser(speed): this

	/**
	 * Phaser audio effect that approximates popular guitar pedals.
	 *
	 * @name phaser
	 * @tags superdough
	 * @synonyms ph
	 * @param {number | Pattern} speed speed of modulation
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser("<1 2 4 8>")
	 *
	 */
	ph(speed): this

	/**
	 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
	 *
	 * @name phasersweep
	 * @tags superdough, lfo
	 * @synonyms phs
	 * @param {number | Pattern} phasersweep most useful values are between 0 and 4000
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser(2).phasersweep("<800 2000 4000>")
	 *
	 */
	phasersweep(phasersweep): this

	/**
	 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
	 *
	 * @name phasersweep
	 * @tags superdough, lfo
	 * @synonyms phs
	 * @param {number | Pattern} phasersweep most useful values are between 0 and 4000
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser(2).phasersweep("<800 2000 4000>")
	 *
	 */
	phs(phasersweep): this

	/**
	 * The center frequency of the phaser in HZ. Defaults to 1000
	 *
	 * @name phasercenter
	 * @tags superdough
	 * @synonyms phc
	 * @param {number | Pattern} centerfrequency in HZ
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser(2).phasercenter("<800 2000 4000>")
	 *
	 */
	phasercenter(centerfrequency): this

	/**
	 * The center frequency of the phaser in HZ. Defaults to 1000
	 *
	 * @name phasercenter
	 * @tags superdough
	 * @synonyms phc
	 * @param {number | Pattern} centerfrequency in HZ
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser(2).phasercenter("<800 2000 4000>")
	 *
	 */
	phc(centerfrequency): this

	/**
	 * The amount the signal is affected by the phaser effect. Defaults to 0.75
	 *
	 * @name phaserdepth
	 * @tags superdough, superdirt
	 * @synonyms phd, phasdp
	 * @param {number | Pattern} depth number between 0 and 1
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser(2).phaserdepth("<0 .5 .75 1>")
	 *
	 */
	phaserdepth(depth): this

	/**
	 * The amount the signal is affected by the phaser effect. Defaults to 0.75
	 *
	 * @name phaserdepth
	 * @tags superdough, superdirt
	 * @synonyms phd, phasdp
	 * @param {number | Pattern} depth number between 0 and 1
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser(2).phaserdepth("<0 .5 .75 1>")
	 *
	 */
	phd(depth): this

	/**
	 * The amount the signal is affected by the phaser effect. Defaults to 0.75
	 *
	 * @name phaserdepth
	 * @tags superdough, superdirt
	 * @synonyms phd, phasdp
	 * @param {number | Pattern} depth number between 0 and 1
	 * @example
	 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
	 * .phaser(2).phaserdepth("<0 .5 .75 1>")
	 *
	 */
	phasdp(depth): this

	/**
	 * Choose the channel the pattern is sent to
	 *
	 * @name channel
	 * @tags superdough
	 * @param {number | Pattern} channel channel number
	 *
	 */
	channel(channel): this

	/**
	 * In the style of classic drum-machines, `cut` will stop a playing sample as soon as another samples with in same cutgroup is to be played. An example would be an open hi-hat followed by a closed one, essentially muting the open.
	 *
	 * @name cut
	 * @tags superdough
	 * @param {number | Pattern} group cut group number
	 * @example
	 * s("[oh hh]*4").cut(1)
	 *
	 */
	cut(group): this

	/**
	 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
	 *
	 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
	 *
	 * @name lpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency audible between 0 and 20000
	 * @synonyms cutoff, ctf, lp
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
	 * @example
	 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
	 *
	 */
	lpf(frequency): this

	/**
	 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
	 *
	 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
	 *
	 * @name lpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency audible between 0 and 20000
	 * @synonyms cutoff, ctf, lp
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
	 * @example
	 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
	 *
	 */
	cutoff(frequency): this

	/**
	 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
	 *
	 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
	 *
	 * @name lpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency audible between 0 and 20000
	 * @synonyms cutoff, ctf, lp
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
	 * @example
	 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
	 *
	 */
	ctf(frequency): this

	/**
	 * Applies the cutoff frequency of the **l**ow-**p**ass **f**ilter.
	 *
	 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
	 *
	 * @name lpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency audible between 0 and 20000
	 * @synonyms cutoff, ctf, lp
	 * @example
	 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
	 * @example
	 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
	 *
	 */
	lp(frequency): this

	/**
	 * Sets the lowpass filter envelope modulation depth.
	 * @name lpenv
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} modulation depth of the lowpass filter envelope between 0 and _n_
	 * @synonyms lpe
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpa(.5)
	 * .lpenv("<4 2 1 0 -1 -2 -4>/4")
	 */
	lpenv(modulation): this

	/**
	 * Sets the lowpass filter envelope modulation depth.
	 * @name lpenv
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} modulation depth of the lowpass filter envelope between 0 and _n_
	 * @synonyms lpe
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpa(.5)
	 * .lpenv("<4 2 1 0 -1 -2 -4>/4")
	 */
	lpe(modulation): this

	/**
	 * Sets the highpass filter envelope modulation depth.
	 * @name hpenv
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} modulation depth of the highpass filter envelope between 0 and _n_
	 * @synonyms hpe
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpa(.5)
	 * .hpenv("<4 2 1 0 -1 -2 -4>/4")
	 */
	hpenv(modulation): this

	/**
	 * Sets the highpass filter envelope modulation depth.
	 * @name hpenv
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} modulation depth of the highpass filter envelope between 0 and _n_
	 * @synonyms hpe
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpa(.5)
	 * .hpenv("<4 2 1 0 -1 -2 -4>/4")
	 */
	hpe(modulation): this

	/**
	 * Sets the bandpass filter envelope modulation depth.
	 * @name bpenv
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} modulation depth of the bandpass filter envelope between 0 and _n_
	 * @synonyms bpe
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpa(.5)
	 * .bpenv("<4 2 1 0 -1 -2 -4>/4")
	 */
	bpenv(modulation): this

	/**
	 * Sets the bandpass filter envelope modulation depth.
	 * @name bpenv
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} modulation depth of the bandpass filter envelope between 0 and _n_
	 * @synonyms bpe
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpa(.5)
	 * .bpenv("<4 2 1 0 -1 -2 -4>/4")
	 */
	bpe(modulation): this

	/**
	 * Sets the attack duration for the lowpass filter envelope.
	 * @name lpattack
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} attack time of the filter envelope
	 * @synonyms lpa
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpa("<.5 .25 .1 .01>/4")
	 * .lpenv(4)
	 */
	lpattack(attack): this

	/**
	 * Sets the attack duration for the lowpass filter envelope.
	 * @name lpattack
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} attack time of the filter envelope
	 * @synonyms lpa
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpa("<.5 .25 .1 .01>/4")
	 * .lpenv(4)
	 */
	lpa(attack): this

	/**
	 * Sets the attack duration for the highpass filter envelope.
	 * @name hpattack
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} attack time of the highpass filter envelope
	 * @synonyms hpa
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpa("<.5 .25 .1 .01>/4")
	 * .hpenv(4)
	 */
	hpattack(attack): this

	/**
	 * Sets the attack duration for the highpass filter envelope.
	 * @name hpattack
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} attack time of the highpass filter envelope
	 * @synonyms hpa
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpa("<.5 .25 .1 .01>/4")
	 * .hpenv(4)
	 */
	hpa(attack): this

	/**
	 * Sets the attack duration for the bandpass filter envelope.
	 * @name bpattack
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} attack time of the bandpass filter envelope
	 * @synonyms bpa
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpa("<.5 .25 .1 .01>/4")
	 * .bpenv(4)
	 */
	bpattack(attack): this

	/**
	 * Sets the attack duration for the bandpass filter envelope.
	 * @name bpattack
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} attack time of the bandpass filter envelope
	 * @synonyms bpa
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpa("<.5 .25 .1 .01>/4")
	 * .bpenv(4)
	 */
	bpa(attack): this

	/**
	 * Sets the decay duration for the lowpass filter envelope.
	 * @name lpdecay
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} decay time of the filter envelope
	 * @synonyms lpd
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpd("<.5 .25 .1 0>/4")
	 * .lpenv(4)
	 */
	lpdecay(decay): this

	/**
	 * Sets the decay duration for the lowpass filter envelope.
	 * @name lpdecay
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} decay time of the filter envelope
	 * @synonyms lpd
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpd("<.5 .25 .1 0>/4")
	 * .lpenv(4)
	 */
	lpd(decay): this

	/**
	 * Sets the decay duration for the highpass filter envelope.
	 * @name hpdecay
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} decay time of the highpass filter envelope
	 * @synonyms hpd
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpd("<.5 .25 .1 0>/4")
	 * .hps(0.2)
	 * .hpenv(4)
	 */
	hpdecay(decay): this

	/**
	 * Sets the decay duration for the highpass filter envelope.
	 * @name hpdecay
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} decay time of the highpass filter envelope
	 * @synonyms hpd
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpd("<.5 .25 .1 0>/4")
	 * .hps(0.2)
	 * .hpenv(4)
	 */
	hpd(decay): this

	/**
	 * Sets the decay duration for the bandpass filter envelope.
	 * @name bpdecay
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} decay time of the bandpass filter envelope
	 * @synonyms bpd
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpd("<.5 .25 .1 0>/4")
	 * .bps(0.2)
	 * .bpenv(4)
	 */
	bpdecay(decay): this

	/**
	 * Sets the decay duration for the bandpass filter envelope.
	 * @name bpdecay
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} decay time of the bandpass filter envelope
	 * @synonyms bpd
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpd("<.5 .25 .1 0>/4")
	 * .bps(0.2)
	 * .bpenv(4)
	 */
	bpd(decay): this

	/**
	 * Sets the sustain amplitude for the lowpass filter envelope.
	 * @name lpsustain
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} sustain amplitude of the lowpass filter envelope
	 * @synonyms lps
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpd(.5)
	 * .lps("<0 .25 .5 1>/4")
	 * .lpenv(4)
	 */
	lpsustain(sustain): this

	/**
	 * Sets the sustain amplitude for the lowpass filter envelope.
	 * @name lpsustain
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} sustain amplitude of the lowpass filter envelope
	 * @synonyms lps
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .lpf(300)
	 * .lpd(.5)
	 * .lps("<0 .25 .5 1>/4")
	 * .lpenv(4)
	 */
	lps(sustain): this

	/**
	 * Sets the sustain amplitude for the highpass filter envelope.
	 * @name hpsustain
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} sustain amplitude of the highpass filter envelope
	 * @synonyms hps
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpd(.5)
	 * .hps("<0 .25 .5 1>/4")
	 * .hpenv(4)
	 */
	hpsustain(sustain): this

	/**
	 * Sets the sustain amplitude for the highpass filter envelope.
	 * @name hpsustain
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} sustain amplitude of the highpass filter envelope
	 * @synonyms hps
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .hpf(500)
	 * .hpd(.5)
	 * .hps("<0 .25 .5 1>/4")
	 * .hpenv(4)
	 */
	hps(sustain): this

	/**
	 * Sets the sustain amplitude for the bandpass filter envelope.
	 * @name bpsustain
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} sustain amplitude of the bandpass filter envelope
	 * @synonyms bps
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpd(.5)
	 * .bps("<0 .25 .5 1>/4")
	 * .bpenv(4)
	 */
	bpsustain(sustain): this

	/**
	 * Sets the sustain amplitude for the bandpass filter envelope.
	 * @name bpsustain
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} sustain amplitude of the bandpass filter envelope
	 * @synonyms bps
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .bpf(500)
	 * .bpd(.5)
	 * .bps("<0 .25 .5 1>/4")
	 * .bpenv(4)
	 */
	bps(sustain): this

	/**
	 * Sets the release time for the lowpass filter envelope.
	 * @name lprelease
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} release time of the filter envelope
	 * @synonyms lpr
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .clip(.5)
	 * .lpf(300)
	 * .lpenv(4)
	 * .lpr("<.5 .25 .1 0>/4")
	 * .release(.5)
	 */
	lprelease(release): this

	/**
	 * Sets the release time for the lowpass filter envelope.
	 * @name lprelease
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} release time of the filter envelope
	 * @synonyms lpr
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .clip(.5)
	 * .lpf(300)
	 * .lpenv(4)
	 * .lpr("<.5 .25 .1 0>/4")
	 * .release(.5)
	 */
	lpr(release): this

	/**
	 * Sets the release time for the highpass filter envelope.
	 * @name hprelease
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} release time of the highpass filter envelope
	 * @synonyms hpr
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .clip(.5)
	 * .hpf(500)
	 * .hpenv(4)
	 * .hpr("<.5 .25 .1 0>/4")
	 * .release(.5)
	 */
	hprelease(release): this

	/**
	 * Sets the release time for the highpass filter envelope.
	 * @name hprelease
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} release time of the highpass filter envelope
	 * @synonyms hpr
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .clip(.5)
	 * .hpf(500)
	 * .hpenv(4)
	 * .hpr("<.5 .25 .1 0>/4")
	 * .release(.5)
	 */
	hpr(release): this

	/**
	 * Sets the release time for the bandpass filter envelope.
	 * @name bprelease
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} release time of the bandpass filter envelope
	 * @synonyms bpr
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .clip(.5)
	 * .bpf(500)
	 * .bpenv(4)
	 * .bpr("<.5 .25 .1 0>/4")
	 * .release(.5)
	 */
	bprelease(release): this

	/**
	 * Sets the release time for the bandpass filter envelope.
	 * @name bprelease
	 * @tags filter, envelope, superdough, supradough
	 * @param {number | Pattern} release time of the bandpass filter envelope
	 * @synonyms bpr
	 * @example
	 * note("c2 e2 f2 g2")
	 * .sound('sawtooth')
	 * .clip(.5)
	 * .bpf(500)
	 * .bpenv(4)
	 * .bpr("<.5 .25 .1 0>/4")
	 * .release(.5)
	 */
	bpr(release): this

	/**
	 * Sets the filter type. The ladder filter is more aggressive. More types might be added in the future.
	 * @name ftype
	 * @tags filter, superdough
	 * @param {number | Pattern} type 12db (0), ladder (1), or 24db (2)
	 * @example
	 * note("{f g g c d a a#}%8").s("sawtooth").lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
	 * @example
	 * note("c f g g a c d4").fast(2)
	 * .sound('sawtooth')
	 * .lpf(200).fanchor(0)
	 * .lpenv(3).lpq(1)
	 * .ftype("<ladder 12db 24db>")
	 */
	ftype(type): this

	/**
	 * controls the center of the filter envelope. 0 is unipolar positive, .5 is bipolar, 1 is unipolar negative
	 * @name fanchor
	 * @tags filter, envelope, superdough
	 * @param {number | Pattern} center 0 to 1
	 * @example
	 * note("{f g g c d a a#}%8").s("sawtooth").lpf("{1000}%2")
	 * .lpenv(8).fanchor("<0 .5 1>")
	 */
	fanchor(center): this

	/**
	 * Applies the cutoff frequency of the **h**igh-**p**ass **f**ilter.
	 *
	 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
	 *
	 * @name hpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency audible between 0 and 20000
	 * @synonyms hp, hcutoff
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
	 *
	 */
	hpf(frequency): this

	/**
	 * Applies the cutoff frequency of the **h**igh-**p**ass **f**ilter.
	 *
	 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
	 *
	 * @name hpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency audible between 0 and 20000
	 * @synonyms hp, hcutoff
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
	 *
	 */
	hp(frequency): this

	/**
	 * Applies the cutoff frequency of the **h**igh-**p**ass **f**ilter.
	 *
	 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
	 *
	 * @name hpf
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} frequency audible between 0 and 20000
	 * @synonyms hp, hcutoff
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
	 *
	 */
	hcutoff(frequency): this

	/**
	 * Rate of the LFO for the lowpass filter
	 *
	 * @name lprate
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} rate rate in hertz
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lprate("<4 8 2 1>")
	 */
	lprate(rate): this

	/**
	 * Cycle-synced rate of the LFO for the lowpass filter
	 *
	 * @name lpsync
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} rate rate in cycles
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpsync("<4 8 2 1>")
	 */
	lpsync(rate): this

	/**
	 * Depth of the LFO for the lowpass filter
	 *
	 * @name lpdepth
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} depth depth of modulation
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepth("<1 .5 1.8 0>")
	 */
	lpdepth(depth): this

	/**
	 * Depth of the LFO for the lowpass filter, in HZ
	 *
	 * @name lpdepthfrequency
	 * @tags filter, lfo, superdough
	 * @synonyms lpdepthfreq
	 * @param {number | Pattern} depth depth of modulation
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
	 */
	lpdepthfrequency(depth): this

	/**
	 * Depth of the LFO for the lowpass filter, in HZ
	 *
	 * @name lpdepthfrequency
	 * @tags filter, lfo, superdough
	 * @synonyms lpdepthfreq
	 * @param {number | Pattern} depth depth of modulation
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
	 */
	lpdepthfreq(depth): this

	/**
	 * Shape of the LFO for the lowpass filter
	 *
	 * @name lpshape
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
	 */
	lpshape(shape): this

	/**
	 * DC offset of the LFO for the lowpass filter
	 *
	 * @name lpdc
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
	 */
	lpdc(dcoffset): this

	/**
	 * Skew of the LFO for the lowpass filter
	 *
	 * @name lpskew
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} skew How much to bend the LFO shape
	 */
	lpskew(skew): this

	/**
	 * Rate of the LFO for the bandpass filter
	 *
	 * @name bprate
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} rate rate in hertz
	 */
	bprate(rate): this

	/**
	 * Cycle-synced rate of the LFO for the bandpass filter
	 *
	 * @name bpsync
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} rate rate in cycles
	 */
	bpsync(rate): this

	/**
	 * Depth of the LFO for the bandpass filter
	 *
	 * @name bpdepth
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} depth depth of modulation
	 */
	bpdepth(depth): this

	/**
	 * Depth of the LFO for the bandpass filter, in HZ
	 *
	 * @name bpdepthfrequency
	 * @tags filter, lfo, superdough
	 * @synonyms bpdepthfreq
	 * @param {number | Pattern} depth depth of modulation
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
	 */
	bpdepthfrequency(depth): this

	/**
	 * Depth of the LFO for the bandpass filter, in HZ
	 *
	 * @name bpdepthfrequency
	 * @tags filter, lfo, superdough
	 * @synonyms bpdepthfreq
	 * @param {number | Pattern} depth depth of modulation
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
	 */
	bpdepthfreq(depth): this

	/**
	 * Shape of the LFO for the bandpass filter
	 *
	 * @name bpshape
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
	 */
	bpshape(shape): this

	/**
	 * DC offset of the LFO for the bandpass filter
	 *
	 * @name bpdc
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
	 */
	bpdc(dcoffset): this

	/**
	 * Skew of the LFO for the bandpass filter
	 *
	 * @name bpskew
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} skew How much to bend the LFO shape
	 */
	bpskew(skew): this

	/**
	 * Rate of the LFO for the highpass filter
	 *
	 * @name hprate
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} rate rate in hertz
	 */
	hprate(rate): this

	/**
	 * Cycle-synced rate of the LFO for the highpass filter
	 *
	 * @name hpsync
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} rate rate in cycles
	 */
	hpsync(rate): this

	/**
	 * Depth of the LFO for the highpass filter
	 *
	 * @name hpdepth
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} depth depth of modulation
	 */
	hpdepth(depth): this

	/**
	 * Depth of the LFO for the hipass filter, in hz
	 *
	 * @name hpdepthfrequency
	 * @tags filter, lfo, superdough
	 * @synonyms hpdepthfreq
	 * @param {number | Pattern} depth depth of modulation
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
	 */
	hpdepthfrequency(depth): this

	/**
	 * Depth of the LFO for the hipass filter, in hz
	 *
	 * @name hpdepthfrequency
	 * @tags filter, lfo, superdough
	 * @synonyms hpdepthfreq
	 * @param {number | Pattern} depth depth of modulation
	 * @example
	 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
	 */
	hpdepthfreq(depth): this

	/**
	 * Shape of the LFO for the highpass filter
	 *
	 * @name hpshape
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} shape Shape of the lfo (0, 1, 2, ..)
	 */
	hpshape(shape): this

	/**
	 * DC offset of the LFO for the highpass filter
	 *
	 * @name hpdc
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} dcoffset dc offset. set to 0 for unipolar
	 */
	hpdc(dcoffset): this

	/**
	 * Skew of the LFO for the highpass filter
	 *
	 * @name hpskew
	 * @tags filter, lfo, superdough
	 * @param {number | Pattern} skew How much to bend the LFO shape
	 */
	hpskew(skew): this

	/**
	 * Applies a vibrato to the frequency of the oscillator.
	 *
	 * @name vib
	 * @tags pitch, lfo, superdough, supradough
	 * @synonyms vibrato, v
	 * @param {number | Pattern} frequency of the vibrato in hertz
	 * @example
	 * note("a e")
	 * .vib("<.5 1 2 4 8 16>")
	 * ._scope()
	 * @example
	 * // change the modulation depth with ":"
	 * note("a e")
	 * .vib("<.5 1 2 4 8 16>:12")
	 * ._scope()
	 */
	vib(frequency): this

	/**
	 * Applies a vibrato to the frequency of the oscillator.
	 *
	 * @name vib
	 * @tags pitch, lfo, superdough, supradough
	 * @synonyms vibrato, v
	 * @param {number | Pattern} frequency of the vibrato in hertz
	 * @example
	 * note("a e")
	 * .vib("<.5 1 2 4 8 16>")
	 * ._scope()
	 * @example
	 * // change the modulation depth with ":"
	 * note("a e")
	 * .vib("<.5 1 2 4 8 16>:12")
	 * ._scope()
	 */
	vibrato(frequency): this

	/**
	 * Applies a vibrato to the frequency of the oscillator.
	 *
	 * @name vib
	 * @tags pitch, lfo, superdough, supradough
	 * @synonyms vibrato, v
	 * @param {number | Pattern} frequency of the vibrato in hertz
	 * @example
	 * note("a e")
	 * .vib("<.5 1 2 4 8 16>")
	 * ._scope()
	 * @example
	 * // change the modulation depth with ":"
	 * note("a e")
	 * .vib("<.5 1 2 4 8 16>:12")
	 * ._scope()
	 */
	v(frequency): this

	/**
	 * Adds pink noise to the mix
	 *
	 * @name noise
	 * @tags generators, superdough, supradough
	 * @param {number | Pattern} wet wet amount
	 * @example
	 * sound("<white pink brown>/2")
	 */
	noise(wet): this

	/**
	 * Sets the vibrato depth in semitones. Only has an effect if `vibrato` | `vib` | `v` is is also set
	 *
	 * @name vibmod
	 * @tags pitch, lfo, superdough, supradough
	 * @synonyms vmod
	 * @param {number | Pattern} depth of vibrato (in semitones)
	 * @example
	 * note("a e").vib(4)
	 * .vibmod("<.25 .5 1 2 12>")
	 * ._scope()
	 * @example
	 * // change the vibrato frequency with ":"
	 * note("a e")
	 * .vibmod("<.25 .5 1 2 12>:8")
	 * ._scope()
	 */
	vibmod(depth): this

	/**
	 * Sets the vibrato depth in semitones. Only has an effect if `vibrato` | `vib` | `v` is is also set
	 *
	 * @name vibmod
	 * @tags pitch, lfo, superdough, supradough
	 * @synonyms vmod
	 * @param {number | Pattern} depth of vibrato (in semitones)
	 * @example
	 * note("a e").vib(4)
	 * .vibmod("<.25 .5 1 2 12>")
	 * ._scope()
	 * @example
	 * // change the vibrato frequency with ":"
	 * note("a e")
	 * .vibmod("<.25 .5 1 2 12>:8")
	 * ._scope()
	 */
	vmod(depth): this

	/**
	 * Controls the **h**igh-**p**ass **q**-value.
	 *
	 * @name hpq
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} q resonance factor between 0 and 50
	 * @synonyms hresonance
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
	 *
	 */
	hpq(q): this

	/**
	 * Controls the **h**igh-**p**ass **q**-value.
	 *
	 * @name hpq
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} q resonance factor between 0 and 50
	 * @synonyms hresonance
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
	 *
	 */
	hresonance(q): this

	/**
	 * Controls the **l**ow-**p**ass **q**-value.
	 *
	 * @name lpq
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} q resonance factor between 0 and 50
	 * @synonyms resonance
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
	 *
	 */
	lpq(q): this

	/**
	 * Controls the **l**ow-**p**ass **q**-value.
	 *
	 * @name lpq
	 * @tags filter, superdough, supradough
	 * @param {number | Pattern} q resonance factor between 0 and 50
	 * @synonyms resonance
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
	 *
	 */
	resonance(q): this

	/**
	 * DJ filter, below 0.5 is low pass filter, above is high pass filter.
	 *
	 * @name djf
	 * @tags filter, superdough
	 * @param {number | Pattern} cutoff below 0.5 is low pass filter, above is high pass filter
	 * @example
	 * n(irand(16).seg(8)).scale("d:phrygian").s("supersaw").djf("<.5 .3 .2 .75>")
	 *
	 */
	djf(cutoff): this

	/**
	 * Sets the level of the delay signal.
	 *
	 * When using mininotation, you can also optionally add the 'delaytime' and 'delayfeedback' parameter,
	 * separated by ':'.
	 *
	 *
	 * @name delay
	 * @tags orbit, superdough, supradough
	 * @param {number | Pattern} level between 0 and 1
	 * @example
	 * s("bd bd").delay("<0 .25 .5 1>")
	 * @example
	 * s("bd bd").delay("0.65:0.25:0.9 0.65:0.125:0.7")
	 *
	 */
	delay(level): this

	/**
	 * Sets the level of the signal that is fed back into the delay.
	 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
	 *
	 * @name delayfeedback
	 * @tags orbit, superdough, supradough
	 * @param {number | Pattern} feedback between 0 and 1
	 * @synonyms delayfb, dfb
	 * @example
	 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
	 *
	 */
	delayfeedback(feedback): this

	/**
	 * Sets the level of the signal that is fed back into the delay.
	 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
	 *
	 * @name delayfeedback
	 * @tags orbit, superdough, supradough
	 * @param {number | Pattern} feedback between 0 and 1
	 * @synonyms delayfb, dfb
	 * @example
	 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
	 *
	 */
	delayfb(feedback): this

	/**
	 * Sets the level of the signal that is fed back into the delay.
	 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
	 *
	 * @name delayfeedback
	 * @tags orbit, superdough, supradough
	 * @param {number | Pattern} feedback between 0 and 1
	 * @synonyms delayfb, dfb
	 * @example
	 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
	 *
	 */
	dfb(feedback): this

	/**
	 * Sets the time of the delay effect.
	 *
	 * @name delayspeed
	 * @tags supradough
	 * @param {number | Pattern} delayspeed controls the pitch of the delay feedback
	 * @synonyms delayt, dt
	 * @example
	 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
	 *
	 */
	delayspeed(delayspeed): this

	/**
	 * Sets the time of the delay effect.
	 *
	 * @name delayspeed
	 * @tags supradough
	 * @param {number | Pattern} delayspeed controls the pitch of the delay feedback
	 * @synonyms delayt, dt
	 * @example
	 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
	 *
	 */
	delayt(delayspeed): this

	/**
	 * Sets the time of the delay effect.
	 *
	 * @name delayspeed
	 * @tags supradough
	 * @param {number | Pattern} delayspeed controls the pitch of the delay feedback
	 * @synonyms delayt, dt
	 * @example
	 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
	 *
	 */
	dt(delayspeed): this

	/**
	 * Sets the time of the delay effect in seconds.
	 *
	 * @name delaytime
	 * @tags orbit, superdough, supradough
	 * @param {number | Pattern} delay in seconds
	 * @synonyms delayt, dt
	 * @example
	 * note("d d a# a".fast(2))
	 * .s("sawtooth")
	 * .delay(.8)
	 * .delaytime(1/2)
	 * .delayspeed("<2 .5 -1 -2>")
	 */
	delaytime(delay): this

	/**
	 * Sets the time of the delay effect in seconds.
	 *
	 * @name delaytime
	 * @tags orbit, superdough, supradough
	 * @param {number | Pattern} delay in seconds
	 * @synonyms delayt, dt
	 * @example
	 * note("d d a# a".fast(2))
	 * .s("sawtooth")
	 * .delay(.8)
	 * .delaytime(1/2)
	 * .delayspeed("<2 .5 -1 -2>")
	 */
	delayt(delay): this

	/**
	 * Sets the time of the delay effect in seconds.
	 *
	 * @name delaytime
	 * @tags orbit, superdough, supradough
	 * @param {number | Pattern} delay in seconds
	 * @synonyms delayt, dt
	 * @example
	 * note("d d a# a".fast(2))
	 * .s("sawtooth")
	 * .delay(.8)
	 * .delaytime(1/2)
	 * .delayspeed("<2 .5 -1 -2>")
	 */
	dt(delay): this

	/**
	 * Sets the time of the delay effect in cycles.
	 *
	 * @name delaysync
	 * @tags orbit, superdough
	 * @param {number | Pattern} cycles delay length in cycles
	 * @synonyms delays, ds
	 * @example
	 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
	 *
	 */
	delaysync(cycles): this

	/**
	 * Sets the time of the delay effect in cycles.
	 *
	 * @name delaysync
	 * @tags orbit, superdough
	 * @param {number | Pattern} cycles delay length in cycles
	 * @synonyms delays, ds
	 * @example
	 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
	 *
	 */
	delays(cycles): this

	/**
	 * Sets the time of the delay effect in cycles.
	 *
	 * @name delaysync
	 * @tags orbit, superdough
	 * @param {number | Pattern} cycles delay length in cycles
	 * @synonyms delays, ds
	 * @example
	 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
	 *
	 */
	ds(cycles): this

	/**
	 * Specifies whether delaytime is calculated relative to cps.
	 *
	 * @name lock
	 * @tags superdirt
	 * @param {number | Pattern} enable When set to 1, delaytime is a direct multiple of a cycle.
	 * @superdirtOnly
	 * @example
	 * s("sd").delay().lock(1).osc()
	 *
	 *
	 */
	lock(enable): this

	/**
	 * Set detune for stacked voices of supported oscillators.
	 *
	 * @name detune
	 * @tags pitch, superdough
	 * @param {number | Pattern} amount
	 * @synonyms det
	 * @example
	 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
	 *
	 */
	detune(amount): this

	/**
	 * Set detune for stacked voices of supported oscillators.
	 *
	 * @name detune
	 * @tags pitch, superdough
	 * @param {number | Pattern} amount
	 * @synonyms det
	 * @example
	 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
	 *
	 */
	det(amount): this

	/**
	 * Set number of stacked voices for supported oscillators.
	 *
	 * @name unison
	 * @tags superdough
	 * @param {number | Pattern} numvoices
	 * @example
	 * note("d f a a# a d3").fast(2).s("supersaw").unison("<1 2 7>")
	 *
	 */
	unison(numvoices): this

	/**
	 * Set the stereo pan spread for supported oscillators
	 *
	 * @name spread
	 * @tags superdough
	 * @param {number | Pattern} spread between 0 and 1
	 * @example
	 * note("d f a a# a d3").fast(2).s("supersaw").spread("<0 .3 1>")
	 *
	 */
	spread(spread): this

	/**
	 * Set dryness of reverb. See `room` and `size` for more information about reverb.
	 *
	 * @name dry
	 * @tags superdirt
	 * @param {number | Pattern} dry 0 = wet, 1 = dry
	 * @example
	 * n("[0,3,7](3,8)").s("superpiano").room(.7).dry("<0 .5 .75 1>").osc()
	 * @superdirtOnly
	 *
	 */
	dry(dry): this

	/**
	 * Used when using `begin`/`end` or `chop`/`striate` and friends, to change the fade out time of the 'grain' envelope.
	 *
	 * @name fadeTime
	 * @tags superdirt
	 * @synonyms fadeOutTime
	 * @param {number | Pattern} time between 0 and 1
	 * @example
	 * s("oh*4").end(.1).fadeTime("<0 .2 .4 .8>").osc()
	 *
	 */
	fadeTime(time): this

	/**
	 * Used when using `begin`/`end` or `chop`/`striate` and friends, to change the fade out time of the 'grain' envelope.
	 *
	 * @name fadeTime
	 * @tags superdirt
	 * @synonyms fadeOutTime
	 * @param {number | Pattern} time between 0 and 1
	 * @example
	 * s("oh*4").end(.1).fadeTime("<0 .2 .4 .8>").osc()
	 *
	 */
	fadeOutTime(time): this

	/**
	 * Set frequency of sound.
	 *
	 * @name freq
	 * @tags pitch, superdough
	 * @param {number | Pattern} frequency in Hz. the audible range is between 20 and 20000 Hz
	 * @example
	 * freq("220 110 440 110").s("superzow").osc()
	 * @example
	 * freq("110".mul.out(".5 1.5 .6 [2 3]")).s("superzow").osc()
	 *
	 */
	freq(frequency): this

	/**
	 * Attack time of pitch envelope.
	 *
	 * @name pattack
	 * @tags pitch, envelope, superdough, supradough
	 * @synonyms patt
	 * @param {number | Pattern} time time in seconds
	 * @example
	 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
	 *
	 */
	pattack(time): this

	/**
	 * Attack time of pitch envelope.
	 *
	 * @name pattack
	 * @tags pitch, envelope, superdough, supradough
	 * @synonyms patt
	 * @param {number | Pattern} time time in seconds
	 * @example
	 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
	 *
	 */
	patt(time): this

	/**
	 * Decay time of pitch envelope.
	 *
	 * @name pdecay
	 * @tags pitch, envelope, superdough, supradough
	 * @synonyms pdec
	 * @param {number | Pattern} time time in seconds
	 * @example
	 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
	 *
	 */
	pdecay(time): this

	/**
	 * Decay time of pitch envelope.
	 *
	 * @name pdecay
	 * @tags pitch, envelope, superdough, supradough
	 * @synonyms pdec
	 * @param {number | Pattern} time time in seconds
	 * @example
	 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
	 *
	 */
	pdec(time): this

	/**
	 * Release time of pitch envelope
	 *
	 * @name prelease
	 * @tags pitch, envelope, superdough, supradough
	 * @synonyms prel
	 * @param {number | Pattern} time time in seconds
	 * @example
	 * note("<c eb g bb> ~")
	 * .release(.5) // to hear the pitch release
	 * .prelease("<0 .1 .25 .5>")
	 *
	 */
	prelease(time): this

	/**
	 * Release time of pitch envelope
	 *
	 * @name prelease
	 * @tags pitch, envelope, superdough, supradough
	 * @synonyms prel
	 * @param {number | Pattern} time time in seconds
	 * @example
	 * note("<c eb g bb> ~")
	 * .release(.5) // to hear the pitch release
	 * .prelease("<0 .1 .25 .5>")
	 *
	 */
	prel(time): this

	/**
	 * Amount of pitch envelope. Negative values will flip the envelope.
	 * If you don't set other pitch envelope controls, `pattack:.2` will be the default.
	 *
	 * @name penv
	 * @tags pitch, envelope, superdough, supradough
	 * @param {number | Pattern} semitones change in semitones
	 * @example
	 * note("c")
	 * .penv("<12 7 1 .5 0 -1 -7 -12>")
	 *
	 */
	penv(semitones): this

	/**
	 * Curve of envelope. Defaults to linear. exponential is good for kicks
	 *
	 * @name pcurve
	 * @tags pitch, envelope, superdough
	 * @param {number | Pattern} type 0 = linear, 1 = exponential
	 * @example
	 * note("g1*4")
	 * .s("sine").pdec(.5)
	 * .penv(32)
	 * .pcurve("<0 1>")
	 *
	 */
	pcurve(type): this

	/**
	 * Sets the range anchor of the envelope:
	 * - anchor 0: range = [note, note + penv]
	 * - anchor 1: range = [note - penv, note]
	 * If you don't set an anchor, the value will default to the psustain value.
	 *
	 * @name panchor
	 * @tags pitch, envelope, superdough
	 * @param {number | Pattern} anchor anchor offset
	 * @example
	 * note("c c4").penv(12).panchor("<0 .5 1 .5>")
	 *
	 */
	panchor(anchor): this

	/**
	 * Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet.
	 *
	 * @name leslie
	 * @tags superdirt
	 * @param {number | Pattern} wet between 0 and 1
	 * @example
	 * n("0,4,7").s("supersquare").leslie("<0 .4 .6 1>").osc()
	 * @superdirtOnly
	 *
	 */
	leslie(wet): this

	/**
	 * Rate of modulation / rotation for leslie effect
	 *
	 * @name lrate
	 * @tags superdirt
	 * @param {number | Pattern} rate 6.7 for fast, 0.7 for slow
	 * @example
	 * n("0,4,7").s("supersquare").leslie(1).lrate("<1 2 4 8>").osc()
	 * @superdirtOnly
	 *
	 */
	lrate(rate): this

	/**
	 * Physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)
	 *
	 * @name lsize
	 * @tags superdirt
	 * @param {number | Pattern} meters somewhere between 0 and 1
	 * @example
	 * n("0,4,7").s("supersquare").leslie(1).lrate(2).lsize("<.1 .5 1>").osc()
	 * @superdirtOnly
	 *
	 */
	lsize(meters): this

	/**
	 * Sets the displayed text for an event on the pianoroll
	 *
	 * @name label
	 * @tags visualization
	 * @param {string} label text to display
	 */
	label(label): this

	/**
	 * Sets the default octave of a synth.
	 *
	 * @name octave
	 * @tags superdirt
	 * @synonyms oct
	 * @param {number | Pattern} octave octave number
	 * @example
	 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
	 */
	octave(octave): this

	/**
	 * Sets the default octave of a synth.
	 *
	 * @name octave
	 * @tags superdirt
	 * @synonyms oct
	 * @param {number | Pattern} octave octave number
	 * @example
	 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
	 */
	oct(octave): this

	/**
	 * An `orbit` is a global parameter context for patterns. Patterns with the same orbit will share the same global effects.
	 *
	 * @name orbit
	 * @tags superdough
	 * @synonyms o
	 * @param {number | Pattern} number
	 * @example
	 * stack(
	 *   s("hh*6").delay(.5).delaytime(.25).orbit(1),
	 *   s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)
	 * )
	 */
	orbit(number): this

	/**
	 * An `orbit` is a global parameter context for patterns. Patterns with the same orbit will share the same global effects.
	 *
	 * @name orbit
	 * @tags superdough
	 * @synonyms o
	 * @param {number | Pattern} number
	 * @example
	 * stack(
	 *   s("hh*6").delay(.5).delaytime(.25).orbit(1),
	 *   s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)
	 * )
	 */
	o(number): this

	/**
	 * A `bus` is a send which can be used for mixing patterns. It combines with..
	 *   s("bus") to play that bus through another pattern (for, say, applying non-linear
	 *   effects like distortion to multiple signals)
	 *
	 *   otherPat.bmod(..) (to modulate another pattern with the bus)
	 *
	 * @name bus
	 * @tags superdirt
	 * @param {number | Pattern} number
	 */
	bus(number): this

	/**
	 * Postgain multiplier prior to sending the signal to the audio bus.
	 *
	 * @name busgain
	 * @tags superdirt
	 * @synonyms bgain
	 * @param {number | Pattern} number
	 */
	busgain(number): this

	/**
	 * Postgain multiplier prior to sending the signal to the audio bus.
	 *
	 * @name busgain
	 * @tags superdirt
	 * @synonyms bgain
	 * @param {number | Pattern} number
	 */
	bgain(number): this

	/**
	 * Sets position in stereo.
	 *
	 * @name pan
	 * @tags superdough, supradough
	 * @param {number | Pattern} pan between 0 and 1, from left to right (assuming stereo), once round a circle (assuming multichannel)
	 * @example
	 * s("[bd hh]*2").pan("<.5 1 .5 0>")
	 * @example
	 * s("bd rim sd rim bd ~ cp rim").pan(sine.slow(2))
	 *
	 */
	pan(pan): this

	/**
	 * Controls how much multichannel output is fanned out
	 *
	 * @name panspan
	 * @tags superdirt
	 * @param {number | Pattern} span between -inf and inf, negative is backwards ordering
	 * @example
	 * s("[bd hh]*2").pan("<.5 1 .5 0>").panspan("<0 .5 1>").osc()
	 *
	 */
	panspan(span): this

	/**
	 * Controls how much multichannel output is spread
	 *
	 * @name pansplay
	 * @tags superdirt
	 * @param {number | Pattern} spread between 0 and 1
	 * @example
	 * s("[bd hh]*2").pan("<.5 1 .5 0>").pansplay("<0 .5 1>").osc()
	 *
	 */
	pansplay(spread): this

	/**
	 * The chord to voice
	 * @name chord
	 * @tags tonal
	 * @param {string | Pattern} symbols chord symbols to voice e.g., C, Eb, Fm7, G7. The symbols can be defined via addVoicings
	 * @example
	 * chord("<Am C D F Am E Am E>").voicing()
	 **/
	chord(symbols): this

	/**
	 * Which dictionary to use for the voicings. This falls back to the default dictionary if not provided
	 *
	 * @name dictionary
	 * @tags tonal
	 * @param {string} dictionaryName which dictionary (having been defined with `addVoicings`) to use
	 * @example
	 * addVoicings('house', {
	'': ['7 12 16', '0 7 16', '4 7 12'],
	'm': ['0 3 7']
	})
	chord("<Am C D F Am E Am E>")
	.dict('house').anchor(66)
	.voicing().room(.5)
	 **/
	dictionary(dictionaryName): this

	/** The top note to align the voicing to. Defaults to c5
	 *
	 * @name anchor
	 * @tags tonal
	 * @param {string | Pattern} anchorNote the note to align the voicing or scale to
	 * @example
	 * anchor("<c4 g4 c5 g5>").chord("C").voicing()
	 * @example
	 * n("0 .. 7").anchor("<c4 g4 c5 g5>").scale("<C:major F:minor>")
	 **/
	anchor(anchorNote): this

	/**
	 * Sets how the voicing is offset from the anchored position
	 *
	 * @name offset
	 * @tags tonal
	 * @param {number | Pattern} shift the amount to shift the voicing up or down
	 * @example
	 * chord("<Am C D F Am E Am E>").offset("<0 1 2 3 4 5>") // alter the voicing each time
	 **/
	offset(shift): this

	/**
	 *  How many octaves are voicing steps spread apart, defaults to 1
	 *
	 *  @name octaves
	 *  @tags tonal
	 *  @param {number | Pattern} count the number of octaves
	 *  @example
	 *  chord("<Am C D F Am E Am E>").octaves("<2 4>").voicing()
	 **/
	octaves(count): this

	/**
	 * Remove anchor note from the voicing. Useful for melody harmonization
	 *
	 * @name mode
	 * @tags tonal
	 * @param {string | Pattern} modeName one of {below | above | duck | root}
	 * @example
	 * mode("<below above duck root>").chord("C").voicing()
	 *
	 **/
	mode(modeName): this

	/**
	 * Sets the level of reverb.
	 *
	 * When using mininotation, you can also optionally add the 'size' parameter, separated by ':'.
	 *
	 * @name room
	 * @tags orbit, superdough
	 * @param {number | Pattern} level between 0 and 1
	 * @example
	 * s("bd sd [~ bd] sd").room("<0 .2 .4 .6 .8 1>")
	 * @example
	 * s("bd sd [~ bd] sd").room("<0.9:1 0.9:4>")
	 *
	 */
	room(level): this

	/**
	 * Reverb lowpass starting frequency (in hertz).
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomlp
	 * @tags orbit, superdough
	 * @synonyms rlp
	 * @param {number} frequency between 0 and 20000hz
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
	 */
	roomlp(frequency): this

	/**
	 * Reverb lowpass starting frequency (in hertz).
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomlp
	 * @tags orbit, superdough
	 * @synonyms rlp
	 * @param {number} frequency between 0 and 20000hz
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
	 */
	rlp(frequency): this

	/**
	 * Reverb lowpass frequency at -60dB (in hertz).
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomdim
	 * @tags orbit, superdough
	 * @synonyms rdim
	 * @param {number} frequency between 0 and 20000hz
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
	 *
	 */
	roomdim(frequency): this

	/**
	 * Reverb lowpass frequency at -60dB (in hertz).
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomdim
	 * @tags orbit, superdough
	 * @synonyms rdim
	 * @param {number} frequency between 0 and 20000hz
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
	 *
	 */
	rdim(frequency): this

	/**
	 * Reverb fade time (in seconds).
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomfade
	 * @tags orbit, superdough
	 * @synonyms rfade
	 * @param {number} seconds for the reverb to fade
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
	 *
	 */
	roomfade(seconds): this

	/**
	 * Reverb fade time (in seconds).
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomfade
	 * @tags orbit, superdough
	 * @synonyms rfade
	 * @param {number} seconds for the reverb to fade
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
	 * @example
	 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
	 *
	 */
	rfade(seconds): this

	/**
	 * Sets the sample to use as an impulse response for the reverb.
	 * @name iresponse
	 * @tags orbit, superdough
	 * @param {string | Pattern} sample to use as an impulse response
	 * @synonyms ir
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
	 *
	 */
	iresponse(sample): this

	/**
	 * Sets the sample to use as an impulse response for the reverb.
	 * @name iresponse
	 * @tags orbit, superdough
	 * @param {string | Pattern} sample to use as an impulse response
	 * @synonyms ir
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
	 *
	 */
	ir(sample): this

	/**
	 * Sets speed of the sample for the impulse response.
	 * @name irspeed
	 * @tags orbit, superdough
	 * @param {string | Pattern} speed
	 * @example
	 * samples('github:switchangel/pad')
	 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.2).irspeed("<2 1 .5>/2").irbegin(.5).roomsize(.5)
	 *
	 */
	irspeed(speed): this

	/**
	 * Sets the beginning of the IR response sample
	 * @name irbegin
	 * @tags orbit, superdough
	 * @param {string | Pattern} begin between 0 and 1
	 * @synonyms ir
	 * @example
	 * samples('github:switchangel/pad')
	 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
	 *
	 */
	irbegin(begin): this

	/**
	 * Sets the beginning of the IR response sample
	 * @name irbegin
	 * @tags orbit, superdough
	 * @param {string | Pattern} begin between 0 and 1
	 * @synonyms ir
	 * @example
	 * samples('github:switchangel/pad')
	 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
	 *
	 */
	ir(begin): this

	/**
	 * Sets the room size of the reverb, see `room`.
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomsize
	 * @tags orbit, superdough
	 * @param {number | Pattern} size between 0 and 10
	 * @synonyms rsize, sz, size
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(1)
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(4)
	 *
	 */
	roomsize(size): this

	/**
	 * Sets the room size of the reverb, see `room`.
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomsize
	 * @tags orbit, superdough
	 * @param {number | Pattern} size between 0 and 10
	 * @synonyms rsize, sz, size
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(1)
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(4)
	 *
	 */
	rsize(size): this

	/**
	 * Sets the room size of the reverb, see `room`.
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomsize
	 * @tags orbit, superdough
	 * @param {number | Pattern} size between 0 and 10
	 * @synonyms rsize, sz, size
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(1)
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(4)
	 *
	 */
	sz(size): this

	/**
	 * Sets the room size of the reverb, see `room`.
	 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
	 *
	 * @name roomsize
	 * @tags orbit, superdough
	 * @param {number | Pattern} size between 0 and 10
	 * @synonyms rsize, sz, size
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(1)
	 * @example
	 * s("bd sd [~ bd] sd").room(.8).rsize(4)
	 *
	 */
	size(size): this

	/**
	 * (Deprecated) Wave shaping distortion. WARNING: can suddenly get unpredictably loud.
	 * Please use distort instead, which has a more predictable response curve
	 * second option in optional array syntax (ex: ".9:.5") applies a postgain to the output
	 *
	 *
	 * @name shape
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion between 0 and 1
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").shape("<0 .2 .4 .6 .8>")
	 *
	 */
	shape(distortion): this

	/**
	 * Wave shaping distortion. CAUTION: it can get loud.
	 * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
	 * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
	 *
	 * @name distort
	 * @tags distortion, superdough, supradough
	 * @synonyms dist
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 * @param {number | string | Pattern} type type of distortion to apply
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
	 * @example
	 * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
	 * @example
	 * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
	 *
	 */
	distort(distortion,volume,type): this

	/**
	 * Wave shaping distortion. CAUTION: it can get loud.
	 * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
	 * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
	 *
	 * @name distort
	 * @tags distortion, superdough, supradough
	 * @synonyms dist
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 * @param {number | string | Pattern} type type of distortion to apply
	 * @example
	 * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
	 * @example
	 * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
	 * @example
	 * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
	 *
	 */
	dist(distortion,volume,type): this

	/**
	 * Postgain for waveshaping distortion.
	 *
	 * @name distortvol
	 * @synonyms distortion, distvol
	 * @tags superdough, supradough
	 * @param {number | Pattern} volume linear postgain of the distortion
	 * @example
	 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
	 */
	distortvol(volume): this

	/**
	 * Postgain for waveshaping distortion.
	 *
	 * @name distortvol
	 * @synonyms distortion, distvol
	 * @tags superdough, supradough
	 * @param {number | Pattern} volume linear postgain of the distortion
	 * @example
	 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
	 */
	distortion(volume): this

	/**
	 * Postgain for waveshaping distortion.
	 *
	 * @name distortvol
	 * @synonyms distortion, distvol
	 * @tags superdough, supradough
	 * @param {number | Pattern} volume linear postgain of the distortion
	 * @example
	 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
	 */
	distvol(volume): this

	/**
	 * Type of waveshaping distortion to apply.
	 *
	 * @name distorttype
	 * @tags distortion, superdough, supradough
	 * @synonyms disttype
	 * @param {number | string | Pattern} type type of distortion to apply
	 * @example
	 * s("bd*4").bank("tr909").distort(2).distorttype("<0 1 2>")
	 *
	 * @example
	 * s("sine").note("F1*2").release(1)
	 *   .penv(24).pdecay(0.05)
	 *   .distort(rand.range(1, 8))
	 *   .distorttype("<fold chebyshev scurve diode asym sinefold>")
	 */
	distorttype(type): this

	/**
	 * Type of waveshaping distortion to apply.
	 *
	 * @name distorttype
	 * @tags distortion, superdough, supradough
	 * @synonyms disttype
	 * @param {number | string | Pattern} type type of distortion to apply
	 * @example
	 * s("bd*4").bank("tr909").distort(2).distorttype("<0 1 2>")
	 *
	 * @example
	 * s("sine").note("F1*2").release(1)
	 *   .penv(24).pdecay(0.05)
	 *   .distort(rand.range(1, 8))
	 *   .distorttype("<fold chebyshev scurve diode asym sinefold>")
	 */
	disttype(type): this

	/**
	 * Dynamics Compressor. The params are `compressor("threshold:ratio:knee:attack:release")`
	 * More info [here](https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode?retiredLocale=de#instance_properties)
	 *
	 * @name compressor
	 * @tags superdough
	 * @example
	 * s("bd sd [~ bd] sd,hh*8")
	 * .compressor("-20:20:10:.002:.02")
	 *
	 */
	compressor(...args): this

	/**
	 * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
	 *
	 * @name speed
	 * @tags pitch, samples
	 * @param {number | Pattern} speed -inf to inf, negative numbers play the sample backwards.
	 * @example
	 * s("bd*6").speed("1 2 4 1 -2 -4")
	 * @example
	 * speed("1 1.5*2 [2 1.1]").s("piano").clip(1)
	 *
	 */
	speed(speed): this

	/**
	 * Changes the pitch of the sample without changing its speed.
	 * The frequencies are multiplied by (factor + 1) for positive numbers
	 * and by max(factor / 4 + 1, 0) for negative numbers.
	 * So tuning up by octaves can be done with 1, 3, 7, ...
	 * and tuning down by octaves with -2, -3, -3.5...
	 *
	 * @name stretch
	 * @tags pitch, samples
	 * @param {number | Pattern} factor between `-4` and `inf`. Positive increases pitch, 0 does nothing, negative decreases the pitch.
	 * @example
	 * s("gm_flute").stretch("<2 1 0 -2>")
	 *
	 */
	stretch(factor): this

	/**
	 * Used in conjunction with `speed`, accepts values of "r" (rate, default behavior), "c" (cycles), or "s" (seconds). Using `unit "c"` means `speed` will be interpreted in units of cycles, e.g. `speed "1"` means samples will be stretched to fill a cycle. Using `unit "s"` means the playback speed will be adjusted so that the duration is the number of seconds specified by `speed`.
	 *
	 * @name unit
	 * @tags superdirt
	 * @param {number | string | Pattern} unit see description above
	 * @example
	 * speed("1 2 .5 3").s("bd").unit("c").osc()
	 * @superdirtOnly
	 *
	 */
	unit(unit): this

	/**
	 * Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. The SuperCollider manual defines Squiz as:
	 *
	 * "A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated."
	 *
	 * @name squiz
	 * @tags superdirt
	 * @param {number | Pattern} squiz Try passing multiples of 2 to it - 2, 4, 8 etc.
	 * @example
	 * squiz("2 4/2 6 [8 16]").s("bd").osc()
	 * @superdirtOnly
	 *
	 */
	squiz(squiz): this

	/**
	 *
	 * Formant filter to make things sound like vowels.
	 *
	 * @name vowel
	 * @tags superdough
	 * @param {string | Pattern} vowel You can use a e i o u ae aa oe ue y uh un en an on, corresponding to [a] [e] [i] [o] [u] [æ] [ɑ] [ø] [y] [ɯ] [ʌ] [œ̃] [ɛ̃] [ɑ̃] [ɔ̃]. Aliases: aa = å = ɑ, oe = ø = ö, y = ı, ae = æ.
	 * @example
	 * note("[c2 <eb2 <g2 g1>>]*2").s('sawtooth')
	 * .vowel("<a e i <o u>>")
	 * @example
	 * s("bd sd mt ht bd [~ cp] ht lt").vowel("[a|e|i|o|u]")
	 *
	 */
	vowel(vowel): this

	/**
	 * crackle noise density
	 *
	 * @name density
	 * @tags superdough
	 * @param {number | Pattern} density between 0 and x
	 * @example
	 * s("crackle*4").density("<0.01 0.04 0.2 0.5>".slow(4))
	 *
	 */
	density(density): this

	/**
	 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
	 *
	 * @name clip
	 * @tags superdough
	 * @synonyms legato
	 * @param {number | Pattern} factor >= 0
	 * @example
	 * note("c a f e").s("piano").clip("<.5 1 2>")
	 *
	 */
	clip(factor): this

	/**
	 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
	 *
	 * @name clip
	 * @tags superdough
	 * @synonyms legato
	 * @param {number | Pattern} factor >= 0
	 * @example
	 * note("c a f e").s("piano").clip("<.5 1 2>")
	 *
	 */
	legato(factor): this

	/**
	 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
	 *
	 * @name duration
	 * @tags superdough
	 * @synonyms dur
	 * @param {number | Pattern} seconds >= 0
	 * @example
	 * note("c a f e").s("piano").dur("<.5 1 2>")
	 *
	 */
	duration(seconds): this

	/**
	 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
	 *
	 * @name duration
	 * @tags superdough
	 * @synonyms dur
	 * @param {number | Pattern} seconds >= 0
	 * @example
	 * note("c a f e").s("piano").dur("<.5 1 2>")
	 *
	 */
	dur(seconds): this

	/**
	 * Sets the color of the hap in visualizations like pianoroll or highlighting.
	 * @name color
	 * @tags visualization
	 * @synonyms colour
	 * @param {string} color Hexadecimal or CSS color name
	 */
	color(color): this

	/**
	 * Sets the color of the hap in visualizations like pianoroll or highlighting.
	 * @name color
	 * @tags visualization
	 * @synonyms colour
	 * @param {string} color Hexadecimal or CSS color name
	 */
	colour(color): this

	/**
	 * ADSR envelope: Combination of Attack, Decay, Sustain, and Release.
	 *
	 * @name adsr
	 * @tags envelope, amplitude
	 * @param {number | Pattern} time attack time in seconds
	 * @param {number | Pattern} time decay time in seconds
	 * @param {number | Pattern} gain sustain level (0 to 1)
	 * @param {number | Pattern} time release time in seconds
	 * @example
	 * note("[c3 bb2 f3 eb3]*2").sound("sawtooth").lpf(600).adsr(".1:.1:.5:.2")
	 */
	adsr(time,time,gain,time): this

	/**
	 * MIDI channel: Sets the MIDI channel for the event.
	 *
	 * @name midichan
	 * @tags external_io, midi
	 * @param {number | Pattern} channel MIDI channel number (0-15)
	 * @example
	 * note("c4").midichan(1).midi()
	 */
	midichan(channel): this

	/**
	 * MIDI port: Sets the MIDI port for the event.
	 *
	 * @name midiport
	 * @tags external_io, midi
	 * @param {number | Pattern} port MIDI port
	 * @example
	 * note("c a f e").midiport("<0 1 2 3>").midi()
	 */
	midiport(port): this

	/**
	 * MIDI command: Sends a MIDI command message.
	 *
	 * @name midicmd
	 * @tags external_io, midi
	 * @param {number | Pattern} command MIDI command
	 * @example
	 * midicmd("clock*48,<start stop>/2").midi()
	 */
	midicmd(command): this

	/**
	 * MIDI control: Sends a MIDI control change message.
	 *
	 * @name control
	 * @tags external_io, midi
	 * @param {number | Pattern}  MIDI control number (0-127)
	 * @param {number | Pattern}  MIDI controller value (0-127)
	 */
	control(MIDI,MIDI): this

	/**
	 * MIDI control number: Sends a MIDI control change message.
	 *
	 * @name ccn
	 * @tags external_io, midi
	 * @param {number | Pattern}  MIDI control number (0-127)
	 */
	ccn(MIDI): this

	/**
	 * MIDI control value: Sends a MIDI control change message.
	 *
	 * @name ccv
	 * @tags external_io, midi
	 * @param {number | Pattern}  MIDI control value (0-127)
	 */
	ccv(MIDI): this

	/**
	 * MIDI NRPN non-registered parameter number: Sends a MIDI NRPN non-registered parameter number message.
	 * @name nrpnn
	 * @tags external_io, midi
	 * @param {number | Pattern} nrpnn MIDI NRPN non-registered parameter number (0-127)
	 * @example
	 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
	 */
	nrpnn(nrpnn): this

	/**
	 * MIDI NRPN non-registered parameter value: Sends a MIDI NRPN non-registered parameter value message.
	 * @name nrpv
	 * @tags external_io, midi
	 * @param {number | Pattern} nrpv MIDI NRPN non-registered parameter value (0-127)
	 * @example
	 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
	 */
	nrpv(nrpv): this

	/**
	 * MIDI program number: Sends a MIDI program change message.
	 *
	 * @name progNum
	 * @tags external_io
	 * @param {number | Pattern} program MIDI program number (0-127)
	 * @example
	 * note("c4").progNum(10).midichan(1).midi()
	 */
	progNum(program): this

	/**
	 * MIDI sysex: Sends a MIDI sysex message.
	 * @name sysex
	 * @tags external_io, midi
	 * @param {number | Pattern} id Sysex ID
	 * @param {number | Pattern} data Sysex data
	 * @example
	 * note("c4").sysex(["0x77", "0x01:0x02:0x03:0x04"]).midichan(1).midi()
	 */
	sysex(id,data): this

	/**
	 * MIDI sysex ID: Sends a MIDI sysex identifier message.
	 * @name sysexid
	 * @tags external_io, midi
	 * @param {number | Pattern} id Sysex ID
	 * @example
	 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
	 */
	sysexid(id): this

	/**
	 * MIDI sysex data: Sends a MIDI sysex message.
	 * @name sysexdata
	 * @tags external_io, midi
	 * @param {number | Pattern} data Sysex data
	 * @example
	 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
	 */
	sysexdata(data): this

	/**
	 * MIDI pitch bend: Sends a MIDI pitch bend message.
	 * @name midibend
	 * @tags external_io, midi
	 * @param {number | Pattern} midibend MIDI pitch bend (-1 - 1)
	 * @example
	 * note("c4").midibend(sine.slow(4).range(-0.4,0.4)).midi()
	 */
	midibend(midibend): this

	/**
	 * MIDI key after touch: Sends a MIDI key after touch message.
	 * @name miditouch
	 * @tags external_io, midi
	 * @param {number | Pattern} miditouch MIDI key after touch (0-1)
	 * @example
	 * note("c4").miditouch(sine.slow(4).range(0,1)).midi()
	 */
	miditouch(miditouch): this

	/**
	 * The host to send open sound control messages to. Requires running the OSC bridge.
	 * @name oschost
	 * @tags external_io
	 * @param {string | Pattern} oschost e.g. 'localhost'
	 * @example
	 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
	 */
	oschost(oschost): this

	/**
	 * The port to send open sound control messages to. Requires running the OSC bridge.
	 * @name oscport
	 * @tags external_io
	 * @param {number | Pattern} oscport e.g. 57120
	 * @example
	 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
	 */
	oscport(oscport): this

	/**
	 * Sets properties in a batch.
	 *
	 * @name as
	 * @tags combiners
	 * @param {String | Array} mapping the control names that are set
	 * @example
	 * "c:.5 a:1 f:.25 e:.8".as("note:clip")
	 * @example
	 * "{0@2 0.25 0 0.5 .3 .5}%8".as("begin").s("sax_vib").clip(1)
	 */
	as(mapping): this

	/**
	 * Allows you to scrub an audio file like a tape loop by passing values that represents the position in the audio file
	 * in the optional array syntax ex: "0.5:2", the second value controls the speed of playback
	 * @name scrub
	 * @tags samples
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * samples('github:switchangel/pad')
	 * s("swpad:0").scrub("{0.1!2 .25@3 0.7!2 <0.8:1.5>}%8")
	 * @example
	 * samples('github:yaxu/clean-breaks/main');
	 * s("amen/4").fit().scrub("{0@3 0@2 4@3}%8".div(16))
	 */
	scrub(...args): this

	/**
	 * Configures an LFO. Can be called in sequence like pat.lfo(...).lfo(...) to set up multiple LFOs.
	 * There are two ways to declare which control will be modulated:
	 * 1. Explicitly put `control` in the config (e.g. `lfo({ c: "lpf" })`)
	 * 2. If the control parameter is absent, the control _immediately before_ the `lfo` call will be used
	 *   (e.g. `s("saw").lpf(500).lfo()` to modulate `lpf`)
	 *
	 * Modulators can be referred to by `id` so that they can be updated later e.g. inside
	 * a `sometimes`. See example below.
	 *
	 * @name lfo
	 * @tags lfo, superdough
	 * @param {Object} config LFO configuration.
	 * @param {string | Pattern} [config.control] Node to modulate. Aliases: c
	 * @param {string | Pattern} [config.subControl] Sub-control name to append to the control key. Aliases: sc
	 * @param {number | Pattern} [config.rate] Modulation rate. Aliases: r
	 * @param {number | Pattern} [config.sync] Tempo-synced modulation rate. Aliases: s
	 * @param {number | Pattern} [config.depth] Relative modulation depth. Aliases: dep, dr
	 * @param {number | Pattern} [config.depthabs] Absolute modulation depth. Aliases: da
	 * @param {number | Pattern} [config.dcoffset] DC offset / bias for the waveform. Aliases: dc
	 * @param {number | Pattern} [config.shape] Shape index. Aliases: sh
	 * @param {number | Pattern} [config.skew] Skew amount. Aliases: sk
	 * @param {number | Pattern} [config.curve] Exponential curve amount. Aliases: cu
	 * @param {number | Pattern} [config.retrig] If > 0.5, the LFO will retrigger on each event. Aliases: rt
	 * @param {number | Pattern} [config.fxi] FX index to target
	 * @param {string | Pattern} id ID to use for this modulator
	 * @returns Pattern
	 *
	 * @example
	 * s("saw").note("F1").lpf(500).lfo()
	 *
	 * @example
	 * s("saw").lfo().lpf(500).lfo({ s: 0.3 })
	 *
	 * @example
	 * s("saw").lpf(500).diode(0.3)
	 *   .lfo({ c: "lpf" })
	 *
	 * @example
	 * s("pulse").lpf(500).lfo()
	 *   .lfo({ c: "s" })
	 *   .diode(0.3)
	 *   .sometimes(x => x.lfo({ s: "8" }, 1)) // lfo #1 (0-indexed)
	 *
	 * @example
	 * s("pulse").lpf(500).lfo({ depth: 4 }, 'lpf_mod')
	 *   .lfo({ c: "s" })
	 *   .diode(0.3)
	 *   .sometimes(x => x.lfo({ s: "8" }, 'lpf_mod'))
	 */
	lfo(config,config.control,config.subControl,config.rate,config.sync,config.depth,config.depthabs,config.dcoffset,config.shape,config.skew,config.curve,config.retrig,config.fxi,id): this

	/**
	 * Configures an envelope. Can be called in sequence like pat.env(...).env(...) to set up multiple envelopes
	 * There are two ways to declare which control will be modulated:
	 * 1. Explicitly put `control` in the config (e.g. `env({ c: "lpf" })`)
	 * 2. If the control parameter is absent, the control _immediately before_ the `env` call will be used
	 *   (e.g. `s("saw").lpf(500).env({ a: 1 })` to modulate `lpf`)
	 *
	 * Modulators can be referred to by `id` so that they can be updated later e.g. inside
	 * a `sometimes`. See example below.
	 *
	 * @name env
	 * @tags envelope, superdough
	 * @param {Object} config Envelope configuration.
	 * @param {string | Pattern} [config.control] Node to modulate. Aliases: c
	 * @param {string | Pattern} [config.subControl] Sub-control name to append to the control key. Aliases: sc
	 * @param {number | Pattern} [config.depth] Relative modulation depth. Aliases: dep, dr
	 * @param {number | Pattern} [config.depthabs] Absolute modulation depth. Aliases: da
	 * @param {number | Pattern} [config.attack] Time to reach depth. Aliases: att, a
	 * @param {number | Pattern} [config.decay] Time to reach sustain. Aliases: dec, d
	 * @param {number | Pattern} [config.sustain] Sustain depth. Aliases: sus, s
	 * @param {number | Pattern} [config.release] Time to return to nominal value. Aliases: rel, r
	 * @param {number | Pattern} [config.acurve] Snappiness of attack curve (-1 = relaxed, 1 = snappy). Aliases: ac
	 * @param {number | Pattern} [config.dcurve] Snappiness of decay curve (-1 = relaxed, 1 = snappy). Aliases: dc
	 * @param {number | Pattern} [config.rcurve] Snappiness of release curve (-1 = relaxed, 1 = snappy). Aliases: rc
	 * @param {number | Pattern} [config.fxi] FX index to target
	 * @param {string | Pattern} id ID to use for this modulator
	 * @returns Pattern
	 *
	 * @example
	 * s("saw").note("F1").lpf(500).env({ a: 1 })
	 *
	 * @example
	 * s("saw").env({ d: 1 }).note("F1")
	 *   .lpq(4).lpf(50)
	 *   .env({ a: 0.1, d: 1, ac: 0.8, dc: 0.3, depth: 50 })
	 *
	 * @example
	 * s("saw").lpf(500).diode(0.3)
	 *   .env({ c: "lpf", a: 0.5, d: 0.5 })
	 *
	 * @example
	 * s("pulse").lpf(500).env({ a: 1 })
	 *   .env({ c: "s", a: 1 })
	 *   .diode(0.3)
	 *   .sometimes(x => x.env({ a: "0.5" }, 1)) // envelope #1 (0-indexed)
	 *
	 * @example
	 * s("pulse").lpf(500).env({ a: 1 }, 'lpf_mod')
	 *   .env({ c: "s", a: 1 })
	 *   .diode(0.3)
	 *   .sometimes(x => x.env({ a: "0.5" }, 'lpf_mod'))
	 */
	env(config,config.control,config.subControl,config.depth,config.depthabs,config.attack,config.decay,config.sustain,config.release,config.acurve,config.dcurve,config.rcurve,config.fxi,id): this

	/**
	 * Modulates with the output from a given `bus`.
	 * Can be called in sequence like pat.bmod(...).bmod(...) to set up multiple modulators
	 *
	 * Send to an audio bus with `otherPat.bus(..)`.
	 *
	 * There are two ways to declare which control will be modulated:
	 * 1. Explicitly put `control` in the config (e.g. `bmod({ id: 2, c: "lpf" })`)
	 * 2. If the control parameter is absent, the control _immediately before_ the `bmod` call will be used
	 *   (e.g. `s("saw").lpf(500).bmod({ id: 2 })` to modulate `lpf`)
	 *
	 * Modulators can be referred to by `id` so that they can be updated later e.g. inside
	 * a `sometimes`. See example below.
	 *
	 * @name bmod
	 * @tags superdough
	 * @param {Object} config Bus modulation configuration.
	 * @param {string | Pattern} [config.bus] Bus to get modulation signal from
	 * @param {string | Pattern} [config.control] Node to modulate. Aliases: c
	 * @param {string | Pattern} [config.subControl] Sub-control name to append to the control key. Aliases: sc
	 * @param {number | Pattern} [config.depth] Relative modulation depth. Aliases: dep, dr
	 * @param {number | Pattern} [config.depthabs] Absolute modulation depth. Aliases: da
	 * @param {number | Pattern} [config.dc] DC offset prior to application
	 * @param {number | Pattern} [config.fxi] FX index to target
	 * @param {string | Pattern} id ID to use for this modulator
	 * @returns Pattern
	 *
	 * @example
	 * modulator: s("one").seg(64).gain(slider(0, 0, 1)).bus(1).dry(0)
	 * carrier: s("saw").bmod({ b: 1 })
	 *
	 */
	bmod(config,config.bus,config.control,config.subControl,config.depth,config.depthabs,config.dc,config.fxi,id): this

	/**
	 * Transient shaper. Gives independent control over the emphasis on transients
	 * and sustains
	 *
	 * @name transient
	 * @tags superdough
	 * @param {number | Pattern} attack Emphasis on transients; between -1 (deaccentuate) and 1 (accentuate)
	 * @param {number | Pattern} sustain Emphasis on the sustains; between -1 (deaccentuate) and 1 (accentuate)
	 * @example
	 * s("bd").transient("<-1 -0.5 0 0.5 1>")
	 * @example
	 * s("hh*16").bank("tr909").transient("<-1:1 1:-1>")
	 */
	transient(attack,sustain): this

	/**
	 * Intended for a debugging, drawLine renders the pattern as a string, where each character represents the same time span.
	 * Should only be used with single characters as values, otherwise the character slots will be messed up.
	 * Character legend:
	 *
	 * - "|" cycle separator
	 * - "-" hold previous value
	 * - "." silence
	 *
	 * @tags visualization
	 * @param {Pattern} pattern the pattern to use
	 * @param {number} chars max number of characters (approximately)
	 * @returns string
	 * @example
	 * const line = drawLine("0 [1 2 3]", 10); // |0--123|0--123
	 * console.log(line);
	 * silence;
	 */
	drawLine(pattern,chars): this

	/**
	 * Changes the structure of the pattern to form an Euclidean rhythm.
	 * Euclidean rhythms are rhythms obtained using the greatest common
	 * divisor of two numbers.  They were described in 2004 by Godfried
	 * Toussaint, a Canadian computer scientist.  Euclidean rhythms are
	 * really useful for computer/algorithmic music because they can
	 * describe a large number of rhythms with a couple of numbers.
	 *
	 * @memberof Pattern
	 * @name euclid
	 * @tags temporal
	 * @param {number} pulses the number of onsets/beats
	 * @param {number} steps the number of steps to fill
	 * @returns Pattern
	 * @example
	 * // The Cuban tresillo pattern.
	 * note("c3").euclid(3,8)
	 */
	euclid(pulses,steps): this

	/**
	 * Like `euclid`, but has an additional parameter for 'rotating' the resulting sequence.
	 * @memberof Pattern
	 * @name euclidRot
	 * @tags temporal
	 * @param {number} pulses the number of onsets/beats
	 * @param {number} steps the number of steps to fill
	 * @param {number} rotation offset in steps
	 * @returns Pattern
	 * @example
	 * // A Samba rhythm necklace from Brazil
	 * note("c3").euclidRot(3,16,14)
	 */
	euclidRot(pulses,steps,rotation): this

	/**
	 * @example // A thirteenth-century Persian rhythm called Khafif-e-ramal.
	 * note("c3").euclid(2,5)
	 * @example // The archetypal pattern of the Cumbia from Colombia, as well as a Calypso rhythm from Trinidad.
	 * note("c3").euclid(3,4)
	 * @example // Another thirteenth century Persian rhythm by the name of Khafif-e-ramal, as well as a Rumanian folk-dance rhythm.
	 * note("c3").euclidRot(3,5,2)
	 * @example // A Ruchenitza rhythm used in a Bulgarian folk dance.
	 * note("c3").euclid(3,7)
	 * @example // The Cuban tresillo pattern.
	 * note("c3").euclid(3,8)
	 * @example // Another Ruchenitza Bulgarian folk-dance rhythm.
	 * note("c3").euclid(4,7)
	 * @example // The Aksak rhythm of Turkey.
	 * note("c3").euclid(4,9)
	 * @example // The metric pattern used by Frank Zappa in his piece titled Outside Now.
	 * note("c3").euclid(4,11)
	 * @example // Yields the York-Samai pattern, a popular Arab rhythm.
	 * note("c3").euclid(5,6)
	 * @example // The Nawakhat pattern, another popular Arab rhythm.
	 * note("c3").euclid(5,7)
	 * @example // The Cuban cinquillo pattern.
	 * note("c3").euclid(5,8)
	 * @example // A popular Arab rhythm called Agsag-Samai.
	 * note("c3").euclid(5,9)
	 * @example // The metric pattern used by Moussorgsky in Pictures at an Exhibition.
	 * note("c3").euclid(5,11)
	 * @example // The Venda clapping pattern of a South African children’s song.
	 * note("c3").euclid(5,12)
	 * @example // The Bossa-Nova rhythm necklace of Brazil.
	 * note("c3").euclid(5,16)
	 * @example // A typical rhythm played on the Bendir (frame drum).
	 * note("c3").euclid(7,8)
	 * @example // A common West African bell pattern.
	 * note("c3").euclid(7,12)
	 * @example // A Samba rhythm necklace from Brazil.
	 * note("c3").euclidRot(7,16,14)
	 * @example // A rhythm necklace used in the Central African Republic.
	 * note("c3").euclid(9,16)
	 * @example // A rhythm necklace of the Aka Pygmies of Central Africa.
	 * note("c3").euclidRot(11,24,14)
	 * @example // Another rhythm necklace of the Aka Pygmies of the upper Sangha.
	 * note("c3").euclidRot(13,24,5)
	 */
	_euclidRot(): this

	/**
	 * Similar to `euclid`, but each pulse is held until the next pulse,
	 * so there will be no gaps.
	 * @name euclidLegato
	 * @memberof Pattern
	 * @tags temporal
	 * @param {number} pulses the number of onsets/beats
	 * @param {number} steps the number of steps to fill
	 * @param rotation offset in steps
	 * @param pat
	 * @example
	 * note("c3").euclidLegato(3,8)
	 */
	euclidLegato(pulses,steps,rotation,pat): this

	/**
	 * Similar to `euclid`, but each pulse is held until the next pulse,
	 * so there will be no gaps, and has an additional parameter for 'rotating'
	 * the resulting sequence
	 * @name euclidLegatoRot
	 * @memberof Pattern
	 * @tags temporal
	 * @param {number} pulses the number of onsets/beats
	 * @param {number} steps the number of steps to fill
	 * @param {number} rotation offset in steps
	 * @example
	 * note("c3").euclidLegatoRot(3,5,2)
	 */
	euclidLegatoRot(pulses,steps,rotation): this

	/**
	 * A 'euclid' variant with an additional parameter that morphs the resulting
	 * rhythm from 0 (no morphing) to 1 (completely 'even'). For example
	 * `sound("bd").euclidish(3,8,0)` would be the same as
	 * `sound("bd").euclid(3,8)`, and `sound("bd").euclidish(3,8,1)` would be the
	 * same as `sound("bd bd bd")`. `sound("bd").euclidish(3,8,0.5)` would have a
	 * groove somewhere between.
	 * Inspired by the work of Malcom Braff.
	 * @name euclidish
	 * @synonyms eish
	 * @memberof Pattern
	 * @tags temporal
	 * @param {number} pulses the number of onsets
	 * @param {number} steps the number of steps to fill
	 * @param {number} groove exists between the extremes of 0 (straight euclidian) and 1 (straight pulse)
	 * @example
	 * sound("hh").euclidish(7,12,sine.slow(8))
	 * .pan(sine.slow(8))
	 */
	euclidish(pulses,steps,groove): this

	/**
	 * A 'euclid' variant with an additional parameter that morphs the resulting
	 * rhythm from 0 (no morphing) to 1 (completely 'even'). For example
	 * `sound("bd").euclidish(3,8,0)` would be the same as
	 * `sound("bd").euclid(3,8)`, and `sound("bd").euclidish(3,8,1)` would be the
	 * same as `sound("bd bd bd")`. `sound("bd").euclidish(3,8,0.5)` would have a
	 * groove somewhere between.
	 * Inspired by the work of Malcom Braff.
	 * @name euclidish
	 * @synonyms eish
	 * @memberof Pattern
	 * @tags temporal
	 * @param {number} pulses the number of onsets
	 * @param {number} steps the number of steps to fill
	 * @param {number} groove exists between the extremes of 0 (straight euclidian) and 1 (straight pulse)
	 * @example
	 * sound("hh").euclidish(7,12,sine.slow(8))
	 * .pan(sine.slow(8))
	 */
	eish(pulses,steps,groove): this

	/**
	 * Clears all user-defined variables and functions from the scope.
	 * This removes variables created during block-based evaluation.
	 * @name clearScope
	 * @example
	 * // After defining variables in blocks:
	 * // let myVar = 5
	 * // function myFunc() { return 10; }
	 * clearScope() // removes myVar and myFunc from scope
	 */
	clearScope(...args): this

	/** @class Class representing a pattern. */
	Pattern(query): this

	/**
	   * Returns a new pattern, with the function applied to the value of
	   * each hap. It has the alias `fmap`.
	   * @tags functional
	   * @synonyms fmap
	   * @param {Function} func to to apply to the value
	   * @returns Pattern
	   * @example
	   * "0 1 2".withValue(v => v + 10).log()
	   */
	withValue(func): this

	/**
	   * Returns a new pattern, with the function applied to the value of
	   * each hap. It has the alias `fmap`.
	   * @tags functional
	   * @synonyms fmap
	   * @param {Function} func to to apply to the value
	   * @returns Pattern
	   * @example
	   * "0 1 2".withValue(v => v + 10).log()
	   */
	fmap(func): this

	/**
	   * see `withValue`
	   * @noAutocomplete
	   */
	fmap(): this

	/**
	   * Assumes 'this' is a pattern of functions, and given a function to
	   * resolve wholes, applies a given pattern of values to that
	   * pattern of functions.
	   * @tags functional
	   * @param {Function} whole_func
	   * @param {Function} func
	   * @noAutocomplete
	   * @returns Pattern
	   */
	appWhole(whole_func,func): this

	/**
	   * When this method is called on a pattern of functions, it matches its haps
	   * with those in the given pattern of values.  A new pattern is returned, with
	   * each matching value applied to the corresponding function.
	   *
	   * In this `_appBoth` variant, where timespans of the function and value haps
	   * are not the same but do intersect, the resulting hap has a timespan of the
	   * intersection. This applies to both the part and the whole timespan.
	   * @tags functional
	   * @param {Pattern} pat_val
	   * @noAutocomplete
	   * @returns Pattern
	   */
	appBoth(pat_val): this

	/**
	   * As with `appBoth`, but the `whole` timespan is not the intersection,
	   * but the timespan from the function of patterns that this method is called
	   * on. In practice, this means that the pattern structure, including onsets,
	   * are preserved from the pattern of functions (often referred to as the left
	   * hand or inner pattern).
	   * @tags functional
	   * @param {Pattern} pat_val
	   * @noAutocomplete
	   * @returns Pattern
	   */
	appLeft(pat_val): this

	/**
	   * As with `appLeft`, but `whole` timespans are instead taken from the
	   * pattern of values, i.e. structure is preserved from the right hand/outer
	   * pattern.
	   * @tags functional
	   * @param {Pattern} pat_val
	   * @noAutocomplete
	   * @returns Pattern
	   */
	appRight(pat_val): this

	/**
	   * Query haps inside the given time span.
	   *
	   * @tags internals
	   * @param {Fraction | number} begin from time
	   * @param {Fraction | number} end to time
	   * @returns Hap[]
	   * @example
	   * const pattern = sequence('a', ['b', 'c'])
	   * const haps = pattern.queryArc(0, 1)
	   * console.log(haps)
	   * silence
	   * @noAutocomplete
	   */
	queryArc(begin,end): this

	/**
	   * Returns a new pattern, with queries split at cycle boundaries. This makes
	   * some calculations easier to express, as all haps are then constrained to
	   * happen within a cycle.
	   * @tags internals
	   * @returns Pattern
	   * @noAutocomplete
	   */
	splitQueries(): this

	/**
	   * Returns a new pattern, where the given function is applied to the query
	   * timespan before passing it to the original pattern.
	   * @tags internals
	   * @param {Function} func the function to apply
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withQuerySpan(func): this

	/**
	   * As with `withQuerySpan`, but the function is applied to both the
	   * begin and end time of the query timespan.
	   * @tags internals
	   * @param {Function} func the function to apply
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withQueryTime(func): this

	/**
	   * Similar to `withQuerySpan`, but the function is applied to the timespans
	   * of all haps returned by pattern queries (both `part` timespans, and where
	   * present, `whole` timespans).
	   * @tags internals
	   * @param {Function} func
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withHapSpan(func): this

	/**
	   * As with `withHapSpan`, but the function is applied to both the
	   * begin and end time of the hap timespans.
	   * @tags internals
	   * @param {Function} func the function to apply
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withHapTime(func): this

	/**
	   * Returns a new pattern with the given function applied to the list of haps returned by every query.
	   * @tags internals
	   * @param {Function} func
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withHaps(func): this

	/**
	   * As with `withHaps`, but applies the function to every hap, rather than every list of haps.
	   * @tags internals
	   * @param {Function} func
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withHap(func): this

	/**
	   * Returns a new pattern with the context field set to every hap set to the given value.
	   * @tags internals
	   * @param {*} context
	   * @returns Pattern
	   * @noAutocomplete
	   */
	setContext(context): this

	/**
	   * Returns a new pattern with the given function applied to the context field of every hap.
	   * @tags internals
	   * @param {Function} func
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withContext(func): this

	/**
	   * Returns a new pattern with the context field of every hap set to an empty object.
	   * @tags internals
	   * @returns Pattern
	   * @noAutocomplete
	   */
	stripContext(): this

	/**
	   * Returns a new pattern with the given location information added to the
	   * context of every hap.
	   * @tags internals
	   * @param {Number} start start offset
	   * @param {Number} end end offset
	   * @returns Pattern
	   * @noAutocomplete
	   */
	withLoc(start,end): this

	/**
	   * Returns a new Pattern, which only returns haps that meet the given test.
	   * @tags internals
	   * @param {Function} hap_test - a function which returns false for haps to be removed from the pattern
	   * @returns Pattern
	   * @example
	   * s("bd*8").velocity(rand).filterHaps((h) => (h.whole.begin % 1) < h.value.velocity)
	   */
	filterHaps(hap_test): this

	/**
	   * As with `filterHaps`, but the function is applied to values
	   * inside haps.
	   * @tags internals
	   * @param {Function} value_test
	   * @returns Pattern
	   * @example
	   * const drums = s("bd sd bd sd")
	   * kick: drums.filterValues((v) => v.s === 'bd').duck(2)
	   * snare: drums.filterValues((v) => v.s === 'sd')
	   * bass: s("saw!4").note("G#1").lpf(80).lpenv(4).orbit(2)
	   */
	filterValues(value_test): this

	/**
	   * Returns a new pattern, with haps containing undefined values removed from
	   * query results.
	   * @tags internals
	   * @returns Pattern
	   * @noAutocomplete
	   */
	removeUndefineds(): this

	/**
	   * Returns a new pattern, with all haps without onsets filtered out. A hap
	   * with an onset is one with a `whole` timespan that begins at the same time
	   * as its `part` timespan.
	   * @tags internals
	   * @returns Pattern
	   * @noAutocomplete
	   */
	onsetsOnly(): this

	/**
	   * Returns a new pattern, with 'continuous' haps (those without 'whole'
	   * timespans) removed from query results.
	   * @tags internals
	   * @returns Pattern
	   * @noAutocomplete
	   */
	discreteOnly(): this

	/**
	   * Combines adjacent haps with the same value and whole.  Only
	   * intended for use in tests.
	   * @tags internals
	   * @noAutocomplete
	   */
	defragmentHaps(): this

	/**
	   * Queries the pattern for the first cycle, returning Haps. Mainly of use when
	   * debugging a pattern.
	   * @tags internals
	   * @param {Boolean} with_context - set to true, otherwise the context field
	   * will be stripped from the resulting haps.
	   * @returns [Hap]
	   * @noAutocomplete
	   */
	firstCycle(with_context): this

	/**
	   * Accessor for a list of values returned by querying the first cycle.
	   * @tags internals
	   * @noAutocomplete
	   */
	firstCycleValues(): this

	/**
	   * More human-readable version of the `firstCycleValues` accessor.
	   * @tags internals
	   * @noAutocomplete
	   */
	showFirstCycle(): this

	/**
	   * Returns a new pattern, which returns haps sorted in temporal order. Mainly
	   * of use when comparing two patterns for equality, in tests.
	   * @tags internals
	   * @returns Pattern
	   * @noAutocomplete
	   */
	sortHapsByPart(): this

	/**
	   * Returns a new pattern with all values parsed as numerals.
	   * @tags internals
	   */
	asNumber(): this

	/**
	   * Layers the result of the given function(s). Like `superimpose`, but without the original pattern:
	   * @name layer
	   * @tags combiners
	   * @memberof Pattern
	   * @returns Pattern
	   * @example
	   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
	   *   .layer(x=>x.add("0,2"))
	   *   .scale('C minor').note()
	   */
	layer(...args): this

	/**
	   * Superimposes the result of the given function(s) on top of the original pattern:
	   * @name superimpose
	   * @tags combiners
	   * @memberof Pattern
	   * @returns Pattern
	   * @example
	   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
	   *   .superimpose(x=>x.add(2))
	   *   .scale('C minor').note()
	   */
	superimpose(...args): this

	/**
	   * Writes the content of the current event to the console (visible in the side menu).
	   * @tags visualization
	   * @name log
	   * @memberof Pattern
	   * @example
	   * s("bd sd").log()
	   */
	log(...args): this

	/**
	   * A simplified version of `log` which writes all "values" (various configurable parameters)
	   * within the event to the console (visible in the side menu).
	   * @tags visualization
	   * @name logValues
	   * @memberof Pattern
	   * @example
	   * s("bd sd").gain("0.25 0.5 1").n("2 1 0").logValues()
	   */
	logValues(...args): this

	/**
	   * Breaks a pattern into pieces according to the structure of a given pattern.
	   * True values in the given pattern cause the corresponding subcycle of the
	   * source pattern to be looped, and for an (optional) given function to be
	   * applied. False values result in the corresponding part of the source pattern
	   * to be played unchanged.
	   * @tags temporal
	   * @name into
	   * @memberof Pattern
	   * @example
	   * sound("bd sd ht lt").into("1 0", hurry(2))
	   */
	into(...args): this

	/**
	 * Selects indices in in stacked notes.
	 * @tags temporal
	 * @example
	 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
	 * .arpWith(haps => haps[2])
	 * */
	arpWith(...args): this

	/**
	 * Selects indices in in stacked notes.
	 * @tags temporal
	 * @example
	 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
	 * .arp("0 [0,2] 1 [0,2]")
	 * */
	arp(...args): this

	/**
	   * When called on a pattern `a`, with a input pattern `b` (`a.set(b)`),
	   * combines `a` and `b` such that anything defined in `b`
	   * and anything defined in `a` that is *not* defined in `b`
	   * will be in the resulting pattern.
	   *
	   * The structure is maintained from `a`,
	   * because the default pattern alignment is `in`,
	   * see the section on `Pattern Alignment`
	   * in the technical manual in the docs
	   *
	   * This is the inverse of `keep`
	   *
	   * See examples below
	   * @name set
	   * @param {Pattern} pat
	   * @returns {Pattern}
	   * @memberof Pattern
	   * @tags internal, combiners
	   * @example
	   * // because input pattern has `s` set,
	   * // it overrides the "sine" declared earlier
	   * note("c a f e").s("sine").set(s("triangle"))
	   */
	set(pat): this

	/**
	   * When called on a pattern `a`, with a input pattern `b` (`a.keep(b)`),
	   * combines `a` and `b` such that anything defined in `a`,
	   * and anything defined in `b` that is *not* defined in `a`
	   * will be in the resulting pattern
	   *
	   * The structure is maintained from `a`,
	   * because the default pattern alignment is `in`,
	   * see the section on `Pattern Alignment`
	   * in the technical manual in the docs
	   *
	   * This is the inverse of `set`
	   *
	   * See examples below
	   * @name keep
	   * @param {Pattern} pat
	   * @memberof Pattern
	   * @returns {Pattern}
	   * @tags internal, combiners
	   * @example
	   * // notes, already defined, will stay "c a f e",
	   * // while "s", not defined, will be set to "piano"
	   * note("c a f e").keep(note("e f a c").s("piano"))
	   */
	keep(pat): this

	/**
	   *
	   * Assumes a pattern of numbers. Adds the given number to each item in the pattern.
	   * @name add
	   * @memberof Pattern
	   * @tags math
	   * @example
	   * // Here, the triad 0, 2, 4 is shifted by different amounts
	   * n("0 2 4".add("<0 3 4 0>")).scale("C:major")
	   * // Without add, the equivalent would be:
	   * // n("<[0 2 4] [3 5 7] [4 6 8] [0 2 4]>").scale("C:major")
	   * @example
	   * // You can also use add with notes:
	   * note("c3 e3 g3".add("<0 5 7 0>"))
	   * // Behind the scenes, the notes are converted to midi numbers:
	   * // note("48 52 55".add("<0 5 7 0>"))
	   */
	add(...args): this

	/**
	   *
	   * Like add, but the given numbers are subtracted.
	   * @name sub
	   * @memberof Pattern
	   * @tags math
	   * @example
	   * n("0 2 4".sub("<0 1 2 3>")).scale("C4:minor")
	   * // See add for more information.
	   */
	sub(...args): this

	/**
	   *
	   * Multiplies each number by the given factor.
	   * @name mul
	   * @memberof Pattern
	   * @tags math
	   * @example
	   * "<1 1.5 [1.66, <2 2.33>]>*4".mul(150).freq()
	   */
	mul(...args): this

	/**
	   *
	   * Divides each number by the given factor.
	   * @name div
	   * @memberof Pattern
	   * @tags math
	   */
	div(...args): this

	/**
	   * Applies the given structure to the pattern:
	   *
	   * @tags temporal
	   * @example
	   * note("c,eb,g")
	   *   .struct("x ~ x ~ ~ x ~ x ~ ~ ~ x ~ x ~ ~")
	   *   .slow(2)
	   */
	struct(...args): this

	/**
	   * Returns silence when mask is 0 or "~"
	   *
	   * @tags temporal
	   * @example
	   * note("c [eb,g] d [eb,g]").mask("<1 [0 1]>")
	   */
	mask(...args): this

	/**
	   * Resets the pattern to the start of the cycle for each onset of the reset pattern.
	   *
	   * @tags temporal
	   * @example
	   * s("[<bd lt> sd]*2, hh*8").reset("<x@3 x(5,8)>")
	   */
	reset(...args): this

	/**
	   * Restarts the pattern for each onset of the restart pattern.
	   * While reset will only reset the current cycle, restart will start from cycle 0.
	   *
	   * @tags temporal
	   * @example
	   * s("[<bd lt> sd]*2, hh*8").restart("<x@3 x(5,8)>")
	   */
	restart(...args): this

	/**
	 * Sets the default method of combining events from two patterns (aka [alignment](https://strudel.cc/technical-manual/alignment/)) in Strudel.
	 * The default method is 'in', meaning that patterns to the left will (typically) dictate the event timings when combined with patterns to the right.
	 * By changing alignment to 'out', the opposite will happen. With 'mix', they will combine their event timings.
	 *
	 * Note that we say the _default_ method, because alignments can also be set explicitly with calls like
	 * 'add.mix', 'set.squeeze', etc.
	 *
	 * @param {string} method Default join method to use. Options: 'in', 'out', 'mix', 'squeeze', 'squeezeout', 'reset', 'restart', 'poly'
	 * @tags combiners
	 * @example
	 * setDefaultJoin('mix') // also try 'in', 'out', 'squeeze', etc.
	 * s("saw").vel("1 0.5").note("F A C E").delay("0 0.2 0.3")
	 */
	setDefaultJoin(method): this

	/**
	 * Does absolutely nothing, but with a given metrical 'steps'
	 * @name gap
	 * @tags generators
	 * @param  {number} steps
	 * @example
	 * gap(3) // "~@3"
	 */
	gap(steps): this

	/**
	 * Does absolutely nothing..
	 * @name silence
	 * @tags generators
	 * @example
	 * silence // "~"
	 */
	silence(...args): this

	/**
	 * A discrete value that repeats once per cycle.
	 *
	 * @tags generators
	 * @returns {Pattern}
	 * @example
	 * pure('e4') // "e4"
	 * @noAutocomplete
	 */
	pure(...args): this

	/**
	 * Takes a list of patterns, and returns a pattern of lists.
	 *
	 * @tags temporal
	 */
	sequenceP(...args): this

	/**
	 * The given items are played at the same time at the same length.
	 *
	 * @tags temporal
	 * @return {Pattern}
	 * @synonyms polyrhythm, pr
	 * @example
	 * stack("g3", "b3", ["e4", "d4"]).note()
	 * // "g3,b3,[e4 d4]".note()
	 *
	 * @example
	 * // As a chained function:
	 * s("hh*4").stack(
	 *   note("c4(5,8)")
	 * )
	 */
	stack(...args): this

	/**
	 * The given items are played at the same time at the same length.
	 *
	 * @tags temporal
	 * @return {Pattern}
	 * @synonyms polyrhythm, pr
	 * @example
	 * stack("g3", "b3", ["e4", "d4"]).note()
	 * // "g3,b3,[e4 d4]".note()
	 *
	 * @example
	 * // As a chained function:
	 * s("hh*4").stack(
	 *   note("c4(5,8)")
	 * )
	 */
	polyrhythm(...args): this

	/**
	 * The given items are played at the same time at the same length.
	 *
	 * @tags temporal
	 * @return {Pattern}
	 * @synonyms polyrhythm, pr
	 * @example
	 * stack("g3", "b3", ["e4", "d4"]).note()
	 * // "g3,b3,[e4 d4]".note()
	 *
	 * @example
	 * // As a chained function:
	 * s("hh*4").stack(
	 *   note("c4(5,8)")
	 * )
	 */
	pr(...args): this

	/**
	 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
	 *
	 * @tags combiners
	 * @return {Pattern}
	 * @synonyms cat
	 * @example
	 * slowcat("e5", "b4", ["d5", "c5"])
	 *
	 */
	slowcat(...args): this

	/**
	 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
	 *
	 * @tags combiners
	 * @return {Pattern}
	 * @synonyms cat
	 * @example
	 * slowcat("e5", "b4", ["d5", "c5"])
	 *
	 */
	cat(...args): this

	/** Concatenation: combines a list of patterns, switching between them successively, one per cycle. Unlike slowcat, this version will skip cycles.
	 * @tags combiners
	 * @param {...any} items - The items to concatenate
	 * @return {Pattern}
	 */
	slowcatPrime(items): this

	/** The given items are con**cat**enated, where each one takes one cycle.
	 *
	 * @tags combiners
	 * @param {...any} items - The items to concatenate
	 * @synonyms slowcat
	 * @return {Pattern}
	 * @example
	 * cat("e5", "b4", ["d5", "c5"]).note()
	 * // "<e5 b4 [d5 c5]>".note()
	 *
	 * @example
	 * // As a chained function:
	 * s("hh*4").cat(
	 *    note("c4(5,8)")
	 * )
	 */
	cat(items): this

	/** The given items are con**cat**enated, where each one takes one cycle.
	 *
	 * @tags combiners
	 * @param {...any} items - The items to concatenate
	 * @synonyms slowcat
	 * @return {Pattern}
	 * @example
	 * cat("e5", "b4", ["d5", "c5"]).note()
	 * // "<e5 b4 [d5 c5]>".note()
	 *
	 * @example
	 * // As a chained function:
	 * s("hh*4").cat(
	 *    note("c4(5,8)")
	 * )
	 */
	slowcat(items): this

	/**
	 * Allows to arrange multiple patterns together over multiple cycles.
	 * Takes a variable number of arrays with two elements specifying the number of cycles and the pattern to use.
	 *
	 * @tags combiners
	 * @return {Pattern}
	 * @example
	 * arrange(
	 *   [4, "<c a f e>(3,8)"],
	 *   [2, "<g a>(5,8)"]
	 * ).note()
	 */
	arrange(...args): this

	/**
	 * Similarly to `arrange`, allows you to arrange multiple patterns together over multiple cycles.
	 * Unlike `arrange`, you specify a start and stop time for each pattern rather than duration, which
	 * means that patterns can overlap.
	 * @tags combiners
	 * @return {Pattern}
	 * @example
	seqPLoop(
	  [0, 2, "bd(3,8)"],
	  [1, 3, "cp(3,8)"]
	).sound()
	 */
	seqPLoop(...args): this

	/** See `fastcat`
	 * @name sequence
	 * @tags combiners
	 */
	sequence(...args): this

	/** Like **cat**, but the items are crammed into one cycle.
	 * @tags combiners
	 * @synonyms fastcat
	 * @example
	 * seq("e5", "b4", ["d5", "c5"]).note()
	 * // "e5 b4 [d5 c5]".note()
	 *
	 * @example
	 * // As a chained function:
	 * s("hh*4").seq(
	 *   note("c4(5,8)")
	 * )
	 */
	seq(...args): this

	/** Like **cat**, but the items are crammed into one cycle.
	 * @tags combiners
	 * @synonyms fastcat
	 * @example
	 * seq("e5", "b4", ["d5", "c5"]).note()
	 * // "e5 b4 [d5 c5]".note()
	 *
	 * @example
	 * // As a chained function:
	 * s("hh*4").seq(
	 *   note("c4(5,8)")
	 * )
	 */
	fastcat(...args): this

	/**
	 * Registers a new pattern method. The method is added to the Pattern class + the standalone function is returned from register.
	 *
	 * @tags functional
	 * @param {string | string[]} name name of the function, or an array of names to be used as synonyms
	 * @param {function} func function with 1 or more params, where last is the current pattern
	 * @param {bool} patternify defaults to true; if set to false, you will have more control over the arguments to `func` as they will be
	 *   in their raw form and it will be up to you to patternify them and/or query them for values
	 * @example
	 * const vlpf = register('vlpf', (freq, pat) => {
	 *   return pat.fmap((v) => ({...v, cutoff: freq * (v.velocity ?? 1) }));
	 * })
	 * s("saw").seg(8).velocity(rand).vlpf(800)
	 *
	 */
	register(name,func,patternify): this

	/**
	 * Assumes a numerical pattern. Returns a new pattern with all values rounded
	 * to the nearest integer.
	 * @name round
	 * @tags math
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * n("0.5 1.5 2.5".round()).scale("C:major")
	 */
	round(...args): this

	/**
	 * Assumes a numerical pattern. Returns a new pattern with all values set to
	 * their mathematical floor. E.g. `3.7` replaced with to `3`, and `-4.2`
	 * replaced with `-5`.
	 * @name floor
	 * @memberof Pattern
	 * @tags math
	 * @returns Pattern
	 * @example
	 * note("42 42.1 42.5 43".floor())
	 */
	floor(...args): this

	/**
	 * Assumes a numerical pattern. Returns a new pattern with all values set to
	 * their mathematical ceiling. E.g. `3.2` replaced with `4`, and `-4.2`
	 * replaced with `-4`.
	 * @name ceil
	 * @memberof Pattern
	 * @tags math
	 * @returns Pattern
	 * @example
	 * note("42 42.1 42.5 43".ceil())
	 */
	ceil(...args): this

	/**
	 * Assumes a numerical pattern, containing unipolar values in the range 0 ..
	 * 1. Returns a new pattern with values scaled to the bipolar range -1 .. 1
	 * @tags math
	 * @returns Pattern
	 * @noAutocomplete
	 */
	toBipolar(...args): this

	/**
	 * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
	 * Returns a new pattern with values scaled to the unipolar range 0 .. 1
	 * @tags math
	 * @returns Pattern
	 * @noAutocomplete
	 */
	fromBipolar(...args): this

	/**
	 * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1.
	 * Returns a new pattern with values scaled to the given min/max range.
	 * Most useful in combination with continuous patterns.
	 * @name range
	 * @memberof Pattern
	 * @tags math
	 * @returns Pattern
	 * @example
	 * s("[bd sd]*2,hh*8")
	 * .cutoff(sine.range(500,4000))
	 */
	range(...args): this

	/**
	 * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1
	 * Returns a new pattern with values scaled to the given min/max range,
	 * following an exponential curve.
	 * @name rangex
	 * @memberof Pattern
	 * @tags math
	 * @returns Pattern
	 * @example
	 * s("[bd sd]*2,hh*8")
	 * .cutoff(sine.rangex(500,4000))
	 */
	rangex(...args): this

	/**
	 * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
	 * Returns a new pattern with values scaled to the given min/max range.
	 * @name range2
	 * @memberof Pattern
	 * @tags math
	 * @returns Pattern
	 * @example
	 * s("[bd sd]*2,hh*8")
	 * .cutoff(sine2.range2(500,4000))
	 */
	range2(...args): this

	/**
	 * Allows dividing numbers via list notation using ":".
	 * Returns a new pattern with just numbers.
	 * @name ratio
	 * @memberof Pattern
	 * @tags math
	 * @returns Pattern
	 * @example
	 * ratio("1, 5:4, 3:2").mul(110)
	 * .freq().s("piano")
	 */
	ratio(...args): this

	/** Compress each cycle into the given timespan, leaving a gap
	 * @tags temporal
	 * @example
	 * cat(
	 *   s("bd sd").compress(.25,.75),
	 *   s("~ bd sd ~")
	 * )
	 */
	compress(...args): this

	/**
	 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
	 * @tags temporal
	 * @name fastGap
	 * @synonyms fastgap
	 * @example
	 * s("bd sd").fastGap(2)
	 */
	fastGap(...args): this

	/**
	 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
	 * @tags temporal
	 * @name fastGap
	 * @synonyms fastgap
	 * @example
	 * s("bd sd").fastGap(2)
	 */
	fastgap(...args): this

	/**
	 * Similar to `compress`, but doesn't leave gaps, and the 'focus' can be bigger than a cycle
	 * @tags temporal
	 * @example
	 * s("bd hh sd hh").focus(1/4, 3/4)
	 */
	focus(...args): this

	/** The ply function repeats each event the given number of times.
	 * @tags temporal
	 * @example
	 * s("bd ~ sd cp").ply("<1 2 3>")
	 */
	ply(...args): this

	/**
	 * Speed up a pattern by the given factor. Used by "*" in mini notation.
	 *
	 * @tags temporal
	 * @name fast
	 * @synonyms density
	 * @memberof Pattern
	 * @param {number | Pattern} factor speed up factor
	 * @returns Pattern
	 * @example
	 * s("bd hh sd hh").fast(2) // s("[bd hh sd hh]*2")
	 */
	fast(factor): this

	/**
	 * Speed up a pattern by the given factor. Used by "*" in mini notation.
	 *
	 * @tags temporal
	 * @name fast
	 * @synonyms density
	 * @memberof Pattern
	 * @param {number | Pattern} factor speed up factor
	 * @returns Pattern
	 * @example
	 * s("bd hh sd hh").fast(2) // s("[bd hh sd hh]*2")
	 */
	density(factor): this

	/**
	 * Both speeds up the pattern (like 'fast') and the sample playback (like 'speed').
	 * @tags temporal
	 * @example
	 * s("bd sd:2").hurry("<1 2 4 3>").slow(1.5)
	 */
	hurry(...args): this

	/**
	 * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
	 *
	 * @tags temporal
	 * @name slow
	 * @synonyms sparsity
	 * @memberof Pattern
	 * @param {number | Pattern} factor slow down factor
	 * @returns Pattern
	 * @example
	 * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
	 */
	slow(factor): this

	/**
	 * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
	 *
	 * @tags temporal
	 * @name slow
	 * @synonyms sparsity
	 * @memberof Pattern
	 * @param {number | Pattern} factor slow down factor
	 * @returns Pattern
	 * @example
	 * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
	 */
	sparsity(factor): this

	/**
	 * Carries out an operation 'inside' a cycle.
	 * @tags temporal
	 * @example
	 * "0 1 2 3 4 3 2 1".inside(4, rev).scale('C major').note()
	 * // "0 1 2 3 4 3 2 1".slow(4).rev().fast(4).scale('C major').note()
	 */
	inside(...args): this

	/**
	 * Carries out an operation 'outside' a cycle.
	 * @tags temporal
	 * @example
	 * "<[0 1] 2 [3 4] 5>".outside(4, rev).scale('C major').note()
	 * // "<[0 1] 2 [3 4] 5>".fast(4).rev().slow(4).scale('C major').note()
	 */
	outside(...args): this

	/**
	 * Applies the given function every n cycles, starting from the last cycle.
	 * @tags temporal
	 * @name lastOf
	 * @memberof Pattern
	 * @param {number} n how many cycles
	 * @param {function} func function to apply
	 * @returns Pattern
	 * @example
	 * note("c3 d3 e3 g3").lastOf(4, x=>x.rev())
	 */
	lastOf(n,func): this

	/**
	 * Applies the given function every n cycles, starting from the first cycle.
	 * @tags temporal
	 * @name firstOf
	 * @memberof Pattern
	 * @param {number} n how many cycles
	 * @param {function} func function to apply
	 * @returns Pattern
	 * @example
	 * note("c3 d3 e3 g3").firstOf(4, x=>x.rev())
	 */
	firstOf(n,func): this

	/**
	 * An alias for `firstOf`
	 * @tags temporal
	 * @name every
	 * @memberof Pattern
	 * @param {number} n how many cycles
	 * @param {function} func function to apply
	 * @returns Pattern
	 * @example
	 * note("c3 d3 e3 g3").every(4, x=>x.rev())
	 */
	every(n,func): this

	/**
	 * Applies the given function to the pattern. Like layer, but with a single function:
	 * @tags combiners
	 * @name apply
	 * @example
	 * "<c3 eb3 g3>".scale('C minor').apply(scaleTranspose("0,2,4")).note()
	 */
	apply(...args): this

	/**
	 * Plays the pattern at the given cycles per minute.
	 * @tags temporal
	 * @deprecated
	 * @example
	 * s("<bd sd>,hh*2").cpm(90) // = 90 bpm
	 */
	cpm(...args): this

	/**
	 * Nudge a pattern to start earlier in time. Equivalent of Tidal's <~ operator
	 *
	 * @tags temporal
	 * @name early
	 * @memberof Pattern
	 * @param {number | Pattern} cycles number of cycles to nudge left
	 * @returns Pattern
	 * @example
	 * "bd ~".stack("hh ~".early(.1)).s()
	 */
	early(cycles): this

	/**
	 * Nudge a pattern to start later in time. Equivalent of Tidal's ~> operator
	 *
	 * @tags temporal
	 * @name late
	 * @memberof Pattern
	 * @param {number | Pattern} cycles number of cycles to nudge right
	 * @returns Pattern
	 * @example
	 * "bd ~".stack("hh ~".late(.1)).s()
	 */
	late(cycles): this

	/**
	 * Plays a portion of a pattern, specified by the beginning and end of a time span. The new resulting pattern is played over the time period of the original pattern:
	 *
	 * @tags temporal
	 * @example
	 * s("bd*2 hh*3 [sd bd]*2 perc").zoom(0.25, 0.75)
	 * // s("hh*3 [sd bd]*2") // equivalent
	 */
	zoom(...args): this

	/**
	 * Splits a pattern into the given number of slices, and plays them according to a pattern of slice numbers.
	 * Similar to `slice`, but slices up patterns rather than sound samples.
	 * @tags temporal
	 * @param {number} number of slices
	 * @param {number} slices to play
	 * @example
	 * note("0 1 2 3 4 5 6 7".scale('c:mixolydian'))
	 *.bite(4, "3 2 1 0")
	 * @example
	 * sound("bd - bd bd*2, - sd:6 - sd:5 sd:1 - [- sd:2] -, hh [- cp:7]")
	  .bank("RolandTR909").speed(1.2)
	  .bite(4, "0 0 [1 2] <3 2> 0 0 [2 1] 3")
	 */
	bite(number,slices): this

	/**
	 * Selects the given fraction of the pattern and repeats that part to fill the remainder of the cycle.
	 * @tags temporal
	 * @param {number} fraction fraction to select
	 * @example
	 * s("lt ht mt cp, [hh oh]*2").linger("<1 .5 .25 .125>")
	 */
	linger(fraction): this

	/**
	 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
	 * @tags temporal
	 * @name segment
	 * @synonyms seg
	 * @param {number} segments number of segments per cycle
	 * @example
	 * note(saw.range(40,52).segment(24))
	 */
	segment(segments): this

	/**
	 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
	 * @tags temporal
	 * @name segment
	 * @synonyms seg
	 * @param {number} segments number of segments per cycle
	 * @example
	 * note(saw.range(40,52).segment(24))
	 */
	seg(segments): this

	/**
	 * The function `swingBy x n` breaks each cycle into `n` slices, and then delays events in the second half of each slice by the amount `x`, which is relative to the size of the (half) slice. So if `x` is 0 it does nothing, `0.5` delays for half the note duration, and 1 will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm
	 * @tags temporal
	 * @param {number} subdivision
	 * @param {number} offset
	 * @example
	 * s("hh*8").swingBy(1/3, 4)
	 */
	swingBy(subdivision,offset): this

	/**
	 * Shorthand for swingBy with 1/3:
	 * @tags temporal
	 * @param {number} subdivision
	 * @example
	 * s("hh*8").swing(4)
	 * // s("hh*8").swingBy(1/3, 4)
	 */
	swing(subdivision): this

	/**
	 * Swaps 1s and 0s in a binary pattern.
	 * @tags temporal
	 * @name invert
	 * @synonyms inv
	 * @example
	 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
	 */
	invert(...args): this

	/**
	 * Swaps 1s and 0s in a binary pattern.
	 * @tags temporal
	 * @name invert
	 * @synonyms inv
	 * @example
	 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
	 */
	inv(...args): this

	/**
	 * Applies the given function whenever the given pattern is in a true state.
	 * @tags temporal
	 * @name when
	 * @memberof Pattern
	 * @param {Pattern} binary_pat
	 * @param {function} func
	 * @returns Pattern
	 * @example
	 * "c3 eb3 g3".when("<0 1>/2", x=>x.sub("5")).note()
	 */
	when(binary_pat,func): this

	/**
	 * Superimposes the function result on top of the original pattern, delayed by the given time.
	 * @tags temporal
	 * @name off
	 * @memberof Pattern
	 * @param {Pattern | number} time offset time
	 * @param {function} func function to apply
	 * @returns Pattern
	 * @example
	 * "c3 eb3 g3".off(1/8, x=>x.add(7)).note()
	 */
	off(time,func): this

	/**
	 * Returns a new pattern where every other cycle is played once, twice as
	 * fast, and offset in time by one quarter of a cycle. Creates a kind of
	 * breakbeat feel.
	 * @tags temporal
	 * @returns Pattern
	 */
	brak(...args): this

	/**
	 * Reverse all cycles in a pattern. See also `revv` for reversing a whole pattern.
	 *
	 * @tags temporal
	 * @name rev
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * note("c d e g").rev()
	 */
	rev(...args): this

	/**
	 * Reverse a whole pattern. See also `rev` for reversing each cycle.
	 *
	 * @name revv
	 * @tags temporal
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * // This is the same as `<[g e] [d c]>`. If `rev()` is used, you get
	 * // the same as `<[d c] [g e]>`, where each cycle reverses, but the order of
	 * // cycles stays the same.
	 * note("<[c d] [e g]>").revv()
	 */
	revv(...args): this

	/** Like press, but allows you to specify the amount by which each
	 * event is shifted. pressBy(0.5) is the same as press, while
	 * pressBy(1/3) shifts each event by a third of its timespan.
	 * @tags temporal
	 * @example
	 * stack(s("hh*4"),
	 *       s("bd mt sd ht").pressBy("<0 0.5 0.25>")
	 *      ).slow(2)
	 */
	pressBy(...args): this

	/**
	 * Syncopates a rhythm, by shifting each event halfway into its timespan.
	 * @tags temporal
	 * @example
	 * stack(s("hh*4"),
	 *       s("bd mt sd ht").every(4, press)
	 *      ).slow(2)
	 */
	press(...args): this

	/**
	 * Silences a pattern.
	 * @tags temporal
	 * @example
	 * stack(
	 *   s("bd").hush(),
	 *   s("hh*3")
	 * )
	 */
	hush(...args): this

	/**
	 * Applies `rev` to a pattern every other cycle, so that the pattern alternates between forwards and backwards.
	 * @tags temporal
	 * @example
	 * note("c d e g").palindrome()
	 */
	palindrome(...args): this

	/**
	 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
	 * @tags temporal
	 * @name juxBy
	 * @synonyms juxby
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
	 */
	juxBy(...args): this

	/**
	 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
	 * @tags temporal
	 * @name juxBy
	 * @synonyms juxby
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
	 */
	juxby(...args): this

	/**
	 * Like juxBy, except it flips the ears each cycle.
	 * @name juxFlipBy
	 * @synonyms juxflipby, fluxBy, fluxby
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
	 */
	juxFlipBy(...args): this

	/**
	 * Like juxBy, except it flips the ears each cycle.
	 * @name juxFlipBy
	 * @synonyms juxflipby, fluxBy, fluxby
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
	 */
	juxflipby(...args): this

	/**
	 * Like juxBy, except it flips the ears each cycle.
	 * @name juxFlipBy
	 * @synonyms juxflipby, fluxBy, fluxby
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
	 */
	fluxBy(...args): this

	/**
	 * Like juxBy, except it flips the ears each cycle.
	 * @name juxFlipBy
	 * @synonyms juxflipby, fluxBy, fluxby
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlipBy(".8", rev)
	 */
	fluxby(...args): this

	/**
	 * The jux function creates strange stereo effects, by applying a function to a pattern, but only in the right-hand channel.
	 * @tags temporal, superdough
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").jux(rev)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").jux(press)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").jux(iter(4))
	 */
	jux(...args): this

	/**
	 * Like jux, but flips the ears each cycle.
	 * @name juxFlip
	 * @synonyms juxflip, flux
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(rev)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(press)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(iter(4))
	 */
	juxFlip(...args): this

	/**
	 * Like jux, but flips the ears each cycle.
	 * @name juxFlip
	 * @synonyms juxflip, flux
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(rev)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(press)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(iter(4))
	 */
	juxflip(...args): this

	/**
	 * Like jux, but flips the ears each cycle.
	 * @name juxFlip
	 * @synonyms juxflip, flux
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(rev)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(press)
	 * @example
	 * s("bd lt [~ ht] mt cp ~ bd hh").juxFlip(iter(4))
	 */
	flux(...args): this

	/**
	 * Superimpose and offset multiple times, applying the given function each time.
	 * @tags temporal, functional
	 * @name echoWith
	 * @synonyms echowith, stutWith, stutwith
	 * @param {number} times how many times to repeat
	 * @param {number} time cycle offset between iterations
	 * @param {function} func function to apply, given the pattern and the iteration index
	 * @example
	 * "<0 [2 4]>"
	 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
	 * .scale("C:minor").note()
	 */
	echoWith(times,time,func): this

	/**
	 * Superimpose and offset multiple times, applying the given function each time.
	 * @tags temporal, functional
	 * @name echoWith
	 * @synonyms echowith, stutWith, stutwith
	 * @param {number} times how many times to repeat
	 * @param {number} time cycle offset between iterations
	 * @param {function} func function to apply, given the pattern and the iteration index
	 * @example
	 * "<0 [2 4]>"
	 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
	 * .scale("C:minor").note()
	 */
	echowith(times,time,func): this

	/**
	 * Superimpose and offset multiple times, applying the given function each time.
	 * @tags temporal, functional
	 * @name echoWith
	 * @synonyms echowith, stutWith, stutwith
	 * @param {number} times how many times to repeat
	 * @param {number} time cycle offset between iterations
	 * @param {function} func function to apply, given the pattern and the iteration index
	 * @example
	 * "<0 [2 4]>"
	 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
	 * .scale("C:minor").note()
	 */
	stutWith(times,time,func): this

	/**
	 * Superimpose and offset multiple times, applying the given function each time.
	 * @tags temporal, functional
	 * @name echoWith
	 * @synonyms echowith, stutWith, stutwith
	 * @param {number} times how many times to repeat
	 * @param {number} time cycle offset between iterations
	 * @param {function} func function to apply, given the pattern and the iteration index
	 * @example
	 * "<0 [2 4]>"
	 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
	 * .scale("C:minor").note()
	 */
	stutwith(times,time,func): this

	/**
	 * Superimpose and offset multiple times, gradually decreasing the velocity
	 * @tags temporal
	 * @name echo
	 * @memberof Pattern
	 * @returns Pattern
	 * @param {number} times how many times to repeat
	 * @param {number} time cycle offset between iterations
	 * @param {number} feedback velocity multiplicator for each iteration
	 * @example
	 * s("bd sd").echo(3, 1/6, .8)
	 */
	echo(times,time,feedback): this

	/**
	 * Deprecated. Like echo, but the last 2 parameters are flipped.
	 * @tags temporal
	 * @name stut
	 * @param {number} times how many times to repeat
	 * @param {number} feedback velocity multiplicator for each iteration
	 * @param {number} time cycle offset between iterations
	 * @example
	 * s("bd sd").stut(3, .8, 1/6)
	 */
	stut(times,feedback,time): this

	/**
	 * The plyWith function repeats each event the given number of times, applying the given function to each event.\n
	 * @tags temporal
	 * @name plyWith
	 * @synonyms plywith
	 * @param {number} factor how many times to repeat
	 * @param {function} func function to apply, given the pattern
	 * @example
	 * "<0 [2 4]>"
	 * .plyWith(4, (p) => p.add(2))
	 * .scale("C:minor").note()
	 */
	plyWith(factor,func): this

	/**
	 * The plyWith function repeats each event the given number of times, applying the given function to each event.\n
	 * @tags temporal
	 * @name plyWith
	 * @synonyms plywith
	 * @param {number} factor how many times to repeat
	 * @param {function} func function to apply, given the pattern
	 * @example
	 * "<0 [2 4]>"
	 * .plyWith(4, (p) => p.add(2))
	 * .scale("C:minor").note()
	 */
	plywith(factor,func): this

	/**
	 * The plyForEach function repeats each event the given number of times, applying the given function to each event.
	 * This version of ply uses the iteration index as an argument to the function, similar to echoWith.
	 * @tags temporal
	 * @name plyForEach
	 * @synonyms plyforeach
	 * @param {number} factor how many times to repeat
	 * @param {function} func function to apply, given the pattern and the iteration index
	 * @example
	 * "<0 [2 4]>"
	 * .plyForEach(4, (p,n) => p.add(n*2))
	 * .scale("C:minor").note()
	 */
	plyForEach(factor,func): this

	/**
	 * The plyForEach function repeats each event the given number of times, applying the given function to each event.
	 * This version of ply uses the iteration index as an argument to the function, similar to echoWith.
	 * @tags temporal
	 * @name plyForEach
	 * @synonyms plyforeach
	 * @param {number} factor how many times to repeat
	 * @param {function} func function to apply, given the pattern and the iteration index
	 * @example
	 * "<0 [2 4]>"
	 * .plyForEach(4, (p,n) => p.add(n*2))
	 * .scale("C:minor").note()
	 */
	plyforeach(factor,func): this

	/**
	 * Divides a pattern into a given number of subdivisions, plays the subdivisions in order, but increments the starting subdivision each cycle. The pattern wraps to the first subdivision after the last subdivision is played.
	 * @tags temporal
	 * @name iter
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * note("0 1 2 3".scale('A minor')).iter(4)
	 */
	iter(...args): this

	/**
	 * Like `iter`, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
	 * @tags temporal
	 * @name iterBack
	 * @synonyms iterback
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * note("0 1 2 3".scale('A minor')).iterBack(4)
	 */
	iterBack(...args): this

	/**
	 * Like `iter`, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
	 * @tags temporal
	 * @name iterBack
	 * @synonyms iterback
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * note("0 1 2 3".scale('A minor')).iterBack(4)
	 */
	iterback(...args): this

	/**
	 * Repeats each cycle the given number of times.
	 * @tags temporal
	 * @name repeatCycles
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * note(irand(12).add(34)).segment(4).repeatCycles(2).s("gm_acoustic_guitar_nylon")
	 */
	repeatCycles(...args): this

	/**
	 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
	 * @tags temporal, functional
	 * @name chunk
	 * @synonyms slowChunk, slowchunk
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * "0 1 2 3".chunk(4, x=>x.add(7))
	 * .scale("A:minor").note()
	 */
	chunk(...args): this

	/**
	 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
	 * @tags temporal, functional
	 * @name chunk
	 * @synonyms slowChunk, slowchunk
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * "0 1 2 3".chunk(4, x=>x.add(7))
	 * .scale("A:minor").note()
	 */
	slowChunk(...args): this

	/**
	 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
	 * @tags temporal, functional
	 * @name chunk
	 * @synonyms slowChunk, slowchunk
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * "0 1 2 3".chunk(4, x=>x.add(7))
	 * .scale("A:minor").note()
	 */
	slowchunk(...args): this

	/**
	 * Like `chunk`, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
	 * @tags temporal
	 * @name chunkBack
	 * @synonyms chunkback
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * "0 1 2 3".chunkBack(4, x=>x.add(7))
	 * .scale("A:minor").note()
	 */
	chunkBack(...args): this

	/**
	 * Like `chunk`, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
	 * @tags temporal
	 * @name chunkBack
	 * @synonyms chunkback
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * "0 1 2 3".chunkBack(4, x=>x.add(7))
	 * .scale("A:minor").note()
	 */
	chunkback(...args): this

	/**
	 * Like `chunk`, but the cycles of the source pattern aren't repeated
	 * for each set of chunks.
	 * @tags temporal
	 * @name fastChunk
	 * @synonyms fastchunk
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * "<0 8> 1 2 3 4 5 6 7"
	 * .scale("C2:major").note()
	 * .fastChunk(4, x => x.color('red')).slow(2)
	 */
	fastChunk(...args): this

	/**
	 * Like `chunk`, but the cycles of the source pattern aren't repeated
	 * for each set of chunks.
	 * @tags temporal
	 * @name fastChunk
	 * @synonyms fastchunk
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * "<0 8> 1 2 3 4 5 6 7"
	 * .scale("C2:major").note()
	 * .fastChunk(4, x => x.color('red')).slow(2)
	 */
	fastchunk(...args): this

	/**
	 * Like `chunk`, but the function is applied to a looped subcycle of the source pattern.
	 * @tags temporal
	 * @name chunkInto
	 * @synonyms chunkinto
	 * @memberof Pattern
	 * @example
	 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
	 *   .bank("tr909")
	 */
	chunkInto(...args): this

	/**
	 * Like `chunk`, but the function is applied to a looped subcycle of the source pattern.
	 * @tags temporal
	 * @name chunkInto
	 * @synonyms chunkinto
	 * @memberof Pattern
	 * @example
	 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
	 *   .bank("tr909")
	 */
	chunkinto(...args): this

	/**
	 * Like `chunkInto`, but moves backwards through the chunks.
	 * @tags temporal
	 * @name chunkBackInto
	 * @synonyms chunkbackinto
	 * @memberof Pattern
	 * @example
	 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
	 *   .bank("tr909")
	 */
	chunkBackInto(...args): this

	/**
	 * Like `chunkInto`, but moves backwards through the chunks.
	 * @tags temporal
	 * @name chunkBackInto
	 * @synonyms chunkbackinto
	 * @memberof Pattern
	 * @example
	 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
	 *   .bank("tr909")
	 */
	chunkbackinto(...args): this

	/**
	 * Loops the pattern inside an `offset` for `cycles`.
	 * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
	 * @tags temporal
	 * @name ribbon
	 * @synonyms rib
	 * @param {number} offset start point of loop in cycles
	 * @param {number} cycles loop length in cycles
	 * @example
	 * note("<c d e f>").ribbon(1, 2)
	 * @example
	 * // Looping a portion of randomness
	 * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
	 * @example
	 * // rhythm generator
	 * s("bd!16?").ribbon(29,.5)
	 */
	ribbon(offset,cycles): this

	/**
	 * Loops the pattern inside an `offset` for `cycles`.
	 * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
	 * @tags temporal
	 * @name ribbon
	 * @synonyms rib
	 * @param {number} offset start point of loop in cycles
	 * @param {number} cycles loop length in cycles
	 * @example
	 * note("<c d e f>").ribbon(1, 2)
	 * @example
	 * // Looping a portion of randomness
	 * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
	 * @example
	 * // rhythm generator
	 * s("bd!16?").ribbon(29,.5)
	 */
	rib(offset,cycles): this

	/**
	 * Tags each Hap with an identifier. Good for filtering. The function populates Hap.context.tags (Array).
	 * @name tag
	 * @tags temporal
	 * @param {string} tag anything unique
	 * @example
	 * s("saw!16").note("F1")
	 *   .lpf(tri.range(40, 80).slow(4)).lpenv(5).lpq(4).lpd(0.15)
	 *   .when(rand.late(0.1).gte(0.5), x => x.transpose("12").tag('altered'))
	 *   .when(rand.late(0.2).gte(0.5), x => x.s("square").tag('altered'))
	 *   .when("<0 1>", x => x.filter((hap) => hap.hasTag('altered')))
	 */
	tag(tag): this

	/**
	 * Filters haps using the given function
	 * @name filter
	 * @tags temporal, functional
	 * @param {Function} test function to test Hap
	 * @example
	 * s("hh!7 oh").filter(hap => hap.value.s === 'hh')
	 */
	filter(test): this

	/**
	 * Filters haps by their begin time
	 * @name filterWhen
	 * @tags temporal, functional
	 * @param {Function} test function to test Hap.whole.begin
	 * @example
	 * oneCycle: s("bd*4").filterWhen((t) => t < 1)
	 */
	filterWhen(test): this

	/**
	 * Use within to apply a function to only a part of a pattern.
	 * @name within
	 * @tags temporal, functional
	 * @param {number} start start within cycle (0 - 1)
	 * @param {number} end end within cycle (0 - 1). Must be > start
	 * @param {Function} func function to be applied to the sub-pattern
	 */
	within(start,end,func): this

	/**
	 * *Experimental*
	 *
	 * Speeds a pattern up or down, to fit to the given number of steps per cycle.
	 * @tags stepwise
	 * @example
	 * sound("bd sd cp").pace(4)
	 * // The same as sound("{bd sd cp}%4") or sound("<bd sd cp>*4")
	 */
	pace(...args): this

	/**
	 * *Experimental*
	 *
	 * Aligns the steps of the patterns, creating polymeters. The patterns are repeated until they all fit the cycle. For example, in the below the first pattern is repeated twice, and the second is repeated three times, to fit the lowest common multiple of six steps.
	 * @tags stepwise
	 * @synonyms pm
	 * @example
	 * // The same as note("{c eb g, c2 g2}%6")
	 * polymeter("c eb g", "c2 g2").note()
	 *
	 */
	polymeter(...args): this

	/**
	 * *Experimental*
	 *
	 * Aligns the steps of the patterns, creating polymeters. The patterns are repeated until they all fit the cycle. For example, in the below the first pattern is repeated twice, and the second is repeated three times, to fit the lowest common multiple of six steps.
	 * @tags stepwise
	 * @synonyms pm
	 * @example
	 * // The same as note("{c eb g, c2 g2}%6")
	 * polymeter("c eb g", "c2 g2").note()
	 *
	 */
	pm(...args): this

	/** 'Concatenates' patterns like `fastcat`, but proportional to a number of steps per cycle.
	 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
	 * Has the alias `timecat`.
	 * @name stepcat
	 * @tags stepwise
	 * @synonyms timeCat, timecat
	 * @return {Pattern}
	 * @example
	 * stepcat([3,"e3"],[1, "g3"]).note()
	 * // the same as "e3@3 g3".note()
	 * @example
	 * stepcat("bd sd cp","hh hh").sound()
	 * // the same as "bd sd cp hh hh".sound()
	 */
	stepcat(...args): this

	/** 'Concatenates' patterns like `fastcat`, but proportional to a number of steps per cycle.
	 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
	 * Has the alias `timecat`.
	 * @name stepcat
	 * @tags stepwise
	 * @synonyms timeCat, timecat
	 * @return {Pattern}
	 * @example
	 * stepcat([3,"e3"],[1, "g3"]).note()
	 * // the same as "e3@3 g3".note()
	 * @example
	 * stepcat("bd sd cp","hh hh").sound()
	 * // the same as "bd sd cp hh hh".sound()
	 */
	timeCat(...args): this

	/** 'Concatenates' patterns like `fastcat`, but proportional to a number of steps per cycle.
	 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
	 * Has the alias `timecat`.
	 * @name stepcat
	 * @tags stepwise
	 * @synonyms timeCat, timecat
	 * @return {Pattern}
	 * @example
	 * stepcat([3,"e3"],[1, "g3"]).note()
	 * // the same as "e3@3 g3".note()
	 * @example
	 * stepcat("bd sd cp","hh hh").sound()
	 * // the same as "bd sd cp hh hh".sound()
	 */
	timecat(...args): this

	/**
	 * *Experimental*
	 *
	 * Concatenates patterns stepwise, according to an inferred 'steps per cycle'.
	 * Similar to `stepcat`, but if an argument is a list, the whole pattern will alternate between the elements in the list.
	 *
	 * @tags stepwise
	 * @return {Pattern}
	 * @example
	 * stepalt(["bd cp", "mt"], "bd").sound()
	 * // The same as "bd cp bd mt bd".sound()
	 */
	stepalt(...args): this

	/**
	 * *Experimental*
	 *
	 * Takes the given number of steps from a pattern (dropping the rest).
	 * A positive number will take steps from the start of a pattern, and a negative number from the end.
	 * @tags stepwise
	 * @return {Pattern}
	 * @example
	 * "bd cp ht mt".take("2").sound()
	 * // The same as "bd cp".sound()
	 * @example
	 * "bd cp ht mt".take("1 2 3").sound()
	 * // The same as "bd bd cp bd cp ht".sound()
	 * @example
	 * "bd cp ht mt".take("-1 -2 -3").sound()
	 * // The same as "mt ht mt cp ht mt".sound()
	 */
	take(...args): this

	/**
	 * *Experimental*
	 *
	 * Drops the given number of steps from a pattern.
	 * A positive number will drop steps from the start of a pattern, and a negative number from the end.
	 * @tags stepwise
	 * @return {Pattern}
	 * @example
	 * "tha dhi thom nam".drop("1").sound().bank("mridangam")
	 * @example
	 * "tha dhi thom nam".drop("-1").sound().bank("mridangam")
	 * @example
	 * "tha dhi thom nam".drop("0 1 2 3").sound().bank("mridangam")
	 * @example
	 * "tha dhi thom nam".drop("0 -1 -2 -3").sound().bank("mridangam")
	 */
	drop(...args): this

	/**
	 * *Experimental*
	 *
	 * `extend` is similar to `fast` in that it increases its density, but it also increases the step count
	 * accordingly. So `stepcat("a b".extend(2), "c d")` would be the same as `"a b a b c d"`, whereas
	 * `stepcat("a b".fast(2), "c d")` would be the same as `"[a b] [a b] c d"`.
	 * @tags stepwise
	 * @example
	 * stepcat(
	 *   sound("bd bd - cp").extend(2),
	 *   sound("bd - sd -")
	 * ).pace(8)
	 */
	extend(...args): this

	/**
	 * *Experimental*
	 *
	 * `replicate` is similar to `fast` in that it increases its density, but it also increases the step count
	 * accordingly. So `stepcat("a b".replicate(2), "c d")` would be the same as `"a b a b c d"`, whereas
	 * `stepcat("a b".fast(2), "c d")` would be the same as `"[a b] [a b] c d"`.
	 *
	 * TODO: find out how this function differs from extend
	 * @tags stepwise
	 * @example
	 * stepcat(
	 *   sound("bd bd - cp").replicate(2),
	 *   sound("bd - sd -")
	 * ).pace(8)
	 */
	replicate(...args): this

	/**
	 * *Experimental*
	 *
	 * Expands the step size of the pattern by the given factor.
	 * @tags stepwise
	 * @example
	 * sound("tha dhi thom nam").bank("mridangam").expand("3 2 1 1 2 3").pace(8)
	 */
	expand(...args): this

	/**
	 * *Experimental*
	 *
	 * Contracts the step size of the pattern by the given factor. See also `expand`.
	 * @tags stepwise
	 * @example
	 * sound("tha dhi thom nam").bank("mridangam").contract("3 2 1 1 2 3").pace(8)
	 */
	contract(...args): this

	/**
	 * *Experimental*
	 *
	 * Progressively shrinks the pattern by 'n' steps until there's nothing left, or if a second value is given (using mininotation list syntax with `:`),
	 * that number of times.
	 * A positive number will progressively drop steps from the start of a pattern, and a negative number from the end.
	 * @tags stepwise
	 * @return {Pattern}
	 * @example
	 * "tha dhi thom nam".shrink("1").sound()
	 * .bank("mridangam")
	 * @example
	 * "tha dhi thom nam".shrink("-1").sound()
	 * .bank("mridangam")
	 * @example
	 * "tha dhi thom nam".shrink("1 -1").sound().bank("mridangam").pace(4)
	 * @example
	 * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
	   .shrink("1 -1").pace(8)
	
	 */
	shrink(...args): this

	/**
	 * *Experimental*
	 *
	 * Progressively grows the pattern by 'n' steps until the full pattern is played, or if a second value is given (using mininotation list syntax with `:`),
	 * that number of times.
	 * A positive number will progressively grow steps from the start of a pattern, and a negative number from the end.
	 * @tags stepwise
	 * @return {Pattern}
	 * @example
	 * "tha dhi thom nam".grow("1").sound()
	 * .bank("mridangam")
	 * @example
	 * "tha dhi thom nam".grow("-1").sound()
	 * .bank("mridangam")
	 * @example
	 * "tha dhi thom nam".grow("1 -1").sound().bank("mridangam").pace(4)
	 * @example
	 * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
	   .grow("1 -1").pace(8)
	 */
	grow(...args): this

	/**
	 * *Experimental*
	 * 
	 * Inserts a pattern into a list of patterns. On the first repetition it will be inserted at the end of the list, then moved backwards through the list 
	 * on successive repetitions. The patterns are added together stepwise, with all repetitions taking place over a single cycle. Using `pace` to set the 
	 * number of steps per cycle is therefore usually recommended.
	 *
	 * @tags stepwise
	 * @return {Pattern}
	 * @example
	 * "[c g]".tour("e f", "e f g", "g f e c").note()
	   .sound("folkharp")
	   .pace(8)
	 */
	tour(...args): this

	/**
	 * *Experimental*
	 * 
	 * 'zips' together the steps of the provided patterns. This can create a long repetition, taking place over a single, dense cycle. 
	 * Using `pace` to set the number of steps per cycle is therefore usually recommended.
	 * 
	 * @tags stepwise
	 * @returns {Pattern}
	 * @example
	 * zip("e f", "e f g", "g [f e] a f4 c").note()
	   .sound("folkharp")
	   .pace(8)
	 */
	zip(...args): this

	/** Aliases for `stepcat` */
	timecat(...args): this

	/**
	 * Cuts each sample into the given number of parts, allowing you to explore a technique known as 'granular synthesis'.
	 * It turns a pattern of samples into a pattern of parts of samples.
	 * @name chop
	 * @tags samples
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
	 * s("rhodes")
	 *  .chop(4)
	 *  .rev() // reverse order of chops
	 *  .loopAt(2) // fit sample into 2 cycles
	 *
	 */
	chop(...args): this

	/**
	 * Cuts each sample into the given number of parts, triggering progressive portions of each sample at each loop.
	 * @name striate
	 * @tags samples
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("numbers:0 numbers:1 numbers:2").striate(6).slow(3)
	 */
	striate(...args): this

	/**
	 * Makes the sample fit the given number of cycles by changing the speed.
	 * @name loopAt
	 * @tags samples, pitch
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
	 * s("rhodes").loopAt(2)
	 */
	loopAt(...args): this

	/**
	 * Chops samples into the given number of slices, triggering those slices with a given pattern of slice numbers.
	 * Instead of a number, it also accepts a list of numbers from 0 to 1 to slice at specific points.
	 * @name slice
	 * @tags samples
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * samples('github:tidalcycles/dirt-samples')
	 * s("breaks165").slice(8, "0 1 <2 2*2> 3 [4 0] 5 6 7".every(3, rev)).slow(0.75)
	 * @example
	 * samples('github:tidalcycles/dirt-samples')
	 * s("breaks125").fit().slice([0,.25,.5,.75], "0 1 1 <2 3>")
	 */
	slice(...args): this

	/**
	 *
	 * make something happen on event time
	 * uses browser timeout which is innacurate for audio tasks
	 * @name onTriggerTime
	 * @tags external_io
	 * @memberof Pattern
	 *  @returns Pattern
	 * @example
	 * s("bd!8").onTriggerTime((hap) => {console.log(hap)})
	 */
	onTriggerTime(...args): this

	/**
	 * Works the same as slice, but changes the playback speed of each slice to match the duration of its step.
	 * @name splice
	 * @tags samples, pitch
	 * @example
	 * samples('github:tidalcycles/dirt-samples')
	 * s("breaks165")
	 * .splice(8,  "0 1 [2 3 0]@2 3 0@2 7")
	 */
	splice(...args): this

	/**
	 * Makes the sample fit its event duration. Good for rhythmical loops like drum breaks.
	 * Similar to `loopAt`.
	 * @name fit
	 * @tags samples, pitch
	 * @example
	 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
	 * s("rhodes/2").fit()
	 */
	fit(...args): this

	/**
	 * Makes the sample fit the given number of cycles and cps value, by
	 * changing the speed. deprecated: use loopAt or fit instead, together with setCps / setCpm.
	 * @name loopAtCps
	 * @tags samples, pitch
	 * @memberof Pattern
	 * @deprecated
	 * @returns Pattern
	 * @example
	 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
	 * s("rhodes").loopAtCps(4,1.5).cps(1.5)
	 */
	loopAtCps(...args): this

	/** exposes a custom value at query time. basically allows mutating state without evaluation
	 * @tags internals
	 */
	ref(...args): this

	/**
	 * Cross-fades between left and right from 0 to 1:
	 * - 0 = (full left, no right)
	 * - .5 = (both equal)
	 * - 1 = (no left, full right)
	 *
	 * @name xfade
	 * @tags amplitude
	 * @example
	 * xfade(s("bd*2"), "<0 .25 .5 .75 1>", s("hh*8"))
	 */
	xfade(...args): this

	/**
	 * creates a structure pattern from divisions of a cycle
	 * especially useful for creating rhythms
	 * @name beat
	 * @tags temporal
	 * @example
	 * s("bd").beat("0,7,10", 16)
	 * @example
	 * s("sd").beat("4,12", 16)
	 */
	beat(...args): this

	/**
	 * Takes two binary rhythms represented as lists of 1s and 0s, and a number
	 * between 0 and 1 that morphs between them. The two lists should contain the same
	 * number of true values.
	 * @example
	 * sound("hh").struct(morph([1,0,1,0,1,0,1,0], // straight rhythm
	 *                          [1,1,0,1,0,1,0], // wonky rhythm
	 *                          0.25 // creates a slightly wonky rhythm
	 *                         )
	 *                   )
	 * @example
	 * sound("hh").struct(morph("1:0:1:0:1:0:1:0", // straight rhythm
	 *                          "1:1:0:1:0:1:0", // wonky rhythm
	 *                          sine.slow(8) // slowly morph between the rhythms
	 *                         )
	 *                   )
	 * @tags temporal
	 */
	morph(...args): this

	/**
	 * Soft-clipping distortion
	 *
	 * @name soft
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	soft(distortion,volume): this

	/**
	 * Hard-clipping distortion
	 *
	 * @name hard
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	hard(distortion,volume): this

	/**
	 * Cubic polynomial distortion
	 *
	 * @name cubic
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	cubic(distortion,volume): this

	/**
	 * Diode-emulating distortion
	 *
	 * @name diode
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	diode(distortion,volume): this

	/**
	 * Asymmetrical diode distortion
	 *
	 * @name asym
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	asym(distortion,volume): this

	/**
	 * Wavefolding distortion
	 *
	 * @name fold
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	fold(distortion,volume): this

	/**
	 * Wavefolding distortion composed with sinusoid
	 *
	 * @name sinefold
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	sinefold(distortion,volume): this

	/**
	 * Distortion via Chebyshev polynomials
	 *
	 * @name chebyshev
	 * @tags distortion, superdough
	 * @param {number | Pattern} distortion amount of distortion to apply
	 * @param {number | Pattern} volume linear postgain of the distortion
	 *
	 */
	chebyshev(distortion,volume): this

	/**
	 * Turns a list of patterns into a single pattern which outputs list-values
	 *
	 * @name parray
	 * @tags combiners
	 * @returns Pattern
	 */
	parray(...args): this

	/**
	 * Scale the magnitude of the harmonics of one of the core synths ('sine', 'tri', 'saw', ..)
	 *
	 * Can also be used to create a new synth via `s('user').partials(...)`
	 *
	 * @name partials
	 * @tags superdough
	 * @param {number[] | Pattern} magnitudes List of [0, 1] magnitudes for partials. 0th entry is the fundamental harmonic (i.e. DC offset is skipped)
	 * @example
	 * s("user").seg(16).n(irand(8)).scale("A:major")
	 *   .partials([1, 0, 1, 0, 0, 1])
	 * @example
	 * s("saw").seg(8).n(irand(12)).scale("G#:minor")
	 *   .partials(binaryL(irand(256).add("1")))
	 */
	partials(magnitudes): this

	/**
	 * Rotates the harmonics of one of the core synths ('sine', 'tri', 'saw', 'user', ..) by a list of phases
	 *
	 * @name phases
	 * @tags superdough
	 * @param {number[] | Pattern} phases List of [0, 1) phases for partials. 0th entry is the fundamental phase (i.e. DC offset is skipped)
	 * @example
	 * // Phase cancellation
	 * s("saw").seg(8).n(irand(12)).scale("G#1:minor")
	 *   .partials(partials([1, 1, 1]))
	 *   .superimpose(x => x.phases([0.5, 0.5, 0.5]))
	 */
	phases(phases): this

	/**
	 * Establishes an FX chain. Can be called by chaining .FX(fx1).FX(fx2)..
	 * calls and/or in a single .FX(fx1, fx2, ..) call. The fx1, .. are _patterns_ which
	 * establish the controls of the given effect. See examples.
	 * @name FX
	 * @tags superdough
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * $: s("[sbd <hh [bd | lt | oh]>]*4").dec(.4)
	 *   .FX(
	 *     phaser(0.5).gain(2),
	 *     bpf(800),
	 *     distort(1.3),
	 *     room(0.2),
	 *     delay(0.5).gain(1.25),
	 *     distort(0.3),
	 *   ).fxr(1.7) // sets release time of effects (like delay)
	 * @example
	 * $: s("saw").fm(0.5)
	 *   .delay(0.3) // outer effects are applied *last*
	 *   .FX(coarse(4)) // first coarse
	 *   .FX(lpf(500).lpe(4).lpa(1).lpd(2)) // then lpf
	 *   .FX(distort(1)) // then distort
	 */
	FX(...args): this

	/**
	 * Produces a [Kabelsalat](https://kabel.salat.dev/) modular sound engine.
	 * This can be used as either an effect (by including `audioin()` at the beginning
	 * of your kabel expression) or as a sound source (via any expression which doesn't
	 * start with `audioin()`).
	 *
	 * Some helpers you have available to you:
	 *   * Strudel mini notation works fine in K(..) via "" or ``
	 *   * More complex Strudel expressions (like "0 1 2".fast(4) or irand(24)) can be
	 *     written by wrapping them in `S(..)` inside your Kabel code
	 *   * We expose Strudel's note frequency under `sFreq` and Strudel's gate
	 *     information under `sGate`
	 *   * You can use more complex multi-line expressions (like `let x = a; let y = b; x.lpf(y);`)
	 *     by wrapping them inside a function in K (see example).
	 *
	 * @name K
	 * @tags generators, superdough
	 * @param {KabelsalatExpression | Function} expr Kabelsalat graph definition
	 * @memberof Pattern
	 * @returns Pattern
	 *
	 * @example
	 * note("A c e".fast(4)).transpose("<0 2 4 6 8>")
	 *   .scale("F:minor").transpose("12")
	 *   .s("saw")
	 *   .K(
	 *     // audioin().mul(sGate.adsr(0.001, 0.3, 0, 0.2)) // as effect
	 *     saw(saw(sFreq / "2!3 16").mul(8).add(sFreq).lag("0!3 0.1")).mul(0.3) // as source
	 *     .mul(sGate.adsr(0, 0.15, 0.5, "0.1!3 1"))
	 *     .lpf(sGate.adsr(0, 0.2, 0.3, 0.2).mul(1).add(0))
	 *     .add(x => x.delay(S("0.3 0.2".fast(2))).mul(0.7))
	 *     .add(x => x.delay("0.03 [0.08 0.01] 0.01 0.013").mul(0.77)).mul(0.7)
	 *     .add(x => x.delay(.13).mul(0.7))
	 *     .out()
	 *   )
	 *
	 * @example
	 * n("<0 1 <2 3 2 4>>*16")
	 *   .scale("G#2:minor").sometimes(x => x.transpose("12 | 24"))
	 *   .K(() => {
	 *     const att = S(rand.range(0, 0.05))
	 *     const dec = S(rand.range(0.05, 0.2))
	 *     let f = n(sFreq);
	 *     const mod = sine(f).mul("0.1 | 0.2 | 0.3")
	 *       .add("[[1.5 1] | 1 | 2 | 4 | [6 4@3]]*2")
	 *     saw(f.mul(mod))
	 *     .mul(sGate.ad(att, dec))
	 *     .add(x => x.delay(0.4).mul(0.3))
	 *     .out()
	 *   }).fxr(1).room(0.3)
	 */
	K(expr): this

	/**
	 * Creates a worklet effect. Typically derived by writing K(...) in the REPL which will parse
	 * Kabelsalat code.
	 *
	 * @name worklet
	 * @param {string} src Source code of the worklet update function
	 * @param {...number | ...Pattern} inputs Worklet inputs
	 * @memberof Pattern
	 * @returns Pattern
	 * @noAutocomplete
	 */
	worklet(src,inputs): this

	/**
	 * Creates a pattern of numbers in base b from a number or pattern of numbers
	 * limited to d digits long from the right
	 *
	 * @name base
	 * @tags generators
	 * @param {number} n - number to convert (can be a pattern or array)
	 * @param {number} b - base to convert to (defaults to 10) (can be a pattern)
	 * @param {number} d - max number of digits to produce for each n (defaults to 0 for all) (can be a pattern)
	 * @example
	 * $: note(base("7175 543", 10, 3)).scale("c:major").s("saw")
	 * // $: note("1 7 5 5 4 3").scale("c:major").s("saw")
	 */
	base(n,b,d): this

	/** * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
	 * Similar to `inhabit`, but maintains the structure of the original patterns.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 * @example
	 * note("<0 1 2!2 3>".pick(["g a", "e f", "f g f g" , "g c d"]))
	 * @example
	 * sound("<0 1 [2,0]>".pick(["bd sd", "cp cp", "hh hh"]))
	 * @example
	 * sound("<0!2 [0,1] 1>".pick(["bd(3,8)", "sd sd"]))
	 * @example
	 * s("<a!2 [a,b] b>".pick({a: "bd(3,8)", b: "sd sd"}))
	 */
	pick(pat,xs): this

	/** * The same as `pick`, but if you pick a number greater than the size of the list,
	 * it wraps around, rather than sticking at the maximum value.
	 * For example, if you pick the fifth pattern of a list of three, you'll get the
	 * second one.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	pickmod(pat,xs): this

	/** * pickF lets you use a pattern of numbers to pick which function to apply to another pattern.
	 * @tags combiners, functional
	 * @param {Pattern} pat
	 * @param {Pattern} lookup a pattern of indices or names
	 * @param {function[] | object} lookup the array or lookup object of functions from which to pull
	 * @returns {Pattern}
	 * @example
	 * s("bd [rim hh]").pickF("<0 1 2>", [rev,jux(rev),fast(2)])
	 * @example
	 * note("<c2 d2>(3,8)").s("square")
	 * .pickF("<0 2> 1", [jux(rev), fast(2), x=>x.lpf(800)])
	 * @example
	 * note("<c2 d2>(3,8)").s("square")
	 * .pickF("<jr l> f", { jr:jux(rev), f:fast(2), l:x=>x.lpf(800) })
	 */
	pickF(pat,lookup,lookup): this

	/** * The same as `pickF`, but if you pick a number greater than the size of the functions list,
	 * it wraps around, rather than sticking at the maximum value.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {Pattern} lookup a pattern of indices or names
	 * @param {function[] | object} lookup the array or lookup object of functions from which to pull
	 * @returns {Pattern}
	 */
	pickmodF(pat,lookup,lookup): this

	/** * Similar to `pick`, but it applies an outerJoin instead of an innerJoin.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	pickOut(pat,xs): this

	/** * The same as `pickOut`, but if you pick a number greater than the size of the list,
	 * it wraps around, rather than sticking at the maximum value.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	pickmodOut(pat,xs): this

	/** * Similar to `pick`, but the choosen pattern is restarted when its index is triggered.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	pickRestart(pat,xs): this

	/** * The same as `pickRestart`, but if you pick a number greater than the size of the list,
	   * it wraps around, rather than sticking at the maximum value.
	   * @tags combiners
	   * @param {Pattern} pat
	   * @param {*} xs
	   * @returns {Pattern}
	   * @example
	   * "<a@2 b@2 c@2 d@2>".pickRestart({
	        a: n("0 1 2 0"),
	        b: n("2 3 4 ~"),
	        c: n("[4 5] [4 3] 2 0"),
	        d: n("0 -3 0 ~")
	      }).scale("C:major").s("piano")
	   */
	pickmodRestart(pat,xs): this

	/** * Similar to `pick`, but the choosen pattern is reset when its index is triggered.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	pickReset(pat,xs): this

	/** * The same as `pickReset`, but if you pick a number greater than the size of the list,
	 * it wraps around, rather than sticking at the maximum value.
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	pickmodReset(pat,xs): this

	/** Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
	 * Similar to `pick`, but cycles are squeezed into the target ('inhabited') pattern.
	 * @name inhabit
	 * @tags combiners
	 * @synonyms pickSqueeze
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 * @example
	 * let a = s("bd(3,8)")
	 * let b = s("cp sd")
	 * "<a b [a,b]>".inhabit({ a, b })
	 * @example
	 * s("a@2 [a b] a"
	 * .inhabit({a: "bd(3,8)", b: "sd sd"}))
	 * .slow(4)
	 */
	inhabit(pat,xs): this

	/** Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
	 * Similar to `pick`, but cycles are squeezed into the target ('inhabited') pattern.
	 * @name inhabit
	 * @tags combiners
	 * @synonyms pickSqueeze
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 * @example
	 * let a = s("bd(3,8)")
	 * let b = s("cp sd")
	 * "<a b [a,b]>".inhabit({ a, b })
	 * @example
	 * s("a@2 [a b] a"
	 * .inhabit({a: "bd(3,8)", b: "sd sd"}))
	 * .slow(4)
	 */
	pickSqueeze(pat,xs): this

	/** * The same as `inhabit`, but if you pick a number greater than the size of the list,
	 * it wraps around, rather than sticking at the maximum value.
	 * For example, if you pick the fifth pattern of a list of three, you'll get the
	 * second one.
	 * @name inhabitmod
	 * @synonyms pickmodSqueeze
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	inhabitmod(pat,xs): this

	/** * The same as `inhabit`, but if you pick a number greater than the size of the list,
	 * it wraps around, rather than sticking at the maximum value.
	 * For example, if you pick the fifth pattern of a list of three, you'll get the
	 * second one.
	 * @name inhabitmod
	 * @synonyms pickmodSqueeze
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	pickmodSqueeze(pat,xs): this

	/**
	 * Pick from the list of values (or patterns of values) via the index using the given
	 * pattern of integers. The selected pattern will be compressed to fit the duration of the selecting event
	 * @tags combiners
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 * @example
	 * note(squeeze("<0@2 [1!2] 2>", ["g a", "f g f g" , "g a c d"]))
	 */
	squeeze(pat,xs): this

	/**
	   * Changes the global tempo to the given cycles per minute
	   *
	   * @name setcpm
	   * @tags temporal
	   * @alias setCpm
	   * @param {number} cpm cycles per minute
	   * @example
	   * setcpm(140/4) // =140 bpm in 4/4
	   * $: s("bd*4,[- sd]*2").bank('tr707')
	   */
	setcpm(cpm): this

	/**
	   * Applies a function to all the running patterns. Note that the patterns are grouped together into a single `stack` before the function is applied. This is probably what you want, but see `each` for
	   * a version that applies the function to each pattern separately.
	   *
	   * **Note:** Patterns must be labeled (e.g. with `$:`) to be picked up by `all`. An unlabeled
	   * pattern such as `note("c4")` is not registered and will produce no audio when `all` is present.
	   * Use `$: note("c4")` instead.
	   * ```
	   * $: sound("bd - cp sd")
	   * $: sound("hh*8")
	   * all(fast("<2 3>"))
	   * ```
	   * ```
	   * $: sound("bd - cp sd")
	   * $: sound("hh*8")
	   * all(x => x.pianoroll())
	   * ```
	   *
	   * @tags combiners
	   */
	all(): this

	/** Applies a function to each of the running patterns separately. This is intended for future use with upcoming 'stepwise' features. See `all` for a version that applies the function to all the patterns stacked together into a single pattern.
	   *
	   * **Note:** Patterns must be labeled (e.g. with `$:`) to be picked up by `each`. An unlabeled
	   * pattern such as `note("c4")` is not registered and will produce no audio when `each` is present.
	   * Use `$: note("c4")` instead.
	   * ```
	   * $: sound("bd - cp sd")
	   * $: sound("hh*8")
	   * each(fast("<2 3>"))
	   * ```
	   * @tags combiners
	   */
	each(): this

	/**
	 *  A sawtooth signal between 0 and 1.
	 *
	 * @return {Pattern}
	 * @tags generators
	 * @example
	 * note("<c3 [eb3,g3] g2 [g3,bb3]>*8")
	 * .clip(saw.slow(2))
	 * @example
	 * n(saw.range(0,8).segment(8))
	 * .scale('C major')
	 *
	 */
	saw(...args): this

	/**
	 *  A sawtooth signal between -1 and 1 (like `saw`, but bipolar).
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	saw2(...args): this

	/**
	 *  A sawtooth signal between 1 and 0 (like `saw`, but flipped).
	 *
	 * @return {Pattern}
	 * @tags generators
	 * @example
	 * note("<c3 [eb3,g3] g2 [g3,bb3]>*8")
	 * .clip(isaw.slow(2))
	 * @example
	 * n(isaw.range(0,8).segment(8))
	 * .scale('C major')
	 *
	 */
	isaw(...args): this

	/**
	 *  A sawtooth signal between 1 and -1 (like `saw2`, but flipped).
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	isaw2(...args): this

	/**
	 *  A sine signal between -1 and 1 (like `sine`, but bipolar).
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	sine2(...args): this

	/**
	 *  A sine signal between 0 and 1.
	 * @return {Pattern}
	 * @tags generators
	 * @example
	 * n(sine.segment(16).range(0,15))
	 * .scale("C:minor")
	 *
	 */
	sine(...args): this

	/**
	 *  A cosine signal between 0 and 1.
	 *
	 * @return {Pattern}
	 * @tags generators
	 * @example
	 * n(stack(sine,cosine).segment(16).range(0,15))
	 * .scale("C:minor")
	 *
	 */
	cosine(...args): this

	/**
	 *  A cosine signal between -1 and 1 (like `cosine`, but bipolar).
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	cosine2(...args): this

	/**
	 *  A square signal between 0 and 1.
	 * @return {Pattern}
	 * @tags generators
	 * @example
	 * n(square.segment(4).range(0,7)).scale("C:minor")
	 *
	 */
	square(...args): this

	/**
	 *  A square signal between -1 and 1 (like `square`, but bipolar).
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	square2(...args): this

	/**
	 *  A triangle signal between 0 and 1.
	 *
	 * @return {Pattern}
	 * @tags generators
	 * @example
	 * n(tri.segment(8).range(0,7)).scale("C:minor")
	 *
	 */
	tri(...args): this

	/**
	 *  A triangle signal between -1 and 1 (like `tri`, but bipolar).
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	tri2(...args): this

	/**
	 *  An inverted triangle signal between 1 and 0 (like `tri`, but flipped).
	 *
	 * @return {Pattern}
	 * @tags generators
	 * @example
	 * n(itri.segment(8).range(0,7)).scale("C:minor")
	 *
	 */
	itri(...args): this

	/**
	 *  An inverted triangle signal between -1 and 1 (like `itri`, but bipolar).
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	itri2(...args): this

	/**
	 *  A signal representing the cycle time.
	 *
	 * @return {Pattern}
	 * @tags generators
	 */
	time(...args): this

	/**
	 *  The mouse's x position value ranges from 0 to 1.
	 * @name mousex
	 * @return {Pattern}
	 * @tags external_io
	 * @example
	 * n(mousex.segment(4).range(0,7)).scale("C:minor")
	 *
	 */
	mousex(...args): this

	/**
	 *  The mouse's y position value ranges from 0 to 1.
	 * @name mousey
	 * @return {Pattern}
	 * @tags external_io
	 * @example
	 * n(mousey.segment(4).range(0,7)).scale("C:minor")
	 *
	 */
	mousey(...args): this

	/**
	 * Sets which random number generator to use. Historically Strudel would
	 * use `useRNG('legacy')`, which remains the default. To use a new more statistically
	 * precise RNG, try `useRNG('precise')`.
	 *
	 * @name useRNG
	 * @tags generators, math
	 * @param {string} mod - Mode. One of 'legacy', 'precise'
	 * @example
	 * useRNG('legacy')
	 * // Repeats every 300 cycles
	 * $: n(irand(50)).seg(16).scale("C:minor").ribbon(88, 32)
	 * $: n(irand(50)).seg(16).scale("C:minor").ribbon(388, 32)
	 */
	useRNG(mod): this

	/**
	 * A discrete pattern of numbers from 0 to n-1
	 * @tags generators
	 * @example
	 * n(run(4)).scale("C4:pentatonic")
	 * // n("0 1 2 3").scale("C4:pentatonic")
	 */
	run(...args): this

	/**
	 * Creates a binary pattern from a number.
	 *
	 * @name binary
	 * @tags generators
	 * @param {number} n - input number to convert to binary
	 * @example
	 * "hh".s().struct(binary(5))
	 * // "hh".s().struct("1 0 1")
	 */
	binary(n): this

	/**
	 * Creates a binary pattern from a number, padded to n bits long.
	 *
	 * @name binaryN
	 * @tags generators
	 * @param {number} n - input number to convert to binary
	 * @param {number} nBits - pattern length, defaults to 16
	 * @example
	 * "hh".s().struct(binaryN(55532, 16))
	 * // "hh".s().struct("1 1 0 1 1 0 0 0 1 1 1 0 1 1 0 0")
	 */
	binaryN(n,nBits): this

	/**
	 * Creates a binary list pattern from a number.
	 *
	 * @name binaryL
	 * @tags generators
	 * @param {number} n - input number to convert to binary
	 * s("saw").seg(8)
	 *   .partials(binaryL(irand(4096).add(1)))
	 */
	binaryL(n): this

	/**
	 * Creates a binary list pattern from a number, padded to n bits long.
	 *
	 * @name binaryNL
	 * @tags generators
	 * @param {number} n - input number to convert to binary
	 * @param {number} nBits - pattern length, defaults to 16
	 */
	binaryNL(n,nBits): this

	/**
	 * Creates a list of random numbers of the given length
	 *
	 * @name randL
	 * @tags generators
	 * @param {number} n Number of random numbers to sample
	 * @example
	 * s("saw").seg(16).n(irand(12)).scale("F1:minor")
	 *   .partials(randL(8))
	 */
	randL(n): this

	/**
	 * Slices a pattern into the given number of parts, then plays those parts in random order.
	 * Each part will be played exactly once per cycle.
	 * @name shuffle
	 * @tags temporal
	 * @example
	 * note("c d e f").sound("piano").shuffle(4)
	 * @example
	 * seq("c d e f".shuffle(4), "g").note().sound("piano")
	 */
	shuffle(...args): this

	/**
	 * Slices a pattern into the given number of parts, then plays those parts at random. Similar to `shuffle`,
	 * but parts might be played more than once, or not at all, per cycle.
	 * @name scramble
	 * @tags temporal
	 * @example
	 * note("c d e f").sound("piano").scramble(4)
	 * @example
	 * seq("c d e f".scramble(4), "g").note().sound("piano")
	 */
	scramble(...args): this

	/**
	 * Modify a pattern by applying a function to the `randomSeed` control if present
	 *
	 * @tags math
	 * @param {Function} func Function from seed (or undefined) to seed (or undefined)
	 * @param {Pattern} pat Pattern to update
	 * @returns Pattern
	 */
	withSeed(func,pat): this

	/**
	 * Change the seed for random signals. Normally, random signals depend on time,
	 * so two patterns at the same time will have the same random values. Specifying
	 * a new seed changes the signal output by `rand`. This also affects other functions
	 * that use randomness, like `shuffle` and `sometimes`.
	 *
	 * @name seed
	 * @tags math
	 * @param {number} n A new seed. Can be any number.
	 * @example
	 * $: s("hh*4").degrade();
	 * $: s("bd*4").degrade().seed(1); // Will degrade different events from the hi-hat
	 */
	seed(n): this

	/**
	 * A continuous pattern of random numbers, between 0 and 1.
	 *
	 * @name rand
	 * @tags generators
	 * @example
	 * // randomly change the cutoff
	 * s("bd*4,hh*8").cutoff(rand.range(500,8000))
	 *
	 */
	rand(...args): this

	/**
	 * A continuous pattern of random numbers, between -1 and 1
	 * @tags generators
	 */
	rand2(...args): this

	/**
	 * A continuous pattern of 0 or 1 (binary random), with a probability for the value being 1
	 *
	 * @name brandBy
	 * @tags generators
	 * @param {number} probability - a number between 0 and 1
	 * @example
	 * s("hh*10").pan(brandBy(0.2))
	 */
	brandBy(probability): this

	/**
	 * A continuous pattern of 0 or 1 (binary random)
	 *
	 * @name brand
	 * @tags generators
	 * @example
	 * s("hh*10").pan(brand)
	 */
	brand(...args): this

	/**
	 * A continuous pattern of random integers, between 0 and n-1.
	 *
	 * @name irand
	 * @tags generators
	 * @param {number} n max value (exclusive)
	 * @example
	 * // randomly select scale notes from 0 - 7 (= C to C)
	 * n(irand(8)).struct("x x*2 x x*3").scale("C:minor")
	 *
	 */
	irand(n): this

	/**
	 * Choose from the list of values (or patterns of values) using the given
	 * pattern of numbers, which should be in the range of 0..1
	 * @tags temporal
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 * @example
	 * note("c2 g2!2 d2 f1").s(chooseWith(sine.fast(2), ["sawtooth", "triangle", "bd:6"]))
	 */
	chooseWith(pat,xs): this

	/**
	 * As with {chooseWith}, but the structure comes from the chosen values, rather
	 * than the pattern you're using to choose with.
	 * @tags temporal
	 * @param {Pattern} pat
	 * @param {*} xs
	 * @returns {Pattern}
	 */
	chooseInWith(pat,xs): this

	/**
	 * Chooses randomly from the given list of elements.
	 * @tags temporal
	 * @param  {...any} xs values / patterns to choose from.
	 * @returns {Pattern} - a continuous pattern.
	 * @example
	 * note("c2 g2!2 d2 f1").s(choose("sine", "triangle", "bd:6"))
	 */
	choose(xs): this

	/**
	 * Chooses from the given list of values (or patterns of values), according
	 * to the pattern that the method is called on. The pattern should be in
	 * the range 0 .. 1.
	 * @tags temporal
	 * @param  {...any} xs
	 * @returns {Pattern}
	 */
	choose(xs): this

	/**
	 * As with choose, but the pattern that this method is called on should be
	 * in the range -1 .. 1
	 * @tags temporal
	 * @param  {...any} xs
	 * @returns {Pattern}
	 */
	choose2(xs): this

	/**
	 * Picks one of the elements at random each cycle.
	 * @tags temporal
	 * @synonyms randcat
	 * @returns {Pattern}
	 * @example
	 * chooseCycles("bd", "hh", "sd").s().fast(8)
	 * @example
	 * s("bd | hh | sd").fast(8)
	 */
	chooseCycles(...args): this

	/**
	 * Picks one of the elements at random each cycle.
	 * @tags temporal
	 * @synonyms randcat
	 * @returns {Pattern}
	 * @example
	 * chooseCycles("bd", "hh", "sd").s().fast(8)
	 * @example
	 * s("bd | hh | sd").fast(8)
	 */
	randcat(...args): this

	/**
	 * Chooses randomly from the given list of elements by giving a probability to each element
	 * @tags temporal
	 * @param {...any} pairs arrays of value and weight
	 * @returns {Pattern} - a continuous pattern.
	 * @example
	 * note("c2 g2!2 d2 f1").s(wchoose(["sine",10], ["triangle",1], ["bd:6",1]))
	 */
	wchoose(pairs): this

	/**
	 * Picks one of the elements at random each cycle by giving a probability to each element
	 * @tags temporal
	 * @synonyms wrandcat
	 * @returns {Pattern}
	 * @example
	 * wchooseCycles(["bd",10], ["hh",1], ["sd",1]).s().fast(8)
	 * @example
	 * wchooseCycles(["c c c",5], ["a a a",3], ["f f f",1]).fast(4).note()
	 * @example
	 * // The probability can itself be a pattern
	 * wchooseCycles(["bd(3,8)","<5 0>"], ["hh hh hh",3]).fast(4).s()
	 */
	wchooseCycles(...args): this

	/**
	 * Picks one of the elements at random each cycle by giving a probability to each element
	 * @tags temporal
	 * @synonyms wrandcat
	 * @returns {Pattern}
	 * @example
	 * wchooseCycles(["bd",10], ["hh",1], ["sd",1]).s().fast(8)
	 * @example
	 * wchooseCycles(["c c c",5], ["a a a",3], ["f f f",1]).fast(4).note()
	 * @example
	 * // The probability can itself be a pattern
	 * wchooseCycles(["bd(3,8)","<5 0>"], ["hh hh hh",3]).fast(4).s()
	 */
	wrandcat(...args): this

	/**
	 * Generates a continuous pattern of [perlin noise](https://en.wikipedia.org/wiki/Perlin_noise), in the range 0..1.
	 *
	 * @tags generators
	 * @name perlin
	 * @example
	 * // randomly change the cutoff
	 * s("bd*4,hh*8").cutoff(perlin.range(500,8000))
	 *
	 */
	perlin(...args): this

	/**
	 * Generates a continuous pattern of [berlin noise](conceived by Jame Coyne and Jade Rowland as a joke but turned out to be surprisingly cool and useful,
	 * like perlin noise but with sawtooth waves), in the range 0..1.
	 *
	 * @tags generators
	 * @name berlin
	 * @example
	 * // ascending arpeggios
	 * n("0!16".add(berlin.fast(4).mul(14))).scale("d:minor")
	 *
	 */
	berlin(...args): this

	/**
	 * Randomly removes events from the pattern by a given amount.
	 * 0 = 0% chance of removal
	 * 1 = 100% chance of removal
	 *
	 * @tags temporal
	 * @name degradeBy
	 * @memberof Pattern
	 * @param {number} amount - a number between 0 and 1
	 * @returns Pattern
	 * @example
	 * s("hh*8").degradeBy(0.2)
	 * @example
	 * s("[hh?0.2]*8")
	 * @example
	 * //beat generator
	 * s("bd").segment(16).degradeBy(.5).ribbon(16,1)
	 */
	degradeBy(amount): this

	/**
	 *
	 * Randomly removes 50% of events from the pattern. Shorthand for `.degradeBy(0.5)`
	 *
	 * @tags temporal
	 * @name degrade
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("hh*8").degrade()
	 * @example
	 * s("[hh?]*8")
	 */
	degrade(...args): this

	/**
	 * Inverse of `degradeBy`: Randomly removes events from the pattern by a given amount.
	 * 0 = 100% chance of removal
	 * 1 = 0% chance of removal
	 * Events that would be removed by degradeBy are let through by undegradeBy and vice versa (see second example).
	 *
	 * @tags temporal
	 * @name undegradeBy
	 * @memberof Pattern
	 * @param {number} amount - a number between 0 and 1
	 * @returns Pattern
	 * @example
	 * s("hh*8").undegradeBy(0.2)
	 * @example
	 * s("hh*10").layer(
	 *   x => x.degradeBy(0.2).pan(0),
	 *   x => x.undegradeBy(0.8).pan(1)
	 * )
	 */
	undegradeBy(amount): this

	/**
	 * Inverse of `degrade`: Randomly removes 50% of events from the pattern. Shorthand for `.undegradeBy(0.5)`
	 * Events that would be removed by degrade are let through by undegrade and vice versa (see second example).
	 *
	 * @tags temporal
	 * @name undegrade
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("hh*8").undegrade()
	 * @example
	 * s("hh*10").layer(
	 *   x => x.degrade().pan(0),
	 *   x => x.undegrade().pan(1)
	 * )
	 */
	undegrade(...args): this

	/**
	 *
	 * Randomly applies the given function by the given probability.
	 * Similar to `someCyclesBy`
	 *
	 * @tags temporal
	 * @name sometimesBy
	 * @memberof Pattern
	 * @param {number | Pattern} probability - a number between 0 and 1
	 * @param {function} function - the transformation to apply
	 * @returns Pattern
	 * @example
	 * s("hh*8").sometimesBy(.4, x=>x.speed("0.5"))
	 */
	sometimesBy(probability,function): this

	/**
	 *
	 * Applies the given function with a 50% chance
	 *
	 * @tags temporal
	 * @name sometimes
	 * @memberof Pattern
	 * @param {function} function - the transformation to apply
	 * @returns Pattern
	 * @example
	 * s("hh*8").sometimes(x=>x.speed("0.5"))
	 */
	sometimes(function): this

	/**
	 *
	 * Randomly applies the given function by the given probability on a cycle by cycle basis.
	 * Similar to `sometimesBy`
	 *
	 * @name someCyclesBy
	 * @memberof Pattern
	 * @param {number | Pattern} probability - a number between 0 and 1
	 * @param {function} function - the transformation to apply
	 * @returns Pattern
	 * @tags temporal
	 * @example
	 * s("bd,hh*8").someCyclesBy(.3, x=>x.speed("0.5"))
	 */
	someCyclesBy(probability,function): this

	/**
	 *
	 * Shorthand for `.someCyclesBy(0.5, fn)`
	 *
	 * @name someCycles
	 * @memberof Pattern
	 * @returns Pattern
	 * @tags temporal
	 * @example
	 * s("bd,hh*8").someCycles(x=>x.speed("0.5"))
	 */
	someCycles(...args): this

	/**
	 *
	 * Shorthand for `.sometimesBy(0.75, fn)`
	 *
	 * @name often
	 * @memberof Pattern
	 * @returns Pattern
	 * @tags temporal
	 * @example
	 * s("hh*8").often(x=>x.speed("0.5"))
	 */
	often(...args): this

	/**
	 *
	 * Shorthand for `.sometimesBy(0.25, fn)`
	 *
	 * @name rarely
	 * @memberof Pattern
	 * @returns Pattern
	 * @tags temporal
	 * @example
	 * s("hh*8").rarely(x=>x.speed("0.5"))
	 */
	rarely(...args): this

	/**
	 *
	 * Shorthand for `.sometimesBy(0.1, fn)`
	 *
	 * @tags temporal
	 * @name almostNever
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("hh*8").almostNever(x=>x.speed("0.5"))
	 */
	almostNever(...args): this

	/**
	 *
	 * Shorthand for `.sometimesBy(0.9, fn)`
	 *
	 * @tags temporal
	 * @name almostAlways
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("hh*8").almostAlways(x=>x.speed("0.5"))
	 */
	almostAlways(...args): this

	/**
	 *
	 * Shorthand for `.sometimesBy(0, fn)` (never calls fn)
	 *
	 * @tags temporal
	 * @name never
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("hh*8").never(x=>x.speed("0.5"))
	 */
	never(...args): this

	/**
	 *
	 * Shorthand for `.sometimesBy(1, fn)` (always calls fn)
	 *
	 * @tags temporal
	 * @name always
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("hh*8").always(x=>x.speed("0.5"))
	 */
	always(...args): this

	/**
	 *
	 * Do something on a keypress, or array of keypresses
	 * [Key name reference](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)
	 *
	 * @tags external_io
	 * @name whenKey
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * s("bd(5,8)").whenKey("Control:j", x => x.segment(16).color("red")).whenKey("Control:i", x => x.fast(2).color("blue"))
	 */
	whenKey(...args): this

	/**
	 *
	 * returns true when a key or array of keys is held
	 * [Key name reference](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)
	 *
	 * @tags external_io
	 * @name keyDown
	 * @memberof Pattern
	 * @returns Pattern
	 * @example
	 * keyDown("Control:j").pick([s("bd(5,8)"), s("cp(3,8)")])
	 */
	keyDown(...args): this

	/**
	 * A pattern measuring the duration of events,
	 * in cycles per event. `cyclesPer` doesn't have structure itself, but takes structure, and therefore
	 * event durations, from the pattern that it is combined with.
	 * For example `cyclesPer.struct("1 1 [1 1] 1")` would give the same as `"0.25 0.25 [0.125 0.125] 0.25"`.
	 * See also its reciprocal, `per`, also known as `perCycle`.
	 *
	 * @tags temporal
	 * @example
	 * // Shorter events are lower in pitch
	 * sound("saw saw [saw saw] saw")
	 *   .note(cyclesPer.range(50, 100))
	 * @example
	 * sound("bd sd [bd bd] sd*4 [- sd] [bd [bd bd]]")
	 *   .note(cyclesPer.add(20))
	 */
	cyclesPer(...args): this

	/**
	 * A pattern measuring the 'shortness' of events, or in other words, the duration of pattern events,
	 * in events per cycle. `per` doesn't have structure itself, but takes structure, and therefore
	 * event durations, from the pattern that it is combined with.
	 * For example `per.struct("1 1 [1 1] 1")` would give the same as `"4 4 [8 8] 4"`.
	 * See also its reciprocal, `cyclesPer`.
	 * @tags temporal
	 * @synonyms perCycle
	 * @example
	 * // Shorter events are more distorted
	 * n("0 0*2 0 0*2 0 [0 0 0]@2").sound("bd")
	 *  .distort(per.div(2))
	 */
	per(...args): this

	/**
	 * A pattern measuring the 'shortness' of events, or in other words, the duration of pattern events,
	 * in events per cycle. `per` doesn't have structure itself, but takes structure, and therefore
	 * event durations, from the pattern that it is combined with.
	 * For example `per.struct("1 1 [1 1] 1")` would give the same as `"4 4 [8 8] 4"`.
	 * See also its reciprocal, `cyclesPer`.
	 * @tags temporal
	 * @synonyms perCycle
	 * @example
	 * // Shorter events are more distorted
	 * n("0 0*2 0 0*2 0 [0 0 0]@2").sound("bd")
	 *  .distort(per.div(2))
	 */
	perCycle(...args): this

	/**
	 * Like `per` but measures the shortness of events according to an exponential curve. In
	 * particular, where the event duration halves, the
	 * returned value increases by one. `perx.struct("1 1 [1 [1 1]] 1")` would therefore be
	 * the same as `"3 3 [4 [5 5]] 3"`.
	 * @tags temporal
	 */
	perx(...args): this

	/**
	 * @deprecated does not appear to be referenced or invoked anywhere in the codebase
	 * @noAutocomplete
	 */
	getFreq(...args): this

	/**
	 * @deprecated only used in workshop (first-notes)
	 * @noAutocomplete
	 */
	midi2note(...args): this

	
}