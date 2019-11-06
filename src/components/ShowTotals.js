import React from "react";
import Happy from "./Happy";
import Sad from "./Sad";

class ShowTotals extends React.Component {
  render() {
    return (
      <>
        <p>Total in: {this.props.total} Kcal</p>
        <p>
          Total amount of calories:{" "}
          <strong>
            {this.props.deltaKcal} Kcal {this.props.deltaKcal > 0 ? <Sad /> : <Happy />}
          </strong>
        </p>
      </>
    );
  }
}

export default ShowTotals;
