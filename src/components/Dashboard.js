import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import base from "../firebase";
import Profile from "./Profile";
import { addProfile } from '../actions'

export default function Dashboard(props) {
  const dispatch = useDispatch()
  const state = {
    food: []
  };

  const checkLocalStorage = () => {
    // if localStorage has item with selected name setState with data
    const localStorageRef = localStorage.getItem(props.match.params.name);
    if (localStorageRef) {
      const localStorage = JSON.parse(localStorageRef);

      // dispatch to Redux
      dispatch(addProfile(localStorage))
    }

    // post to database
    base.post(`${props.match.params.name}/profile`, {
      data: JSON.parse(localStorageRef)
    });
  }

  const checkStatus = () => {
    const localStorageRef = localStorage.getItem(props.match.params.name);
    let showProfile = true;
    // if localStorage exist show Profile else show BackToPicker
    localStorageRef ? (showProfile = true) : (showProfile = false);
    return showProfile;
  }

  const addToList = (food, total) => {
    // update state
    this.setState({ food, total });

    // post to database
    base.post(`${props.match.params.name}/food`, {
      data: food
    });

    // post to database
    base.post(`${props.match.params.name}/total`, {
      data: total
    });
  };

  checkLocalStorage()
  if (checkStatus()) {
    return (
      <>
        <Profile
          state={state}
          addToList={addToList}
        // total={this.total}
        />
      </>
    );
  }
  return <Link to="/">back to data</Link>;
}
