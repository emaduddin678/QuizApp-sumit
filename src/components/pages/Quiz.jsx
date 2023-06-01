import React, { useReducer, useState } from "react";
import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";

function Quiz() {
  const {id} = useParams();
  const {loading, error, questions} = useQuestions(id)
  const [currentQuestion, setCurrentQuestion] = useState(0);


  const [qna, dispatch] = useReducer(reducer)
  return ( 
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer /> 
    </>
  );
}

export default Quiz; 
