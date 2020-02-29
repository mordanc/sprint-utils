import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardCreator from "../../common/components/CardCreator";

import { fadeTransition } from "../../common/constants";

import Modal from "../../common/components/Modal";
import Card from "../../common/components/Card";

export default function Track(props) {
  const { cards, title, type } = props;

  const [showModal, setShowModal] = useState(false);

  const displayCards = cards.map((card, key) => (
    <CSSTransition key={key} timeout={350} classNames={fadeTransition}>
      <Card
        id={card.id}
        text={card.text}
        author={card.author}
        type={card.type}
      />
    </CSSTransition>
  ));

  return (
    <div className={" "}>
      <Modal
        Component={CardCreator}
        showModal={showModal}
        setShowModal={setShowModal}
        type={type}
      />
      <div
        className={
          "text-black text-center text-xl hover:shadow-lg bg-gray-700 rounded m-5 px-2"
        }
      >
        <h1>{title}</h1>
        <p
          className={"text-green-600 cursor-pointer "}
          onClick={() => setShowModal(!showModal)}
        >
          +
        </p>
      </div>
      <div className={"grid grid-cols-1"}>
        <TransitionGroup className={"hey"}>{displayCards}</TransitionGroup>
      </div>
    </div>
  );
}
