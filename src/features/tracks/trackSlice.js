import { createSlice } from "@reduxjs/toolkit";

import { cardTypes } from "../../common/constants";

export const slice = createSlice({
  name: "tracks",
  initialState: {
    goodCards: [],
    badCards: [],
    actionCards: [],
    currentId: 0
  },
  reducers: {
    addCard: (state, action) => {
      const card = action.payload.card;
      const type = action.payload.card.type;

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
      const type = action.payload.type;
      let newCards;

      switch (type) {
        case cardTypes.GOOD:
          newCards = state.goodCards.filter(card => card.id !== id);
          return { ...state, goodCards: newCards };
        case cardTypes.BAD:
          newCards = state.badCards.filter(card => card.id !== id);
          return { ...state, badCards: newCards };
        case cardTypes.ACTION:
          newCards = state.actionCards.filter(card => card.id !== id);
          return { ...state, actionCards: newCards };
        default:
          return state;
      }
    },
    incrementId: state => {
      return { ...state, currentId: state.currentId + 1 };
    }
  }
});

export const selectGoodCards = state => state.tracks.goodCards;
export const selectBadCards = state => state.tracks.badCards;
export const selectActionCards = state => state.tracks.actionCards;
export const selectId = state => state.tracks.currentId;

export const { addCard, removeCard, incrementId } = slice.actions;

export default slice.reducer;
