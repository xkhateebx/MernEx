import React from 'react';
import './App.css';
import {Router, Redirect} from '@reach/router';

import AllPirates from './components/AllPirates';
import CreatePirate from './components/CreatePirate';
import ShowPirate from './components/ShowPirate';

function App() {
  return (
    <div className="App">
      <Router>
      <Redirect from="/" to="/pirates" noThrow/>
        <AllPirates path="/pirates"/>   
        <CreatePirate path="/pirate/create"/>
        <ShowPirate path="/pirate/:id"/>
      </Router>
    </div>
  );
}

export default App;
