import React from "react";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
