import styles from "../App.module.css";

export const SERVER_LOCATION = "https://sprint-utils-backend.herokuapp.com";
// export const SERVER_LOCATION = "http://localhost:7000";

export const cardTypes = {
  GOOD: "good",
  BAD: "bad",
  ACTION: "action"
};
export const fadeTransition = {
  enter: `${styles.fadeEnter}`,
  enterActive: `${styles.fadeEnterActive}`,
  exit: `${styles.fadeExit}`,
  exitActive: `${styles.fadeExitActive}`
};
