import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";
import ShowTotals from "./ShowTotals";

class Profile extends React.Component {
  render() {
    // if component is not ready show loading
    if (this.props.profile.name) {
      return (
        <Fragment>
          <h1>Hi {this.props.profile.name.value}</h1>
          <Link to={{ pathname: "/", name: this.props.profile.name.value }}>
            edit profile
          </Link>

          <ul>
            {Object.keys(this.props.profile).map(key => {
              // filter if visibleOnProfile is true
              if (this.props.profile[key].visibleOnProfile) {
                return (
                  // show on profile
                  <li key={key}>
                    {key}: {this.props.profile[key].value}
                  </li>
                );
              }
            })}
          </ul>

          <AddMealForm
            addToList={this.props.addToList}
            state={this.props.state}
          />
          <MealList meal={this.props.state.food} />

          {this.props.state.total ? (
            <ShowTotals
              total={this.props.state.total}
              deltaKcal={
                this.props.state.total -
                this.props.profile.basalMetabolism.value
              }
            />
          ) : null}
        </Fragment>
      );
    }
    return <p>loading...</p>;
  }
}

export default Profile;
