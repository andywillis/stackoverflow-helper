// eslint-disable-next-line no-unused-vars
const menu = [

  // Level 1
  {
    id: 'comments',
    title: 'Comments',
  },
  {
    id: 'mdn',
    title: 'MDN',
  },
  {
    id: 'mockdata',
    title: 'Mock data',
  },
  {
    id: 'snippets',
    title: 'Snippets'
  },

  // Level 2

  // Comments
  {
    id: 'addCodeComment',
    title: 'Add code',
    parentId: 'comments',
    menuId: 'main',
    dataType: 'comments'
  },
  {
    id: 'homeworkComment',
    title: 'Homework',
    parentId: 'comments',
    menuId: 'main',
    dataType: 'comments'
  },
  {
    id: 'imagesComment',
    title: 'Don\'t use images',
    parentId: 'comments',
    menuId: 'main',
    dataType: 'comments'
  },
  {
    id: 'mainComment',
    title: 'Main',
    parentId: 'comments',
    menuId: 'main',
    dataType: 'comments'
  },

  // MDN

  // Level 2
  {
    id: 'arrays',
    title: 'Arrays',
    parentId: 'mdn'
  },
  {
    id: 'async',
    title: 'Async',
    parentId: 'mdn'
  },
  {
    id: 'dom',
    title: 'DOM',
    parentId: 'mdn'
  },
  {
    id: 'functions',
    title: 'Functions',
    parentId: 'mdn'
  },
  {
    id: 'loopsAndIteration',
    title: 'Loops and iteration',
    parentId: 'mdn'
  },
  {
    id: 'objects',
    title: 'Objects',
    parentId: 'mdn'
  },
  {
    id: 'operators',
    title: 'Operators',
    parentId: 'mdn'
  },
  {
    id: 'strings',
    title: 'Strings',
    parentId: 'mdn'
  },

  // Level 3
  {
    id: 'every',
    title: 'every',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'find',
    title: 'find',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'filter',
    title: 'filter',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'forEach',
    title: 'forEach',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'includes',
    title: 'includes',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'join',
    title: 'join',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'map',
    title: 'map',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'reduce',
    title: 'reduce',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'slice',
    title: 'slice',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'splice',
    title: 'splice',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },
  {
    id: 'some',
    title: 'some',
    parentId: 'arrays',
    menuId: 'arrays',
    dataType: 'mdn'
  },

  // Async/await/Promises

  // Level 3
  {
    id: 'asyncawait',
    title: 'async/await',
    parentId: 'async',
    menuId: 'async',
    dataType: 'mdn'
  },
  {
    id: 'usingFetch',
    title: 'Using Fetch',
    parentId: 'async',
    menuId: 'async',
    dataType: 'mdn'
  },
  {
    id: 'promiseAll',
    title: 'Promise.all',
    parentId: 'async',
    menuId: 'async',
    dataType: 'mdn'
  },

  // DOM

  // Level 3
  {
    id: 'addEventListener',
    title: 'addEventListener',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'classList',
    title: 'classList',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'closest',
    title: 'closest',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'dataAttributes',
    title: 'Data attributes',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'eventDelegation',
    title: 'Event Delegation',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'insertAdjacentHTML',
    title: 'insertAdjacentHTML',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'matches',
    title: 'matches',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'querySelector',
    title: 'querySelector',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },
  {
    id: 'querySelectorAll',
    title: 'querySelectorAll',
    parentId: 'dom',
    menuId: 'dom',
    dataType: 'mdn'
  },

  // Functions

  // Level 3
  {
    id: 'restParameters',
    title: 'Rest parameters',
    parentId: 'functions',
    menuId: 'functions',
    dataType: 'mdn'
  },

  // Loops and iteration

  // Level 3
  {
    id: 'loopsDocumentation',
    title: 'Loops and iteration',
    parentId: 'loopsAndIteration',
    menuId: 'loopsAndIteration',
    dataType: 'mdn'
  },
  {
    id: 'simpleLoop',
    title: 'Simple loop',
    parentId: 'loops',
    menuId: 'loopsAndIteration',
    dataType: 'mdn'
  },
  {
    id: 'forIn',
    title: 'for...in loop',
    parentId: 'loopsAndIteration',
    menuId: 'loopsAndIteration',
    dataType: 'mdn'
  },
  {
    id: 'forOf',
    title: 'for...of loop',
    parentId: 'loopsAndIteration',
    menuId: 'loopsAndIteration',
    dataType: 'mdn'
  },

  // Objects

  // Level 3
  {
    id: 'objectEntries',
    title: 'Object.entries',
    parentId: 'objects',
    menuId: 'objects',
    dataType: 'mdn'
  },
  {
    id: 'objectKeys',
    title: 'Object.keys',
    parentId: 'objects',
    menuId: 'objects',
    dataType: 'mdn'
  },
  {
    id: 'objectValues',
    title: 'Object.values',
    parentId: 'objects',
    menuId: 'objects',
    dataType: 'mdn'
  },

  // Operators

  // Level 3
  {
    id: 'destructuringAssignment',
    title: 'Destructuring assignment',
    parentId: 'operators',
    menuId: 'operators',
    dataType: 'mdn'
  },
  {
    id: 'mathRandom',
    title: 'Math.random',
    parentId: 'operators',
    menuId: 'operators',
    dataType: 'mdn'
  },
  {
    id: 'spreadSyntax',
    title: 'Spread syntax',
    parentId: 'operators',
    menuId: 'operators',
    dataType: 'mdn'
  },

  // Strings

  // Level 3
  {
    id: 'match',
    title: 'match',
    parentId: 'strings',
    menuId: 'string',
    dataType: 'mdn'
  },
  {
    id: 'split',
    title: 'split',
    parentId: 'strings',
    menuId: 'strings',
    dataType: 'mdn'
  },
  {
    id: 'templateString',
    title: 'Template String',
    parentId: 'strings',
    menuId: 'strings',
    dataType: 'mdn'
  },

  // Snippets

  // Level 2
  {
    id: 'documentation',
    title: 'Snippet documentation',
    parentId: 'snippets',
    menuId: 'react',
    dataType: 'snippets'
  },
  {
    id: 'reactClass',
    title: 'React class',
    parentId: 'snippets',
    menuId: 'react',
    dataType: 'snippets'
  },
  {
    id: 'reactFunction',
    title: 'React function',
    parentId: 'snippets',
    menuId: 'react',
    dataType: 'snippets'
  },

  // Mock data

  // Level 2
  {
    id: 'jsonApi',
    title: 'JSON API',
    parentId: 'mockdata',
    menuId: 'json',
    dataType: 'mockdata'
  },
  {
    id: 'randomUser',
    title: 'Random user',
    parentId: 'mockdata',
    menuId: 'json',
    dataType: 'mockdata'
  },
  {
    id: 'dummyImage',
    title: 'Dummy image',
    parentId: 'mockdata',
    menuId: 'image',
    dataType: 'mockdata'
  }

];
