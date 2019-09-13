import React from "react";

class App extends React.Component {
  state = {
    person: {}
  };
  
  componentDidMount() {
    // check if we are from {PersonPicker} or not
    if (this.props.location.person) {
      // save data to localStorage
      localStorage.setItem(
        this.props.location.person.name,
        JSON.stringify(this.props.location.person)
        )

      // save to state
      this.setState({person: this.props.location.person});
    } else {
      // get data from localStorage
      const localStorageRef = localStorage.getItem(this.props.match.params.name);
      if (localStorageRef) {
        // save to state
        this.setState({person: JSON.parse(localStorageRef)});
      } else {
        // back to {PersonPicker}
        console.log('back to PersonPicker')
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Hi {this.state.person.name}</h1>
        <div>This is your basal metabolism {this.state.person.basalMetabolism}</div>
      </div>
    );
  }
}

export default App;
