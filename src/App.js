// src/App.js
import React from "react";
import Button from "./common/components/Button";
import Card from "./common/components/Card";
import styles from "./App.module.css";

import TrackList from "./features/tracks/TrackList";

function App() {
  const cards = [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />
  ];
  return (
    <div>
      <TrackList />
      {/* {cards} */}
    </div>
  );
}

export default App;
