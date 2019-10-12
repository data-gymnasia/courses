import '../shared/shared';

import { Point, Bounds } from "@mathigon/fermat";

function sigmoid(α, β) { 
  return x => 1/(1+Math.exp(-(α + β*x)));
}

export function logisticAnimationExercise($step) {
  const $chart = $step.$("x-coordinate-system");
  
  const zeros = [-1.2, -0.8, -0.7, 0.4, -2.4, 1.13]; 
  const ones = [2.2, 1.3, 0.8, 2.5, 2.62]; 
  
  const points0 = zeros.map(p=>new Point(p, 0));            
  const points1 = ones.map(p=>new Point(p, 1));

  $step.model.watch(s => {
    const fn = sigmoid(s.α, s.β);
    var onesloss = ones.map(x=>Math.log(1/fn(x))).reduce((a,b)=>a+b,0);
    var zerosloss = zeros.map(x=>Math.log(1/(1-fn(x)))).reduce((a,b)=>a+b,0);
    s.$step.model.set('loss', Math.round(10**3*(onesloss + zerosloss))/10**3);
    $chart.setFunctions(fn);
    $chart.drawPoints(points0);
    $chart.drawPoints(points1);
  });
}