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
      <MapContainer accidentList={[{ lat: 43.2557, lng: -79.8711, name: "Hamilton Car Crash 1" }, { lat: 45, lng: 35, name: "Hamilton Car Crash 2" }]} />
    </div>
  );
}

export default App;