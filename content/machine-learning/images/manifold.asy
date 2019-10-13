import smoothcontour3;
import graph3;
import palette;
import x11colors;

usepackage("mathpazo");

settings.render = 8; 
settings.outformat = "pdf";

size3(256);

currentlight.background = white;

file pathdata = input("pointcloud1.csv");
real[][] A = pathdata.csv().dimension(0,3);
close(pathdata);
for(int i=0; i<A.length; ++i){
//    dot((A[i][0],A[i][1],A[i][2]),p=red);
}

file pathdata = input("pointcloud2.csv");
real[][] B = pathdata.csv().dimension(0,3);
close(pathdata);
for(int i=0; i<B.length; ++i){
//    dot((B[i][0],B[i][1],B[i][2]),p=blue);
}

real cats(real x, real y, real z) {
    real t = 0.0;
    for(int i=0; i<A.length; ++i){
        t += exp(-600.0*((x - A[i][0])^2 + (y - A[i][1])^2 + (z - A[i][2])^2));
    }
    return t - 1.1;
}

real dogs(real x, real y, real z) {
    real t = 0.0;
    for(int i=0; i<B.length; ++i){
        t += exp(-700*((x - B[i][0])^2 + (y - B[i][1])^2 + (z - B[i][2])^2));
    }
    return t - 1.1;
}

//draw(implicitsurface(new real(real x, real y, real z) {return x^2 + y^2 + z^2 - 0.1;}, (0,0,0), (1,1,1)));
draw(implicitsurface(cats, (0,0,0), (1,1,1)), MidnightBlue);
draw(implicitsurface(dogs, (0,0,0), (1,1,1)), DarkRed);

write(cats(0.76822, 0.630913, 0.150936)); 


xaxis3(  L   = "",
       arrow = Arrow3(),
       xmin  = 0,
       xmax  = 1,
       ticks = NoTicks3);
yaxis3(  L   = "",
       arrow = Arrow3(),
       ymin  = 0, 
       ymax  = 1,
       ticks = NoTicks3);
zaxis3(  L   = "",
       arrow = Arrow3(),
       zmin  = -infinity,
       zmax  = infinity,
       ticks = NoTicks3);


triple M = currentpicture.userMax();
triple m = currentpicture.userMin();
currentprojection = perspective(M.x+(M.x-m.x),M.y+0.25*(M.y-m.y),M.z+0.5*(M.z-m.z));

