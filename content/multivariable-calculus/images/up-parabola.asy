settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;

settings.outformat = "pdf"; 
settings.render = 16;

      size(0,3.5cm); 
      import graph3;
      
      draw(surface(new triple(pair p) {return (p.x*cos(p.y),p.x*sin(p.y),p.x^2);},
      (0,0),(1,2*pi),Spline),
      LightSeaGreen+opacity(0.5),MidnightBlue); 
      
      draw(O--X,Arrow3());
      draw(O--Y,Arrow3());
      draw(O--1.1*Z,Arrow3()); 
      
      void drawslice(real theta) {
        draw(graph(new triple(real t) {return (t*cos(theta),t*sin(theta),t^2);}, -1,1), MidnightBlue);
      }
      
      int n = 5; 
      for(real x = 0; x <= 2*pi; x += pi/n) {
        drawslice(x);
      }
