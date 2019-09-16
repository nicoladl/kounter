import React, { Fragment } from "react";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";
import MealTotalKcal from "./MealTotalKcal";

class PersonResume extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Hi {this.props.profile.name}</h1>
        <ul>
          <li>gender: {this.props.profile.gender}</li>
          <li>weight: {this.props.profile.weight}</li>
          <li>height: {this.props.profile.height}</li>
          <li>age: {this.props.profile.age}</li>
        </ul>
        <p>
          This is your basal metabolism:{" "}
          <strong>
            {this.props.profile.basalMetabolism}
            Kcal
          </strong>
        </p>

        <AddMealForm addToList={this.props.addToList} />
        <MealList meal={this.props.state.food} />
        <MealTotalKcal meal={this.props.state.food} />
      </Fragment>
    );
  }
}

export default PersonResume;
