/*
IMPORT 
samples('github:mot4i/garden')

 .bank("garden")

$: s("riffin/2").fit()
.chop(16)	
.crush(5)	
.clip(.5)
.coarse(4)




.duck(1).orbit(2).duckattack(0.2)

.jux(rev)


// building up
$: s("sin!128")
  .lpf(2000)
  .fm(time.mod(32))
  .fmh(time.mod(32))
  .rib(6, 4)
  .slow(2)
  .postgain(0.2)
  ._spectrum()

 * */
