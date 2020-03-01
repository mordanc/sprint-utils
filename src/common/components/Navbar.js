import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fadeTransition } from "../constants";

import styles from "./Styles.module.css";

function NavItem(props) {
  return (
    <li
      className={
        "m-2 cursor-pointer hover:bg-gray-700 hover:text-black rounded p-1"
      }
    >
      {props.children}
    </li>
  );
}
export default function Navbar() {
  const [showNav, toggleNav] = useState(true);
  const navClass = showNav ? styles.show : styles.hide;
  const navItems = ["Retro Board", "Pointing Poker", "Issue Tracking"];

  const list = navItems.map((item, key) => <NavItem>{item}</NavItem>);

  return (
    <div className={"text-white"}>
      <ul
        className={
          "flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row border border-gray-700 rounded items-center"
        }
      >
        {list}
      </ul>
      <button onClick={() => toggleNav(!showNav)}>Expand/Retract</button>
    </div>
  );
}
