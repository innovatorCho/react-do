import React, {useState} from 'react';
import '../App.css';

import { QUIZZES } from "../constants";
import Button from "./Button";

import { ThemeProvider } from "styled-components";
import theme from '../theme';
import Container from './Container';
import AnswerGroup from './AnswerGroup';
import QuestionSection from './QuestionSection';
import ResultSection from './ResultSection';

function App() {
  const [currentNo, setCurrentNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

const convertedScore = Math.floor((score / QUIZZES.length) * 100);

  const handleClick = (isCorrect) => {
    if(isCorrect) {
      alert("정답");
      setScore(score + 1);
    } else {
      alert("오답");
    }

    if(currentNo === QUIZZES.length -1) {
      setShowResult(true);
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      { showResult ? (
        <Container>
          <ResultSection convertedScore={convertedScore}/>
        </Container>
      ) : (
      <Container>
          <QuestionSection currentNo={currentNo}/>
          <AnswerGroup currentNo={currentNo} handleClick={handleClick} />
        </Container>)
        }
    </ThemeProvider>
  );
}

export default App;
