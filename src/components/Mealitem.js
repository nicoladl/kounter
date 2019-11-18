import React from 'react'

export default function MealItem(props) {
  const { name, kcal } = props.item
  return <li>{name} <span className="meal-kcal">{kcal}</span> Kcal</li>
}
