import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./features/tracks/trackSlice";

export default configureStore({
  reducer: {
    tracks: trackReducer
  }
});
