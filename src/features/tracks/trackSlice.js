import { createSlice } from "@reduxjs/toolkit";

import { cardTypes } from "../../common/constants";

export const slice = createSlice({
  name: "tracks",
  initialState: {
    goodCards: [],
    badCards: [],
    actionCards: []
  },
  reducers: {
    addCard: (state, action) => {
      const card = action.payload.card;
      const type = action.payload.type;

      switch (type) {
        case cardTypes.GOOD:
          return { ...state, goodCards: [...state.goodCards, card] };
        case cardTypes.BAD:
          return { ...state, badCards: [...state.badCards, card] };
        case cardTypes.ACTION:
          return { ...state, actionCards: [...state.actionCards, card] };
        default:
          return state;
      }
    },
    removeCard: (state, action) => {
      const id = action.payload.id;
      const newCards = state.cards.filter(card => card.id !== id);
      return { ...state, cards: newCards };
    }
  }
});

export const selectGoodCards = state => state.tracks.goodCards;
export const selectBadCards = state => state.tracks.badCards;
export const selectActionCards = state => state.tracks.actionCards;
export const { addCard, removeCard } = slice.actions;

export default slice.reducer;
