// =============================================================================
// Shared Data Gymnasia Scripts
// =============================================================================



import {script} from '@mathigon/boost';
import './components/quill';


script('/resources/shared/static/prism.js');

script('/resources/shared/static/juniper.min.js').then(() => {
  if (window.CodeMirror) window.CodeMirror.defaults.indentUnit = 4;
  new window.Juniper({
    repo: 'sswatson/simple-python-stack',
    isolateCells: false,
    msgLoading: 'Loading or None returned'
  });
});
