import React from "react";

export default function Navbar() {
  return (
    <div className={"text-white flex flex-row"}>
      <ul className={"flex flex-row"}>
        <li
          className={
            "mr-2 cursor-pointer hover:bg-gray-600 hover:text-green-600 rounded p-1"
          }
        >
          NavItem
        </li>
        <li
          className={
            "mr-2 cursor-pointer hover:bg-gray-600 hover:text-green-600 rounded p-1"
          }
        >
          NavItem
        </li>
        <li
          className={
            "mr-2 cursor-pointer hover:bg-gray-600 hover:text-green-600 rounded p-1"
          }
        >
          NavItem
        </li>
        <li
          className={
            "mr-2 cursor-pointer hover:bg-gray-600 hover:text-green-600 rounded p-1"
          }
        >
          NavItem
        </li>
        <li
          className={
            "mr-2 cursor-pointer hover:bg-gray-600 hover:text-green-600 rounded p-1"
          }
        >
          NavItem
        </li>
      </ul>
    </div>
  );
}
