// App.js
import React from 'react';
import './App.css';
import chaoskampf from './assets/chaoskampf.jpg'; // Update the path to the new location

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${chaoskampf})` }}>
        <h1>Hello World</h1>  {/* Text to display over the background */}
      </header>
    </div>
  );
}

export default App;


