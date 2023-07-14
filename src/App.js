import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Square from './Square';

function App(props) {
  const appVariable = "This is a prop"
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  return (
    <div className="App">
      <Square 
      squares={squares}
      setSquares={setSquares}
      player={player}
      setPlayer={setPlayer}
      />
    </div>
  );
}

export default App;
