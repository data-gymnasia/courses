
settings.outformat="pdf"; 
settings.render = 16; 
size(12cm);
usepackage("giambattista");
import x11colors;
import stats;
import graph3; 

srand(123);

currentprojection = perspective(4,2,1.2);

int n = 5;

draw(O--1.1X,Arrow3());
draw(O--1.1Y,Arrow3());
draw(O--0.48Z,Arrow3());

real[] P = new real[n];
real[] Q = new real[n];

for(int i=0;i<n;++i){
  P[i] = rand()/randMax;
  Q[i] = rand()/randMax;  
}

for(int i=0;i<n;++i){
  P[i] /= sum(P); 
  Q[i] /= sum(Q); 
}

for(int i=0;i<n;++i){
  draw(((i+1)/n,0,0)--((i+1)/n,0,P[i]),MidnightBlue+opacity(0.5)+linewidth(2)); 
  draw((0,(i+1)/n,0)--(0,(i+1)/n,Q[i]),DarkRed+opacity(0.5)+linewidth(2));   
}

for(int i=0;i<n;++i){
 for(int j=0;j<n;++j){
   draw(((i+1)/n,(j+1)/5,0)--((i+1)/n,(j+1)/5,P[i]*Q[j]),LightSeaGreen+opacity(0.5)+linewidth(2)); 
 }
}

triple h = (-0.1,0.1,0);
triple j = (h.x,-h.y,0); 
triple p = (0.65,0.65,1e-2);
surface s = surface((p+h--p+j--p-h--p-j--cycle));
real eps = 0.05; 
path3 box = (1/n-eps,1/n-eps,0)--(1/n-eps,1+eps,0)--(1+eps,1+eps,0)--(1+eps,1/n-eps,0)--cycle;
draw(surface(box),LightSeaGreen+opacity(0.3)); 
draw(surface(xscale(-1)*yscale(-1)*"$\Omega$",s,0,0,1e-3),LightSeaGreen);

triple h = (0.1,0,-0.1);
triple j = (h.z,0,-h.x); 
triple p = (0.75,1e-2,0.28);
surface t = surface((p+h -- p+j -- p-h -- p-j -- cycle));
//path3 bluebox = (1/n-eps)*X -- 1.05X -- 1.05X + 0.45Z -- (1/n-eps)*X + 0.45Z -- cycle;
//draw(surface(bluebox),MidnightBlue+opacity(0.3)); 
draw(surface("$\Omega_{1}$",t,0,0,1e-3),MidnightBlue);

triple h = (0,0.1,0.1);
triple j = (0,-h.z,h.y); 
triple p = (1e-2,0.65,0.28);
surface t = surface((p+h--p+j--p-h--p-j--cycle));
//path3 redbox = (1/n-eps)*Y -- 1.05Y -- 1.05Y + 0.45Z -- (1/n-eps)*Y + 0.45Z -- cycle;
//draw(surface(redbox),DarkRed+opacity(0.3)); 
draw(surface(xscale(-1)*yscale(-1)*"$\Omega_2$",t,0,0,1e-3),DarkRed);

