//  _                         _
// /  |_   _.  _ o ._   _    /   _. ._ _
// \_ | | (_| _> | | | (_|   \_ (_| | _>
//                      _|

setCps(158 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

$: kb().s("gm_glockenspiel:4").clip(1)

$: note("<c4*2!8 b3*2!8 f3*2!8 c3*2!8>")
  .s("gm_acoustic_guitar_nylon")
  .n(8)
  .decay(0.26)
  .fast(4)
  .lpf(sine.segment(2000).range(300, 1500).slow(2))
  .room(0.8)
  .roomsize(4)

$: note("<c5*2!8 b4*2!8 f4*2!8 c4*2!8>")
  .s("gm_acoustic_guitar_nylon")
  .n(8)
  .delay(0.5)
  .fast(4)
  .lpf(sine.segment(2000).range(300, 1500).slow(2))
  .room(0.8)
  .roomsize(4)

$: midichan("1")
  .s("sine")
  .n("4")
  .distort(1)
  .hcutoff("200")
  .room("0.90")
  .postgain("1.5")
  .set.out(`<36 43 41 36>`.as("note"))
  .slow(2)
  .orbit(2)

$: midichan("1")
  .s("saw")
  .n("6")
  .distort(2)
  .room("0.1")
  .postgain(0.6)
  .set.out(`<36 43 41 36>`.as("note"))
  .slow(2)
  .orbit(2)

_$: s("<bd>*<1 1 2 2 4 4 8 16>").n(6).distort(2)

$: s("bd")
  .n(6)
  .beat("0,10", 16)
  .bank("tr909")
  .room(0.2)
  .distort(2)
  .lpf(1500)
  .postgain(0.5)
  .duck("2")
  .duckattack(0.2)

$: s("hh")
  .n(2)
  .beat("12,24,28,32", 32)
  .bank("tr909")
  .distort(1)
  .room(0.3)
  .lpf(1000)
  .postgain(0.5)

$: s("cp:2").beat("4,12", 16).postgain(0.3).distort(0.8).decay(0.4)

$: midichan("1")
  .s("gm_electric_guitar_clean")
  .clip("1")
  .set.out(
    `<[57:8 ~ 64:8 ~]*4!2
    [56:8 ~ 64:8 ~]*4!2
    [54:8 ~ 64:8 ~]*4!2
    [57:8 ~ 64:8 ~]*4!2>`.as("note:clip"),
  )
  .postgain(0.5)
  .trans(3)
  .room(0.4)
  ._scope()

$: midichan("1")
  .s("gm_glockenspiel")
  .n("4")
  .set.out(
    `<
  ~ ~ ~ ~ ~ ~ 72:0.74:7 ~ ~ ~ ~ ~ 67:0.98:7 ~ ~ ~
  ~ ~ ~ ~ ~ ~ 64:0.76:7 ~  65:0.75:7 ~ ~ ~ 64:0.87:7 ~ ~ ~
   60:0.97:7 ~ ~ ~ ~ ~ 72:0.75:7 ~ ~ ~ ~ ~ 67:0.96:7 ~ ~ ~
  ~ ~ ~ ~ ~ ~ 74:0.72:7 ~ 74:0.69:7 ~ 76:1:9 ~ ~ ~ ~ ~
>*16`.as("note:velocity:clip"),
  )
  .lpf(1958)
  ._pianoroll()
