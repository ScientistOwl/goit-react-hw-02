import React from "react";
import "./Notification.module.css";

function Notification({ message }) {
  return <p className="notification">{message}</p>;
}

export default Notification;
