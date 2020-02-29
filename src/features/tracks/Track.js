import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCard } from "./trackSlice";

import Card from "../../common/components/Card";

export default function Track(props) {
  const { cards, title, type } = props;

  const displayCards = cards.map(card => (
    <Card id={card.id} text={card.text} author={card.author} />
  ));

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={
          "text-black text-center text-xl hover:shadow-lg bg-gray-700 rounded mr-5 ml-5 mt-5 px-2"
        }
      >
        <h1>{title}</h1>
        <p
          className={"text-green-600 cursor-pointer box-border border-blue-100"}
          onClick={e => {
            console.log("dispatch");
            dispatch(
              addCard({
                card: {
                  id: 1,
                  text: "lorem dlkafjldsjfkl djsafklj dslkfjdsklf jsdklfj djf",
                  author: "author"
                },
                type: type
              })
            );
          }}
        >
          +
        </p>
      </div>
      {displayCards}
    </div>
  );
}
