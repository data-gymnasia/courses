
settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;


draw((0,0)--(1,0),gray,Bars());
label("0",(0,0),align=2S);
label("1",(1,0),align=2S);
real eps = 0.02; 
for(real x = 0.125; x<= 1.0; x += 0.125) {
  draw((x,0)--(x,-eps),gray);
}

real[] a = new real[] {0.345, 0.874, 0.998, 0.567, 0.482};
real[] sizes = new real[] {2, 3, 1, 4, 4}; 

for(int i=0;i<a.length;++i){
  dot((a[i],0),MidnightBlue+linewidth(sizes[i])); 
}

real mean = 0.59;
real e = 0.05; 
real ang = 70;

filldraw((mean,0)--(mean,0)+e*dir(-ang)--(mean,0)+e*dir(180+ang)--cycle,DarkGreen+opacity(0.5),black);

shipout(bbox(3.0,invisible)); 
