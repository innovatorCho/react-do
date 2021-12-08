import React from 'react';

import { ThemeProvider } from "styled-components";
import theme from '../theme';
import GlobalStyle from '../globalStyle';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from '../pages/Quiz';
import Landing from '../pages/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/" exact element={<Landing />} />
        </Routes>
      </Router>
  </ThemeProvider>
  );
};

export default App;
