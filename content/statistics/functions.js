

import { list } from '@mathigon/core';
import { nearlyEquals, Point } from '@mathigon/fermat';

import '../shared/components/conic-section';

import { $N, animate, thread, observable } from '@mathigon/boost';
import { isPrime, lcm, goldbach, generatePrime, numberFormat, random } from '@mathigon/fermat';
import { total, sortByFn, isOneOf, delay } from '@mathigon/core';

import { isPalindrome, words, flatten } from '@mathigon/core';
import { Draggable } from '@mathigon/boost';

// Geopad example

export function intro($step) {
  const initial = [{x: 40, y: 40}, {x: 120, y: 0}, {x: 20, y: 20}];
  const correct = [{x: 100, y: 20}, {x: 40, y: 40}, {x: 120, y: 40}];

  $step.$$('svg').forEach(($s, i) => {
    const $polygons = $s.$$('polygon');
    $polygons[0].transform = `translate(${initial[i].x}px, ${initial[i].y}px)`;

    const drag = new Draggable($polygons[1], $s, {useTransform: true, snap: 20});
    drag.setPosition(initial[i].x, initial[i].y);
    drag.on('end', () => {
      if (drag.position.equals(correct[i])) {
        drag.disabled = true;
        $step.score('drag-' + i);
        $step.addHint('correct');
        $polygons[1].css('cursor', 'default');
      }
    });
  });
}
