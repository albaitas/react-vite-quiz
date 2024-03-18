export const questionsData = [
  {
    question: 'What is React?',
    example: '',
    options: ['MVC framework', 'Framework', 'Back-end platform', 'JavaScript library'],
    ans: 3
  },

  {
    question: 'Which of the following answers about React is incorrect?',
    example: '',
    options: [
      'React renders HTML to the web page by using a function called createRoot() and its method render()',
      'The createRoot() function takes one argument',
      "Argument to createRoot() must be a <div> element and must have id='root'",
      'The render() method specifies the React component to be rendered'
    ],
    ans: 2
  },
  {
    question: 'Which command is used to create a new React application with Create React App?',
    example: '',
    options: ['npx create-react-app -new my-app', 'npx create-react-app -app my-app', 'npx new-react-app my-app', 'npx create-react-app my-app'],
    ans: 3
  },
  {
    question: 'What does my-app refer to in the following command?',
    example: <pre className='example'>{`npx create-react-app my-app`}</pre>,
    options: [
      'The name you want to use for the new React application',
      'The type of app to create',
      'A reference to an existing app',
      'The directory to create the new React application'
    ],
    ans: 0
  },
  {
    question: 'How to setup a React Project with Vite?',
    example: '',
    options: ['npx create vite@latest', 'npm create vite@latest', 'npx create-new vite@latest', 'npm create-new vite@latest'],
    ans: 1
  },

  {
    question: 'To develop and run React code, Node.js is required?',
    example: '',
    options: ['true', 'false'],
    ans: 0
  },
  {
    question: 'By default, React applications created with create-react-app are configured to run on port?',
    example: '',
    options: ['3000', '4000', '8000', '8080'],
    ans: 0
  },
  {
    question: 'What is a React DOM?',
    example: '',
    options: [
      'Is a React concept for optimizing updates to the real DOM',
      'Is the browsers representation of a web pages structure as a tree of objects',
      'It is a package that provides browser-specific methods that can be used to effectively manipulate the DOM elements present on a page',
      'Is a library designed for creating fast and interactive user interfaces (UI) for web and mobile applications'
    ],
    ans: 2
  },
  {
    question: 'What is JSX?',
    example: '',
    options: [
      'Stands for JavaScript XML',
      'Allows us to write HTML elements in JavaScript and place them in the DOM',
      'Allows us to write without any createElement() and/or appendChild() methods',
      'All answers are correct'
    ],
    ans: 3
  },
  {
    question: 'What is the correct syntax to write expression in JSX?',
    example: '',
    options: ['[ expression ]', '( expression )', '{ expression }', '{{ expression }}'],
    ans: 2
  },
  {
    question: 'How to write correct inline styles in JSX?',
    example: '',
    options: [
      "style={{ backgroundColor: '#FF00CC', fontSize: '22px' }}",
      "style={ backgroundColor: '#FF00CC', fontSize: '22px' }",
      "style=( background-color: '#FF00CC', font-size: '22px') ",
      "style={{ background-color: '#FF00CC', font-size: '22px' }}"
    ],
    ans: 0
  },
  {
    question: 'What help the browsers read the JSX code by converting it into plain JS?',
    example: '',
    options: ['Node', 'React', 'React DOM', 'Babel'],
    ans: 3
  },
  {
    question: 'Which answer should be in place (_____)?',
    example: (
      <pre className='example'>
        {`const element = <h1 className="greeting">Hello, world!</h1>;
                Without JSX:
                const element = React.createElement(______);`}
      </pre>
    ),
    options: [
      "'h1', 'greeting', 'Hello, world!', 'h1'",
      "'h1', 'className', 'greeting', 'Hello, world!'",
      "'h1', {'greeting'}, 'Hello, world!', 'h1'",
      "'h1', { className: 'greeting' }, 'Hello, world!'"
    ],
    ans: 3
  },

  {
    question: 'Which of the following rules for writing JSX is incorrect?',
    example: '',
    options: ['In JSX class becomes className', 'Always return a single Root Element', 'HTML elements must be properly closed', 'Inside JSX supports if statements'],
    ans: 3
  },

  {
    question: 'Which of the following JSX comments are incorrect?',
    example: (
      <pre className='example'>
        {`const Task = () => {
                return(
                 <>
                {
                  /*
                    mult-line
                    comment1
                  */
                }
                {
                  // single-line comment2
                }
                // comment3
                <!-- comment4 -->
                </>
                )
              }`}
      </pre>
    ),
    options: ['1 and 2', '3 and 4', '1 and 4', '2 and 3'],
    ans: 1
  },
  {
    question: 'What is a React concept for optimizing updates to the real DOM?',
    example: '',
    options: ['React DOM', 'Virtual DOM', 'Shadow DOM', 'Web DOM'],
    ans: 1
  },

  {
    question: 'What are the building blocks of a React application?',
    example: '',
    options: ['Files', 'Pages', 'Div', 'Components'],
    ans: 3
  },
  {
    question: 'How many React components can there be on a site?',
    example: '',
    options: ['Only 1', 'No more than 10', 'No more than 100', 'Unlimited quantity'],
    ans: 3
  },
  {
    question: 'What are components in React?',
    example: '',
    options: [
      'Components are like functions that return HTML elements',
      'Components are the HTML elements',
      'Components are the set of variables defined in React',
      'None of the above'
    ],
    ans: 0
  },
  {
    question: 'How many types of the components in React?',
    example: '',
    options: ['1', '2', '3', '4'],
    ans: 1
  },
  {
    question: 'Which of the following statements describe React components?',
    example: '',
    options: [
      'Component names must always begin with a capital letter',
      'The export default keywords indicate the main component in the file',
      'Components can be either function components or class components',
      'All answers are correct'
    ],
    ans: 3
  },

  {
    question: 'A class component must include the _____ statement?',
    example: '',
    options: ['extends React', 'extends React.Component', 'extends Component', 'extends React.Component.All'],
    ans: 1
  },
  {
    question: 'Which method will be used at a class component _____?',
    example: (
      <pre className='example'>
        {`class MainTitle extends React.Component {
               ______{
                     return <h1>Welcome to React</h1>;
                     }
               }`}
      </pre>
    ),
    options: ['renderDOM()', 'renderComponent()', 'render()', 'render'],
    ans: 2
  },

  {
    question: 'How many phases React components go through during their life cycle?',
    example: '',
    options: [' Mounting, Unmounting', 'Mounting, Updating, Unmounting', 'Mounting, Updating, Remove', 'GET, PUT, POST, DELETE'],
    ans: 1
  },

  {
    question: 'Which of the following methods in a React Component is called after a component has been inserted into the DOM, and rendered for the first time?',
    example: '',
    options: ['componentMount', 'componentUpdate', 'componentDidMount', 'componentWillUnmount'],
    ans: 2
  },

  {
    question: 'Which method is necessary to define in a class component in React?',
    example: '',
    options: ['getDerivedStateFromProps', 'render', 'componentDidMount', 'componentDidUpdate'],
    ans: 1
  },

  {
    question: 'When the componentWillUnmount method is called?',
    example: '',
    options: [
      'Runs before the component is inserted into the DOM',
      'Is called after the component has been inserted into the DOM and rendered for the first time',
      'Is called immediately after your component is re-rendered with updated props or state',
      'Is called immediately before the component is removed from the DOM'
    ],
    ans: 3
  },

  {
    question: 'What are the two ways to handle data in React?',
    example: '',
    options: ['Services and Components', 'State and Props', 'State and Services', 'Props and Components'],
    ans: 1
  },

  {
    question: 'Which of the following statements is incorrect?',
    example: '',
    options: [
      'Gatsby.JS is a static site generator',
      'Next.JS is a server-side page rendering tool',
      'GraphQL is an open source query language and backend framework for APIs',
      'Tailwind is a way to create APIs using the HTTP protocol'
    ],
    ans: 3
  },

  {
    question: 'What is used to pass data from parent component to child component?',
    example: '',
    options: ['State', 'PropsTypes', 'Props', 'Render'],
    ans: 2
  },

  {
    question: 'What is a state in React?',
    example: '',
    options: ['A permanent storage', 'Internal storage of the component', 'External storage of the component', 'None of the Above'],
    ans: 1
  },

  {
    question: 'Which answer about props is incorrect?',
    example: '',
    options: [
      'Used to pass data from parent component to child component',
      "You can't change props inside a child component",
      'Props are passed as an object',
      'A component without state cannot have props'
    ],
    ans: 3
  },
  {
    question: 'Which answer about state is incorrect?',
    example: '',
    options: [
      'Controlled by the children component',
      'Changing state causes the component to re-render',
      'State is updated asynchronously',
      'State is updated using the useState() method.'
    ],
    ans: 0
  },

  {
    question:
      'When a parent component generates its state and passes props to its child components, which do not use props but only pass it to another component that uses it, is called?',
    example: '',
    options: ['children prop', 'prop drilling', 'prop debounce', 'prop throttle'],
    ans: 1
  },

  {
    question: 'How destructure this props?',
    example: (
      <pre className='example'>
        {`         function Dish(props) {
                     return (
                            <h1>
                            {props.name} {props.cookingTime}
                            </h1>
                          );
                    };`}
      </pre>
    ),
    options: [
      'function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }',
      'function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }',
      'function Dish(props...) { return <h1>{name} {cookingTime}</h1>; } ',
      'function Dish(...props) { return <h1>{name} {cookingTime}</h1>; } '
    ],
    ans: 1
  },

  {
    question: 'How can this code be changed?',
    example: (
      <pre className='example'>
        {` <PostListItem
                  id={post.id}
                  firstName={post.firstName}
                  title={post.title}
                />`}
      </pre>
    ),
    options: ['<PostListItem {post} />', '<PostListItem {...post} />', '<PostListItem (post) />', '<PostListItem [post] />'],
    ans: 1
  },

  {
    question:
      'What is special prop, automatically passed to every React component, that can be used to render whatever you include between the opening and closing tags when invoking a component?',
    example: '',
    options: ['children', 'children prop', 'props children', 'childrens prop'],
    ans: 1
  },

  {
    question: 'Which answer should be in place (_____)?',
    example: (
      <pre className='example'>
        {`export default function Button({_____}) {
                    return (
                      <div><button>{______}</button></div>;
                    )};`}
      </pre>
    ),
    options: ['props.children', 'prop.children', 'children', 'childrens'],
    ans: 2
  },

  {
    question: 'How to update only the color of the car object in place _____?',
    example: (
      <pre className='example'>
        {`const [car, setCar] = useState({
                    brand: 'Ford',
                    model: 'Mustang',
                    year: '1964',
                    color: 'red'
                  });
                  const updateColor = () => { ______________ };`}
      </pre>
    ),
    options: ['setCar({ color: "blue" });', 'setCar({ ...(car.color = "blue") })', 'setCar(() => ({ ...car, color: "blue" }));', 'setCar(() => ({ color: "blue" }));'],
    ans: 2
  },
  {
    question: 'When do you need to add a function rather than an object to setState?',
    example: '',
    options: [
      'When a new state depends on the previous one',
      'When the new state consists of numbers',
      'When a component has no child elements',
      'When a component has many child elements'
    ],
    ans: 0
  },
  {
    question: 'How to update age state based on previous age state?',
    example: (
      <pre className='example'>
        {`1. function handleClick() {
          setAge(age + 1);
          setAge(age + 1);
      }
      2. function handleClick() {
        setAge((a) => a + 1);
        setAge((a) => a + 1);
      }`}
      </pre>
    ),
    options: ['1', '2', 'all answers are correct', 'all answers are incorrect'],
    ans: 1
  },

  {
    question: 'Which event handler function written below is correct?',
    example: (
      <pre className='example'>
        {`1. return <button onClick={handleClick()}>Click me</button>;
      2. return <button onClick={handleClick}>Click me</button>;
      3. return (
          <button onclick={(e) => handleClick(e)}>
                Click me
          </button>
          );`}
      </pre>
    ),
    options: ['1', '2', '3', '2 and 3'],
    ans: 1
  },
  {
    question: 'Which code should be written in the setTodos function?',
    example: (
      <pre className='example'>
        {`let nextId = 2;
      const initialTodos = [
          { id: 0, title: 'Buy milk', done: true },
          { id: 1, title: 'Eat tacos', done: false }
      ];
      export default function TaskApp() {
        const [todos, setTodos] = useState(initialTodos);
      function handleAddTodo(title) {
          setTodos(______)
          }
      }`}
      </pre>
    ),
    options: [
      '[...todos, {id: nextId++, title: title, done: false}];',
      '[todos, {id: nextId++, title: title, done: false}];',
      '[initialTodos, {id: nextId++, title: title, done: false}];',
      '[...initialTodos, {id: nextId++, title: title, done: false}];'
    ],
    ans: 0
  },

  {
    question: 'What is "reconciliation" in React?',
    example: '',
    options: [
      'Is the process of comparing the previous tree of elements (Virtual DOM), with the new tree of elements created as a result of updating the state or props of components',
      'Is the concept for optimizing updates to the real DOM (Document Object Model) and improving the performance of web applications',
      'Is the state of a component, which can change during execution, is maintained and managed only within the component and is not directly accessible from the outside',
      'Is the process of comparing two objects or data structures based on their internal values rather than on references or identifiers'
    ],
    ans: 0
  },
  {
    question: 'How to pass data between components in React?',
    example: '',
    options: ['through props', 'using a callback function', 'using context', 'all answers are correct'],
    ans: 3
  },
  {
    question: 'Which step to pass data from child component to parent component is wrong?',
    example: '',
    options: [
      'In the parent component, create a callback function. This callback function will retrieve the data from the child component',
      'Pass the callback function to the child as a prop from the parent component',
      'The child component needs to create state and load the callback function',
      'The child component calls the parent callback function using props and passes the data to the parent component'
    ],
    ans: 2
  },
  {
    question: "What is in React a 'higher-order component' (HOC)?",
    example: '',
    options: ['A component with higher z-index', 'A component that renders HTML elements', 'A component that returns another component', 'A stateful component'],
    ans: 2
  },
  {
    question: 'Which answer is incorrect? Strict mode includes the following steps?',
    example: '',
    options: [
      'Your components will take extra time to redraw to catch errors caused by incorrect rendering',
      'Your components will re-run effects to detect errors caused by not cleaning up effects',
      'Your components will be checked to see if they are pure functions',
      'Your components will be checked for use of deprecated APIs'
    ],
    ans: 2
  },
  {
    question: 'Which statements are false about controlled and uncontrolled components?',
    example: '',
    options: [
      'Controlled components manage form data via component state, receiving values through props and updating through callbacks like onChange',
      'Uncontrolled components access the DOM directly to obtain and update a value',
      'Uncontrolled components use refs to retrieve values from DOM nodes',
      'All answers are correct'
    ],
    ans: 3
  },
  {
    question: 'Which answer should be in place (_____)?',
    example: (
      <pre className='example'>
        {`import {______} from 'react';
      function App() {
        const inputRef = ______(null);
        return (
          <div className="App">
            <input type="text" name="name" ref={inputRef} />
            <button onClick={() =>
            console.log(inputRef.current.value)}>
              Get Value
            </button>
          </div>
        );
      }`}
      </pre>
    ),
    options: ['useState', 'useRef', 'useEffect', 'useCallback'],
    ans: 1
  },
  {
    question: 'What is useRef used for, which answer is incorrect?',
    example: '',
    options: [
      'useRef is used with props and state',
      'useRef preserve the value across different re-renders and not cause a re-render whenever the value changes',
      'useRef can be used to access a DOM element directly',
      'current property of useRef is mutable'
    ],
    ans: 0
  },
  {
    question: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
    example: '',
    options: ['Data', 'Key', 'Index', 'Id'],
    ans: 1
  },
  {
    question: 'What are keys for, which answer is incorrect?',
    example: '',
    options: [
      'Keys not used when rendering lists of component',
      'Keys are used when rendering lists of elements',
      'Keys need to be unique to each sibling',
      'Keys are used to determine which elements have been added, removed, or changed'
    ],
    ans: 0
  },
  {
    question: 'Which answer about react hooks is correct?',
    example: '',
    options: [
      'Hooks can be used inside loops, conditions, or nested function',
      'Hooks cannot be used inside other hooks',
      'Hooks can be used in class components',
      'Hooks allow you to use state and lifecycle methods inside functional components'
    ],
    ans: 3
  },
  {
    question: 'How to import a component Form in another component: export default function Form() {}?',
    example: '',
    options: ['import Form from "./Form"', 'import (Form) from "./Form"', 'import {Form} from "./Form"', 'import [Form] from "./Form"'],
    ans: 0
  },

  {
    question: 'How do you set a default value for an uncontrolled form field?',
    example: '',
    options: ['Use the value property', 'Use the defaultValue property', 'Use the default property', 'Use ref.current property'],
    ans: 1
  },
  {
    question: 'What is the difference between useMemo and useCallback?',
    example: '',
    options: [
      'useMemo is used to remember the result of calculations, and useCallback is used to remember the function itself',
      'useMemo caches the calculated value and returns it on subsequent renders if the dependencies have not changed',
      'useCallback caches the function itself and returns the same instance if the dependencies have not changed',
      'all answers are correct'
    ],
    ans: 3
  },
  {
    question: 'What is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings?',
    example: '',
    options: ['React.Component', 'React.PureComponent', 'React.memo', 'React.Children'],
    ans: 2
  },

  {
    question: 'When do you use useLayoutEffect?',
    example: '',
    options: ['When you need the browser to paint before the effect runs', 'To change the layout of the screen', 'To complete the update', 'To optimize for all devices'],
    ans: 0
  },
  {
    question: 'What does the "useEffect" hook?',
    example: '',
    options: ['Manages the life cycle of a component', 'Handles state changes', 'Perform side effects', 'Executes side effects synchronously'],
    ans: 2
  },
  {
    question: 'Which implementation options for useEffect are correct?',
    example: (
      <pre className='example'>
        {`1. useEffect(() => {
        //Runs on every render
      });
      2. useEffect(() => {
        //Runs only on the first render
      }, []);
      3. useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
      }, [prop, state]);`}
      </pre>
    ),
    options: ['1', '2', '3', 'all are correct'],
    ans: 3
  },
  {
    question: 'To update a component after performing an asynchronous operation in React, you can use this hooks?',
    example: '',
    options: [
      "import React, { useState, useEffect } from 'react';",
      "import React, { useEffect, useCallback } from 'react';",
      "import React, { useState, useRef } from 'react';",
      "import React, { useState, useCallback } from 'react';"
    ],
    ans: 0
  },
  {
    question: 'What is the "useReducer" hook used for?',
    example: '',
    options: ['To manage state in a component', 'To reduce the size of a component', 'To control state using the reducer function', 'To improve performance'],
    ans: 2
  },
  {
    question: 'Which of the following statements is incorrect?',
    example: '',
    options: [
      'The React.cloneElement takes two arguments: props and children',
      'This.props.children can contain one or more elements, a child node, an array of children, or an undefined value',
      'The React.cloneElement function is used when the child element is the only React element.',
      'The React.cloneElement function returns a copy of the element passed to it.'
    ],
    ans: 0
  },
  {
    question: 'Which answers about Context should be in the places?',
    example: (
      <pre className='example'>
        {`import React, {____1_____, ____2____} from 'react';
      const ThemeContext = ____1____();
      export default function App() {
        return (
          <ThemeContext.Provider value="dark">
            <Toolbar />
          </ThemeContext.Provider>
        );
      }
      function Toolbar() {
        const theme = ___2____(ThemeContext);
        return <div>Тема: {theme}</div>;
      }`}
      </pre>
    ),
    options: ['useContext and createContext', 'createContext and useContext', 'createContext and useEffect', 'useEffect and useContext'],
    ans: 1
  },
  {
    question: 'What is the testing library most often associated with React?',
    example: '',
    options: ['Mocha', 'Jest', 'Sinon', 'Chai'],
    ans: 1
  },
  {
    question: 'What is a React fragment?',
    example: '',
    options: ['Part of the component state', 'Memoization tool', 'Groups multiple child elements without adding additional DOM nodes', 'Matching algorithm'],
    ans: 2
  },
  {
    question: 'Fragments React can be declared?',
    example: (
      <pre className='example'>
        {`1.
        <>
        <OneChild />
        <AnotherChild />
      </>
      2.
      <React.Fragment>
      <OneChild />
      <AnotherChild />
      </React.Fragment>
      3.
      <Fragment>
      <OneChild />
      <AnotherChild />
      </Fragment>`}
      </pre>
    ),
    options: ['1', '2', '3', '1 and 2'],
    ans: 3
  },
  {
    question: 'Which of the following answers about hydration in React is incorrect?',
    example: '',
    options: [
      'Hydration refers to the attaching of React to HTML which was already rendered in a server environment',
      'During hydration, React will try to attach event listeners to the existing markup and take over rendering the application on the client',
      'Hydration increases React bundle size',
      'Hydration allows for faster loading speeds for web pages'
    ],
    ans: 2
  },
  {
    question: 'What is [e.target.id] called in the following code snippet?',
    example: (
      <pre className='example'>
        {`handleChange(e) {
          setState({[e.target.id]: e.target.value })
      }`}
      </pre>
    ),
    options: ['A property name', 'A JSX code string', 'A dynamic key', 'A set value'],
    ans: 2
  },
  {
    question: 'What should be _____ in this code snippet?',
    example: (
      <pre className='example'>
        {`import {_______} from 'react';
      import Albums from './Albums.js';
      export default function ArtistPage({ artist }) {
        return (
          <>
            <h1>{artist.name}</h1>
            <_______ fallback={<Loading />}>
              <Albums artistId={artist.id} />
            </_______>
          </>
        );
      }
      function Loading() {
        return <h2>Loading...</h2>;
      }`}
      </pre>
    ),
    options: ['Suspense', 'React.lazy', 'Lazy', 'Response'],
    ans: 0
  },
  {
    question: 'How to properly declare lazy components inside other components?',
    example: (
      <pre className='example'>
        {`1.
      import React, { lazy, Suspense } from 'react';
      const LazyComponent = lazy(() => import('./LazyComponent'));
      function App() {
        return (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </Suspense>
          </div>);
      }
      2.
      import React, { lazy, Suspense } from 'react';
      function App() {
      const LazyComponent = lazy(() => import('./LazyComponent'));
        return (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </Suspense>
          </div>);
      }`}
      </pre>
    ),
    options: ['1', '2', 'All answers are incorrect', 'All answers are correct'],
    ans: 0
  },

  {
    question: 'How can you prevent a function from being called too often in React, for example when resizing a window?',
    example: '',
    options: ['Using useEffect with an empty dependency array', 'Using PureComponent', 'Using debounce or throttle techniques', 'Using shouldComponentUpdate'],
    ans: 2
  },
  {
    question: 'What will happen if you render an input element with disabled = {false} ?',
    example: '',
    options: ['It will not be rendered at all', 'It will be rendered as enabled', 'It will be rendered as disabled', 'The element will not be displayed'],
    ans: 1
  },
  {
    question: 'How does React handle form submission?',
    example: '',
    options: [
      'Using a custom React library to submit forms',
      "React can't manage form submissions",
      'Using an event handler on a form element',
      'Automatically sending a POST request'
    ],
    ans: 2
  },
  {
    question: 'Which of the following examples correctly represents conditional rendering in React?',
    example: (
      <pre className='example'>
        {`1.
        return (
          <div>
            {isVisible && <span>visible</span>}
          </div>
        );
      2.
      return (
        <div>
          {isOnline ? <span>online</span> : <span>offline</span>}
        </div>
      );
      3.
      if (isOnline) {
        element = <span>online</span>;
      } else {
        element = <span>offline</span>;
      }
      return (
        <div>{element}</div>
      );`}
      </pre>
    ),
    options: ['1', '2', '3', 'all are correct'],
    ans: 3
  },
  {
    question: 'Which of the following statements about custom hooks is false?',
    example: '',
    options: [
      'Custom hooks are reusable functions used to add special and unique functionality to React applications',
      'Custom hooks are intended for use inside functional and class components',
      'Custom hook must be a pure function, i.e. always return the same JSX given the same input',
      'Custom hooks names must start with use followed by a capital letter.'
    ],
    ans: 1
  },
  {
    question: 'What tool to use for debugging React applications?',
    example: '',
    options: ['React Windows Debugger', 'React Native Tools', 'React Debugger Tools', 'React Developer Tools'],
    ans: 3
  },
  {
    question: 'How to make HTTP requests in React, which option is correct?',
    example: (
      <pre className='example'>
        {`1.
      import axios from 'axios';
         useEffect(() => {
          const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://apie.com/posts')
            setPosts(res.data)
            setLoading(false)
          }
          fetchPosts()
        }, [])
      2.
      useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true)
          await fetch('https://apie.com/posts')
            .then((res) => res.json())
            .then((res) => setPosts(res))
            .catch((e) => console.error(e));
          setLoading(false)
        };
       fetchPosts();
      }, []);`}
      </pre>
    ),
    options: ['1', '2', 'All are incorrect', 'All are correct'],
    ans: 3
  },
  {
    question: 'What should be _____ in this code snippet?',
    example: (
      <pre className='example'>
        {`import React from "react";
      import ReactDOM from "react-dom";
      const Modal = ({ children }) => {
        const modalRoot = document.getElementById("modal-root");
        return ReactDOM.________(children, modalRoot);
      };
      const App = () => {
        return (
          <div>
            <p>Root component</p>
            <Modal>
              <p>Modal component</p>
            </Modal>
          </div>
        );
      };`}
      </pre>
    ),
    options: ['createPortal', 'appendPortal', 'initialPortal', 'all are correct'],
    ans: 0
  },
  {
    question: 'Which of the following statements about portals is false?',
    example: '',
    options: [
      'Portals are a way of rendering a child component to a DOM node that is outside of the parent components DOM hierarchy',
      'Portals change the hierarchy of components in a React application',
      'In Portals child component is passed to a node in a different component subtree',
      'Portals are used to create modals, tooltips, dropdown menus'
    ],
    ans: 1
  },
  {
    question: 'Which of the following statements about React Router v6 is false?',
    example: '',
    options: [
      'useNavigate function is used to search for matches without rendering the route',
      'useParams function provides access to the parameters of the search string in the URL',
      '<NavLink> component is used to add the activeClassName attribute, which is used to style an active link.',
      '<Link> component is used to navigate to a new page'
    ],
    ans: 0
  },
  {
    question: 'Consider this code from React Router. What do you call :id on the road?',
    example: <pre className='example'>{`<Route path="/books/:id" />`}</pre>,
    options: ['This is a route modal', 'This is a dynamic route parameter', 'This is a route splitter', 'This is a page "books" number'],
    ans: 1
  },
  {
    question: 'What character should be entered to direct to the PageNotFound component, when no other routes do?',
    example: <pre className='example'>{`<Route path="___" element={<PageNotFound />} /> `}</pre>,
    options: ['$', '*', '&', '^'],
    ans: 1
  },

  {
    question: 'What hooks should be used to set focus on the input field after display?',
    example: (
      <pre className='example'>
        {`import React, {___1___, ___2___} from 'react';
      export default function MyForm(){
        const textInput = ___1___(null);
        ___2___(() => {
          textInput.current.focus();
        }, []);
        return (
          <div>
            <input ref={textInput} />
          </div>
        );
      };`}
      </pre>
    ),
    options: ['useEffect and useRef', 'useRef and useCallback', 'useRef and useEffect', 'useCallback and useRef'],
    ans: 2
  },
  {
    question: 'Which of the following libraries is not a React UI library?',
    example: (
      <pre className='example'>
        {`Ant Design, React Bootstrap, Reactstrap,
       Chakra UI, Material UI, Semantic UI`}
      </pre>
    ),
    options: ['Chakra UI', 'Ant Design', 'Semantic UI', 'all are React UI libraries'],
    ans: 3
  },
  {
    question: 'What should be _____ in this code snippet?',
    example: (
      <pre className='example'>
        {`const [state, setState] = useState({
        firstName: '',
        lastName: '',
      })
      const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
      }
      const handleSubmit = (e) => {
        const { firstName, lastName} = state;
        _____________;
        setState({firstName: '', lastName: ''});
      }`}
      </pre>
    ),
    options: ['return', 'e.preventDefault()', 'stopPropagation()', 'e.currentTarget'],
    ans: 1
  },
  {
    question: 'Which of the following statements about Service Workers is false?',
    example: '',
    options: [
      'Service Workers have a direct connection to the DOM structures of the web page',
      'Service Workers are scripts that run in the background, independent of the web application',
      'Service Workers in React are added automatically when you create an application using the create-react-app command',
      'Service Workers allow you to cache resources and work without an Internet connections'
    ],
    ans: 0
  },
  {
    question: 'Linters help enforce coding rules and conventions. What linters do you know?',
    example: '',
    options: ['Grunt and Prettier', 'Mantine and ESLint', 'ESLint and Prettier', 'Grommet and Prettier'],
    ans: 2
  },
  {
    question: '_____ allows your component to expose a DOM node to its parent component via a reference?',
    example: '',
    options: ['createRef', 'useCallback', 'forwardRef', 'currentRef'],
    ans: 2
  },
  {
    question: 'As the new algorithm is called, which compares trees of old and new elements to determine their differences?',
    example: '',
    options: ['React Fiber', 'Fiber DOM', 'Fiber Tree', 'Fiber Stack'],
    ans: 0
  },
  {
    question: 'How to use https instead of http in create-react-app?',
    example: (
      <pre className='example'>
        {`1.
      "scripts": {
        "start": "set HTTPS=true && react-scripts start"
      }
      2.
      "scripts": {
        "start": "set HTTP=true && react-scripts start
      }
      3.
      "scripts": {
        "start": "set HTTP=HTTPS && react-scripts start
      }
      4.
      "scripts": {
        "start": "set HTTPS=3000 && react-scripts start
      }`}
      </pre>
    ),
    options: ['1', '2', '3', '4'],
    ans: 0
  },
  {
    question: 'Which of the following libraries is not related to React State Management ?',
    example: '',
    options: ['Redux', 'MobX', 'Recoil', 'Mocha'],
    ans: 3
  },
  {
    question: 'What is this method of styling components called?',
    example: (
      <pre className='example'>
        {`.container {
        margin: 40px;
        border: 5px dashed pink;
       }
      .content {
        font-size: 15px;
        text-align: center;
       }
      import React from 'react'
      import styles from './DashedBox.css'
      export default function DashedBox() {
        return (
        <div className={styles.container}>
          <p className={styles.content}>Hello</p>
        </div>
        )
      }`}
      </pre>
    ),
    options: ['CSS style sheet', 'Inline styles', 'CSS modules', 'Styled components'],
    ans: 2
  },
  {
    question: 'Which of the following statements about redux is incorrect ?',
    example: '',
    options: [
      'Redux state is stored globally in one object - the store',
      'State is read-only. The only way to change state is to create an action',
      'To change state, you need to use Observable data with dispatch',
      'To change state, you need to use the reducer function'
    ],
    ans: 2
  },
  {
    question: 'Which of the following is not an optimization technique in React?',
    example: (
      <pre className='example'>
        {`React.memo, useCallback, React.lazy and Suspense,
       API React.Profiler, Debouncing and Throttling`}
      </pre>
    ),
    options: ['useCallback', 'Debouncing and Throttling', 'API React.Profiler', 'all these are optimization techniques in React'],
    ans: 3
  },
  {
    question: 'What methods to use to create a timer that updates every second?',
    example: (
      <pre className='example'>
        {`import React, { useState, useEffect } from 'react'
      export default function IntervalExample(){
        const [seconds, setSeconds] = useState(0)
        useEffect(() => {
          const interval = ____1___(() => {
            ____2____((seconds) => seconds + 1)
          }, 1000)
          return () => ____3____(interval)
        }, [])
        return (
          <div className="App">
            <header className="App-header">
              {seconds} seconds passed
            </header>
          </div>
        )
      }`}
      </pre>
    ),
    options: ['setInterval, setSeconds, clearInterval', 'setSeconds, setInterval, clearInterval', 'setInterval, setTimeout, clearTimeout', 'setInterval, setSecond, clearTimeout'],
    ans: 0
  },
  {
    question: 'Which of the following libraries is not used to virtualize long lists in React ?',
    example: '',
    options: ['react-scroll', 'react-virtualized', 'react-infinite-scroll-component', 'react-window'],
    ans: 0
  },
  {
    question: 'Which of the following statements is incorrect ?',
    example: '',
    options: [
      'SSR is a technique in which the content of a web page is generated on the server and then sent to the browser as a fully formed HTML page',
      'CSR is an approach to web development in which rendering of web pages is primarily done on the client side using JavaScript',
      'In SSR most of the content is already in the original HTML, so the page renders faster',
      'CSR has an advantage for SEO as search engines can easily index the content on the page'
    ],
    ans: 3
  },
  {
    question: 'Which statement about React-Query is incorrect?',
    example: '',
    options: [
      'Is a library for managing data state inside only one component',
      'Is a library for state management and data caching in React applications',
      'Is a library that helps optimize data retrieval in React applications',
      'Is a library for retrieving, caching, synchronizing, and updating server state in React applications'
    ],
    ans: 0
  }
];
