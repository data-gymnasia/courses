
settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;


draw(Label("higher variance",align=S,p=MidnightBlue),(0,0)--(1,0),gray,Bars());
label("0",(0,0),align=2S);
label("1",(1,0),align=2S);
real eps = 0.02; 

real[] a = new real[] {0.345, 0.874, 0.998, 0.567, 0.482};
real[] sizes = new real[] {2, 3, 1, 4, 4}; 

for(int i=0;i<a.length;++i){
  dot((a[i],0),MidnightBlue+linewidth(sizes[i])); 
}

eps = 0.4;

draw(Label("lower variance",align=S,p=MidnightBlue),(0,-eps)--(1,-eps),gray,Bars());
label("0",(0,-eps),align=2S);
label("1",(1,-eps),align=2S);

real[] a = new real[] {0.442, 0.453, 0.481, 0.1, 0.5};
real[] sizes = new real[] {3, 4, 2, 1, 1}; 

for(int i=0;i<a.length;++i){
  dot((a[i],-eps),MidnightBlue+linewidth(sizes[i])); 
}

shipout(bbox(3.0,invisible)); 
