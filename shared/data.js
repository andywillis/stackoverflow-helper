// eslint-disable-next-line no-unused-vars
const data = {

  comments: {

    main: {
      mainComment: 'Welcome to SO. Code that you have worked on to solve the problem be included in your question as a [mcve]. You can use the snippet tool `[<>]` in the question edit toolbar to help you. You might find reading the site [help section](https://stackoverflow.com/help) useful when it comes to [asking a good question](https://stackoverflow.com/help/how-to-ask), and this [question checklist](https://meta.stackoverflow.com/questions/260648/stack-overflow-question-checklist).',
      homeworkComment: 'Stack Overflow will not do your coursework for you. Please also review your institution\'s policies on academic integrity, as this sort of question (no discernible effort on your part) would normally constitute a violation and possibly carry penalties.',
      addCodeComment: 'Please add the code you\'ve attempted to your question as a [mcve]. You can use the snippet tool `[<>]` in the question edit toolbar to help you.',
      imagesComment: '[Why you shouldn\'t use images instead of code](https://meta.stackoverflow.com/a/285557/1377002).'
    }

  },

  mdn: {

    arrays: {
      every: '[`every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)',
      filter: '[`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)',
      find: '[`find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)',
      forEach: '[`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)',
      includes: '[`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)',
      join: '[`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)',
      map: '[`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)',
      reduce: '[`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)',
      slice: '[`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)',
      some: '[`some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)',
      splice: '[`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)'
    },

    async: {
      asyncawait: '[`async/await`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)',
      fetch: '[`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)',
      promiseAll: '[`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)'
    },

    dom: {
      addEventListener: '[`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)',
      classList: '[`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)',
      closest: '[`closest`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)',
      dataAttributes: '[data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)',
      eventDelegation: '[event delegation](https://dmitripavlutin.com/javascript-event-delegation/)',
      insertAdjacentHTML: '[`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)',
      matches: '[`matches`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)',
      querySelector: '[`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)',
      querySelectorAll: '[`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)'
    },

    functions: {
      restParameters: '[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)'
    },

    loopsAndIteration: {
      loopsDocumentation: '[Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)',
      simpleLoop: '[Simple loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)',
      forIn: '[`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)',
      forOf: '[`for..of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration##for...of_statement)'
    },

    objects: {
      objectEntries: '[`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/entries)',
      objectKeys: '[`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/keys)',
      objectValues: '[`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)'
    },

    operators: {
      destructuringAssignment: '[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)',
      mathRandom: '[`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)',
      spreadSyntax: '[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)'
    },

    strings: {
      match: '[`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)',
      split: '[`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)',
      templateString: '[Template/string literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)'
    }

  },

  mockdata: {

    image: {
      dummyImage: 'https://dummyimage.com/600x400/000/fff'
    },

    json: {
      randomUser: 'https://randomuser.me/api/?results=10',
      jsonApi: 'https://jsonplaceholder.typicode.com/posts'
    }

  },

  snippets: {

    react: {

      documentation: '[Here\'s some documentation on how to create a React snippet](https://meta.stackoverflow.com/a/338538/1377002).',

      reactClass: `
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

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Example />);

<!-- language: lang-html -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js"></script>
    <div id="root"></div>


<!-- end snippet -->`
    }
  },

  reactFunction: `
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

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Example />);

<!-- language: lang-html -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js"></script>
    <div id="root"></div>

<!-- end snippet -->`

};
