import React from "react";
import { CSSTransition } from "react-transition-group";

import { fadeTransition } from "../../common/constants";
import styles from "./Styles.module.css";

export default function Modal(props) {
  const { showModal, Component, setShowModal, type, id } = props;
  const modalClass = showModal ? styles.show : styles.hide;

  return (
    <div className={"w-3"}>
      <CSSTransition in={showModal} timeout={350} classNames={fadeTransition}>
        <div className={`${modalClass} ${styles.modal} w-12`}>
          <Component setShowModal={setShowModal} type={type} id={id} />
        </div>
      </CSSTransition>
    </div>
  );
}
