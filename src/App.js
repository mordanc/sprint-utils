// src/App.js
import React from "react";

import TrackList from "./features/tracks/TrackList";
import Navbar from "./common/components/Navbar";
import { useEffect } from "react";

import { client } from "./common/socket";

function App() {
  client.connect("myRoom");
  /**
   * for dynamic lobby system, firebase.json's rewrite property
   * might redirect requests to lobbies to the homepage, idk
   */
  return (
    <div>
      <Navbar />
      <TrackList />
    </div>
  );
}

export default App;
