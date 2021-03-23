import {Point} from '@mathigon/euclid';
import {Step} from '@mathigon/studio';
import {CoordinateSystem} from '../shared/components/chart';
import '../shared/shared';


// Remove r cells before Juniper replaces them
let rcells = document.getElementsByClassName('rblock');
while (rcells[0]) {
  rcells[0].parentNode!.removeChild(rcells[0]);
}

function pdf(m: number, s: number) {
  return (x: number) => 1 / (Math.sqrt(2 * Math.PI) * s) *
                        Math.exp(-((x - m) ** 2) / (2 * (s ** 2)));
}

export function gaussiandensity($step: Step) {
  const $chart = $step.$('x-chart') as CoordinateSystem;

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

  const points = xs.map(p => new Point(p, 0));

  $step.model.watch((s: any) => {
    const fn = pdf(s.μ, s.σ);
    //$chart.mathBounds = new Bounds(55, 75, 0, 0.5);
    $chart.setFunctions(fn);
    $chart.drawPoints(points);
  });
}

function tricube(l: number) {
  return (u: number) => 1 / l * (Math.abs(u / l) < 1 ?
                        70 / 81 * (1 - Math.abs(u / l) ** 3) ** 3 : 0.0);
}

export function tricubegraph($step: Step) {
  const $chart = $step.$('x-chart') as CoordinateSystem;

  $step.model.watch((s: any) => {
    const fn = tricube(s.λ);
    $chart.setFunctions(fn);
  });
}

function estimator(xs: number[], i: number, l: number) {
  const fn = tricube(l);
  return (x: number) => xs.filter((_, j) => j != i - 1).map(xi => fn(x - xi))
                            .reduce((a, b) => a + b, 0) / 5.0;
}

export function kdecrossvalidate($step: Step) {
  const $chart = $step.$('x-chart') as CoordinateSystem;

  const xs = [-3.2, 0.1, 0.2, 3.015, 4.5, 7.2];
  const points = xs.map(p => new Point(p, 0));

  $step.model.watch((s: any) => {
    const fn = estimator(xs, s.i, s.λ);
    $chart.setFunctions(fn);
    $chart.drawPoints(points);
  });
}

export function gaussiandensity_mle($step: Step) {
  const $chart = $step.$('x-chart') as CoordinateSystem;

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

  const points = xs.map(p => new Point(p, 0));

  $step.model.watch((s: any) => {
    const fn = pdf(s.μ, s.σ);
    const loglikelihood = xs.map(fn).map(Math.log).reduce((a, b) => a + b);
    $step.model.LL = Math.round(100*loglikelihood)/100;
    //$chart.mathBounds = new Bounds(55, 75, 0, 0.5);
    $chart.setFunctions(fn);
    $chart.drawPoints(points);
  });
}

function twoStep(a: number, b: number, c: number, d: number, g: number) {
  const delta = (1 - g * (b - a)) / (d - c);
  return (x: number) => (a < x && x < b ? g : (c < x && x < d) ? delta : 0);
}

export function mleCaution($step: Step) {
  const $chart = $step.$('x-chart') as CoordinateSystem;

  const xs = [-2.4, -2.2, -2.1, -1.5, 0.2, 1.2, 1.3, 3.0025];

  const points = xs.map(p => new Point(p, 0));

  $step.model.watch((s: any) => {
    const fn = twoStep(s.a, s.b, s.c, s.d, s.γ);
    $step.model.likelihood = xs.map(fn).reduce((a, b) => a * b);
    $chart.setFunctions(fn);
    $chart.drawPoints(points);
  });
}
