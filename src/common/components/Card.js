import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../../features/tracks/trackSlice";

export default function Card(props) {
  const { id, text, author, type } = props;

  const dispatch = useDispatch();

  /**
   * on hover, subscribe to store and get selector for
   * currently hovered author name
   * if it is this author, change background to white or transform
   */
  return (
    <div className="flex flex-col w-3/4 mx-auto my-6 items-center">
      <div className={"max-w-sm rounded overflow-hidden bg-gray-700"}>
        <p
          onClick={() => {
            dispatch(removeCard({ id, type }));
          }}
          className={"float-right mr-2 text-red-700 cursor-pointer"}
        >
          x
        </p>
        <div className={"px-6 py-4 whitespace-normal"}>
          <div className={"font-semibold text-xl mb-2"}>{text}</div>
          <p className={" text-base"}>
            By <span className={"text-gray-500 cursor-pointer"}>{author}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
