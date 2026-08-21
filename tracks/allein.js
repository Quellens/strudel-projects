setCps(143 / 60 / 4)

// prettier-ignore
// window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
// await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

// $: kb().s("gm_electric_guitar_clean").clip(1)
//

$: s("gm_pan_flute")
  .n("2")
  .set.out(
    `<
   63:4 71:4 66:4 63:4 71:4 66:4 63:4 71:4 
   70:4 66:4 63:4 70:4 66:4 63:4 70:4 66:4 
   61:4 68:4 65:4 61:4 68:4 65:4 61:4 68:4 
   63:4 71:4 66:4 63:4 71:4 66:4 63:4 71:4 
>*8`.as("note:clip"),
  )
  .trans(12)
  .hpf(1500)
  .postgain(0.8)
  .room(0.4)

$: s("gm_distortion_guitar")
  .n("2")
  .set.out(
    `<
  63:0.6:2 65:1:2 63:0.6:2 66:1:2 63:0.6:2 65:1:2 63:0.6:2 66:1:2
  58:0.6:2 63:1:2 58:0.6:2 66:1:2 58:0.6:2 63:1:2 58:0.6:2 66:1:2
  56:0.6:2 63:1:2 56:0.6:2 65:1:2 56:0.6:2 63:1:2 56:0.6:2 65:1:2
  54:0.6:2 59:1:2 54:0.6:2 63:1:2 54:0.6:2 59:1:2 54:0.6:2 63:1:2 
>*8`.as("note:velocity:clip"),
  )
  .postgain(0.4)
  .lpf(1400)
  .coarse(5)
  .room(0.6)

$: midichan("1")
  .s("piano")
  .detune(5)
  .n("4")
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
  .room(0.7)
  .roomsize(4)
  .postgain(2.8)

$: sound("<[hh!8]>").n(7).bank("tr909").sometimesBy(0.1, ply(2)).postgain(0.3)

$: sound("<[bd - sd - ] [- [bd*<2 1>] [ sd bd ] - ] >")
  .bank("tr909")
  .n(7)
  .duck(2)
