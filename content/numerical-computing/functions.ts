import '../shared/shared';

import {loadScript} from '@mathigon/boost';


declare global {
  interface Window {
    Plotly: any;
  }
}


loadScript('https://cdn.plot.ly/plotly-latest.min.js').then(() => {
  var plotlygraph = document.getElementById('plotly-float64-graph');
  if (plotlygraph != null) {
    window.Plotly.plot(plotlygraph, [
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            'x': [
              0.0,
              1.0,
              2.0,
              3.0,
              4.0,
              5.0,
              6.0,
              7.0,
              8.0,
              9.0,
              10.0,
              11.0,
              12.0,
              13.0,
              14.0,
              15.0,
              16.0,
              17.0,
              18.0,
              19.0,
              20.0,
              21.0,
              22.0,
              23.0,
              24.0,
              25.0,
              26.0,
              27.0,
              28.0,
              29.0,
              30.0,
              31.0,
              32.0,
              33.0,
              34.0,
              35.0,
              36.0,
              37.0,
              38.0,
              39.0,
              40.0,
              41.0,
              42.0,
              43.0,
              44.0,
              45.0,
              46.0,
              47.0,
              48.0,
              49.0,
              50.0,
              51.0,
              52.0,
              53.0,
              54.0,
              55.0,
              56.0,
              57.0,
              58.0,
              59.0,
              60.0,
              61.0,
              62.0,
              63.0,
              64.0,
              65.0,
              66.0,
              67.0,
              68.0,
              69.0,
              70.0,
              71.0,
              72.0,
              73.0,
              74.0,
              75.0,
              76.0,
              77.0,
              78.0,
              79.0,
              80.0,
              81.0,
              82.0,
              83.0,
              84.0,
              85.0,
              86.0,
              87.0,
              88.0,
              89.0,
              90.0,
              91.0,
              92.0,
              93.0,
              94.0,
              95.0,
              96.0,
              97.0,
              98.0,
              99.0,
              100.0,
              101.0,
              102.0,
              103.0,
              104.0,
              105.0,
              106.0,
              107.0,
              108.0,
              109.0,
              110.0,
              111.0,
              112.0,
              113.0,
              114.0,
              115.0,
              116.0,
              117.0,
              118.0,
              119.0,
              120.0,
              121.0,
              122.0,
              123.0,
              124.0,
              125.0,
              126.0,
              127.0,
              128.0,
              129.0,
              130.0,
              131.0,
              132.0,
              133.0,
              134.0,
              135.0,
              136.0,
              137.0,
              138.0,
              139.0,
              140.0,
              141.0,
              142.0,
              143.0,
              144.0,
              145.0,
              146.0,
              147.0,
              148.0,
              149.0,
              150.0,
              151.0,
              152.0,
              153.0,
              154.0,
              155.0,
              156.0,
              157.0,
              158.0,
              159.0,
              160.0,
              161.0,
              162.0,
              163.0,
              164.0,
              165.0,
              166.0,
              167.0,
              168.0,
              169.0,
              170.0,
              171.0,
              172.0,
              173.0,
              174.0,
              175.0,
              176.0,
              177.0,
              178.0,
              179.0,
              180.0,
              181.0,
              182.0,
              183.0,
              184.0,
              185.0,
              186.0,
              187.0,
              188.0,
              189.0,
              190.0,
              191.0,
              192.0,
              193.0,
              194.0,
              195.0,
              196.0,
              197.0,
              198.0,
              199.0,
              200.0,
              201.0,
              202.0,
              203.0,
              204.0,
              205.0,
              206.0,
              207.0,
              208.0,
              209.0,
              210.0,
              211.0,
              212.0,
              213.0,
              214.0,
              215.0,
              216.0,
              217.0,
              218.0,
              219.0,
              220.0,
              221.0,
              222.0,
              223.0,
              224.0,
              225.0,
              226.0,
              227.0,
              228.0,
              229.0,
              230.0,
              231.0,
              232.0,
              233.0,
              234.0,
              235.0,
              236.0,
              237.0,
              238.0,
              239.0,
              240.0,
              241.0,
              242.0,
              243.0,
              244.0,
              245.0,
              246.0,
              247.0,
              248.0,
              249.0,
              250.0,
              251.0,
              252.0,
              253.0,
              254.0,
              255.0
            ],
            'showlegend': true,
            'mode': 'markers',
            'name': 'y1',
            'zmin': -0.1,
            'legendgroup': 'y1',
            'marker': {
              'symbol': 'circle',
              'color': 'rgba(25, 25, 112, 1.000)',
              'line': {
                'color': 'rgba(0, 0, 0, 1.000)',
                'width': 0
              },
              'size': 4
            },
            'zmax': 0.1,
            'y': [
              0.0,
              0.0078125,
              0.015625,
              0.0234375,
              0.03125,
              0.0390625,
              0.046875,
              0.0546875,
              0.0625,
              0.0703125,
              0.078125,
              0.0859375,
              0.09375,
              0.1015625,
              0.109375,
              0.1171875,
              0.125,
              0.1328125,
              0.140625,
              0.1484375,
              0.15625,
              0.1640625,
              0.171875,
              0.1796875,
              0.1875,
              0.1953125,
              0.203125,
              0.2109375,
              0.21875,
              0.2265625,
              0.234375,
              0.2421875,
              0.25,
              0.265625,
              0.28125,
              0.296875,
              0.3125,
              0.328125,
              0.34375,
              0.359375,
              0.375,
              0.390625,
              0.40625,
              0.421875,
              0.4375,
              0.453125,
              0.46875,
              0.484375,
              0.5,
              0.53125,
              0.5625,
              0.59375,
              0.625,
              0.65625,
              0.6875,
              0.71875,
              0.75,
              0.78125,
              0.8125,
              0.84375,
              0.875,
              0.90625,
              0.9375,
              0.96875,
              1.0,
              1.0625,
              1.125,
              1.1875,
              1.25,
              1.3125,
              1.375,
              1.4375,
              1.5,
              1.5625,
              1.625,
              1.6875,
              1.75,
              1.8125,
              1.875,
              1.9375,
              2.0,
              2.125,
              2.25,
              2.375,
              2.5,
              2.625,
              2.75,
              2.875,
              3.0,
              3.125,
              3.25,
              3.375,
              3.5,
              3.625,
              3.75,
              3.875,
              4.0,
              4.25,
              4.5,
              4.75,
              5.0,
              5.25,
              5.5,
              5.75,
              6.0,
              6.25,
              6.5,
              6.75,
              7.0,
              7.25,
              7.5,
              7.75,
              8.0,
              8.5,
              9.0,
              9.5,
              10.0,
              10.5,
              11.0,
              11.5,
              12.0,
              12.5,
              13.0,
              13.5,
              14.0,
              14.5,
              15.0,
              15.5,
              -0.0,
              -0.0078125,
              -0.015625,
              -0.0234375,
              -0.03125,
              -0.0390625,
              -0.046875,
              -0.0546875,
              -0.0625,
              -0.0703125,
              -0.078125,
              -0.0859375,
              -0.09375,
              -0.1015625,
              -0.109375,
              -0.1171875,
              -0.125,
              -0.1328125,
              -0.140625,
              -0.1484375,
              -0.15625,
              -0.1640625,
              -0.171875,
              -0.1796875,
              -0.1875,
              -0.1953125,
              -0.203125,
              -0.2109375,
              -0.21875,
              -0.2265625,
              -0.234375,
              -0.2421875,
              -0.25,
              -0.265625,
              -0.28125,
              -0.296875,
              -0.3125,
              -0.328125,
              -0.34375,
              -0.359375,
              -0.375,
              -0.390625,
              -0.40625,
              -0.421875,
              -0.4375,
              -0.453125,
              -0.46875,
              -0.484375,
              -0.5,
              -0.53125,
              -0.5625,
              -0.59375,
              -0.625,
              -0.65625,
              -0.6875,
              -0.71875,
              -0.75,
              -0.78125,
              -0.8125,
              -0.84375,
              -0.875,
              -0.90625,
              -0.9375,
              -0.96875,
              -1.0,
              -1.0625,
              -1.125,
              -1.1875,
              -1.25,
              -1.3125,
              -1.375,
              -1.4375,
              -1.5,
              -1.5625,
              -1.625,
              -1.6875,
              -1.75,
              -1.8125,
              -1.875,
              -1.9375,
              -2.0,
              -2.125,
              -2.25,
              -2.375,
              -2.5,
              -2.625,
              -2.75,
              -2.875,
              -3.0,
              -3.125,
              -3.25,
              -3.375,
              -3.5,
              -3.625,
              -3.75,
              -3.875,
              -4.0,
              -4.25,
              -4.5,
              -4.75,
              -5.0,
              -5.25,
              -5.5,
              -5.75,
              -6.0,
              -6.25,
              -6.5,
              -6.75,
              -7.0,
              -7.25,
              -7.5,
              -7.75,
              -8.0,
              -8.5,
              -9.0,
              -9.5,
              -10.0,
              -10.5,
              -11.0,
              -11.5,
              -12.0,
              -12.5,
              -13.0,
              -13.5,
              -14.0,
              -14.5,
              -15.0,
              -15.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            'x': [
              0.0,
              1.0,
              2.0,
              3.0,
              4.0,
              5.0,
              6.0,
              7.0,
              8.0,
              9.0,
              10.0,
              11.0,
              12.0,
              13.0,
              14.0,
              15.0,
              16.0
            ],
            'showlegend': true,
            'mode': 'markers',
            'name': 'subnormals',
            'zmin': -0.1,
            'legendgroup': 'subnormals',
            'marker': {
              'symbol': 'circle',
              'color': 'rgba(139, 0, 0, 1.000)',
              'line': {
                'color': 'rgba(0, 0, 0, 1.000)',
                'width': 0
              },
              'size': 4
            },
            'zmax': 0.1,
            'y': [
              0.0,
              0.0078125,
              0.015625,
              0.0234375,
              0.03125,
              0.0390625,
              0.046875,
              0.0546875,
              0.0625,
              0.0703125,
              0.078125,
              0.0859375,
              0.09375,
              0.1015625,
              0.109375,
              0.1171875,
              0.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            'x': [
              128.0,
              129.0,
              130.0,
              131.0,
              132.0,
              133.0,
              134.0,
              135.0,
              136.0,
              137.0,
              138.0,
              139.0,
              140.0,
              141.0,
              142.0,
              143.0,
              144.0
            ],
            'showlegend': true,
            'mode': 'markers',
            'name': 'y3',
            'zmin': -0.1,
            'legendgroup': 'y3',
            'marker': {
              'symbol': 'circle',
              'color': 'rgba(139, 0, 0, 1.000)',
              'line': {
                'color': 'rgba(0, 0, 0, 1.000)',
                'width': 0
              },
              'size': 4
            },
            'zmax': 0.1,
            'y': [
              -0.0,
              -0.0078125,
              -0.015625,
              -0.0234375,
              -0.03125,
              -0.0390625,
              -0.046875,
              -0.0546875,
              -0.0625,
              -0.0703125,
              -0.078125,
              -0.0859375,
              -0.09375,
              -0.1015625,
              -0.109375,
              -0.1171875,
              -0.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            ],
            'x': [
              16.0,
              32.0,
              48.0,
              64.0,
              80.0,
              96.0,
              112.0,
              144.0,
              160.0,
              176.0,
              192.0,
              208.0,
              224.0,
              240.0
            ],
            'showlegend': true,
            'mode': 'markers',
            'name': 'y4',
            'zmin': -0.1,
            'legendgroup': 'y4',
            'marker': {
              'symbol': 'circle',
              'color': 'rgba(255, 165, 0, 1.000)',
              'line': {
                'color': 'rgba(0, 0, 0, 1.000)',
                'width': 0
              },
              'size': 4
            },
            'zmax': 0.1,
            'y': [
              0.125,
              0.25,
              0.5,
              1.0,
              2.0,
              4.0,
              8.0,
              -0.125,
              -0.25,
              -0.5,
              -1.0,
              -2.0,
              -4.0,
              -8.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y5',
            'zmin': -0.1,
            'legendgroup': 'y5',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0,
              0.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y6',
            'zmin': -0.1,
            'legendgroup': 'y6',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0078125,
              0.0078125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y7',
            'zmin': -0.1,
            'legendgroup': 'y7',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.015625,
              0.015625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y8',
            'zmin': -0.1,
            'legendgroup': 'y8',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0234375,
              0.0234375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y9',
            'zmin': -0.1,
            'legendgroup': 'y9',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.03125,
              0.03125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y10',
            'zmin': -0.1,
            'legendgroup': 'y10',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0390625,
              0.0390625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y11',
            'zmin': -0.1,
            'legendgroup': 'y11',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.046875,
              0.046875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y12',
            'zmin': -0.1,
            'legendgroup': 'y12',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0546875,
              0.0546875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y13',
            'zmin': -0.1,
            'legendgroup': 'y13',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0625,
              0.0625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y14',
            'zmin': -0.1,
            'legendgroup': 'y14',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0703125,
              0.0703125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y15',
            'zmin': -0.1,
            'legendgroup': 'y15',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.078125,
              0.078125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y16',
            'zmin': -0.1,
            'legendgroup': 'y16',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.0859375,
              0.0859375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y17',
            'zmin': -0.1,
            'legendgroup': 'y17',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.09375,
              0.09375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y18',
            'zmin': -0.1,
            'legendgroup': 'y18',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1015625,
              0.1015625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y19',
            'zmin': -0.1,
            'legendgroup': 'y19',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.109375,
              0.109375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y20',
            'zmin': -0.1,
            'legendgroup': 'y20',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1171875,
              0.1171875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y21',
            'zmin': -0.1,
            'legendgroup': 'y21',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.125,
              0.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y22',
            'zmin': -0.1,
            'legendgroup': 'y22',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1328125,
              0.1328125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y23',
            'zmin': -0.1,
            'legendgroup': 'y23',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.140625,
              0.140625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y24',
            'zmin': -0.1,
            'legendgroup': 'y24',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1484375,
              0.1484375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y25',
            'zmin': -0.1,
            'legendgroup': 'y25',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.15625,
              0.15625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y26',
            'zmin': -0.1,
            'legendgroup': 'y26',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1640625,
              0.1640625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y27',
            'zmin': -0.1,
            'legendgroup': 'y27',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.171875,
              0.171875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y28',
            'zmin': -0.1,
            'legendgroup': 'y28',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1796875,
              0.1796875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y29',
            'zmin': -0.1,
            'legendgroup': 'y29',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1875,
              0.1875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y30',
            'zmin': -0.1,
            'legendgroup': 'y30',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.1953125,
              0.1953125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y31',
            'zmin': -0.1,
            'legendgroup': 'y31',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.203125,
              0.203125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y32',
            'zmin': -0.1,
            'legendgroup': 'y32',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.2109375,
              0.2109375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y33',
            'zmin': -0.1,
            'legendgroup': 'y33',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.21875,
              0.21875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y34',
            'zmin': -0.1,
            'legendgroup': 'y34',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.2265625,
              0.2265625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y35',
            'zmin': -0.1,
            'legendgroup': 'y35',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.234375,
              0.234375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y36',
            'zmin': -0.1,
            'legendgroup': 'y36',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.2421875,
              0.2421875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y37',
            'zmin': -0.1,
            'legendgroup': 'y37',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.25,
              0.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y38',
            'zmin': -0.1,
            'legendgroup': 'y38',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.265625,
              0.265625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y39',
            'zmin': -0.1,
            'legendgroup': 'y39',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.28125,
              0.28125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y40',
            'zmin': -0.1,
            'legendgroup': 'y40',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.296875,
              0.296875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y41',
            'zmin': -0.1,
            'legendgroup': 'y41',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.3125,
              0.3125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y42',
            'zmin': -0.1,
            'legendgroup': 'y42',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.328125,
              0.328125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y43',
            'zmin': -0.1,
            'legendgroup': 'y43',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.34375,
              0.34375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y44',
            'zmin': -0.1,
            'legendgroup': 'y44',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.359375,
              0.359375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y45',
            'zmin': -0.1,
            'legendgroup': 'y45',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.375,
              0.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y46',
            'zmin': -0.1,
            'legendgroup': 'y46',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.390625,
              0.390625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y47',
            'zmin': -0.1,
            'legendgroup': 'y47',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.40625,
              0.40625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y48',
            'zmin': -0.1,
            'legendgroup': 'y48',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.421875,
              0.421875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y49',
            'zmin': -0.1,
            'legendgroup': 'y49',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.4375,
              0.4375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y50',
            'zmin': -0.1,
            'legendgroup': 'y50',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.453125,
              0.453125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y51',
            'zmin': -0.1,
            'legendgroup': 'y51',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.46875,
              0.46875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y52',
            'zmin': -0.1,
            'legendgroup': 'y52',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.484375,
              0.484375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y53',
            'zmin': -0.1,
            'legendgroup': 'y53',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.5,
              0.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y54',
            'zmin': -0.1,
            'legendgroup': 'y54',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.53125,
              0.53125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y55',
            'zmin': -0.1,
            'legendgroup': 'y55',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.5625,
              0.5625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y56',
            'zmin': -0.1,
            'legendgroup': 'y56',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.59375,
              0.59375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y57',
            'zmin': -0.1,
            'legendgroup': 'y57',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.625,
              0.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y58',
            'zmin': -0.1,
            'legendgroup': 'y58',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.65625,
              0.65625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y59',
            'zmin': -0.1,
            'legendgroup': 'y59',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.6875,
              0.6875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y60',
            'zmin': -0.1,
            'legendgroup': 'y60',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.71875,
              0.71875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y61',
            'zmin': -0.1,
            'legendgroup': 'y61',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.75,
              0.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y62',
            'zmin': -0.1,
            'legendgroup': 'y62',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.78125,
              0.78125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y63',
            'zmin': -0.1,
            'legendgroup': 'y63',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.8125,
              0.8125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y64',
            'zmin': -0.1,
            'legendgroup': 'y64',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.84375,
              0.84375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y65',
            'zmin': -0.1,
            'legendgroup': 'y65',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.875,
              0.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y66',
            'zmin': -0.1,
            'legendgroup': 'y66',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.90625,
              0.90625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y67',
            'zmin': -0.1,
            'legendgroup': 'y67',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.9375,
              0.9375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y68',
            'zmin': -0.1,
            'legendgroup': 'y68',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              0.96875,
              0.96875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y69',
            'zmin': -0.1,
            'legendgroup': 'y69',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.0,
              1.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y70',
            'zmin': -0.1,
            'legendgroup': 'y70',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.0625,
              1.0625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y71',
            'zmin': -0.1,
            'legendgroup': 'y71',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.125,
              1.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y72',
            'zmin': -0.1,
            'legendgroup': 'y72',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.1875,
              1.1875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y73',
            'zmin': -0.1,
            'legendgroup': 'y73',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.25,
              1.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y74',
            'zmin': -0.1,
            'legendgroup': 'y74',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.3125,
              1.3125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y75',
            'zmin': -0.1,
            'legendgroup': 'y75',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.375,
              1.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y76',
            'zmin': -0.1,
            'legendgroup': 'y76',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.4375,
              1.4375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y77',
            'zmin': -0.1,
            'legendgroup': 'y77',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.5,
              1.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y78',
            'zmin': -0.1,
            'legendgroup': 'y78',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.5625,
              1.5625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y79',
            'zmin': -0.1,
            'legendgroup': 'y79',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.625,
              1.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y80',
            'zmin': -0.1,
            'legendgroup': 'y80',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.6875,
              1.6875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y81',
            'zmin': -0.1,
            'legendgroup': 'y81',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.75,
              1.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y82',
            'zmin': -0.1,
            'legendgroup': 'y82',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.8125,
              1.8125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y83',
            'zmin': -0.1,
            'legendgroup': 'y83',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.875,
              1.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y84',
            'zmin': -0.1,
            'legendgroup': 'y84',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              1.9375,
              1.9375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y85',
            'zmin': -0.1,
            'legendgroup': 'y85',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.0,
              2.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y86',
            'zmin': -0.1,
            'legendgroup': 'y86',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.125,
              2.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y87',
            'zmin': -0.1,
            'legendgroup': 'y87',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.25,
              2.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y88',
            'zmin': -0.1,
            'legendgroup': 'y88',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.375,
              2.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y89',
            'zmin': -0.1,
            'legendgroup': 'y89',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.5,
              2.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y90',
            'zmin': -0.1,
            'legendgroup': 'y90',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.625,
              2.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y91',
            'zmin': -0.1,
            'legendgroup': 'y91',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.75,
              2.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y92',
            'zmin': -0.1,
            'legendgroup': 'y92',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              2.875,
              2.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y93',
            'zmin': -0.1,
            'legendgroup': 'y93',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.0,
              3.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y94',
            'zmin': -0.1,
            'legendgroup': 'y94',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.125,
              3.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y95',
            'zmin': -0.1,
            'legendgroup': 'y95',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.25,
              3.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y96',
            'zmin': -0.1,
            'legendgroup': 'y96',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.375,
              3.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y97',
            'zmin': -0.1,
            'legendgroup': 'y97',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.5,
              3.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y98',
            'zmin': -0.1,
            'legendgroup': 'y98',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.625,
              3.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y99',
            'zmin': -0.1,
            'legendgroup': 'y99',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.75,
              3.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y100',
            'zmin': -0.1,
            'legendgroup': 'y100',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              3.875,
              3.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y101',
            'zmin': -0.1,
            'legendgroup': 'y101',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              4.0,
              4.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y102',
            'zmin': -0.1,
            'legendgroup': 'y102',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              4.25,
              4.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y103',
            'zmin': -0.1,
            'legendgroup': 'y103',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              4.5,
              4.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y104',
            'zmin': -0.1,
            'legendgroup': 'y104',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              4.75,
              4.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y105',
            'zmin': -0.1,
            'legendgroup': 'y105',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              5.0,
              5.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y106',
            'zmin': -0.1,
            'legendgroup': 'y106',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              5.25,
              5.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y107',
            'zmin': -0.1,
            'legendgroup': 'y107',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              5.5,
              5.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y108',
            'zmin': -0.1,
            'legendgroup': 'y108',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              5.75,
              5.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y109',
            'zmin': -0.1,
            'legendgroup': 'y109',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              6.0,
              6.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y110',
            'zmin': -0.1,
            'legendgroup': 'y110',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              6.25,
              6.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y111',
            'zmin': -0.1,
            'legendgroup': 'y111',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              6.5,
              6.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y112',
            'zmin': -0.1,
            'legendgroup': 'y112',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              6.75,
              6.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y113',
            'zmin': -0.1,
            'legendgroup': 'y113',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              7.0,
              7.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y114',
            'zmin': -0.1,
            'legendgroup': 'y114',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              7.25,
              7.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y115',
            'zmin': -0.1,
            'legendgroup': 'y115',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              7.5,
              7.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y116',
            'zmin': -0.1,
            'legendgroup': 'y116',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              7.75,
              7.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y117',
            'zmin': -0.1,
            'legendgroup': 'y117',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              8.0,
              8.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y118',
            'zmin': -0.1,
            'legendgroup': 'y118',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              8.5,
              8.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y119',
            'zmin': -0.1,
            'legendgroup': 'y119',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              9.0,
              9.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y120',
            'zmin': -0.1,
            'legendgroup': 'y120',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              9.5,
              9.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y121',
            'zmin': -0.1,
            'legendgroup': 'y121',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              10.0,
              10.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y122',
            'zmin': -0.1,
            'legendgroup': 'y122',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              10.5,
              10.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y123',
            'zmin': -0.1,
            'legendgroup': 'y123',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              11.0,
              11.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y124',
            'zmin': -0.1,
            'legendgroup': 'y124',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              11.5,
              11.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y125',
            'zmin': -0.1,
            'legendgroup': 'y125',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              12.0,
              12.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y126',
            'zmin': -0.1,
            'legendgroup': 'y126',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              12.5,
              12.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y127',
            'zmin': -0.1,
            'legendgroup': 'y127',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              13.0,
              13.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y128',
            'zmin': -0.1,
            'legendgroup': 'y128',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              13.5,
              13.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y129',
            'zmin': -0.1,
            'legendgroup': 'y129',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              14.0,
              14.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y130',
            'zmin': -0.1,
            'legendgroup': 'y130',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              14.5,
              14.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y131',
            'zmin': -0.1,
            'legendgroup': 'y131',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              15.0,
              15.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y132',
            'zmin': -0.1,
            'legendgroup': 'y132',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              15.5,
              15.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y133',
            'zmin': -0.1,
            'legendgroup': 'y133',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0,
              -0.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y134',
            'zmin': -0.1,
            'legendgroup': 'y134',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0078125,
              -0.0078125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y135',
            'zmin': -0.1,
            'legendgroup': 'y135',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.015625,
              -0.015625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y136',
            'zmin': -0.1,
            'legendgroup': 'y136',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0234375,
              -0.0234375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y137',
            'zmin': -0.1,
            'legendgroup': 'y137',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.03125,
              -0.03125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y138',
            'zmin': -0.1,
            'legendgroup': 'y138',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0390625,
              -0.0390625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y139',
            'zmin': -0.1,
            'legendgroup': 'y139',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.046875,
              -0.046875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y140',
            'zmin': -0.1,
            'legendgroup': 'y140',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0546875,
              -0.0546875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y141',
            'zmin': -0.1,
            'legendgroup': 'y141',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0625,
              -0.0625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y142',
            'zmin': -0.1,
            'legendgroup': 'y142',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0703125,
              -0.0703125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y143',
            'zmin': -0.1,
            'legendgroup': 'y143',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.078125,
              -0.078125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y144',
            'zmin': -0.1,
            'legendgroup': 'y144',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.0859375,
              -0.0859375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y145',
            'zmin': -0.1,
            'legendgroup': 'y145',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.09375,
              -0.09375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y146',
            'zmin': -0.1,
            'legendgroup': 'y146',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1015625,
              -0.1015625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y147',
            'zmin': -0.1,
            'legendgroup': 'y147',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.109375,
              -0.109375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y148',
            'zmin': -0.1,
            'legendgroup': 'y148',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1171875,
              -0.1171875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y149',
            'zmin': -0.1,
            'legendgroup': 'y149',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.125,
              -0.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y150',
            'zmin': -0.1,
            'legendgroup': 'y150',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1328125,
              -0.1328125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y151',
            'zmin': -0.1,
            'legendgroup': 'y151',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.140625,
              -0.140625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y152',
            'zmin': -0.1,
            'legendgroup': 'y152',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1484375,
              -0.1484375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y153',
            'zmin': -0.1,
            'legendgroup': 'y153',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.15625,
              -0.15625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y154',
            'zmin': -0.1,
            'legendgroup': 'y154',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1640625,
              -0.1640625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y155',
            'zmin': -0.1,
            'legendgroup': 'y155',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.171875,
              -0.171875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y156',
            'zmin': -0.1,
            'legendgroup': 'y156',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1796875,
              -0.1796875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y157',
            'zmin': -0.1,
            'legendgroup': 'y157',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1875,
              -0.1875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y158',
            'zmin': -0.1,
            'legendgroup': 'y158',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.1953125,
              -0.1953125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y159',
            'zmin': -0.1,
            'legendgroup': 'y159',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.203125,
              -0.203125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y160',
            'zmin': -0.1,
            'legendgroup': 'y160',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.2109375,
              -0.2109375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y161',
            'zmin': -0.1,
            'legendgroup': 'y161',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.21875,
              -0.21875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y162',
            'zmin': -0.1,
            'legendgroup': 'y162',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.2265625,
              -0.2265625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y163',
            'zmin': -0.1,
            'legendgroup': 'y163',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.234375,
              -0.234375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y164',
            'zmin': -0.1,
            'legendgroup': 'y164',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.2421875,
              -0.2421875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y165',
            'zmin': -0.1,
            'legendgroup': 'y165',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.25,
              -0.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y166',
            'zmin': -0.1,
            'legendgroup': 'y166',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.265625,
              -0.265625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y167',
            'zmin': -0.1,
            'legendgroup': 'y167',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.28125,
              -0.28125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y168',
            'zmin': -0.1,
            'legendgroup': 'y168',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.296875,
              -0.296875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y169',
            'zmin': -0.1,
            'legendgroup': 'y169',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.3125,
              -0.3125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y170',
            'zmin': -0.1,
            'legendgroup': 'y170',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.328125,
              -0.328125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y171',
            'zmin': -0.1,
            'legendgroup': 'y171',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.34375,
              -0.34375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y172',
            'zmin': -0.1,
            'legendgroup': 'y172',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.359375,
              -0.359375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y173',
            'zmin': -0.1,
            'legendgroup': 'y173',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.375,
              -0.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y174',
            'zmin': -0.1,
            'legendgroup': 'y174',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.390625,
              -0.390625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y175',
            'zmin': -0.1,
            'legendgroup': 'y175',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.40625,
              -0.40625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y176',
            'zmin': -0.1,
            'legendgroup': 'y176',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.421875,
              -0.421875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y177',
            'zmin': -0.1,
            'legendgroup': 'y177',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.4375,
              -0.4375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y178',
            'zmin': -0.1,
            'legendgroup': 'y178',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.453125,
              -0.453125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y179',
            'zmin': -0.1,
            'legendgroup': 'y179',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.46875,
              -0.46875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y180',
            'zmin': -0.1,
            'legendgroup': 'y180',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.484375,
              -0.484375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y181',
            'zmin': -0.1,
            'legendgroup': 'y181',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.5,
              -0.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y182',
            'zmin': -0.1,
            'legendgroup': 'y182',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.53125,
              -0.53125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y183',
            'zmin': -0.1,
            'legendgroup': 'y183',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.5625,
              -0.5625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y184',
            'zmin': -0.1,
            'legendgroup': 'y184',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.59375,
              -0.59375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y185',
            'zmin': -0.1,
            'legendgroup': 'y185',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.625,
              -0.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y186',
            'zmin': -0.1,
            'legendgroup': 'y186',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.65625,
              -0.65625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y187',
            'zmin': -0.1,
            'legendgroup': 'y187',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.6875,
              -0.6875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y188',
            'zmin': -0.1,
            'legendgroup': 'y188',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.71875,
              -0.71875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y189',
            'zmin': -0.1,
            'legendgroup': 'y189',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.75,
              -0.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y190',
            'zmin': -0.1,
            'legendgroup': 'y190',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.78125,
              -0.78125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y191',
            'zmin': -0.1,
            'legendgroup': 'y191',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.8125,
              -0.8125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y192',
            'zmin': -0.1,
            'legendgroup': 'y192',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.84375,
              -0.84375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y193',
            'zmin': -0.1,
            'legendgroup': 'y193',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.875,
              -0.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y194',
            'zmin': -0.1,
            'legendgroup': 'y194',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.90625,
              -0.90625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y195',
            'zmin': -0.1,
            'legendgroup': 'y195',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.9375,
              -0.9375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y196',
            'zmin': -0.1,
            'legendgroup': 'y196',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -0.96875,
              -0.96875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y197',
            'zmin': -0.1,
            'legendgroup': 'y197',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.0,
              -1.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y198',
            'zmin': -0.1,
            'legendgroup': 'y198',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.0625,
              -1.0625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y199',
            'zmin': -0.1,
            'legendgroup': 'y199',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.125,
              -1.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y200',
            'zmin': -0.1,
            'legendgroup': 'y200',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.1875,
              -1.1875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y201',
            'zmin': -0.1,
            'legendgroup': 'y201',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.25,
              -1.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y202',
            'zmin': -0.1,
            'legendgroup': 'y202',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.3125,
              -1.3125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y203',
            'zmin': -0.1,
            'legendgroup': 'y203',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.375,
              -1.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y204',
            'zmin': -0.1,
            'legendgroup': 'y204',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.4375,
              -1.4375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y205',
            'zmin': -0.1,
            'legendgroup': 'y205',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.5,
              -1.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y206',
            'zmin': -0.1,
            'legendgroup': 'y206',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.5625,
              -1.5625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y207',
            'zmin': -0.1,
            'legendgroup': 'y207',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.625,
              -1.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y208',
            'zmin': -0.1,
            'legendgroup': 'y208',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.6875,
              -1.6875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y209',
            'zmin': -0.1,
            'legendgroup': 'y209',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.75,
              -1.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y210',
            'zmin': -0.1,
            'legendgroup': 'y210',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.8125,
              -1.8125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y211',
            'zmin': -0.1,
            'legendgroup': 'y211',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.875,
              -1.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y212',
            'zmin': -0.1,
            'legendgroup': 'y212',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -1.9375,
              -1.9375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y213',
            'zmin': -0.1,
            'legendgroup': 'y213',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.0,
              -2.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y214',
            'zmin': -0.1,
            'legendgroup': 'y214',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.125,
              -2.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y215',
            'zmin': -0.1,
            'legendgroup': 'y215',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.25,
              -2.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y216',
            'zmin': -0.1,
            'legendgroup': 'y216',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.375,
              -2.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y217',
            'zmin': -0.1,
            'legendgroup': 'y217',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.5,
              -2.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y218',
            'zmin': -0.1,
            'legendgroup': 'y218',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.625,
              -2.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y219',
            'zmin': -0.1,
            'legendgroup': 'y219',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.75,
              -2.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y220',
            'zmin': -0.1,
            'legendgroup': 'y220',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -2.875,
              -2.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y221',
            'zmin': -0.1,
            'legendgroup': 'y221',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.0,
              -3.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y222',
            'zmin': -0.1,
            'legendgroup': 'y222',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.125,
              -3.125
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y223',
            'zmin': -0.1,
            'legendgroup': 'y223',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.25,
              -3.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y224',
            'zmin': -0.1,
            'legendgroup': 'y224',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.375,
              -3.375
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y225',
            'zmin': -0.1,
            'legendgroup': 'y225',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.5,
              -3.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y226',
            'zmin': -0.1,
            'legendgroup': 'y226',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.625,
              -3.625
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y227',
            'zmin': -0.1,
            'legendgroup': 'y227',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.75,
              -3.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y228',
            'zmin': -0.1,
            'legendgroup': 'y228',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -3.875,
              -3.875
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y229',
            'zmin': -0.1,
            'legendgroup': 'y229',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -4.0,
              -4.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y230',
            'zmin': -0.1,
            'legendgroup': 'y230',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -4.25,
              -4.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y231',
            'zmin': -0.1,
            'legendgroup': 'y231',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -4.5,
              -4.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y232',
            'zmin': -0.1,
            'legendgroup': 'y232',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -4.75,
              -4.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y233',
            'zmin': -0.1,
            'legendgroup': 'y233',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -5.0,
              -5.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y234',
            'zmin': -0.1,
            'legendgroup': 'y234',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -5.25,
              -5.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y235',
            'zmin': -0.1,
            'legendgroup': 'y235',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -5.5,
              -5.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y236',
            'zmin': -0.1,
            'legendgroup': 'y236',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -5.75,
              -5.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y237',
            'zmin': -0.1,
            'legendgroup': 'y237',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -6.0,
              -6.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y238',
            'zmin': -0.1,
            'legendgroup': 'y238',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -6.25,
              -6.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y239',
            'zmin': -0.1,
            'legendgroup': 'y239',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -6.5,
              -6.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y240',
            'zmin': -0.1,
            'legendgroup': 'y240',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -6.75,
              -6.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y241',
            'zmin': -0.1,
            'legendgroup': 'y241',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -7.0,
              -7.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y242',
            'zmin': -0.1,
            'legendgroup': 'y242',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -7.25,
              -7.25
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y243',
            'zmin': -0.1,
            'legendgroup': 'y243',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -7.5,
              -7.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y244',
            'zmin': -0.1,
            'legendgroup': 'y244',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -7.75,
              -7.75
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y245',
            'zmin': -0.1,
            'legendgroup': 'y245',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -8.0,
              -8.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y246',
            'zmin': -0.1,
            'legendgroup': 'y246',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -8.5,
              -8.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y247',
            'zmin': -0.1,
            'legendgroup': 'y247',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -9.0,
              -9.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y248',
            'zmin': -0.1,
            'legendgroup': 'y248',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -9.5,
              -9.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y249',
            'zmin': -0.1,
            'legendgroup': 'y249',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -10.0,
              -10.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y250',
            'zmin': -0.1,
            'legendgroup': 'y250',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -10.5,
              -10.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y251',
            'zmin': -0.1,
            'legendgroup': 'y251',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -11.0,
              -11.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y252',
            'zmin': -0.1,
            'legendgroup': 'y252',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -11.5,
              -11.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y253',
            'zmin': -0.1,
            'legendgroup': 'y253',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -12.0,
              -12.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y254',
            'zmin': -0.1,
            'legendgroup': 'y254',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -12.5,
              -12.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y255',
            'zmin': -0.1,
            'legendgroup': 'y255',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -13.0,
              -13.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y256',
            'zmin': -0.1,
            'legendgroup': 'y256',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -13.5,
              -13.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y257',
            'zmin': -0.1,
            'legendgroup': 'y257',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -14.0,
              -14.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y258',
            'zmin': -0.1,
            'legendgroup': 'y258',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -14.5,
              -14.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y259',
            'zmin': -0.1,
            'legendgroup': 'y259',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -15.0,
              -15.0
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          },
          {
            'xaxis': 'x1',
            'colorbar': {
              'title': ''
            },
            'yaxis': 'y1',
            'text': [
              null,
              null
            ],
            'x': [
              -0.5,
              0.5
            ],
            'showlegend': true,
            'mode': 'lines',
            'name': 'y260',
            'zmin': -0.1,
            'legendgroup': 'y260',
            'zmax': 0.1,
            'line': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'shape': 'linear',
              'dash': 'solid',
              'width': 1
            },
            'y': [
              -15.5,
              -15.5
            ],
            'type': 'scatter',
            'hoverinfo': 'text'
          }
        ]
        , {
          'showlegend': false,
          'xaxis': {
            'showticklabels': true,
            'gridwidth': 0.5,
            'tickvals': [
              0.0,
              50.0,
              100.0,
              150.0,
              200.0,
              250.0
            ],
            'visible': true,
            'ticks': 'inside',
            'range': [
              -8.165,
              262.665
            ],
            'domain': [
              0.07646908719743364,
              0.9934383202099737
            ],
            'tickmode': 'array',
            'linecolor': 'rgba(0, 0, 0, 1.000)',
            'showgrid': true,
            'title': 'n'.italics(),
            'mirror': false,
            'tickangle': 0,
            'showline': true,
            'gridcolor': 'rgba(0, 0, 0, 0.100)',
            'titlefont': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'family': 'sans-serif',
              'size': 15
            },
            'tickcolor': 'rgb(0, 0, 0)',
            'ticktext': [
              '0',
              '50',
              '100',
              '150',
              '200',
              '250'
            ],
            'zeroline': false,
            'type': '-',
            'tickfont': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'family': 'sans-serif',
              'size': 11
            },
            'zerolinecolor': 'rgba(0, 0, 0, 1.000)',
            'anchor': 'y1'
          },
          'paper_bgcolor': 'rgba(255, 255, 255, 1.000)',
          'annotations': [],
          'height': 400,
          'margin': {
            'l': 0,
            'b': 20,
            'r': 0,
            't': 20
          },
          'plot_bgcolor': 'rgba(255, 255, 255, 1.000)',
          'yaxis': {
            'showticklabels': true,
            'gridwidth': 0.5,
            'tickvals': [
              -15.0,
              -10.0,
              -5.0,
              0.0,
              5.0,
              10.0,
              15.0
            ],
            'visible': true,
            'ticks': 'inside',
            'range': [
              -16.43,
              16.43
            ],
            'domain': [
              0.07581474190726165,
              0.9901574803149606
            ],
            'tickmode': 'array',
            'linecolor': 'rgba(0, 0, 0, 1.000)',
            'showgrid': true,
            'title': 'Float8(binary(' + 'n'.italics() + '))',
            'mirror': false,
            'tickangle': 0,
            'showline': true,
            'gridcolor': 'rgba(0, 0, 0, 0.100)',
            'titlefont': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'family': 'sans-serif',
              'size': 15
            },
            'tickcolor': 'rgb(0, 0, 0)',
            'ticktext': [
              '-15',
              '-10',
              '-5',
              '0',
              '5',
              '10',
              '15'
            ],
            'zeroline': false,
            'type': '-',
            'tickfont': {
              'color': 'rgba(0, 0, 0, 1.000)',
              'family': 'sans-serif',
              'size': 11
            },
            'zerolinecolor': 'rgba(0, 0, 0, 1.000)',
            'anchor': 'x1'
          },
          'width': 600
        });
  }
});
