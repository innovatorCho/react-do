import React, { useState } from 'react';

import { ThemeProvider } from "styled-components";
import theme from 'theme';
import GlobalStyle from 'globalStyle';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Quiz, Landing, Result, Loading} from 'pages';
import { QUIZZES } from '../constants';

import { Helmet } from "react-helmet";

import favicon from "../assets/favicon.ico";
import elon from "../assets/elon.jpeg";

function App() {
  const [score, setScore] = useState(0);

  const convertedScore = Math.floor((score / QUIZZES.length) * 100);
  const currentUrl = document.location.href;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>일론 머스크 지수 테스트하기</title>
        <link rel="icon" href={favicon} />
        {/* URL 정보 */}
        <meta property="og:url" content={currentUrl} />
        {/* title 정보 */}
        <meta property="og:title" content="일론 머스크 지수 테스트하기" />
        <meta property="og:description" content="나는 일론 머스크에 대해서 얼마나 알고 있을까?" />
        {/* 페이지 대표 이미지 정보 */}
        <meta property="og:image" content={elon} />
      </Helmet>
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
