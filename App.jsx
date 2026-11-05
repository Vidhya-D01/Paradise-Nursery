import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery!</p>
      <button onClick={() => alert("Welcome to Paradise Nursery!")}>
        Get Started
      </button>
    </div>
  );
}

export default App;
