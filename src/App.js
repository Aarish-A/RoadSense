import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="accident-map">
        <MapContainer accidentList={[{ lat: 40, lng: 30, name: "Hamilton Car Crash 1" }, { lat: 45, lng: 35, name: "Hamilton Car Crash 2" }]} />
      </div>
    </div>
  );
}

export default App;
