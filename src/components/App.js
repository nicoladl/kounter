import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    profile: {},
    food: [],
    totalKcal: 0
  };

  // save or update to State
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

  addToList = meal => {
    // copy state
    const food = [...this.state.food];
    // add item to list
    food.push(meal);
    // update state
    this.setState({ food });
  };

  render() {
    if (this.checkStatus()) {
      return (
        <Profile
          profile={this.state.profile}
          state={this.state}
          addToList={this.addToList}
          calcTotalKcal={this.calcTotalKcal}
        />
      );
    }
    return <Link to="/">back to data</Link>;
  }
}

export default App;
