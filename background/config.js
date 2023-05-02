// eslint-disable-next-line no-unused-vars
const config = [

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
    text: 'Please add the code you\'ve attempted to your question as a [mcve]. You can use the snippet tool `[<>]` in the question edit toolbar to help you.',
  },
  {
    id: 'homeworkComment',
    title: 'Homework',
    parentId: 'comments',
    text: 'Stack Overflow will not do your coursework for you. Please also review your institution\'s policies on academic integrity, as this sort of question (no discernible effort on your part) would normally constitute a violation and possibly carry penalties.',
  },
  {
    id: 'imagesComment',
    title: 'Don\'t use images',
    parentId: 'comments',
    text: '[Why you shouldn\'t use images instead of code](https://meta.stackoverflow.com/a/285557/1377002).',
  },
  {
    id: 'mainComment',
    title: 'Main',
    parentId: 'comments',
    text: 'Welcome to SO. Code that you have worked on to solve the problem be included in your question as a [mcve]. You can use the snippet tool `[<>]` in the question edit toolbar to help you. You might find reading the site [help section](https://stackoverflow.com/help) useful when it comes to [asking a good question](https://stackoverflow.com/help/how-to-ask), and this [question checklist](https://meta.stackoverflow.com/questions/260648/stack-overflow-question-checklist).'
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
    text: '[`every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)',
  },
  {
    id: 'filter',
    title: 'filter',
    parentId: 'arrays',
    text: '[`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)',
  },
  {
    id: 'find',
    title: 'find',
    parentId: 'arrays',
    text: '[`find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)',
  },
  {
    id: 'forEach',
    title: 'forEach',
    parentId: 'arrays',
    text: '[`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)',
  },
  {
    id: 'includes',
    title: 'includes',
    parentId: 'arrays',
    text: '[`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)',
  },
  {
    id: 'join',
    title: 'join',
    parentId: 'arrays',
    text: '[`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)',
  },
  {
    id: 'map',
    title: 'map',
    parentId: 'arrays',
    text: '[`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)',
  },
  {
    id: 'reduce',
    title: 'reduce',
    parentId: 'arrays',
    text: '[`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)',
  },
  {
    id: 'slice',
    title: 'slice',
    parentId: 'arrays',
    text: '[`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)',
  },
  {
    id: 'some',
    title: 'some',
    parentId: 'arrays',
    text: '[`some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)',
  },
  {
    id: 'splice',
    title: 'splice',
    parentId: 'arrays',
    text: '[`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)'
  },

  // Async/await/Promises

  // Level 3
  {
    id: 'asyncawait',
    title: 'async/await',
    parentId: 'async',
    text: '[`async/await`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)',
  },
  {
    id: 'usingFetch',
    title: 'Using Fetch',
    parentId: 'async',
    text: '[`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)',
  },
  {
    id: 'promiseAll',
    title: 'Promise.all',
    parentId: 'async',
    text: '[`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)'
  },

  // DOM

  // Level 3
  {
    id: 'addEventListener',
    title: 'addEventListener',
    parentId: 'dom',
    text: '[`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)',
  },
  {
    id: 'classList',
    title: 'classList',
    parentId: 'dom',
    text: '[`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)',
  },
  {
    id: 'closest',
    title: 'closest',
    parentId: 'dom',
    text: '[`closest`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)',
  },
  {
    id: 'dataAttributes',
    title: 'Data attributes',
    parentId: 'dom',
    text: '[data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)',
  },
  {
    id: 'eventDelegation',
    title: 'Event Delegation',
    parentId: 'dom',
    text: '[event delegation](https://dmitripavlutin.com/javascript-event-delegation/)',
  },
  {
    id: 'insertAdjacentHTML',
    title: 'insertAdjacentHTML',
    parentId: 'dom',
    text: '[`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)',
  },
  {
    id: 'matches',
    title: 'matches',
    parentId: 'dom',
    text: '[`matches`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)',
  },
  {
    id: 'querySelector',
    title: 'querySelector',
    parentId: 'dom',
    text: '[`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)',
  },
  {
    id: 'querySelectorAll',
    title: 'querySelectorAll',
    parentId: 'dom',
    text: '[`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)'
  },

  // Functions

  // Level 3
  {
    id: 'restParameters',
    title: 'Rest parameters',
    parentId: 'functions',
    text: '[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)'
  },

  // Loops and iteration

  // Level 3
  {
    id: 'loopsDocumentation',
    title: 'Loops and iteration',
    parentId: 'loopsAndIteration',
    text: '[Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)',
  },
  {
    id: 'simpleLoop',
    title: 'Simple loop',
    parentId: 'loops',
    text: '[Simple loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)',
  },
  {
    id: 'forIn',
    title: 'for...in loop',
    parentId: 'loopsAndIteration',
    text: '[`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)',
  },
  {
    id: 'forOf',
    title: 'for...of loop',
    parentId: 'loopsAndIteration',
    text: '[`for..of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration##for...of_statement)'
  },

  // Objects

  // Level 3
  {
    id: 'objectEntries',
    title: 'Object.entries',
    parentId: 'objects',
    text: '[`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/entries)',
  },
  {
    id: 'objectKeys',
    title: 'Object.keys',
    parentId: 'objects',
    text: '[`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/keys)',
  },
  {
    id: 'objecttexts',
    title: 'Object.texts',
    parentId: 'objects',
    text: '[`Object.texts`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/texts)'
  },

  // Operators

  // Level 3
  {
    id: 'destructuringAssignment',
    title: 'Destructuring assignment',
    parentId: 'operators',
    text: '[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)',
  },
  {
    id: 'mathRandom',
    title: 'Math.random',
    parentId: 'operators',
    text: '[`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)',
  },
  {
    id: 'spreadSyntax',
    title: 'Spread syntax',
    parentId: 'operators',
    text: '[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)'
  },

  // Strings

  // Level 3
  {
    id: 'match',
    title: 'match',
    parentId: 'strings',
    text: '[`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)',
  },
  {
    id: 'split',
    title: 'split',
    parentId: 'strings',
    text: '[`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)',
  },
  {
    id: 'templateString',
    title: 'Template String',
    parentId: 'strings',
    text: '[Template/string literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)'
  },

  // Mock data

  // Level 2
  {
    id: 'dummyImage',
    title: 'Dummy image',
    parentId: 'mockdata',
    text: 'https://dummyimage.com/600x400/000/fff'
  },
  {
    id: 'jsonApi',
    title: 'JSON API',
    parentId: 'mockdata',
    text: 'https://jsonplaceholder.typicode.com/posts',
  },
  {
    id: 'randomUser',
    title: 'Random user',
    parentId: 'mockdata',
    text: 'https://randomuser.me/api/?results=10'
  },

  // Snippets

  // Level 2
  {
    id: 'documentation',
    title: 'Snippet documentation',
    parentId: 'snippets',
    text: '[Here\'s some documentation on how to create a React snippet](https://meta.stackoverflow.com/a/338538/1377002).',
  },
  {
    id: 'reactClass',
    title: 'React class',
    parentId: 'snippets',
    text: `
<!-- begin snippet: js hide: false console: true babel: true -->
    
<!-- language: lang-js -->

    const { Component } = React;

    class Example extends Component {

      constructor() {
        super();
        this.state = { count: 0 };
      }

      render() {
        const { count } = this.state;
        return (
          <div>
            <p>You clicked {count} times</p>
            <button
              onClick={() => this.setState({ count: count + 1} )}
            >
            Click me
            </button>
          </div>
        );
      }

    }

    const node = document.getElementById('root');
    const root = ReactDOM.createRoot(node);
    root.render(<Example />);

<!-- language: lang-html -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js"></script>
    <div id="root"></div>


<!-- end snippet -->`,
  },
  {
    id: 'reactFunction',
    title: 'React function',
    parentId: 'snippets',
    text: `
<!-- begin snippet: js hide: false console: true babel: true -->

<!-- language: lang-js -->

    const { useState } = React;

    function Example() {

      const [ count, setCount ] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );

    }

    const node = document.getElementById('root');
    const root = ReactDOM.createRoot(node);
    root.render(<Example />);

<!-- language: lang-html -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js"></script>
    <div id="root"></div>

<!-- end snippet -->`
  }

];
