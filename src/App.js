import React from 'react';
import './App.css';
import MapContainer from './MapContainer.js';
import boostrap from 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  width: '50%'
}

function App() {
  return (
    <div className="App" style={styles}>
      <div className="accident-map">
        <MapContainer accidentList={[
          { lat: 43.255721, lng: -79.871113, id: "1", timestamp: 1580058425, location: "24 Main Street West, Hamilton, ON L8P 1H2" },
          { lat: 43.253474, lng: -79.859271, id: "2", timestamp: 1580058425, location: "12 Wellington Street South, Hamilton, ON L8N 2P8" },
          { lat: 43.246822, lng: -79.860379, id: "3", timestamp: 1580058425, location: "Claremont Access, Hamilton, ON L8N" },
          { lat: 43.259844, lng: -79.872910, id: "4", timestamp: 1580058425, location: "60 Bay Street North, Hamilton, ON L8R 3L4" },
          { lat: 43.251020, lng: -79.868133, id: "5", timestamp: 1580058425, location: "201 John Street South, Hamilton, ON L8N 2C5" }
        ]} />
      </div>
      <div className="information">
        <h1>
          <div id="title"></div>
        </h1>
        <h5>
          <div id="exact-location"></div>
        </h5>
        <h3>
          <div id="time"></div>
        </h3>
      </div>
      <center>
        <div id="actOccur">
        </div>
      </center>
    </div>
  );
}

export default App;


