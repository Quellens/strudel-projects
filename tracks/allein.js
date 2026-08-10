setCps(143 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

$: kb().s("piano:4").clip(1)

// $: s("white*4").clip(0.1).postgain(0.5)

$: midichan("1")
  .s("gm_electric_guitar_clean")
  .n("4")
  .clip("1")
  .set.out(
    `<
   [63:8, 66:8, 71:8] ~ ~ ~ ~ ~ [66:8, 71:8, 63:8] ~ ~ ~ ~ ~ [71:8, 66:8, 63:8] ~ ~ ~ 
   [70:8, 66:8, 63:8] ~ ~ ~ ~ ~ [70:8, 66:8, 63:8] ~ ~ ~ ~ ~ [70:8, 66:8, 63:8] ~ ~ ~ 
   [61:8, 68:8, 65:8] ~ ~ ~ ~ ~ [61:8, 68:8, 65:8] ~ ~ ~ ~ ~ [61:8, 68:8, 65:8] ~ ~ ~ 
   [63:8, 68:8, 71:8] ~ ~ ~ ~ ~ [63:8, 68:8, 71:8] ~ ~ ~ ~ ~ [63:8, 68:8, 71:8] ~ ~ ~ 
>*16`.as("note:clip"),
  )
  // .orbit(2)
  .fm(30)
  .lpf(2000)
  .lpenv(18)
  .lpq(5)
  .postgain(0.8)
  .room(0.4)
// .duckattack(0.2)
// .duckdepth(0.1)

$: midichan("1")
  .s("saw")
  .n("2")
  .clip("1")
  .set.out(
    `<
  63:8 ~ ~ ~ ~ ~ 61:4 ~ 63:4 ~ 61:4 ~ 63:4 ~ 65:2 ~
  66:8 ~ ~ ~ ~ ~ 63:4 ~ 66:4 ~ 63:4 ~ 66:4 ~ 68:2 ~
  65:8 ~ ~ ~ ~ ~ 63:4 ~ 65:4 ~ 63:4 ~ 65:4 ~ 66:2 ~
  63:8 ~ ~ ~ ~ ~ 63:4 ~ 70:4 ~ 68:4 ~ 66:4 ~ 65:2 ~
  63:8 ~ ~ ~ ~ ~ 61:4 ~ 63:4 ~ 61:4 ~ 63:4 ~ 65:2 ~
  66:8 ~ ~ ~ ~ ~ 63:4 ~ 66:4 ~ 68:4 ~ 70:4 ~ 66:2 ~
  68:10 ~ ~ ~ ~ ~ ~ ~ ~ ~ 66:4 ~ 70:4 ~ 68:8 ~
  ~ ~ ~ ~ ~ ~ 63:4 ~ 70:4 ~ 68:4 ~ 66:4 ~ 65:2 ~
>*16`.as("note:clip"),
  )
  .trans(12)

$: sound("<[hh!8]>").n(7).bank("tr909").sometimesBy(0.1, ply(2)).postgain(0.3)

$: sound("<[bd - sd - ] [- [bd*<2 1>] [ sd bd ] - ] >")
  .bank("tr909")
  .n(3)
  .duck(2)
