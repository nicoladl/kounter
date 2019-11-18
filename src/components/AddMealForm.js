import React from "react";
import { useDispatch } from 'react-redux'
import { addFood } from '../actions'

export default function AddMealForm() {
  const dispatch = useDispatch()
  const mealFromInput = React.createRef();
  const kcalFromInput = React.createRef();

  const addToList = e => {
    // stop preventing form
    e.preventDefault();
    // add to state
    const meal = {
      name: mealFromInput.current.value,
      kcal: parseInt(kcalFromInput.current.value)
    };

    // dispatch to Redux
    dispatch(addFood(meal))

    // refresh the form
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={addToList}>
      nome <input name="meal" type="text" ref={mealFromInput} />
      <br />
      kcal <input name="kcal" type="number" ref={kcalFromInput} />
      <br />
      <button type="submit">add</button>
    </form>
  );
}
