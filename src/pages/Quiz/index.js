import {useState} from 'react';

import Container from '../../components/Container';
import AnswerGroup from '../../components/AnswerGroup';
import QuestionSection from '../../components/QuestionSection';
import ResultSection from '../../components/ResultSection';

import { QUIZZES } from "../../constants";

const Quiz = () => {
  const [currentNo, setCurrentNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

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

  const convertedScore = Math.floor((score / QUIZZES.length) * 100);

  return showResult ? (
        <Container>
          <ResultSection convertedScore={convertedScore}/>
        </Container>
      ) : (
      <Container>
          <QuestionSection currentNo={currentNo}/>
          <AnswerGroup currentNo={currentNo} handleClick={handleClick} />
        </Container>)

};

export default Quiz;