
for(var k=0; k < 20; k++) {
  new Quill('#editor'+k, {
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