import React from "react";

class MealList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.meal.map((value, index) => {
          return (
            <li key={index}>
              {value.name} <span className="meal-kcal">{value.kcal}</span> Kcal
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MealList;
