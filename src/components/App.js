import React from "react";
import { Link } from "react-router-dom";
import PersonResume from "./PersonResume";

class App extends React.Component {
  state = {
    person: {}
  };

  // save or update to State
  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.name);
    this.setState({ person: JSON.parse(localStorageRef) });
  }

  checkStatus() {
    const localStorageRef = localStorage.getItem(this.props.match.params.name);
    let showProfile = true;
    // if localStora exist show Profile else show BackToPicker
    localStorageRef ? (showProfile = true) : (showProfile = false);
    return showProfile;
  }

  render() {
    if (this.checkStatus()) {
      return <PersonResume personData={this.state.person} />;
    }
    return <Link to="/">back to data</Link>;
  }
}

export default App;
