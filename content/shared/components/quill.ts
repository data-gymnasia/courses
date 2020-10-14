// =============================================================================
// Quill Component
// =============================================================================


import {CustomElementView, register, loadScript, $N, $, Browser} from '@mathigon/boost';
import {Step} from '../types';


declare global {
  interface Window {
    Quill: any;
  }
}

let promise: Promise<any>;
const MAX_LENGTH = 2500;

async function loadEditorAssets() {
  if (!promise) {
    $N('link', {
      rel: 'stylesheet', type: 'text/css',
      href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'
    }, $(document.head)!);
    promise = loadScript('https://cdn.quilljs.com/1.3.6/quill.js');
  }
  return promise;
}


@register('x-quill')
export class QuillComponent extends CustomElementView {
  private quill: any;

  async ready() {
    await loadEditorAssets();
    Browser.ready(() => this.build());
  }

  build() {
    const $step = this.getParentModel().$step as Step|undefined;

    this.quill = new window.Quill($N('div', {}, this)._el, {
      modules: {
        toolbar: [['code', 'formula', 'code-block', 'bold', 'italic',
          'underline', 'list']]
      },
      placeholder: 'Write your solution here...',
      theme: 'snow'
    });

    if ($step && $step.initialData && $step.initialData.data) {
      const initialText = $step.initialData.data.quill;
      if (initialText) this.quill.setText(initialText);
    }

    // Set a maximum length for the editor. Significantly larger requests will
    // be rejected by the Mathigon server.
    this.quill.on('text-change', () => {
      const length = this.quill.getLength();
      if (length > MAX_LENGTH) this.quill.deleteText(MAX_LENGTH, length);
    });

    const $button = $N('button', {class: 'btn btn-red', text: 'Submit'}, this);
    $button.on('click', () => {
      this.trigger('submit');
      if ($step) {
        $step.score('quill');
        $step.storeData('quill', this.quill.getText());
      }
    });
  }

  setup($step: Step, goal: string) {
    this.one('submit', () => $step.score(goal));
  }
}
