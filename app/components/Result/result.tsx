"use client";
import React, { useContext } from "react";
import "./result.scss";
import ResultsContext from "@components/app/context/resultsContext";
import DuelsHistoric from "../DuelsHistoric/DuelsHistoric";

const Result = () => {
  const {
    totalPoints: { userPoints, computerPoints },
  } = useContext(ResultsContext);

  return (
    <section className="result">
      <p className="title">Duels historic</p>
      <DuelsHistoric />
      <p className="points">{`You ${userPoints} - ${computerPoints} Computer`}</p>
    </section>
  );
};
export default Result;
