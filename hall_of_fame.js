setCps(86 / 60 / 4)
// prettier-ignore
await import('https://glossing.dev/scripts.js')

// prettier-ignore
samples('github:mot4i/garden')

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

$: midichan("1")
  .s("supersaw")
  .lpf(600)
  .lpenv(1.5)
  .postgain(0.4)
  .fm(3.3)
  .n("3")
  .set.out(
    `<
  67:6 ~ ~ ~ ~ ~ 63:10 ~ ~ ~ ~ ~ ~ ~ ~ ~
  58:6 ~ ~ ~ ~ ~ 65:10 ~ ~ ~ ~ ~ 70:2 ~ 69:2 ~
>*16`.as("note:clip"),
  )
  .trans(-12)

$: midichan("1")
  .s("piano")
  .n("3")
  .set.out(
    `<
  67:6 ~ ~ ~ ~ ~ 63:8 ~ ~ ~ ~ ~ ~ ~ ~ ~
  70:6 ~ ~ ~ ~ ~ 65:8 ~ ~ ~ ~ ~ ~ ~ ~ ~
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
  .room(0.5)
  ._pianoroll({ height: 150 })

$: midichan("1")
  .s("gm_tremolo_strings")
  .n("4")
  .clip("0.50")
  .set.out(
    `<
  67:1:8 ~ ~ ~ ~ ~ 67:0.95:10 ~ ~ ~ ~ ~ ~ ~ ~ ~
  65:0.96:8 ~ ~ ~ ~ ~ 65:0.91:7 ~ ~ ~ ~ ~ 70:0.8:3 ~ 69:0.87:2 ~
>*16`.as("note:velocity:clip"),
  )
  .postgain(0.8)
  .lpf(2200)
  .lpenv(0.7)
  ._spectrum()

$: clip("1")
  .set.out(
    `<
  1:10:4:bd:1:8 ~ ~ 1:10:4:bd:1:8 0.50:3:4:oh:3:8 ~ ~ ~ ~ 1:10:4:bd:1:8 ~ 1:10:4:bd:1:8 0.50:3:4:oh:3:8 ~ ~ ~
>*16`.as("velocity:midichan:n:s:cut:clip"),
  )
  .bank("garden")
  .postgain(0.4)
  .hpf(100)
  .lpf(2200)
  ._spectrum({ height: 50, width: 700 })
