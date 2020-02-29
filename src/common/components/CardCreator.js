import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { addCard } from "../../features/tracks/trackSlice";

export default function CardCreator(props) {
  const { type = "good", setShowModal } = props;
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const add = () => {
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
          <input
            className={"rounded my-2 pl-1 focus:border-blue-400"}
            type="text"
            placeholder="Text"
            value={text}
            onChange={e => setText(e.target.value)}
            ref={r => (ref.current = r)}
          ></input>
          <button
            onClick={() => add()}
            className={
              "box-border hover:bg-gray-900 hover:text-white rounded p-1 "
            }
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
