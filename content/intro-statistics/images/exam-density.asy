import x11colors;
import graph;
import palette;

settings.outformat="pdf";

usepackage("mathpazo");

size(256,128,IgnoreAspect);

int m = 161;
int n = 89;
file reds = input("red1.csv");
real[][] redvalues = reds.csv().dimension(m,n);
close(reds);
file blues = input("blue1.csv");
real[][] bluevalues = blues.csv().dimension(m,n);
close(reds);
file greens = input("green1.csv");
real[][] greenvalues = greens.csv().dimension(m,n);
close(reds);
file alphas = input("alpha1.csv");
real[][] alphavalues = alphas.csv().dimension(m,n);
close(alphas);

real a = 0.0;
real b = 0.0;
real c = 20.0;
real d = 11.0;

pen[][] pixels = new pen[m][n];
for(int i=0;i<m;++i){
  for(int j=0;j<n;++j){
      pixels[i][j] = (rgb(redvalues[i][j],
                          greenvalues[i][j],
                          bluevalues[i][j]) +
                          opacity(alphavalues[i][j]));
  }
}

image(pixels,(0, 0),(20.0, 11.0),antialias=false);


path p2 = (0.0,10.0)--(-0.5,10.0);
draw(p2);
label("10",(-1.5,10.0));path p4 = (20.0,0.0)--(20.0,-0.66);
draw(p4);
label("20",(20.0,-1.5));path p6 = (0.0,0.0)--(0.0,11.0);
draw(p6,Arrow());
path p7 = (0.0,0.0)--(21.0,0.0);
draw(p7,Arrow());
label("hours studied",(10,-1));label(rotate(90.0)*"score",(-1,5));



shipout(bbox(3,invisible)); 
