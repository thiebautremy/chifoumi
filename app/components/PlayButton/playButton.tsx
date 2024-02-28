"use client";
import React, { useContext, useState } from "react";
import ResultsContext from "@components/app/context/resultsContext";

import { Dialog } from "primereact/dialog";

import "./playButton.scss";

const PlayButton = () => {
  const [dialogData, setDialogData] = useState({ isVisible: false, text: "" });
  const {
    userChoice,
    computerChoice,
    setUserChoice,
    setTotalPoints,
    setDuelsHistoric,
  } = useContext(ResultsContext);

  const addDuelsHitoric = (winner: string) => {
    setDuelsHistoric((prec) => [
      ...prec,
      {
        index: prec.length === 0 ? 0 : prec[prec.length - 1].index + 1,
        you: userChoice,
        computer: computerChoice,
        winner,
      },
    ]);
    setUserChoice("");
  };

  const determineWinner = () => {
    const winningCombinations: { [key: string]: string[] } = {
      rock: ["scissors"],
      paper: ["rock"],
      scissors: ["paper"],
    };

    if (userChoice === computerChoice) {
      setDialogData({ isVisible: true, text: "Tie" });
      addDuelsHitoric("tie");
      return;
    }

    if (winningCombinations[userChoice].includes(computerChoice)) {
      setDialogData({
        isVisible: true,
        text: `Computer has choosen ${computerChoice}, you won`,
      });
      setTotalPoints((prec) => ({
        ...prec,
        userPoints: prec.userPoints++,
      }));
      addDuelsHitoric("you");
      return;
    }

    setDialogData({
      isVisible: true,
      text: `Computer has choosen ${computerChoice}, it won`,
    });
    setTotalPoints((prec) => ({
      ...prec,
      computerPoints: prec.computerPoints++,
    }));
    addDuelsHitoric("computer");
  };

  return (
    <div className="playButtonContainer">
      <button
        className="playButton"
        onClick={() => determineWinner()}
        disabled={!userChoice}
      >
        Launch the duel
      </button>
      <Dialog
        header="Result"
        visible={dialogData.isVisible}
        style={{ width: "30vw" }}
        className="dialog"
        onHide={() =>
          setDialogData((prevState) => ({
            ...prevState,
            isVisible: false,
          }))
        }
      >
        <p className="text">{dialogData.text}</p>
      </Dialog>
    </div>
  );
};
export default PlayButton;
