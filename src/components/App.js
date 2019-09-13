import React from "react";

function App(props) {
  return (
    <div>
      <h1>{props.location.name}</h1>
      <div>{props.location.basalMetabolism}</div>
    </div>
  );
}

export default App;
