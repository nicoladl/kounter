import React from "react";

class MealList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.meal.map((value, index) => {
          return (
            <li key={index}>
              {value.name} {value.kcal} Kcal
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MealList;
