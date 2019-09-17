import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";

class PersonResume extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Hi {this.props.profile.name}</h1>
        <Link to={{ pathname: "/", slug: this.props.profile.slug }}>
          edit profile
        </Link>
        <ul>
          {Object.keys(this.props.profile).map(key => (
            <li key={key}>
              {key}: {this.props.profile[key]}
            </li>
          ))}
        </ul>

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

export default PersonResume;
