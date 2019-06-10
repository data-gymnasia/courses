settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;

settings.outformat = "pdf"; 
settings.render = 16;

      size(0,3.5cm); 
      import graph3;
      
      currentprojection=perspective(4,4,2.5); 
      
      draw(surface(new real(pair p) {return
        p.x^2 - p.y^2;},
      (-1,-1),(1,1),Spline),
      LightSeaGreen+opacity(0.8),MidnightBlue); 
      
      draw(O--X,Arrow3());
      draw(O--Y,Arrow3());
      draw(O--Z,Arrow3()); 
      
      void drawslice(real theta) {
        draw(graph(new triple(real t) {return (t*cos(theta),t*sin(theta),t^2*cos(2*theta));}, -1,1), MidnightBlue);
      }
      
      int n = 2; 
      for(real x = 0; x <= 2*pi; x += pi/n) {
        drawslice(x);
      }
