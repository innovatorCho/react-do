import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, AnswerGroup, QuestionSection} from 'components';
import { QUIZZES } from "../../constants";

const Quiz = ({setScore}) => {
  const [currentNo, setCurrentNo] = useState(0);
  const navigate = useNavigate();

  const handleClick = (isCorrect) => {
    if(isCorrect) {
      setScore((score) => score + 1);
    } 

    if(currentNo === QUIZZES.length -1) {
      navigate("/result");
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };

  return (
      <Container>
          <QuestionSection currentNo={currentNo}/>
          <AnswerGroup currentNo={currentNo} handleClick={handleClick} />
        </Container>
    );

};

export default Quiz;