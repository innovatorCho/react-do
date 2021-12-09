import React, { useState } from 'react';

import { ThemeProvider } from "styled-components";
import theme from 'theme';
import GlobalStyle from 'globalStyle';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Quiz, Landing, Result, Loading} from 'pages';
import { QUIZZES } from '../constants';

function App() {
  const [score, setScore] = useState(0);

  const convertedScore = Math.floor((score / QUIZZES.length) * 100);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/loading" element={<Loading convertedScore={convertedScore}/>}/>
          <Route path="/result/:cCode" element={<Result convertedScore={convertedScore} setScore={setScore}/>} />
          <Route path="/quiz" element={<Quiz setScore={setScore}/>} />
          <Route path="/" exact element={<Landing />} />
        </Routes>
      </Router>
  </ThemeProvider>
  );
};

export default App;
