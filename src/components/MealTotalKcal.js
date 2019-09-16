import React from "react";

class MealTotalKcal extends React.Component {
  componentDidMount() {
    this.total = this.props.meal.reduce((sum, item) => {
      return sum + item.kcal;
    }, 0);
  }

  render() {
    return <p>{this.total}</p>;
  }
}

export default MealTotalKcal;
