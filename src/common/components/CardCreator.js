import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addCard,
  incrementId,
  selectId,
  removeAllCards
} from "../../features/tracks/trackSlice";

export default function CardCreator(props) {
  const { type = "good", setShowModal } = props;
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const curId = useSelector(selectId);

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const add = () => {
    dispatch(incrementId());
    dispatch(
      addCard({
        card: {
          id: curId,
          text,
          author: "author",
          type: type
        }
      })
    );
  };

  return (
    <div className="flex flex-col w-3/4 mx-auto my-6 items-center">
      <div className={"max-w-sm rounded overflow-hidden bg-gray-600 shadow"}>
        <p
          onClick={() => setShowModal(false)}
          className={"float-right mr-2 text-red-700 cursor-pointer"}
        >
          x
        </p>
        <div className={"px-6 py-4"}>
          <h1 className={"text-gray-400"}>Add a {type} card</h1>
          <form onSubmit={e => e.preventDefault()}>
            <input
              className={"rounded my-2 pl-1 focus:border-blue-400"}
              type="text"
              placeholder="Text"
              value={text}
              onChange={e => setText(e.target.value)}
              ref={r => (ref.current = r)}
            ></input>

            <div className={"flex flex-row"}>
              <button
                onClick={() => add()}
                className={
                  "box-border w-1/3 hover:bg-gray-900 hover:text-white rounded p-1 "
                }
              >
                Create
              </button>

              <button
                onClick={() => setText("")}
                className={
                  "box-border w-1/3 hover:bg-gray-900 hover:text-white rounded p-1 ml-2 "
                }
              >
                Clear Text
              </button>
              <button
                onClick={() => dispatch(removeAllCards())}
                className={
                  "border border-red-900 w-1/3 hover:bg-red-900 hover:text-white rounded p-1 ml-2"
                }
              >
                Clear All
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
