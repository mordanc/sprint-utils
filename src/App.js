// src/App.js
import React from "react";

import TrackList from "./features/tracks/TrackList";
import Navbar from "./common/components/Navbar";
import { useEffect } from "react";

import { client } from "./common/socket";

function App() {
  client.connect("myRoom");

  return (
    <div>
      <Navbar />
      <TrackList />
    </div>
  );
}

export default App;
