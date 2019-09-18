import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";

class Profile extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Hi {this.props.profile.name.value}</h1>
        <Link to={{ pathname: "/", name: this.props.profile.name.value }}>
          edit profile
        </Link>
        {/* <ul>
          {Object.keys(this.props.profile).map(
            key => console.log(this.props.profile)
            // if (this.props.profile[key].visibleOnProfile) {
            //   <li key={key}>
            //     {key}: {this.props.profile[key]}
            //   </li>;
            // }
          )}
        </ul> */}

        <AddMealForm addToList={this.props.addToList} />
        <MealList meal={this.props.state.food} />
        {this.props.total ? (
          <p>
            Total: <strong>{this.props.total}kcal</strong>
          </p>
        ) : null}
      </Fragment>
    );
  }
}

export default Profile;
