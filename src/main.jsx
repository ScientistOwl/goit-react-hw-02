import React from "react";
import ReactDOM from "react-dom/client";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./index.css";

function MainApp() {
  const [feedback, setFeedback] = React.useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  React.useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("feedback");
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className="container">
      <h1>Welcome to Feedback App</h1>
      <Description />
      <div className="section-buttons">
        <Options updateFeedback={updateFeedback} />
      </div>
      <div className="section-notification">
        {totalFeedback > 0 ? (
          <div>
            <Feedback
              stats={feedback}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button className="reset" onClick={resetFeedback}>
                Reset
              </button>
            </div>
          </div>
        ) : (
          <Notification message="No feedback yet. Be the first to leave one!" />
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
