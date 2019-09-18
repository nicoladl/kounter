import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    profile: {},
    food: []
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.name);
    this.setState({ profile: JSON.parse(localStorageRef) });
  }

  checkStatus() {
    const localStorageRef = localStorage.getItem(this.props.match.params.name);
    let showProfile = true;
    // if localStora exist show Profile else show BackToPicker
    localStorageRef ? (showProfile = true) : (showProfile = false);
    return showProfile;
  }

  addToList = (food, total) => {
    // update state
    this.setState({ food, total });
  };

  render() {
    if (this.checkStatus()) {
      return (
        <Profile
          profile={this.state.profile}
          state={this.state}
          addToList={this.addToList}
          total={this.total}
        />
      );
    }
    return <Link to="/">back to data</Link>;
  }
}

export default App;
