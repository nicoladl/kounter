import React from "react";
import Happy from "./Happy";
import Sad from "./Sad";

class ShowTotals extends React.Component {
  render() {
    return (
      <div className="total">
        <div className="total__partial">Total in: <span className="total-kcal">{this.props.total}</span> Kcal</div>
        <div className="total__main">
          Total amount of calories:{" "}
          <strong>
            <span className="total-sum">{this.props.deltaKcal}</span> Kcal {this.props.deltaKcal > 0 ? <Sad /> : <Happy />}
          </strong>
        </div>
      </div>
    );
  }
}

export default ShowTotals;
