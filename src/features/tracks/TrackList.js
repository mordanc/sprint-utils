import React from "react";
import { useSelector } from "react-redux";

import Track from "./Track";
import Card from "../../common/components/Card";
import {
  selectGoodCards,
  selectBadCards,
  selectActionCards
} from "./trackSlice";
import { cardTypes } from "../../common/constants";

export default function TrackList() {
  const goodCards = useSelector(selectGoodCards);
  const badCards = useSelector(selectBadCards);
  const actionCards = useSelector(selectActionCards);

  return (
    <div className="flex mb-4">
      <div className={"w-1/5"}></div>
      <Track
        className={"w-1/5 bg-gray-400 h-12"}
        title={"What went well"}
        cards={goodCards}
        type={cardTypes.GOOD}
      />
      <Track
        className={"w-1/5 bg-gray-400 h-12"}
        title={"What Could Be Improved"}
        cards={badCards}
        type={cardTypes.BAD}
      />
      <Track
        className={"w-1/5 bg-gray-400 h-12"}
        title={"Action Items"}
        cards={actionCards}
        type={cardTypes.ACTION}
      />
    </div>
  );
}
