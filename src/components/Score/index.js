import React from "react";

function Score(props) {
  return (
    <div>
      <h2>{props.message}</h2>
      <h2>
        Score: {props.score} | Top Score: {props.topScore}
      </h2>
    </div>
  );
}

export default Score;
