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
    dataLocation: {
      heading: 'comments',
      subheading: 'main'
    }
  },
  {
    id: 'homeworkComment',
    title: 'Homework',
    parentId: 'comments',
    dataLocation: {
      heading: 'comments',
      subheading: 'main'
    }
  },
  {
    id: 'imagesComment',
    title: 'Don\'t use images',
    parentId: 'comments',
    dataLocation: {
      heading: 'comments',
      subheading: 'main'
    }
  },
  {
    id: 'mainComment',
    title: 'Main',
    parentId: 'comments',
    dataLocation: {
      heading: 'comments',
      subheading: 'main'
    }
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
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'find',
    title: 'find',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'filter',
    title: 'filter',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'forEach',
    title: 'forEach',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'includes',
    title: 'includes',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'join',
    title: 'join',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'map',
    title: 'map',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'reduce',
    title: 'reduce',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'slice',
    title: 'slice',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'splice',
    title: 'splice',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },
  {
    id: 'some',
    title: 'some',
    parentId: 'arrays',
    dataLocation: {
      heading: 'mdn',
      subheading: 'arrays'
    }
  },

  // Async/await/Promises

  // Level 3
  {
    id: 'asyncawait',
    title: 'async/await',
    parentId: 'async',
    dataLocation: {
      heading: 'mdn',
      subheading: 'async'
    }
  },
  {
    id: 'usingFetch',
    title: 'Using Fetch',
    parentId: 'async',
    dataLocation: {
      heading: 'mdn',
      subheading: 'async'
    }
  },
  {
    id: 'promiseAll',
    title: 'Promise.all',
    parentId: 'async',
    dataLocation: {
      heading: 'mdn',
      subheading: 'async'
    }
  },

  // DOM

  // Level 3
  {
    id: 'addEventListener',
    title: 'addEventListener',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'classList',
    title: 'classList',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'closest',
    title: 'closest',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'dataAttributes',
    title: 'Data attributes',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'eventDelegation',
    title: 'Event Delegation',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'insertAdjacentHTML',
    title: 'insertAdjacentHTML',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'matches',
    title: 'matches',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'querySelector',
    title: 'querySelector',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },
  {
    id: 'querySelectorAll',
    title: 'querySelectorAll',
    parentId: 'dom',
    dataLocation: {
      heading: 'mdn',
      subheading: 'dom'
    }
  },

  // Functions

  // Level 3
  {
    id: 'restParameters',
    title: 'Rest parameters',
    parentId: 'functions',
    dataLocation: {
      heading: 'mdn',
      subheading: 'functions'
    }
  },

  // Loops and iteration

  // Level 3
  {
    id: 'loopsDocumentation',
    title: 'Loops and iteration',
    parentId: 'loopsAndIteration',
    dataLocation: {
      heading: 'mdn',
      subheading: 'loopsAndIteration'
    }
  },
  {
    id: 'simpleLoop',
    title: 'Simple loop',
    parentId: 'loops',
    dataLocation: {
      heading: 'mdn',
      subheading: 'loopsAndIteration'
    }
  },
  {
    id: 'forIn',
    title: 'for...in loop',
    parentId: 'loopsAndIteration',
    dataLocation: {
      heading: 'mdn',
      subheading: 'loopsAndIteration'
    }
  },
  {
    id: 'forOf',
    title: 'for...of loop',
    parentId: 'loopsAndIteration',
    dataLocation: {
      heading: 'mdn',
      subheading: 'loopsAndIteration'
    }
  },

  // Objects

  // Level 3
  {
    id: 'objectEntries',
    title: 'Object.entries',
    parentId: 'objects',
    dataLocation: {
      heading: 'mdn',
      subheading: 'objects'
    }
  },
  {
    id: 'objectKeys',
    title: 'Object.keys',
    parentId: 'objects',
    dataLocation: {
      heading: 'mdn',
      subheading: 'objects'
    }
  },
  {
    id: 'objectValues',
    title: 'Object.values',
    parentId: 'objects',
    dataLocation: {
      heading: 'mdn',
      subheading: 'objects'
    }
  },

  // Operators

  // Level 3
  {
    id: 'destructuringAssignment',
    title: 'Destructuring assignment',
    parentId: 'operators',
    dataLocation: {
      heading: 'mdn',
      subheading: 'operators'
    }
  },
  {
    id: 'mathRandom',
    title: 'Math.random',
    parentId: 'operators',
    dataLocation: {
      heading: 'mdn',
      subheading: 'operators'
    }
  },
  {
    id: 'spreadSyntax',
    title: 'Spread syntax',
    parentId: 'operators',
    dataLocation: {
      heading: 'mdn',
      subheading: 'operators'
    }
  },

  // Strings

  // Level 3
  {
    id: 'match',
    title: 'match',
    parentId: 'strings',
    dataLocation: {
      heading: 'mdn',
      subheading: 'strings'
    }
  },
  {
    id: 'split',
    title: 'split',
    parentId: 'strings',
    dataLocation: {
      heading: 'mdn',
      subheading: 'strings'
    }
  },
  {
    id: 'templateString',
    title: 'Template String',
    parentId: 'strings',
    dataLocation: {
      heading: 'mdn',
      subheading: 'strings'
    }
  },

  // Snippets

  // Level 2
  {
    id: 'documentation',
    title: 'Snippet documentation',
    parentId: 'snippets',
    dataLocation: {
      heading: 'snippets',
      subheading: 'react'
    }
  },
  {
    id: 'reactClass',
    title: 'React class',
    parentId: 'snippets',
    dataLocation: {
      heading: 'snippets',
      subheading: 'react'
    }
  },
  {
    id: 'reactFunction',
    title: 'React function',
    parentId: 'snippets',
    dataLocation: {
      heading: 'snippets',
      subheading: 'react'
    }
  },

  // Mock data

  // Level 2
  {
    id: 'jsonApi',
    title: 'JSON API',
    parentId: 'mockdata',
    dataLocation: {
      heading: 'mockdata',
      subheading: 'json'
    }
  },
  {
    id: 'randomUser',
    title: 'Random user',
    parentId: 'mockdata',
    dataLocation: {
      heading: 'mockdata',
      subheading: 'json'
    }
  },
  {
    id: 'dummyImage',
    title: 'Dummy image',
    parentId: 'mockdata',
    dataLocation: {
      heading: 'mockdata',
      subheading: 'image'
    }
  }

];
