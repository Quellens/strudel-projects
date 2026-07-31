setCps(94 / 60 / 4);

//prettier-ignore
samples('github:yaxu/clean-breaks');

samples(
  {
    //prettier-ignore
    jerkItOut: '../samples/jerkItOut/guitarRif.wav',
  },
  //prettier-ignore
  'https://raw.githubusercontent.com/Quellens/strudel-projects/main/',
);

_$aaa: note(
  "< [ [ 2 - [ 2 2 ] [ - 2 ] ] [ [4 - ] [ 4 4]  [ - 4] [ 1 1 ] ] ] [ [ 1 - - - ] - ] >",
)
  .scale("b:major")
  .sound("gm_electric_guitar_jazz,gm_overdriven_guitar")
  .room(0.4);

$bbb: n("<a#5,d#3,d>")
  .scale("b:major")
  .sound("sin")
  .struct("- - - - - - [- - - x ] [ x ] x")
  .slow(2);

_$chords: chord("G#m B F# E")
  .slow(2)
  .voicing()
  .trans(-7)
  .splice(8, "0 ~ 0 2 0 0 3 1 0 ~ 0 2 0 0 3 1")
  .room(0.3)
  .roomsize(3)
  .sound("jerkItOut")
  .lpf(1500)
  ._punchcard();

_$voice: n(
  "<[ 6@2 4 < 4 4 >] [4 < - 4 > 4 < 2 4 > ] [ 4 - 4 2 ] [ 4 < 1 [ 4 4 ] >] [ < - 4 > - 4 4 ] [ 4 - 4 4 ] [5 4] [< 4 - > < 4 - > 4 4]>",
)
  .scale("b:major")
  .s("gm_acoustic_bass")
  .lpf(2000)
  .room(0.5)
  .gain(2)
  .fast(4)
  .clip(0.9)
  ._punchcard();

_$drums: s("riffin/2").fit().lpf(1000);
