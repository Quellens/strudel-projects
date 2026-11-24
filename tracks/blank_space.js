setCps(97 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
samples('github:mot4i/garden')
// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

$: kb().s("piano").clip(1).n("2")

// $: s("white*4").clip(0.1).postgain(0.5)

$: s("sd").postgain(0.4).n(5).bank("garden").beat("2,6", 8)
$: s("bd").postgain(0.4).n(5).bank("garden").beat("0,3,6", 16)
$: s("bd").postgain(0.4).n(5).bank("garden").beat("26", 32).slow(2)

$: s("gm_whistle")
  .set.out(`<72:4 ~ ~ 65:4 ~ ~ ~ ~ 69:4 ~ ~ 65:4 ~ ~ ~ ~ >*8`.as("note:clip"))
  .lpf(1400)
  .n("4")
  .release(0.2)

$: midichan("1")
  .s("gm_fx_soundtrack")
  .clip("1")
  .room("0.30")
  .set.out(
    `< [72:1:4, 72:2:4] ~ ~ [65:1:4, 65:2:4] ~ ~ ~ ~ [69:1:4, 69:2:4] ~ ~ [65:1:4, 65:2:4] ~ ~ ~ ~ >*8`.as(
      "note:n:clip",
    ),
  )
  .lpf(700)
  .postgain(0.2)
  .release(1.2)

$: s("gm_timpani")
  .clip("1")
  .n("3")
  .room("0.30")
  .postgain(0.7)
  .cutoff("200")
  .set.out(`<53 50 46 48>*2`.as("note"))
  .slow(4)
  .lpf(130)

$: s("gm_lead_8_bass_lead,gm_fx_brightness")
  .clip("1")
  .n("1")
  .room("0.30")
  .postgain(0.7)
  .set.out(`<53 50 46 48>*2`.as("note"))
  .slow(4)
  .lpf(390)
  .trans(-12)

$: midichan("1")
  .s("gm_acoustic_guitar_nylon")
  .n("5")
  .room("0.30")
  .set.out(
    `<
<41:2 41:2 41:2 41:2 41:2 41:2 43:2 43:2> 
<36:4 36:4 38:4 38:4 38:4 38:4 40:4 40:4> ~ 
<33:4 33:4 33:4 33:4 34:4 34:4 36:4 36:4> ~ 
<33:4 33:4 33:4 33:4 34:4 34:4 36:4 36:4> ~ 
<33:4 33:4 33:4 33:4 34:4 34:4 36:4 36:4>
>*8`.as("note:clip"),
  )
  .env({ a: 0.1, d: 1, ac: 0.8, dc: 0.3, depth: 50 })
  .hpf(300)
  .lpf(600)
