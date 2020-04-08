import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import HomePage from "./pages/HomePage";
import {AssessmentPage} from "./pages/AssessmentPage";
import ThemeContext from "./ThemeContext";
import { Header } from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Header />
        </header>
        <Router>
          <HomePage path="/" />
          <AssessmentPage path="/assessment/start" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
