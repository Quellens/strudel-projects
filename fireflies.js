setCps(176 / 60 / 4);

kick: s("bd")
  .bank("yamahary30")
  .postgain(1)
  .struct(" x - - - - x - -")
  ._punchcard();

snare: s("cp")
  .bank("rolandmc303")
  .struct("- x - x") /*.almostNever(x => x.struct("-"))*/
  ._punchcard();

_hhc: s("hh").bank("tr808").struct("x*8")._punchcard();
LEAD: note(
  "<a#2 a#3 d5 a#2 a#3 a#4 - d#4 d#3 a#3 f4 d#4 <f4 g#4> <a#4 g4>  < - d#4> <d#4 a#3> g#2 d#3 c4 <a#3 -> <c4 -> <d#4 a#3> <d#3 -> <g#2 -> <- c4> <a#3 -> c4 a#3 c3 a#3 d#4 f4>",
)
  .fast(8)
  .delay(0.25)
  .trans(12)
  .postgain(0.5)
  .decay(0.4)
  .o(2)
  .hpf(slider(644.6, 200, 2000))
  ._punchcard();

_LEAD2: note(
  "<d5 - - a#4 - - d#5 - d5 - - a#4 - - c5 -@7 a#4 - c5 - - d#5 - - f5 -@6 d#5!2 - g5 - - f5 - - d#5 -@15 d#5 ->",
)
  .fast(8)
  .sound("gm_celesta")
  .trans("[12, -12]")
  .release(0.25)
  .decay(1)
  .lpf(5000)
  .room(1)
  .rfade(100)
  .postgain(0.25)
  .o(2)
  ._punchcard();

_REFRAIN_1: note(
  "< - - g5  - f5 - d#5 a#5 - g5  - f5 - d#5 - f5 - - - - - - - - - - a#4 -  d#5 -  d5 - c5 - - -  - - - - a#4 - - - - - - - d5 - - - - - - -  c5 - - - - - - - >",
)
  .fast(8)
  .delay(0.2)
  .sound("z_sine")
  .trans(12)
  .postgain(0.25)
  .decay(0.4)
  .o(2)
  .trans("[0, -12]");

_REFRAIN_2: note(
  "< c5 - d#5 - d#5  - g5  - f5 - d#5 - a#4 - a#4 - <c5 f5>  - <d#5 -> - <d#5 -> - <f5 - > - < c5 -> -  - - -  - - c5 >",
)
  .fast(8)
  .delay(0.2)
  .sound("z_sine")
  .trans(12)
  .postgain(0.25)
  .decay(0.4)
  .o(2)
  .trans("[0, -12]");

_BASS_REFRAIN: note("<g#2 d#2 <a#2  <g2, d3>> <a#2 g#2>>").trans("[0, -12]"); //.seg(8)
_BASS: note("a#2 d#2 g#2@2")
  .slow(4)
  .trans("[0, -12]")
  .seg(8)
  .hpf(slider(200, 200, 2000))
  ._punchcard();
