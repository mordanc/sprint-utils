import styles from "../App.module.css";

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
