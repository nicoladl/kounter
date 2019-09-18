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
            <p>
              Total: <strong>{this.props.state.total}kcal</strong>
            </p>
          ) : null}
        </Fragment>
      );
    }
    return <p>loading...</p>;
  }
}

export default Profile;
