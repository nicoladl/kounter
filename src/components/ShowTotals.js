import React from "react";
import Happy from "./Happy";
import Sad from "./Sad";

export default function ShowTotals(props) {
  return (
    <div className="total">
      <div className="total__partial">Total in: <span className="total-kcal">{props.total}</span> Kcal</div>
      <div className="total__main">
        Total amount of calories:{" "}
        <strong>
          <span className="total-sum">{props.deltaKcal}</span> Kcal {props.deltaKcal > 0 ? <Sad /> : <Happy />}
        </strong>
      </div>
    </div>
  );
}
