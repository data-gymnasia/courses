settings.outformat="pdf";
size(8cm);
usepackage("mathpazo");
usepackage("bm");
import x11colors;

real poisson(real lambda, int k) {
  return lambda^k/factorial(k)*exp(-lambda); 
}

defaultpen(linewidth(1.2));

real h = 12;
real eps = 0.2;
int n = 12; 

draw(Label("probability mass",Relative(1),align=NE),(n,0)--(0,0)--(0,h*0.5),Arrows(4));
//label("$k$",(n,0),align=SE); 

for(int i=0;i<n;++i){
  draw(Label("$" + string(i) + "$",Relative(1),align=S),(i,0)--(i,-eps)); 
}
draw(Label("$\frac{1}{4}$",Relative(1),align=W),(0,h/4)--(-eps,h/4)); 

real lambda = 3;

path p, q, r;



for(int i=0;i<n;++i){
  dot((i,h*poisson(1,i)),MidnightBlue);
  p = p -- (i,h*poisson(1,i)); 
  dot((i,h*poisson(3,i)),LightSeaGreen);
  q = q -- (i,h*poisson(3,i));
  dot((i,h*poisson(5,i)),DarkRed);
  r = r -- (i,h*poisson(5,i)); 
}

draw(Label("$\bm{\lambda} = 1$",Relative(0.08),align=2N),p,MidnightBlue);
draw(Label("$\bm{\lambda} = 3$",Relative(0.32),align=3N),q,0.9*Black+0.1*White);
draw(Label("$\bm{\lambda} = 5$",Relative(0.7),align=3NE),r,DarkRed); 

for(int i=0;i<n;++i) {
  dot((i,h*poisson(1,i)),MidnightBlue);
  dot((i,h*poisson(3,i)),0.9*Black+0.1*White);
  dot((i,h*poisson(5,i)),DarkRed);
}

shipout(bbox(3.0,invisible)); 
