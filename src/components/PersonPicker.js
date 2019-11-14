import React from "react";
import { useDispatch } from 'react-redux'
import { addProfile } from '../actions'
import { slugify, basalMetabolismCalculation } from "../utils";

export default function NamePicker(props) {
  const nameFromInput = React.createRef();
  const weightFromInput = React.createRef();
  const genderFromInput = React.createRef();
  const ageFromInput = React.createRef();
  const heightFromInput = React.createRef();
  const dispatch = useDispatch()

  const getProfileFromLocalStorage = () => {
    let inputChar = "";

    // detect if input is filled
    if (nameFromInput.current) {
      inputChar = slugify(nameFromInput.current.value);

      // get profile from localStorage
      const profile = JSON.parse(localStorage.getItem(inputChar));

      // update form value
      if (profile) {
        nameFromInput.current.value = profile.name.value;
        weightFromInput.current.value = profile.weight.value;
        genderFromInput.current.value = profile.gender.value;
        ageFromInput.current.value = profile.age.value;
        heightFromInput.current.value = profile.height.value;
      }
    }
  };

  const calculateBasalMetabolism = e => {
    e.preventDefault(); // block event

    // get input value and store into object
    const profile = {
      name: {
        value: nameFromInput.current.value,
        visibleOnProfile: false
      },
      slug: {
        value: slugify(nameFromInput.current.value),
        visibleOnProfile: false
      },
      weight: {
        value: weightFromInput.current.value,
        visibleOnProfile: true
      },
      gender: {
        value: genderFromInput.current.value,
        visibleOnProfile: true
      },
      age: {
        value: ageFromInput.current.value,
        visibleOnProfile: true
      },
      height: {
        value: heightFromInput.current.value,
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
    props.history.push({
      pathname: `/counter/${profile.slug.value}`,
      profile
    });

    // dispatch to Redux
    dispatch(addProfile(profile))
  };

  getProfileFromLocalStorage();
  return (
    <form onSubmit={calculateBasalMetabolism}>
      <label>
        Name:
          <input
          type="text"
          name="name"
          required
          ref={nameFromInput}
          defaultValue={
            props.location.profile
              ? props.location.profile.name.value
              : ""
          }
          onChange={getProfileFromLocalStorage}
        />
      </label>
      <br />
      <label>
        Gender:
          <select
          name="gender"
          required
          ref={genderFromInput}
          defaultValue={
            props.location.profile
              ? props.location.profile.gender.value
              : ""
          }
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>
      <br />
      <label>
        Age:
          <input
          type="number"
          min="0"
          name="age"
          required
          ref={ageFromInput}
          defaultValue={
            props.location.profile
              ? props.location.profile.age.value
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
          required
          ref={weightFromInput}
          defaultValue={
            props.location.profile
              ? props.location.profile.weight.value
              : ""
          }
        />
      </label>
      <br />
      <label>
        Height (cm):
          <input
          type="number"
          min="0"
          name="height"
          required
          ref={heightFromInput}
          defaultValue={
            props.location.profile
              ? props.location.profile.height.value
              : ""
          }
        />
      </label>
      <br />

      <button type="submit">Calculate</button>
    </form>
  );
}
