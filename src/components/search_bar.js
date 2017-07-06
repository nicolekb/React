// React, {Component} is like const Component = React.Component
import React, {Component} from 'react';

// This is a functional component; Used if taking some info and spitting out some JSX
// const SearchBar = () => {
//   return <input />; //generate HTML input that a user could type into
// };

//This is a class based component (adds more functionality). Always return a render function & JSX tags
//define a class named, SearchBar and give it access to all functionality that React.Component has.
// It's also like React.Component (above)
class SearchBar extends Component {

  // Only class based component has a state. Functional component does not have a state
  // This is how you initialize state in a class based component
  // First and only function is called whenever a new instant of a class is created
  constructor(props) {
      super(props);

      //term is a property name
      //this.state = object
      // the only place you could manually change a state
      this.state = { term: '' };
  }

  render() {
    //create a new input element and pass it onto the prompt onchange with a value of this.onInputChange

    //the same as the return in connection of the event Handler. This is a short hand
    //setState = state is changing and here's is the new state
    return (
      <div>
        //controlled component = its value is set by state.
        <input
          value = {this.state.term}
          onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );

    // return <input onChange = {this.onInputChange} />;
  }

  // Event Handler
  //onInputChange(event) {
    // access to the value of the input;
    // console.log(event.target.value);
  //}
}


export default SearchBar;
