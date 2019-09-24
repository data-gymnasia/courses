import { Point, Bounds } from "@mathigon/fermat";

// Remove r cells before Juniper replaces them
var rcells = document.getElementsByClassName("rblock")
while (rcells[0]) {
   console.log("removing cell")
   rcells[0].parentNode.removeChild(rcells[0]);
}

import '../shared/shared';

function pdf(μ, σ) {
  return x => 1/Math.sqrt(2*Math.PI*σ)*Math.exp(-((x-μ)**2)/(2*(σ**2)));
}

export function gaussiandensity($step) {
  const $chart = $step.$("x-coordinate-system");
  
  const xs = [71.54, 66.62, 64.11, 62.72, 68.12, 
              69.07, 64.82, 61.92, 68.45, 66.3, 
              66.99, 62.2, 61.04, 63.31, 68.94, 
              66.27, 66.8, 71.7, 68.93, 66.65, 
              71.97, 60.27, 62.81, 70.64, 71.61, 
              65.51, 63.1, 66.21, 68.23, 72.32, 
              62.29, 63.12, 64.94, 71.89, 65.48, 
              63.66, 56.11, 65.63, 61.26, 65.12, 
              66.93, 68.51, 67.2, 71.57, 66.65, 
              59.77, 61.51, 63.25, 69.12, 64.98]; 
              
  const points = xs.map(p=>new Point(p, 0));
  
  $step.model.watch(s => {
    const fn = pdf(s.μ, s.σ); 
    //$chart.mathBounds = new Bounds(55, 75, 0, 0.5);
    $chart.setFunctions(fn);
    $chart.drawPoints(points);
  });
}

function tricube(λ) {
    return u => 1/λ * (Math.abs(u/λ) < 1 ? 70/81*(1-Math.abs(u/λ)**3)**3 : 0.0); 
}

export function tricubegraph($step) {
  const $chart = $step.$("x-coordinate-system");

  $step.model.watch(s => {
    const fn = tricube(s.λ); 
    $chart.setFunctions(fn);
  });
}