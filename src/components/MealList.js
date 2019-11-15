import React from "react";
import { useSelector } from 'react-redux'

export default function MealList(props) {
  const meal = useSelector(state => state.food.food)
  return (
    <ul className="meal-list">
      {meal.map((value, index) => {
        return (
          <li key={index}>
            {value.name} <span className="meal-kcal">{value.kcal}</span> Kcal
          </li>
        );
      })}
    </ul>
  );
}
