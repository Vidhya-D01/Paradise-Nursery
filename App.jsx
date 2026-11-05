import React, { useState } from "react";
import "./App.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice";
import ProductList from "./ProductList";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

function AppContent() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="App">

      {!showProducts ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <div className="app-container">
          <ProductList />
        </div>
      )}

    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
