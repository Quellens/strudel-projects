setCps(125 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://glossing.dev/scripts.js')

$: kb().s("gm_glockenspiel:4").clip(0.3).lpq(3).hpf(200)

// $: s("hh:4*4")._spectrum()

$: midichan("1")
  .s("gm_glockenspiel")
  .n("4")
  .resonance("3")
  .hcutoff("200")
  .set.out(
    `<
  63:0.87:8 ~ ~ 60:0.86:8 ~ ~  63:1:8 ~ ~ ~ 65:0.86:8 ~ 65:0.86:8 ~ ~ ~ 
  60:0.92:8 ~ ~ 56:0.90:8 ~ ~ < 60:1:8 62:0.67:8 > ~ ~ ~ < 58:1:8 62:0.69:8 > < ~ 63:1:8 > < 62:1:8 62:0.84:8 > ~ < 65:1:8  58:0.77:8 > ~ >*16`.as(
      "note:velocity:clip",
    ),
  )
  .lpf(2400)
  .lpq(7)
  .fm(2)
  .fmh(1.7)
