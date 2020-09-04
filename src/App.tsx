import React from "react";
import "./App.scss";
import { Header, Footer, Banner, Services } from "./components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Banner />
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default App;
