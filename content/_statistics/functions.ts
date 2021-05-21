import { Draggable } from '@mathigon/boost';
import {Step} from '@mathigon/studio';
import '../shared/shared';

// Geopad example

export function intro($step: Step) {
  const initial = [{x: 40, y: 40}, {x: 120, y: 0}, {x: 20, y: 20}];
  const correct = [{x: 100, y: 20}, {x: 40, y: 40}, {x: 120, y: 40}];

  $step.$$('svg').forEach(($s, i) => {
    const $polygons = $s.$$('polygon');
    $polygons[0].translate(initial[i].x, initial[i].y);

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
