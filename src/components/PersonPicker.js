import React from "react";
import { slugify, basalMetabolismCalculation } from "../utils";
// import Tooltip from "./Tooltip";

class NamePicker extends React.Component {
  nameFromInput = React.createRef();
  weightFromInput = React.createRef();
  genderFromInput = React.createRef();
  ageFromInput = React.createRef();
  heightFromInput = React.createRef();

  getProfileFromLocalStorage = () => {
    let inputChar = "";

    // detect if input is filled
    if (this.nameFromInput.current) {
      inputChar = slugify(this.nameFromInput.current.value);

      // get profile from localStorage
      const profile = JSON.parse(localStorage.getItem(inputChar));

      // update form value
      this.nameFromInput.current.value = profile.name.value;
      this.weightFromInput.current.value = profile.weight.value;
      this.genderFromInput.current.value = profile.gender.value;
      this.ageFromInput.current.value = profile.age.value;
      this.heightFromInput.current.value = profile.height.value;
    }
  };

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
    this.getProfileFromLocalStorage();
    return (
      <form onSubmit={this.calculateBasalMetabolism}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            ref={this.nameFromInput}
            defaultValue={
              this.props.location.profile
                ? this.props.location.profile.name.value
                : ""
            }
            onChange={this.getProfileFromLocalStorage}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            ref={this.genderFromInput}
            defaultValue={
              this.props.location.profile
                ? this.props.location.profile.gender.value
                : ""
            }
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <br />
        <label>
          age:
          <input
            type="number"
            min="0"
            name="age"
            ref={this.ageFromInput}
            defaultValue={
              this.props.location.profile
                ? this.props.location.profile.age.value
                : ""
            }
          />
        </label>
        <br />
        <label>
          Weight (Kg):
          <input
            type="number"
            min="0"
            name="weight"
            ref={this.weightFromInput}
            defaultValue={
              this.props.location.profile
                ? this.props.location.profile.weight.value
                : ""
            }
          />
        </label>
        <br />
        <label>
          height (cm):
          <input
            type="number"
            min="0"
            name="height"
            ref={this.heightFromInput}
            defaultValue={
              this.props.location.profile
                ? this.props.location.profile.height.value
                : ""
            }
          />
        </label>
        <br />

        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default NamePicker;
