import * as io from "socket.io-client";
import { addCard } from "../features/tracks/trackSlice";

import store from "../store";
import { SERVER_LOCATION } from "./constants";

const socket = io.connect(`${SERVER_LOCATION}/joinRoom`);

const connect = roomName => {
  const dispatch = store.dispatch;
  socket.emit("join", { roomName });
  socket.on("receiveCard", msg => {
    console.log(msg);
    const card = msg.card;
    dispatch(
      addCard({
        card
      })
    );
  });
};

const sendCard = card => {
  socket.emit("sendCard", card);
};

export const client = {
  connect,
  sendCard
};
