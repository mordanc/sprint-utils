import * as io from "socket.io-client";
import { addCard } from "../features/tracks/trackSlice";

import store from "../store";
import { SERVER_LOCATION } from "./constants";

const socket = io.connect(`${SERVER_LOCATION}/joinRoom`, {
  secure: true,
  rejectUnauthorized: false
});

const connect = roomName => {
  socket.on("connect", () => {
    console.log("connected");
    socket.emit("join", roomName);
    socket.on("joined room", data => {
      console.log(data.msg);
    });
    socket.on("receiveCard", card => {
      console.log(`received card ${card}`);
      store.dispatch(addCard(card));
    });
    socket.on("deleteCard", card => {
      console.log(`deleting card ${card}`);
      // store.dispatch(removeCard(card))
    });
    socket.on("receiveClearCards", card => {
      console.log("receive clear cards");
      // store.dispatch(clearCard())
    });
  });
};

const sendCard = card => {
  console.log("sending card");
  socket.emit("sendCard", card);
};

export const client = {
  connect,
  sendCard
};
