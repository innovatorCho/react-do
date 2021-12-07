import React, {useState} from 'react';
import './App.css';

function App() {
  const [currentNo, setCurrentNo] = useState(0);

  const quizes = [
    {
    id : 1,
    question : "일론 머스크의 우주 탐사 기업 이름은?",
    answers : [
      { text : "스페이스 엑스", isCorrect: true},
      { text : "테슬라", isCorrect: false},
      { text : "보링 컴퍼니", isCorrect: false},
      { text : "솔라 시티", isCorrect: false}
    ]
  },
  {
    id : 2,
    question : "일론 머스크의 고향은 어디일까요?",
    answers : [
      { text : "미국 캘리포니아", isCorrect: false},
      { text : "남아프리가 공화국 프리토리아", isCorrect: true},
      { text : "캐나다 벤쿠버", isCorrect: false},
      { text : "호주 시드니", isCorrect: false}
    ]
  },
  {
    id : 3,
    question : "일론 머스크가 참업한 페이팔 전신 기업의 이름은?",
    answers : [
      { text : "Zip2 Corporation", isCorrect: false},
      { text : "Alpha Exploration", isCorrect: false},
      { text : "x.com", isCorrect: true},
      { text : "Everthing CO.", isCorrect: false}
    ]
  },
];

  const handleClick = (isCorrect) => {
    if(isCorrect) {
      alert("정답");
    } else {
      alert("오답");
    }
    setCurrentNo((currentNo) => currentNo + 1);
  };

  return (
    <div className="container">
      <div className="app">
        <div className="question-section">
          <h1 className="question-header">
            <span>{quizes[currentNo].id}</span>/{quizes.length}
          </h1>
          <div className="question-text">{quizes[currentNo].question}</div>
        </div>
        <div className="answer-section">
          {
            quizes[currentNo].answers.map((answer) => (
              <button onClick={() => handleClick(answer.isCorrect)} value={answer.text}>{answer.text}</button>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
