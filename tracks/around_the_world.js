setCps(132 / 60 / 4)

// prettier-ignore
samples('github:mot4i/garden')

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

// $: s("white*4").clip(0.1).postgain(0.5)

$: midichan("1")
  .s("gm_glockenspiel")
  .clip("1")
  .n("4,6")
  .set.out(
    `<
	64:4 57:4 60:4 64:4 59:4 52:4 55:4 59:4 
	60:4 53:4 57:4 60:4 62:4 55:4 59:4 62:4
>*8`.as("note:clip"),
  )
  .lpf(222)
  .trans("-8")

$: midichan("1")
  .s("gm_glockenspiel")
  .clip("1")
  .n("3")
  .set.out(
    `<
	64:4 57:4 60:4 64:4 59:4 52:4 55:4 59:4 
	60:4 53:4 57:4 60:4 62:4 55:4 59:4 62:4
>*8`.as("note:clip"),
  )
  .trans("16")
  .lpf(4000)
  .fm(1.3)
  .fmh(1.61)

$bass: note("25")
  .midichan("1")
  .s("wt_digital")
  .struct("x - - [x - x -]")
  .slow(2)
  .n(1)
  .release(0.3)
  .distort(1.5)
  .postgain(1.3)

$hh: s("hh")
  .struct("- x - [ < [ - - x x ] - > <[- x - x] x> ]")
  .bank("garden")
  .n(4)
  .postgain(2.2)
  .slow(2)
  .lpf(3600)

$bd: s("bd")
  .struct("x - - [ [ - < - - x >] [- < - - - x>] ]")
  .bank("garden")
  .n(4)
  .slow(2)
  .postgain(0.3)

$: kb().s(" gm_string_ensemble_2").clip(1).n(3)

$: s("gm_string_ensemble_2")
  .n("3")
  .set.out(
    `<
  49:2 ~ ~ 56:2
  54:2 ~ 52:2 51:2
  49:2 ~ ~ ~
  ~ ~ 47:2 47:2
>*4`.as("note:clip"),
  )
  .hpf(1000)
  .lpf(500)
  .release(0.3)
  .postgain(0.2)
