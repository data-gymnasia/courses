// =============================================================================
// Coordinate Plane Component
// (c) Mathigon
// =============================================================================


import {numberFormat} from '@mathigon/fermat';
import {Bounds, Point, TransformMatrix} from '@mathigon/euclid';
import {$N, CustomElementView, ElementView, register, SVGParentView, SVGView} from '@mathigon/boost';


const FUNCTION_STEP = 2;
const TICK_LENGTH = 4;

// Axis label SVG - use in CSS as url(#axis-arrow).
const MARKER = `<marker id="axis-arrow" refX="3" refY="3" markerWidth="6"
    markerHeight="6" orient="auto"><path d="M 0 0 L 6 3 L 0 6 z"/></marker>`;


@register('x-chart')
export class CoordinateSystem extends CustomElementView {
  private $svg!: SVGParentView;
  private $grid?: ElementView;
  private $plot!: ElementView;
  private $axes?: ElementView;
  private $labels?: ElementView;
  private $xAxis?: SVGView;
  private $yAxis?: SVGView;

  axisNames?: string[];  // [xAxisLabel, yAxisLabel]
  plotBounds!: Bounds;  // The intrinsic (plot) coordinate system bounds.
  viewportBounds!: Bounds;  // The browser viewport bounds in px.
  plotToViewportMatrix!: TransformMatrix;

  ready() {
    const w = +this.attr('width');
    const h = +this.attr('height');

    this.$svg = $N('svg', {width: w, height: h, viewBox: `0 0 ${w} ${h}`, class: 'canvas'}, this) as SVGParentView;

    $N('defs', {html: MARKER}, this.$svg);  // Axis arrow definitions.
    this.$grid = $N('g', {class: 'grid'}, this.$svg);
    this.$axes = $N('g', {class: 'axes'}, this.$svg);
    this.$plot = $N('g', {class: 'plot'}, this.$svg);
    this.$labels = $N('g', {class: 'labels'}, this.$svg);

    const [xMin, xMax, xStep] = (this.attr('x-axis') || '-5,5,1').split(',').map(x => +x);
    const [yMin, yMax, yStep] = (this.attr('y-axis') || '-5,5,1').split(',').map(x => +x);

    this.viewportBounds = new Bounds(20, w - 20, 20, h - 20);
    this.plotBounds = new Bounds(xMin, xMax, yMax, yMin);
    this.axisNames = (this.attr('axis-names') || ',').split(',');

    const [pB, vB] = [this.plotBounds, this.viewportBounds];
    this.plotToViewportMatrix = [
      [vB.dx / pB.dx, 0, vB.xMin - pB.xMin / pB.dx * vB.dx],
      [0, vB.dy / pB.dy, vB.yMin - pB.yMin / pB.dy * vB.dy]
    ];

    // Find the appropriate position for x and y-axis, if 0 is not available.
    const cx = (xMin > 0) ? xMin : (xMax < 0) ? xMax : 0;
    const cy = (yMin > 0) ? yMin : (yMax < 0) ? yMax : 0;
    const origin = this.toViewportCoords(new Point(cx, cy));

    // Draw x-axis grid lines and labels.
    const xStart = xStep * Math.trunc(pB.xMin / xStep + 0.01);
    for (let x = xStart; x < pB.xMax; x += xStep) {
      if (x === origin.x) continue;  // Skip axis
      const px = this.toViewportCoords(new Point(x, 0)).x;
      $N('line', {x1: px, y1: vB.yMin, x2: px, y2: vB.yMax}, this.$grid);
      this.makeLabel(0, x, px, origin);
    }

    // Draw y-axis grid lines and labels.
    const yStart = yStep * Math.trunc(yMin / yStep + 0.01);
    for (let y = yStart; y < yMax; y += yStep) {
      if (y === origin.y) continue;  // Skip axis
      const py = this.toViewportCoords(new Point(0, y)).y;
      $N('line', {x1: vB.xMin, y1: py, x2: vB.xMax, y2: py}, this.$grid);
      this.makeLabel(1, y, py, origin);
    }

    // Draw major axes.
    this.$xAxis = $N('line', {x1: vB.xMin, x2: vB.xMax, y1: origin.y, y2: origin.y}, this.$axes) as SVGView;
    this.$yAxis = $N('line', {x1: origin.x, x2: origin.x, y1: vB.yMax, y2: vB.yMin}, this.$axes) as SVGView;

    // Draw axis names.
    $N('text', {text: this.axisNames[0], x: vB.xMax - 2, y: origin.y - 12, 'text-anchor': 'end'}, this.$labels);
    $N('text', {text: this.axisNames[1], x: origin.x + 10, y: vB.yMin + 5}, this.$labels);
  }

  private makeLabel(axis: 0|1, xy: number, pxy: number, origin: Point) {
    const text = numberFormat(xy, 4);

    $N('text', {
      text,
      x: axis ? origin.x - 8 : pxy,
      y: axis ? pxy + 4 : origin.y + 18,
      'text-anchor': axis ? 'end' : 'middle'
    }, this.$labels);

    $N('line', {
      class: 'tick',
      x1: axis ? origin.x : pxy,
      y1: axis ? pxy : origin.y,
      x2: axis ? origin.x - TICK_LENGTH : pxy,
      y2: axis ? pxy : origin.y + TICK_LENGTH
    }, this.$axes);
  }

  toPlotCoords(p: Point) {
    return p.changeCoordinates(this.viewportBounds, this.plotBounds);
  }

  toViewportCoords(p: Point) {
    return p.transform(this.plotToViewportMatrix);
  }

  // ---------------------------------------------------------------------------
  // Drawing Functions

  setFunctions(...fns: ((x: number) => number)[]) {
    const data = fns.map((fn) => {
      const series: Point[] = [];
      for (let vx = this.viewportBounds.xMin; vx < this.viewportBounds.xMax; vx += FUNCTION_STEP) {
        const x = this.toPlotCoords(new Point(vx, 0)).x;
        series.push(new Point(x, fn(x)));
      }
      return series;
    });

    this.$plot.removeChildren();
    for (const d of data) this.drawLinePlot(d);
  }

  drawLinePlot(points: Point[]) {
    const $group = $N('g', {}, this.$plot);
    const $path = $N('path', {}, $group) as SVGView;
    const pB = this.plotBounds;

    points = points.filter(p => (p.y >= pB.yMax && p.y <= pB.yMin));
    $path.points = points.map(p => this.toViewportCoords(p));
  }

  drawPoints(points: Point[]) {
    const $group = $N('g', {}, this.$plot);

    for (const p of points) {
      const p1 = this.toViewportCoords(p);
      $N('circle', {r: 4, cx: p1.x, cy: p1.y}, $group);
    }
  }
}
