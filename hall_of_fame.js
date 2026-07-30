setCps(86 / 60 / 4)
// prettier-ignore
await import('https://glossing.dev/scripts.js')

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

$drums: sound("bd:1 bd:1").gain("[0.15 0.6]*4")

$: kb().sound("piano:4").clip("0.7")
// $: kb().sound("piano:3").clip("0.7")

$: midichan("1")
  .s("piano")
  .n("3")
  .clip("0.70")
  .set.out(
    `<
  67:8 ~ ~ ~ ~ ~ 63:8 ~ ~ ~ ~ ~ ~ ~ ~ ~
  70:8 ~ ~ ~ ~ ~ 65:8 ~ ~ ~ ~ ~ ~ ~ ~ ~
>*16`.as("note:clip"),
  )
  .trans(-12)

$: midichan("1")
  .s("piano")
  .n("5")
  .set.out(
    `<
  70:1:8 69:0.81:8 70:1:8 67:0.88:8 70:1:8 67:0.92:8 70:1:8 63:0.76:4 70:1:8 63:0.99:4 75:0.93:8 63:0.98:4 70:0.99:8 63:1:8 75:1:4 70:0.99:8
  74:0.67:8 70:0.98:8 75:0.89:8 70:0.98:8 77:0.76:8 70:0.98:8 72:0.99:8 65:0.75:4 72:1:8 65:1:4 77:1:8 65:1:4 72:1:8 65:1:4 77:1:8 65:0.99:8
>*16`.as("note:velocity:clip"),
  )
  ._pianoroll()
