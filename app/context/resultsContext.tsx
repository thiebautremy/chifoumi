"use client";
import React, { createContext, useState } from "react";

interface ResultsContextProps {
  userChoice: string;
  setUserChoice: (value: string) => void;
  computerChoice: string;
  setComputerChoice: (value: string) => void;
}
export const ResultsContext = createContext({} as ResultsContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ResultsContextProvider: React.FC<Props> = ({ children }) => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  return (
    <ResultsContext.Provider
      value={{
        userChoice,
        setUserChoice,
        computerChoice,
        setComputerChoice,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
export default ResultsContext;
