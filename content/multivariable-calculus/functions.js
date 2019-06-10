import { Point } from "@mathigon/fermat";
import '../shared/shared';

/**
 * Returns a linear function mx+b.
 * @param {*} m   slope
 * @param {*} b   y-intercept
 * @returns {function}  x => mx+b
 */
function lineOf(m, b) {
  return x => m * x + b;
}

export function optimization($step) {
  const $chart = $step.$("x-coordinate-system");

  // generate random linear equation
  const m = 4 * Math.random() - 2;
  const b = 4 * Math.random() - 2;
  const someFn = lineOf(m, b);

  // a range of values from -10 to 10, step size of 2
  const xs = [...Array(10).keys()].map(x => 2 * x - 10);
  // add noise to the linear equation
  const points = xs.map(p => new Point(p, someFn(p) - 3 + 6 * Math.random()));

  // draw the line based on user's slider inputs
  $step.model.watch(s => {
    const fn = lineOf(s.m, s.b);
    $chart.setFunctions(fn);
    $chart.drawPoints(points);

    // draw a line from each point to the user's line
    points.forEach((p, i) => {
      $chart.drawLinePlot([p, new Point(xs[i], fn(xs[i]))]);
    });
  });
}

function parabolaOf(a) {
  return x => a * x * x; 
}

export function simpleparabola($step) {
  const $chart = $step.$("x-coordinate-system");

  // draw the line based on user's slider inputs
  $step.model.watch(s => {
    const fn = parabolaOf(s.a); 
    $chart.setFunctions(fn);
  });
}