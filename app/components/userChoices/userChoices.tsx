"use client";
import React, { useContext } from "react";
import ResultsContext from "@components/app/context/resultsContext";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import classNames from "classnames";
import "./userChoices.scss";

const UserChoices = () => {
  const { setUserChoice, userChoice, setComputerChoice } =
    useContext(ResultsContext);

  const choices = [
    { id: 0, name: "Rock", logo: <FaHandRock /> },
    { id: 1, name: "Paper", logo: <FaHandPaper /> },
    { id: 2, name: "Scissors", logo: <FaHandScissors /> },
  ];

  const handleOnClick = (name: string) => {
    setUserChoice(name);
    handleComputerChoice();
  };

  const handleComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const nameChoose = choices[randomIndex].name;
    setComputerChoice(nameChoose.toLowerCase());
  };

  return (
    <div className="userChoices">
      <h2 className="title">Make a choice</h2>
      <div className="userChoiceContainer">
        {choices.map(({ id, name, logo }) => (
          <button
            key={id}
            className={classNames("userChoice", {
              isActive: name.toLowerCase() === userChoice,
            })}
            onClick={() => handleOnClick(name.toLowerCase())}
          >
            <h3 className="name">{name}</h3>
            {logo}
          </button>
        ))}
      </div>
    </div>
  );
};
export default UserChoices;
