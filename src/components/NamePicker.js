import React from "react";
import { slugify, basalMetabolismCalculation } from "../utils";

class NamePicker extends React.Component {
  nameFromInput = React.createRef();
  weightFromInput = React.createRef();
  genderFromInput = React.createRef();
  ageFromInput = React.createRef();
  heightFromInput = React.createRef();

  calculateBasalMetabolism = e => {
    // block event
    e.preventDefault();
    // get input value and store into object
    const person = {
      name: slugify(this.nameFromInput.current.value),
      weight: this.weightFromInput.current.value,
      gender: this.genderFromInput.current.value,
      age: this.ageFromInput.current.value,
      height: this.heightFromInput.current.value
    };

    // go to new route with params
    this.props.history.push({
      pathname: `/counter/${person.name}`,
      basalMetabolism: basalMetabolismCalculation(person), // calculation
      person
    });
  };

  render() {
    return (
      <form onSubmit={this.calculateBasalMetabolism}>
        <label>
          Name:
          <input type="text" name="name" ref={this.nameFromInput} />
        </label>
        <label>
          Weight:
          <input type="text" name="weight" ref={this.weightFromInput} />
        </label>
        <label>
          Name:
          <select ref={this.genderFromInput}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <label>
          age:
          <input type="text" name="age" ref={this.ageFromInput} />
        </label>

        <label>
          height:
          <input type="number" name="height" ref={this.heightFromInput} />
        </label>

        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default NamePicker;
