setCps(115 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

$: kb().s("gm_viola").clip(0.5).n(5)

$: s("bd")
  .struct("<[ ~ x ~ x ]>")
  .clip(0.1)
  .postgain(0.5)
  .postgain(0.5)
  .duck(2)
  .n(2)

$: s("piano")
  .n("4")
  .set.out(
    `<[53:4, 61:4, 58:4]!8 [51:4, 56:4, 60:4]!4 [51:4, 55:4, 58:4]!4>*8`.as(
      "note:clip",
    ),
  )
  .lpf(500)
  .orbit(2)
  .duckattack(0.2)
  .duckdepth(0.4)

_$: s("gm_viola")
  .n("5")
  .set.out(
    `<
  70:2 70:2 72:2 73:2 75:2 73:2 72:2 70:2
  65:2 70:2 72:2 73:2 63:2 70:2 72:2 73:2
>*8`.as("note:clip"),
  )
  .room(0.3)
  .coarse(2)

_$: midichan("1")
  .s("gm_viola")
  .clip("0.50")
  .n("5")
  .set.out(
    `<
  70:2 65:2 65:2 65:2
  68:2 68:2 68:2 70:2
>*4`.as("note:clip"),
  )
