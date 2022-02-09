import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
      </ul>
      <Route path="/" exact={true} component={Home} />
      <Route path={['/about', '/hi']} component={About} />
    </div>
  );
};

export default App;
