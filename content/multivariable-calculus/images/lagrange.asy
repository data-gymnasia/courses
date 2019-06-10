settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;

settings.outformat = "pdf";
settings.render = 16; 

import graph3;
    defaultpen(fontsize(8)); 
    picture myaxes;
    draw(myaxes,O--1.2*X,Arrow3());
    draw(myaxes,O--1.2*Y,Arrow3());
    draw(myaxes,O--1.2*Z,Arrow3());
    
    currentprojection = perspective(5,2,2);
    
    triple f(pair p){ 
      real x = 0.5 + p.x*cos(p.y), y = 0.5 + p.x*sin(p.y); 
      return (x,y,1 - (x-1/2)^2 - (y-1/3)^2);
    }
    
    triple g(real t){
      return f((0.5,t)); 
    }

    add(myaxes); 

    surface s = surface(f,(0,0),(0.5,2*pi),20,Spline);
    draw(s,MidnightBlue+opacity(0.4),MidnightBlue);
    draw(graph(g,0,2*pi,100),MidnightBlue);
    
    path3 c = circle(c=(0.5,0.5,0),r=0.5,normal=Z); 

    triple h = (-0.1,0.1,1e-2);
    triple j = (h.x,-h.y,1e-2); 
    triple p = (0.7,0.7,1e-2);
    
    surface s = surface(rotate(-10,Z)*(p+h--p+j--p-h--p-j--cycle));
    draw(c); 
    draw(surface(c),white+opacity(0.2));
    draw(surface(xscale(-0.5)*yscale(0.5)*"$D$",s,0,0,1e-3),MidnightBlue); 

    label("$f(x,y)$", (0,0,1.1), MidnightBlue, align=2*E);
