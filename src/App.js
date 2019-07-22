import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './scss/app.scss';

function App() {
  return (
    <div className="appFaculdade">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={'teste'}>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
