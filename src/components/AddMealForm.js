import React from "react";

class AddMealForm extends React.Component {
  mealFromInput = React.createRef();
  kcalFromInput = React.createRef();

  addToList = e => {
    // stop preventing form
    e.preventDefault();
    // add to state
    const meal = {
      name: this.mealFromInput.current.value,
      kcal: parseInt(this.kcalFromInput.current.value)
    };

    // copy state
    const food = [...this.props.state.food];
    // add item to list
    food.push(meal);
    // calc total kcal
    const total = food.reduce((sum, item) => {
      return sum + item.kcal;
    }, 0);
    // update state
    this.props.addToList(food, total);
    // refresh the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.addToList}>
        nome <input name="meal" type="text" ref={this.mealFromInput} />
        <br />
        kcal <input name="kcal" type="number" ref={this.kcalFromInput} />
        <br />
        <button>add</button>
      </form>
    );
  }
}

export default AddMealForm;
