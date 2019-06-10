settings.outformat="pdf";
size(5cm);
usepackage("giambattista");
import x11colors;

settings.outformat = "pdf";
settings.render = 16; 

size(6cm);
import three;
currentprojection = perspective(5,3,3); 

real k = 5;
draw(O--k*Z,Arrow3());
draw(O--3*X,Arrow3());
draw(O--4*Y,Arrow3()); 
      
triple A = 2*X, B = 3*Y, C = 4*Z;
      
pen surfacepen = LightSeaGreen+opacity(0.4); 
pen wirepen = MidnightBlue+linewidth(1.0); 

draw(surface(A--O--B--cycle),surfacepen,wirepen);
draw(surface(A--O--C--cycle),surfacepen,wirepen);
draw(surface(C--O--B--cycle),surfacepen,wirepen);
draw(surface(A--B--C--cycle),surfacepen,wirepen); 
      
draw(A--B--C--cycle, wirepen);
      
for(int i=0; i<3; ++i) {
  draw(O--(new triple[] {A,B,C})[i], wirepen);
}
      
real eps = 0.1; 
draw("2",A--A+(0,0,-eps),align=S);
draw("3",B--B+(0,0,-eps),align=S);
draw("4",C--C+(0,eps,0),align=NE);
      
real h = 1.5;
path3 p = (0,0,h)--(2-h/2,0,h)--(0,3-3*h/4,h)--cycle; 
draw(p,wirepen);
draw(surface(p),grey);

real eps = 0.05; 
draw("$z$",3.5*Y+eps*Z--3.5*Y+h*Z, Bars3(2),align=E);
      
dot("$y = 3-\frac{3}{4}z$",(0,3-3*h/4,h),align=3*NE);
draw((0,3-3*h/4,h)+0.2*(0,1,1)--(0,3-3*h/4,h)+0.05*(0,1,1),Arrow3());
      
triple q = arcpoint((2-h/2,0,h)--(0,3-3*h/4,h),0.5);
draw(q+0.01*Z--(0,q.y,q.z+0.01),black+linewidth(2.0)); 
dot(q);
label("$x = 2 - \frac{2}{3}y - \frac{1}{2} z$", q + 0.5*X + 0.7*Y - 0.2*Z, fontsize(8)); 
draw(q + 0.5*X - 0.2*Y - 0.15*Z -- q - 0.05*Z - 0.02*Y,Arrow3(5));

real a = 3;
real b = 3.25; 
draw((-eps,-eps,h)--(a,-eps,h)--(a,b,h)--(-eps,b,h)--cycle,dashed);
