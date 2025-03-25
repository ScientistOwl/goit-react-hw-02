import React from "react";
import styles from "./Options.module.css";

function Options({ updateFeedback }) {
  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
    </div>
  );
}

export default Options;
