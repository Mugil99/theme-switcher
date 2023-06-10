import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './styles.css';

function App() {
  const[bright,setBright]=useState(true);
  const handleBright=()=>{
    setBright(true);
    console.log(bright)
  }
  const handleDark=()=>{
    setBright(false);
    console.log(bright)
  }
  return (
    <div className={bright?"bright":"dark"}>
      <button onClick={handleBright}>🔆</button>
      <button onClick={handleDark}>🌙</button>
      <h1>Hello EVeryone!!!!</h1>
    </div>
  );
}

export default App;
