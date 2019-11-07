// =============================================================================
// Quill Component
// =============================================================================


import {CustomElement, registerElement, script, $N, $, Browser} from '@mathigon/boost';


let promise = null;
const MAX_LENGTH = 2500;

async function loadEditorAssets() {
  if (!promise) {
    $N('link', {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'}, $(document.head));
    promise = script('https://cdn.quilljs.com/1.3.6/quill.js');
  }
  return promise;
}


export class QuillComponent extends CustomElement {

  async ready() {
    await loadEditorAssets();
    Browser.ready(() => this.setup());
  }

  setup() {
    this.quill = new window.Quill($N('div', {}, this)._el, {
      modules: {toolbar: [['code', 'formula', 'code-block', 'bold', 'italic', 'underline', 'list']]},
      placeholder: 'Write your solution here...',
      theme: 'snow'
    });

    const $step = this.getModel().$step;
    if (this.initialText) this.quill.setText(this.initialText);

    // Set a maximum length for the editor. Significantly larger requests will
    // be rejected by the Mathigon server.
    this.quill.on('text-change', () => {
      const length = this.quill.getLength();
      if (length > MAX_LENGTH) this.quill.deleteText(MAX_LENGTH, length);
    });

    const $button = $N('button', {class: 'btn btn-red', text: 'Submit'}, this);
    $button.on('click', () => {
      this.trigger('submit');
      if ($step) $step.storeData('quill', this.quill.getText());
    });
  }

  restore(text) {
    this.initialText = text;
    if (this.quill) this.quill.setText(text);
  }
}

registerElement('x-quill', QuillComponent);
