import React from "react";
import { slugify, basalMetabolismCalculation } from "../utils";

class NamePicker extends React.Component {
  nameFromInput = React.createRef();
  weightFromInput = React.createRef();
  genderFromInput = React.createRef();
  ageFromInput = React.createRef();
  heightFromInput = React.createRef();

  calculateBasalMetabolism = e => {
    e.preventDefault(); // block event

    // get input value and store into object
    const profile = {
      name: {
        value: this.nameFromInput.current.value,
        visibleOnProfile: false
      },
      slug: {
        value: slugify(this.nameFromInput.current.value),
        visibleOnProfile: false
      },
      weight: {
        value: this.weightFromInput.current.value,
        visibleOnProfile: true
      },
      gender: {
        value: this.genderFromInput.current.value,
        visibleOnProfile: true
      },
      age: {
        value: this.ageFromInput.current.value,
        visibleOnProfile: true
      },
      height: {
        value: this.heightFromInput.current.value,
        visibleOnProfile: true
      },
      basalMetabolism: {
        value: 0,
        visibleOnProfile: true
      }
    };

    // calculate basal metabolism and update profile obj
    profile.basalMetabolism.value = basalMetabolismCalculation(profile); // calculation

    // save or update to LocalStorage
    localStorage.setItem(profile.slug.value, JSON.stringify(profile));

    // go to new route with params profile obj
    this.props.history.push({
      pathname: `/counter/${profile.slug.value}`,
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
            defaultValue={this.props.location.name}
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            min="0"
            name="weight"
            ref={this.weightFromInput}
          />
        </label>
        <br />
        <label>
          Name:
          <select ref={this.genderFromInput}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <br />
        <label>
          age:
          <input type="number" min="0" name="age" ref={this.ageFromInput} />
        </label>
        <br />
        <label>
          height:
          <input
            type="number"
            min="0"
            name="height"
            ref={this.heightFromInput}
          />
        </label>
        <br />

        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default NamePicker;
