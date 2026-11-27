// setCps(104 / 60 / 4)
setCps(90 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

const PITCH = 2

$: s("bd:17").beat("0,10", 16)
$: s("bd:4").bank("polaris")

$: s("sd:11").beat("4,12,< - 14>,< - - - 15>", 16)

$: kb().s("gm_soprano_sax").clip(0.3)

$: s("piano")
  .n("8")
  .set.out(
    `<[68, 71, 75]*4 [66, 78, 70, 73]*4 [68, 73, 76]*4 [68, 73, 76]*4>*2`.as(
      "note",
      // `<[68, 71, 75]*4 [66, 70, 73]*4 [68, 73, 76]*4 [68, 73, 76]*4>*2`.as( .trans(0) .decay(0.6)
    ),
  )
  .trans(PITCH)
$: midichan("1")
  .s("gm_soprano_sax")
  .clip("1.30")
  .set.out(
    `<
  ~ 56 63 [~ 56] [59 56] ~ [54 56] ~
  59*2 56 59 [61 63] ~ ~ 54 56
  ~ 56 63 [~ 56] [59 56] ~ [54 56] ~
  59*2 56 59 [56 56] ~ ~ 54 56
  ~ 56 68 [~ 56] [59 56] ~ [54 56] ~
  59*2 56 59 [61 63] ~ [ ~ 54] 54 56
  59 61 63 61 [59 56] ~ 54 56
  59*2 56 59 [56 56] ~ ~ 54 56
>*8`.as("note"),
  )
  .trans(PITCH)
