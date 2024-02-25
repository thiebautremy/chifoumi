"use client";
import React, { useContext } from "react";
import ResultsContext from "@components/app/context/resultsContext";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import classNames from "classnames";

const UserChoices = () => {
  const { setUserChoice, userChoice } = useContext(ResultsContext);

  const choices = [
    { id: 0, name: "Rock", logo: <FaHandRock /> },
    { id: 1, name: "Paper", logo: <FaHandPaper /> },
    { id: 2, name: "Scissors", logo: <FaHandScissors /> },
  ];

  return (
    <div className="mt-12">
      <h2 className="mb-12 text-center text-xl">Make a choice</h2>
      <div className="flex justify-around mx-auto">
        {choices.map(({ id, name, logo }) => (
          <button
            key={id}
            className={classNames("logoContainer", {
              isActive: name.toLowerCase() === userChoice,
            })}
            onClick={() => setUserChoice(name.toLowerCase())}
          >
            <h3 className="title">{name}</h3>
            {logo}
          </button>
        ))}
      </div>
    </div>
  );
};
export default UserChoices;
