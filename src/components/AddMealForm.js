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
      kcal: this.kcalFromInput.current.value
    };
    this.props.addToList(meal);
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
