setCps(103 / 60 / 4)

$chords: note(
  "<[E4*2 C4*2, B4*2 E4*2, G4*2 G4*2, B*2 -*2] [C4*4, E4*4, A4*4, A*4]>",
)
  .sound("[sin]")
  .adsr(".1:.5:.1:.1")
  .decay("<.7>")
  .room(0.5)
  .lpf(slider(939.8, 200, 2000))
  .gain(0.3)
  ._punchcard()

$: note("<[g@2 f# e - - g@2 f# e - -] ->").sound("saw")._punchcard().lpf(1000)

$: chord("<[Em Em C C] [Am*4]>").voicing().room(0.2).sound("piano")._punchcard()
