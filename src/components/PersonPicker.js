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
    const profile = {
      name: this.nameFromInput.current.value,
      slug: slugify(this.nameFromInput.current.value),
      weight: this.weightFromInput.current.value,
      gender: this.genderFromInput.current.value,
      age: this.ageFromInput.current.value,
      height: this.heightFromInput.current.value
    };

    profile.basalMetabolism = basalMetabolismCalculation(profile); // calculation

    // save or update to LocalStorage
    localStorage.setItem(profile.slug, JSON.stringify(profile));

    // go to new route with params
    this.props.history.push({
      pathname: `/counter/${profile.slug}`,
      profile
    });
  };

  render() {
    return (
      <form onSubmit={this.calculateBasalMetabolism}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            ref={this.nameFromInput}
            value={this.props.location.slug}
          />
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
