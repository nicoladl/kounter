import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";
import ShowTotals from "./ShowTotals";

class Profile extends React.Component {
  render() {
    // set some vars
    const props = this.props;
    const profile = props.profile;

    // if component is not ready show loading
    if (profile.name) {
      return (
        <Fragment>
          <h1>Hi {profile.name.value}</h1>
          <Link to={{ pathname: "/", profile: profile }}>edit profile</Link>

          <ul>
            {Object.keys(profile).map(key => {
              // filter if visibleOnProfile is true
              if (profile[key].visibleOnProfile) {
                return (
                  // show on profile
                  <li key={key}>
                    {key}: {profile[key].value}
                  </li>
                );
              }
            })}
          </ul>

          <AddMealForm addToList={props.addToList} state={props.state} />
          <MealList meal={props.state.food} />

          {props.state.total ? (
            <ShowTotals
              total={props.state.total}
              deltaKcal={props.state.total - profile.basalMetabolism.value}
            />
          ) : null}
        </Fragment>
      );
    }
    return <p>loading...</p>;
  }
}

export default Profile;
