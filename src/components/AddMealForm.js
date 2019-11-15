import React from "react";
import { useDispatch, useSelector } from 'react-redux'
// import base from "../firebase";
import { addFood } from '../actions'

export default function AddMealForm(props) {
  const dispatch = useDispatch()
  // const profile = useSelector(state => state.profile.userProfile)
  // const food = useSelector(state => state.food)
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

    // post to database
    // base.post(`${profile.name.value}/food`, {
    //   data: food
    // });

    // post to database
    // base.post(`${props.match.params.name}/total`, {
    //   data: total
    // });

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
