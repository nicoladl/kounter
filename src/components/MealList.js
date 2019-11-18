import React from "react";
import { useSelector } from 'react-redux'
import MealItem from './Mealitem'
import { slugify } from '../utils'

export default function MealList(props) {
  const meal = useSelector(state => state.food.food)
  return (
    <ul className="meal-list">
      {meal.map(item => {
        return <MealItem key={slugify(item.name)} item={item} />
      })}
    </ul>
  );
}
