import React from "react";
import "./App.scss";
import { Header, Footer, Banner, Services, Offers } from "./components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Banner />
        <Services />
        <Offers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
