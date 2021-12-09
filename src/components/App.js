import React, { useState } from 'react';

import { ThemeProvider } from "styled-components";
import theme from 'theme';
import GlobalStyle from 'globalStyle';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Quiz, Landing, Result, Loading} from 'pages';

function App() {
  const [score, setScore] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/loading" element={<Loading />}/>
          <Route path="/result" element={<Result score={score} setScore={setScore}/>} />
          <Route path="/quiz" element={<Quiz setScore={setScore}/>} />
          <Route path="/" exact element={<Landing />} />
        </Routes>
      </Router>
  </ThemeProvider>
  );
};

export default App;
