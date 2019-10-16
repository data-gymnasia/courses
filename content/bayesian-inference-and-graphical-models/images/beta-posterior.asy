import x11colors;
import graph;
import palette;

settings.outformat="pdf";

usepackage("mathpazo");

size(128,IgnoreAspect);

file pathdata = input("path1.csv");
real[][] A = pathdata.csv().dimension(0,2);
close(pathdata);
guide p1;
for(int i=0; i<A.length; ++i){
    p1 = p1 -- (A[i][0],A[i][1]);
}
draw(p1,rgb(0.09803921568627451,0.09803921568627451,0.4392156862745098)+linewidth(1.5));
path p2 = (0.8,-0.04)--(0.8,0.04);
draw(p2);
label("$\frac{p}{p+q}$",(0.8,-0.2));
label("$t$",(1.1,0.09));
label("$f_{\mathrm{posterior}}(t)$",(0.28,1.1));

xaxis(   L   = "",
       arrow = None,
       xmin  = -infinity,
       xmax  = infinity,
       ticks = Ticks(Ticks=new real[] {1}));
yaxis(   L   = "",
       arrow = None,
       ymin  = -infinity,
       ymax  = infinity,
       ticks = Ticks(Ticks=new real[] {}));


shipout(bbox(FillDraw(3,drawpen=invisible))); 
