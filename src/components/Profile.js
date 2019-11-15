import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";
import ShowTotals from "./ShowTotals";

export default function Profile(props) {
  // get profile from Store
  const profile = useSelector(state => state.profile.userProfile)
  const total = useSelector(state => state.food.total)

  // if component is not ready show loading
  if (!profile.name) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1>Hi {profile.name.value}</h1>
      <Link to={{ pathname: "/", profile: profile }}>edit profile</Link>

      <ul className="profile">
        {Object.keys(profile)
          // filter if visibleOnProfile is true
          .filter(key => profile[key].visibleOnProfile)
          // iterate through all the items
          .map(key => {
            return (
              // show on profile and add correct unit misure
              <li
                key={key}
                className={key}
                data-key={profile[key].value}>
                {key}: {profile[key].value}
                {key === "weight" ? " kg" : null}
                {key === "height" ? " cm" : null}
                {key === "basalMetabolism" ? " Kcal" : null}
              </li>
            );
          })}
      </ul>

      <AddMealForm />
      {total > 0 && <MealList />}

      {total > 0 && (
        <ShowTotals
          total={total}
          deltaKcal={total - profile.basalMetabolism.value}
        />
      )}
    </>
  );
}
