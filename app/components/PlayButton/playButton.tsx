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
    setComputerChoice,
  } = useContext(ResultsContext);

  const determineWinner = () => {
    const winningCombinations: { [key: string]: string[] } = {
      rock: ["scissors"],
      paper: ["rock"],
      scissors: ["paper"],
    };

    setUserChoice("");

    if (userChoice === computerChoice) {
      setDialogData({ isVisible: true, text: "Tie" });
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
