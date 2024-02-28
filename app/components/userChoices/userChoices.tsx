"use client";
import React, { useContext } from "react";
import ResultsContext from "@components/app/context/resultsContext";
import classNames from "classnames";
import "./userChoices.scss";
import { choices } from "@components/app/utils/data";

const UserChoices = () => {
  const { setUserChoice, userChoice, setComputerChoice } =
    useContext(ResultsContext);

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
