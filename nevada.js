setCps(125 / 60 / 4)
// prettier-ignore
await import('https://glossing.dev/scripts.js')
//

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')
// 'Midi Through Port-0'
// 'MPK mini Play mk3 MIDI 1'

// kb().sound("sin").clip("0.25")

// $: drum();

$drums: sound("bd:7 sd:1 bd:1 sd:1").gain("[0.15 0.6]*4")
//   .lpenv(2)
$: kb().sound("sin:3").clip("0.7")

$: midichan("1")
  .s("gm_glockenspiel:3,gm_glockenspiel:6")
  .set.out(
    `<
  67:3 ~ 67:3 ~ 65:3 ~ 65:3 ~ 60:4 ~ ~ 60:2 70:3 ~ 72:3 ~
  70:4 ~ ~ 70:4 ~ ~ 65:4 ~ ~ 65:4 ~ ~ 65:3 ~  63:3
  ~ 67:5 ~ ~ ~ 67:4 ~ ~ ~ 63:4 ~ 63:3 ~ 67:3 ~ 70:3
  ~ 67:4 ~ ~ 67:4 ~ ~ 65:3 ~ 72:3 ~ 70:3 ~ 72:3 ~ 70:3 ~
>*16`.as("note:clip"),
  )
  .lpf(400)
  .room(0.2)
  .lpenv(1)
  .lprelease(0.3)
  .distort(1.0)
  ._pianoroll()

$: midichan("1")
  .s("sin")
  .n("3")
  .clip("0.70")
  .set.out(
    `<
  [67:0.69:8, 63:0.76:8, 60:0.75:8] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  [51:0.83:8, 60:0.78:8, 56:0.83:8] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  [58:0.83:8, 63:0.74:8, 67:0.73:8] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  [63:0.81:8, 67:0.76:8, 58:0.83:8] ~ ~ ~ ~ ~ ~ ~ [65:0.83:8, 62:0.76:8, 58:0.84:8] ~ ~ ~ ~ ~ ~ ~
>*16`.as("note:velocity:clip"),
  )
