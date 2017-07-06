// - Find 'react'(node_modules) to the library and assign to variable React (library)

// This React knows how to renders the react component
import React from 'react';

// To render in to a DOM or insert it to a dom
import ReactDOM from 'react-dom';

// Include the search bar
import SearchBar from './components/search_bar';

//API key from youtube
const API_KEY = 'AIzaSyBifvPBHKb-4qk5TTg1-XsG_suUh2BAg3E';

// Create a new component. This component should produce some HTML
// () => (ES6 syntax) same as function(). Although it's different when you use 'this'.
const App = () => {
  //const - ES6 infused syntax (it's like a 'var', this declaration will never change; constant)
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// - Take this component's generated HTML and put in on the page (in the DOM)

// Using ReactDOM beacause we are trying to touch the DOM
//App - this is a class of a component. Just a type. Produces Instance ; <App /> - To make it in an instance, Wrap it in a JSX tag
// document.querySelector('.container') - Telling where to render it to
ReactDOM.render(<App />, document.querySelector('.container'));
