settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;

pen mygreen = rgb(0.96, 0.995, 0.98);

import graph;
import x11colors; 
size(4cm);
real h = 8; 
path p = graph(new real(real x) {return 1-x^2;},-3,3); 
path q = graph(new real(real x) {return x^2-7;},-3,3); 
fill(buildcycle(p,q),DarkGreen+opacity(0.6));
draw((-h,0)--(h,0),Arrow());
draw((0,-h)--(0,h),Arrow()); 
draw(p);draw(q);
