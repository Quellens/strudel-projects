setCps(161 / 60 / 4);

// prettier-ignore
samples('github:mot4i/garden');

$pat: stack(
  n("e3*8").mask("<0 0 0 0 0 0 0 0 0 0 1 1 >"),
  n("e3 e4 d4 e4 <a3 g3> <b3 e4> <c#4 f#3> <e4 e4>").mask(
    "<1 1 1 1 1 1 1 1 0 0 0 0  >",
  ),
  n("<a3*16>").slow(2).mask("<0 0 0 0 0 0 0 0 1 1 0 0>"),
)
  .scale("e:minor")
  .distort("2.2:.3")
  .s("saw")
  .lpf(slider(456, 0, 800))
  .lpenv(slider(1.575, 0, 5))
  .room(0.4)
  .lpq(12);

$voice: stack(
  n(
    "< e4 - > b3 f#4 g4 <f#4/2 f#4 f#4/2 g4 f#4/2  f#4 f#4/2 f#4> - < - e4 - f#4 - e4> -",
  ).mask("<1 1 1 1 1 1 1 1 0 0 0 0 >"),
  n("< e4 [ - - <g4 -> <f#4 ->]>").mask("<0 0 0 0 0 0 0 0 1 1 1 1 >"),
)
  .scale("e:minor")
  .distort("2.2:.3")
  .room(0.5)
  .sound("gm_voice_oohs");

$drums: sound("bd:2 hh:2 sd:2 hh:2 bd:2 hh:2 sd:2 hh:2").bank("garden");
