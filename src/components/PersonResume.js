import React, { Fragment } from "react";

class PersonResume extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Hi {this.props.personData.name}</h1>
        <div>
          This is your basal metabolism {this.props.personData.basalMetabolism}
        </div>
      </Fragment>
    );
  }
}

export default PersonResume;
