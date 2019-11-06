import React from "react";
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
    if (!profile.name) {
      return <p>loading...</p>;
    }

    return (
      <>
        <h1>Hi {profile.name.value}</h1>
        <Link to={{ pathname: "/", profile: profile }}>edit profile</Link>

        <ul>
          {Object.keys(profile)
            // filter if visibleOnProfile is true
            .filter(key => profile[key].visibleOnProfile)
            // iterate through all the items
            .map(key => {
              return (
                // show on profile and add correct unit misure
                <li key={key} data-key={profile[key].value}>
                  {key}: {profile[key].value}
                  {key === "weight" ? " kg" : null}
                  {key === "height" ? " cm" : null}
                  {key === "basalMetabolism" ? " Kcal" : null}
                </li>
              );
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
      </>
    );
  }
}

export default Profile;
