import {script, $N, $, $$} from '@mathigon/boost';
import './libraries/juniper.min';
import './libraries/prism';


// -----------------------------------------------------------------------------
// CodeMirror and Juniper Setup

window.CodeMirror.defaults.indentUnit = 4;

new window.Juniper({
  repo: 'sswatson/simple-python-stack',
  isolateCells: false,
  msgLoading: 'Loading or None returned'
});


// -----------------------------------------------------------------------------
// MathJax Setup

window.MathJax = {
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]},
  TeX: { equationNumbers: { autoNumber: "AMS" } }
};

script('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML');


// -----------------------------------------------------------------------------
// Quill Setup

$N('link', {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'}, $(document.head));

script('https://cdn.quilljs.com/1.3.6/quill.js').then(() => {
  for (const $quill of $$('quill')) {
    new window.Quill($quill.id, {
      modules: {
        toolbar: [
          ['code', 'formula', 'code-block'],
          ['bold', 'italic', 'underline'],
          ['link', 'list']
        ]
      },
      placeholder: 'Write your solution here...',
      theme: 'snow'
    });
  }
});
