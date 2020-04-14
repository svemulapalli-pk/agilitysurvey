import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from './redux/store';
import { ConnectedRouter } from 'connected-react-router'

import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";
import ResultsPage from './pages/ResultsPage';
import { Header } from "./components/Header";

import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
const history = require("history").createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <header>
            <Header />
          </header>
          <Router>
            <HomePage path="/" />
            <AssessmentPage path="/assessment" exact />
            <ResultsPage path="/results" exact />
          </Router>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
