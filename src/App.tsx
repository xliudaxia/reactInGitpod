import React from 'react';
import logo from './logo.svg';
import moment from 'moment';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <div>做最好的自己</div>
          Learn React<br/>
          {moment().format('llll')}
        </a>
      </header>
    </div>
  );
}

export default App;
