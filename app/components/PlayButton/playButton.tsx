"use client";
import React, { useContext } from "react";
import ResultsContext from "@components/app/context/resultsContext";
const PlayButton = () => {
  const data = ["rock", "paper", "scissor"];

  const { userChoice, setComputerChoice, computerChoice } =
    useContext(ResultsContext);

  const handleComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setComputerChoice(data[randomIndex]);
    determineWinner();
  };

  const determineWinner = () => {
    const winningCombinations: { [key: string]: string[] } = {
      rock: ["scissors"],
      paper: ["rock"],
      scissors: ["paper"],
    };

    if (userChoice === computerChoice) {
      alert("tie");
      return "tie";
    }

    if (winningCombinations[userChoice].includes(computerChoice)) {
      alert(`Computer has choosen ${computerChoice}, you won`);
      return "user won";
    }

    alert(`Computer has choosen ${computerChoice}, it won`);
    return "computeur won";
  };

  return (
    <div className="text-center">
      <button
        className="border rounded-md p-4 mt-12 bg-lime-800 text-black"
        onClick={() => handleComputerChoice()}
      >
        Play against the computer
      </button>
    </div>
  );
};
export default PlayButton;
