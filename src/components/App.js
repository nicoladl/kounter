import React from "react";

class App extends React.Component {
  state = {
    person: {}
  };

  componentDidMount() {
    this.setState({ person });
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.name}</h1>
        <div>{this.props.location.basalMetabolism}</div>
      </div>
    );
  }
}

export default App;
