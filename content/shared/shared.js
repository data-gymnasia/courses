// =============================================================================
// Shared Data Gymnasia Scripts
// =============================================================================



import {script} from '@mathigon/boost';
import './components/quill';


script('/resources/shared/static/prism.js');

script('/resources/shared/static/juniper.min.js').then(() => {
  new window.Juniper({
    repo: 'sswatson/simple-python-stack',
    isolateCells: false,
    msgLoading: 'Loading or None returned'
  });
  if (window.CodeMirror) window.CodeMirror.defaults.indentUnit = 4;
});
