
settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;

pen softgreen = rgb(0.96, 0.995, 0.98);

size(6cm); 
import graph; 
draw((8,0)--(0,0)--(0,8),Arrows());
filldraw(graph(new real(real x) {return
        x^3;},0,2)--(2,0)--cycle,softgreen,black); 