import React from "react";
import styles from "./Notification.module.css";

function Notification({ message }) {
  return <p className={styles.notification}>{message}</p>;
}

export default Notification;
