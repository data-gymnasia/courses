// =============================================================================
// JS for Utilities course
// (bash Juniper kernel)=============================================================================

import {script} from '@mathigon/boost';
import '../shared/components/quill';

script('/resources/shared/static/prism.js');

script('/resources/shared/static/juniper.min.js').then(() => {
  if (window.CodeMirror) window.CodeMirror.defaults.indentUnit = 4;
  new window.Juniper({
    repo: 'sswatson/utilities-course',
    isolateCells: false,
    msgLoading: 'Loading or None returned', 
    kernelType: 'bash'
  });
});
