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

window.MathJax = {
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]},
  TeX: { equationNumbers: { autoNumber: "AMS" } },
  CommonHTML: { scale: 95 }
};

script('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML');
