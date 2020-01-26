import React from 'react';
import {useState, useCallback, useEffect} from 'react'
import './App.css';
import MapContainer from './MapContainer.js';
import io from 'socket.io-client';
import audio from './crash.wav'

const styles = {
  width: '50%'
}

const defaults = [{ 
  lat: 43.2557, 
  lng: -79.8711, 
  name: "Hamilton Car Crash 1" 
}, { 
  lat: 45, 
  lng: 35, 
  name: "Hamilton Car Crash 2" 
}]


function App() {
  const [accidents, setAccidents] = useState(defaults)

  let socket = io('https://roadsensedh6.herokuapp.com')
  socket.on('connect', () => console.log('Socket connected'))
  socket.on('predicted', (prediction) => {
    if (prediction === 'crash') setAccidents(...accidents, {lat: 42, lng: -80, name: "Hamilton Car Crash 3"})
  })

  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      socket.emit('predict', audio)
    }
  }, [socket]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [socket, escFunction]);


  return (
    <div className="App" style={styles}>
      <MapContainer accidentList={accidents} />
    </div>
  );
}

export default App;