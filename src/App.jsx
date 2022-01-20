import React, { useState, useEffect } from 'react';
import logo from './logo.svg'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <h1>Liam Marega</h1>
        <a id='imagen' href="http://www.getonbrd.com" target="_blank" rel="noopener noreferrer">
        <img src="https://pbs.twimg.com/profile_images/1410630360174665734/R-La9YQ6_400x400.png" alt="GetOnBoard" />
        </a>
        <div className="reloj">
        {seconds}
        </div>
      </header>
    </div>
  );
  
}

export default App
