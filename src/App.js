import React from 'react';
import './App.css';
import MapContainer from './MapContainer.js';
import io from 'socket.io-client';
import './carcrash.wav'

const styles = {
  width: '50%'
}

function App() {
  let socket = io('https://roadsensedh6.herokuapp.com')
  socket.on('connect', () => console.log('Socket connected'))


  return (
    <div className="App" style={styles}>
      <MapContainer accidentList={[{ lat: 43.2557, lng: -79.8711, name: "Hamilton Car Crash 1" }, { lat: 45, lng: 35, name: "Hamilton Car Crash 2" }]} />
    </div>
  );
}

export default App;