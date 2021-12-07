import React from 'react';
import './App.css';

function App() {
  const quiz = {
    question : "일론 머스크의 우주 탐사 기업 이름은?",
    answers : [
      { text : "스페이스 엑스", isCorrect: true},
      { text : "테슬라", isCorrect: false},
      { text : "보링 컴퍼니", isCorrect: false},
      { text : "솔라 시티", isCorrect: false}
    ]
  };

  const handleClick = (isCorrect) => {
    if(isCorrect) {
      alert("정답");
    } else {
      alert("오답");
    }
  };

  return (
    <div className="container">
      <div className="app">
        <div className="question-section">
          <h1 className="question-header">
            <span>1</span>/4
          </h1>
          <div className="question-text">{quiz.question}</div>
        </div>
        <div className="answer-section">
          {
            quiz.answers.map((answer) => (
              <button onClick={() => handleClick(answer.isCorrect)} value={answer.text}>{answer.text}</button>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
