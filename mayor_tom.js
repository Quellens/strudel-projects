setCps(161 / 60 / 4);

// prettier-ignore
samples('github:mot4i/garden');

_$pat: stack(
  n("e3 e4 d4 e4 <a3 g3> <b3 e4> <c#4 f#3> <e4 e4>").mask(
    "<1 1 1 1 1 1 1 1 0 0 0 0  >",
  ),
  n("<a3*16>").slow(2).mask("<0 0 0 0 0 0 0 0 1 1 0 0>"),
)
  .scale("e:minor")
  .distort("2.2:.3")
  .s("saw")
  .lpf(slider(122.4, 0, 800))
  .lpenv(slider(1.16, 0, 5))
  .room(0.4)
  .lpq(12);

$voice: stack(
  n(
    "< e4 - > b3 f#4 g4 <f#4/2 f#4 f#4/2 g4 f#4/2 f#4 f#4/2 g4> - < - e4 - f#4 > -",
  )
    .rib(0, 12)
    .mask("<1 1 1 1 1 1 1 1 0 0 0 0 >"),
  n("< e4 [ - - <g4 -> <f#4 ->]>").mask("<0 0 0 0 0 0 0 0 1 1 1 1 >"),
)
  .scale("e:minor")
  .distort("2.2:.3")
  .room(0.5)
  .roomsize(4)
  .sound("gm_voice_oohs");

$guitarrizz: n("< - - [ - - - - - - - - d5] - >")
  .scale("e:minor")
  .delay(0.1)
  .clip(1.2)
  .room(0.1)
  .fm(1)
  .gain(0.5)
  .roomsize(2)
  .distort(0.4)
  .sound("gm_distortion_guitar,gm_overdriven_guitar");

_$drums: sound("bd:7 hh:7 sd:7 hh:7 bd:7 hh:7 sd:7 hh:7")
  .bank("garden")
  .gain("[0.15 0.6]*4")
  .lpenv(2);

_$hehe: sound("-*10 sd:5  -*12").bank("garden").lpf(400).gain(0.2);

$bass: n("e1 e1 -  e1 - - e2 -")
  .scale("e:minor")
  .s("gm_electric_bass_pick")
  .dec(0.9)
  .room(0.6)
  .roomsize(7)
  .lpf(900)
  .bpenv("<4 2 1 0 -1 -2 -4>/4");

_$refrain: chord("<G D Am C>")
  .voicing()
  .room(0.5)
  .sound("sin")
  .attack(0.1)
  .decay(0.3)
  .sustain(0.4)
  .release(1)
  .gain(0.2);

_$völlig_losgelöst: n("<[b d4] [ d4 [ c4 b ] a -  ] [c4 e4 ] [e4 d4] >")
  .sound("gm_voice_oohs")
  .scale("e:minor")
  .distort("2.2:.3")
  .room(0.5)
  .roomsize(4);

// Everything
//all((x) => x.lpf(slider(1000, 0, 1000)));
//
