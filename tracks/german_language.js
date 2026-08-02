setCps(188 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

$: s("bd:17").beat("0,10", 16)

$: s("sd:11").beat("4,12,< - 14>,< - - - 15>", 16)

$: kb().s("gm_synth_bass_1").clip(0.3).postgain(2)

$: s("saw,sin")
  .set.out(
    `<
  68:4 ~ ~ ~ 65:4 ~ ~ ~ 68:4 ~ ~ ~ 65:4 ~ ~ ~
  63:2 ~ 65:4 ~ ~ ~ 65:4 ~ ~ ~ 65:4 ~ ~ ~ 65:4 ~
  68:4 ~ ~ ~ 65:4 ~ ~ ~ 68:4 ~ ~ ~ 65:4 ~ ~ ~
  68:2 ~ 70:2 ~ 72:4 ~  70:4 ~ ~ ~ 68:2 ~ 65:2 ~ 68:2 ~
  68:4 ~ ~ ~ 65:4 ~ ~ ~ 68:4 ~ ~ ~ 65:4 ~ ~ ~
  63:2 ~ 65:4 ~ ~ ~ 65:4 ~ ~ ~ 65:4 ~ ~ ~ 65:4 ~
  75:4 ~ ~ ~ 72:4 ~ ~ ~ 70:4 ~ ~ ~ 68:4 ~ ~ ~
  70:2 ~ 68:2 ~ 70:2 ~ 71:2 ~ 71:2 ~ 70:2 ~ 68:2 ~ 65:2  ~
>*16`.as("note:clip"),
  )
  .lpf(2000)
  .lpa(0.3)
  .fm(1)
  .lpenv(1)
  .postgain(1.5)

$: velocity("1")
  .midichan("1")
  .s("gm_synth_bass_1")
  .set.out(
    `<
   <51 53>*16 
   <53 56>*16 
   <56 58>*16 
   [<49 51>*8 <51 53>*8]
>`.as("note"),
  )
  .slow(2)
  .trans(-12)
  .lpenv(3)
  .lpf(1000)
  .lpq(2)
  .lpa(1.5)
  .postgain(0.8)
