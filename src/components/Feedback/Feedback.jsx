import React from "react";
import styles from "./Feedback.module.css";

function Feedback({ stats, total, positivePercentage }) {
  return (
    <div className={styles.container}>
      <h2>Feedback Statistics</h2>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>Total feedback: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
