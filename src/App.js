// src/App.js
import React from "react";

import TrackList from "./features/tracks/TrackList";
import Navbar from "./common/components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <TrackList />
    </div>
  );
}

export default App;
