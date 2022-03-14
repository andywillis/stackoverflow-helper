// eslint-disable-next-line no-unused-vars
const data = {

  comments: {
    main: {
      mainComment: 'Welcome to SO. You might find reading the site [help section](https://stackoverflow.com/help) useful when it comes to [asking a good question](https://stackoverflow.com/help/how-to-ask), and this [question checklist](https://meta.stackoverflow.com/questions/260648/stack-overflow-question-checklist). Code that you have worked on to solve the problem should include a [mcve], and be included in your question.',
      homeworkComment: 'Stack Overflow will not do your coursework for you. Please also review your institution\'s policies on academic integrity, as this sort of question (dumping here with no discernible effort on your part) would normally constitute a violation and carry generally high penalties.',
      addCodeComment: 'Please add the code you\'ve attempted to your question as a [mcve].'
    }
  },

  mdn: {
    dom: {
      eventDelegation: '[Event delegation](https://dmitripavlutin.com/javascript-event-delegation/)',
      insertAdjacentHTML: '[`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)',
      querySelector: '[`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)',
      querySelectorAll: '[`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)',
      dataAttributes: '[Data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)'
    },
    strings: {
      match: '[`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)',
      split: '[`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)',
      templateString: '[Template/string literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)'
    },
    operators: {
      destructuringAssignment: '[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)',
      mathRandom: '[`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)',
      spreadSyntax: '[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)'
    },
    functions: {
      restParameters: '[Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)'
    },
    arrays: {
      every: '[`every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)',
      find: '[`find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)',
      filter: '[`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)',
      forEach: '[`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)',
      join: '[`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)',
      map: '[`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)',
      reduce: '[`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)',
      slice: '[`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)',
      splice: '[`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)',
      some: '[`some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)'
    },
    objects: {
      objectEntries: '[`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/entries)',
      objectKeys: '[`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/keys)',
      objectValues: '[`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)'
    },
    promises: {
      promiseAll: '[`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)'
    },

  },

  mockdata: {
    json: {
      randomUser: 'https://randomuser.me/api/?results=10',
      jsonApi: 'https://jsonplaceholder.typicode.com/posts'  
    },
    image: {
      dummyImage: 'https://randomuser.me/api/?results=10'
    }
  },

  snippets: {

    react: {

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
    };

    ReactDOM.render(
      <Example />,
      document.getElementById('react')
    );

<!-- language: lang-html -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
    <div id="react"></div>

<!-- end snippet -->`,

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

    };

    ReactDOM.render(
      <Example />,
      document.getElementById('react')
    );


<!-- language: lang-html -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
    <div id="react"></div>


<!-- end snippet -->`
    }
  }

};
