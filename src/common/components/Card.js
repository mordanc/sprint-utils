import React from "react";

export default function Card(props) {
  const { id, text, author } = props;
  /**
   * on hover, subscribe to store and get selector for
   * currently hovered author name
   * if it is this author, change background to white or transform
   */
  return (
    <div className="flex flex-col w-3/4 mx-auto my-6 items-center">
      <div className={"max-w-sm rounded overflow-hidden bg-gray-700"}>
        <div className={"px-6 py-4"}>
          <div className={"font-semibold text-xl mb-2"}>{text}</div>
          <p className={" text-base"}>
            By <span className={"text-gray-500 cursor-pointer"}>{author}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
