import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";

class Profile extends React.Component {
  render() {
    if (this.props.profile.name) {
      return (
        <Fragment>
          <h1>Hi {this.props.profile.name.value}</h1>
          <Link to={{ pathname: "/", name: this.props.profile.name.value }}>
            edit profile
          </Link>
          <ul>
            {Object.keys(this.props.profile).map(key => {
              if (this.props.profile[key].visibleOnProfile) {
                return (
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
            <div>
              <p>Total in: {this.props.state.total}kcal</p>
              <p>
                Total amount of calories:{" "}
                <strong>
                  {this.props.state.total -
                    this.props.profile.basalMetabolism.value}
                  Kcal{" "}
                  {this.props.state.total -
                    this.props.profile.basalMetabolism.value >
                  0 ? (
                    <span role="img" aria-label="happy">
                      &#128533;
                    </span>
                  ) : (
                    <span role="img" aria-label="sad">
                      &#128515;
                    </span>
                  )}
                </strong>
              </p>
            </div>
          ) : null}
        </Fragment>
      );
    }
    return <p>loading...</p>;
  }
}

export default Profile;
