import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Lecture1, Lecture2 } from "./lectures";

import './App.css';

function App() {
  return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/lecture1">Изучение Cookies, делегация, git</Link>
            </li>
            <li>
              <Link to="/lecture2">Завтра</Link>
            </li>
            <li>
              <Link to="/lecture3">Послезавтра</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/lecture1">
            <Lecture1 />
          </Route>
          <Route path="/lecture2">
            <Lecture2 />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
