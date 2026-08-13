//
//
//  _______ ___ ___ _______ _______
// |    ___|   |   |    |  |    |  |
// |    ___|-     -|       |       |
// |___|   |___|___|__|____|__|____|
//
//  ______ __        __               ______        __
// |   __ \__|.----.|  |--.--.--.    |   __ \.----.|__|.-----.----.-----.-----.-----.
// |    __/  ||  __||    <|  |  |    |    __/|   _||  ||     |  __|  -__|__ --|__ --|
// |___|  |__||____||__|__|___  |    |___|   |__|  |__||__|__|____|_____|_____|_____|
//                        |_____|

setCps(100 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

$: kb().s("gm_synth_bass_1").clip(1)

$: s("white*4").clip(0.1).postgain(0.5).duck(2).postgain(0)

$: midichan("1")
  .s("gm_xylophone,gm_music_box")
  .n("4,5")
  .clip("1")
  .set.out(
    `<
  77:4 74:4 76:4 74:4 77:4 74:4 76:4 74:4
  77:4 72:4 76:4 72:4 77:4 72:4 76:4 72:4
  77:4 69:4 70:4 69:4 77:4 69:4 70:4 69:4
  77:4 69:4 70:4 69:4 77:4 69:4 74:4 76:4
>*16`.as("note:clip"),
  )
  .room(0.5)
  .hpf(1000)
  .orbit(2)
  .duckattack(0.3)
  ._pianoroll({ width: 500, height: 500 })

$: s("bd:15").beat("0,6,9,10,< - 13>", 16).distort(0.3)._scope()

$: s("sd:5")
  .beat("4,12,< - 14>,< - - - 15>", 16)
  .bank("tr909")
  .delay(0.5)
  .decay(0.3)
  ._scope()

$: s("saw")
  .n(2)
  .set.out(`<50 48 55  58>*2`.as("note:clip"))
  .lpf(900)
  .postgain(0.1)
  .distort(2.5)
  .trans(-12)
  ._scope()
  .orbit(2)
  .duckattack(0.3)
