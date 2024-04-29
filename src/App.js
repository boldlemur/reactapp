// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chaoskampf.jpg)` }}>
        <h1>Hello World</h1> {/* Text to display over the background */}
      </header>
    </div>
  );
}

export default App;
