// Import the image and React library at the top of the file
import React from 'react';
import './App.css';
import chaoskampf from '../public/chaoskampf.jpg'; // Adjust the path to where the image is located

function App() {
  // Use the imported image as a source
  return (
    <div className="App">
      <header className="App-header">
        <img src={chaoskampf} alt="Chaoskampf" style={{ width: '100%', height: 'auto' }} />
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;

