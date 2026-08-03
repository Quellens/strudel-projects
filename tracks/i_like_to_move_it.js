setcpm(122 / 4)

// prettier-ignore
samples('github:yaxu/clean-breaks')

$: s("riffin/2").fit().chop(16).crush(5).clip(0.5).coarse(4)

_$: note(`<[c2 - c2 - c2 - c2 g2] [d#2 - d#2 - d2 f2 d2 g2]>`)
  .sound("gm_fretless_bass")
  ._scope()

_$: note(`<
    [c3 - c3 - c3 - c3 g3] [d#3 - d#3 - d3 f3 d3 g3]
    >`)
  .sound("square")

  ._scope()

$: note(`<
    [- c4!6 g3]!3
    [- c4!3 - d#4 c4 -]
    >`)
  .sound("gm_lead_8_bass_lead,gm_voice_oohs")
  .room(0.3)

_$: note(`<
    [c4 - - - - c4 c4 c4 g3 g3 g3 g3 c3 - c4 c4] [c4 g4 - c4 c4 - g4 g4 c4 c4 - c4 c4 c4 c4 c4]
    [g4 - - - - c4 c4 c4 g3 g3 g3 g3 g3 - g3 c4] [c4 g4 - c4 c4 - g4 g4 c4 c4 - c4 c4 g4 c4 -]
    [c4 c4 c4 c4 c4 - g3 - c4 c4 c4 c4 c4 - g3 -] [c4 c4 c4 g4 c4 c4 c4 g4 c4 c4 c4 g4 - g4 c4 -]
    [c4 c4 c4 c4 c4 - g3 - c4 c4 c4 c4 c4 - g3 -] [c4 c4 c4 g4 c4 c4 c4 g4 c4 c4 c4 g4 - c4 c4 c4]
    [c4 - c4 - c4 c4 c4 -] [c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4]
    [g4 - - - c4 - - - c4 c4 c4 c4 c4 - - -] [c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4]
    [c4 - c4 - c4 c4 c4 -] [c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4]
    [g4 - - - c4 - - - c4 c4 c4 c4 c4 - - -] [c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 g4 c4 -]
>`)
  .sound("gm_lead_8_bass_lead,gm_voice_oohs")
  .room(0.3)

$: note(`<
    [- - - - a#3 - - a#3 - f4 - c4 - - c4 -] [- - - - a#3 - - a#3 - f4 - c4 - - c4 -]
    >`)
  .sound("gm_shanai")
  ._pianoroll()

// all((x) => x.lpf(slider(1838, 0, 2000)))
