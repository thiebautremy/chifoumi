"use client";
import React, { useContext } from "react";
import "./DuelsHistoric.scss";
import ResultsContext from "@components/app/context/resultsContext";
import { choices } from "@components/app/utils/data";

const DuelsHistoric = () => {
  const { duelsHistoric } = useContext(ResultsContext);
  const findLogo = (value: string) => {
    const choiceFound = choices.find(
      (choice) => choice.name.toLowerCase() === value
    );
    return choiceFound?.logo;
  };

  return (
    <ul>
      {duelsHistoric.map(({ index, winner, you, computer }) => (
        <li key={index} className={winner === "tie" ? "duel tie" : "duel"}>
          <span className="index">{index}.</span>
          <span className={winner === "you" ? "isWinner" : ""}>
            You {findLogo(you)}
          </span>{" "}
          -{" "}
          <span className={winner === "computer" ? "isWinner" : ""}>
            {findLogo(computer)} Computer{" "}
          </span>
        </li>
      ))}
    </ul>
  );
};
export default DuelsHistoric;
