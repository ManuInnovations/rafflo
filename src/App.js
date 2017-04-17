import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import IntroApp from './introapp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Rafflo</h1>
          <p><i>Making your community fundraising more awesome</i></p>
        </div>
        <div>
          <IntroApp />
        </div>
      </div>
    );
  }
}

export default App;



// import Link from 'react-router'
