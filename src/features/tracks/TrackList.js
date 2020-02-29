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
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 ">
      {/* <div className={"w-1/5"}></div> */}
      {/* <div></div> */}

      <Track
        className={"bg-gray-400"}
        title={"What went well"}
        cards={goodCards}
        type={cardTypes.GOOD}
      />
      <Track
        className={"bg-gray-400"}
        title={"What Could Be Improved"}
        cards={badCards}
        type={cardTypes.BAD}
      />
      <Track
        className={"bg-gray-400"}
        title={"Action Items"}
        cards={actionCards}
        type={cardTypes.ACTION}
      />
    </div>
  );
}
