import React from "react";
import { Link } from "react-router-dom";
import base from "../firebase";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    profile: {},
    food: []
  };

  componentDidMount() {
    // if localStorage has item with selected name setState with data
    const localStorageRef = localStorage.getItem(this.props.match.params.name);
    if (localStorageRef) {
      const localStorage = JSON.parse(localStorageRef);
      this.setState({ profile: localStorage });
    }

    // post to database
    base.post(`${this.props.match.params.name}/profile`, {
      data: JSON.parse(localStorageRef)
    });
  }

  checkStatus() {
    const localStorageRef = localStorage.getItem(this.props.match.params.name);
    let showProfile = true;
    // if localStorage exist show Profile else show BackToPicker
    localStorageRef ? (showProfile = true) : (showProfile = false);
    return showProfile;
  }

  addToList = (food, total) => {
    // update state
    this.setState({ food, total });

    // post to database
    base.post(`${this.props.match.params.name}/food`, {
      data: food
    });

    // post to database
    base.post(`${this.props.match.params.name}/total`, {
      data: total
    });
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
