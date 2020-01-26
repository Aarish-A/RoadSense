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
        <MapContainer accidentList={[{ lat: 43.2557, lng: -79.8711, name: "Hamilton Car Crash 1" },
        { lat: 43.253474, lng: -79.859271, name: "Hamilton Car Crash 2" },
        { lat: 43.246822, lng: -79.860379, name: "Hamilton Car Crash 3" },
        { lat: 43.259844, lng: -79.872910, name: "Hamilton Car Crash 4" },
        { lat: 43.251020, lng: -79.868133, name: "Hamilton Car Crash 5" }]} />
      </div>
    </div>
  );
}

export default App;


