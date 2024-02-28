"use client";
import React, { createContext, useState } from "react";

type TotalPointsType = {
  userPoints: number;
  computerPoints: number;
};

type DuelHistoricType = {
  index: number;
  you: string;
  computer: string;
  winner: string;
};
interface ResultsContextProps {
  userChoice: string;
  setUserChoice: React.Dispatch<React.SetStateAction<string>>;
  computerChoice: string;
  setComputerChoice: React.Dispatch<React.SetStateAction<string>>;
  totalPoints: TotalPointsType;
  setTotalPoints: React.Dispatch<React.SetStateAction<TotalPointsType>>;
  duelsHistoric: DuelHistoricType[];
  setDuelsHistoric: React.Dispatch<
    React.SetStateAction<DuelHistoricType[] | []>
  >;
}
export const ResultsContext = createContext({} as ResultsContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ResultsContextProvider: React.FC<Props> = ({ children }) => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [totalPoints, setTotalPoints] = useState({
    userPoints: 0,
    computerPoints: 0,
  });
  const [duelsHistoric, setDuelsHistoric] = useState<DuelHistoricType[]>([]);
  return (
    <ResultsContext.Provider
      value={{
        userChoice,
        setUserChoice,
        computerChoice,
        setComputerChoice,
        totalPoints,
        setTotalPoints,
        duelsHistoric,
        setDuelsHistoric,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
export default ResultsContext;
