import React from "react";
import "./App.scss";
import {
  Header,
  Footer,
  Banner,
  Services,
  Offers,
  Testimonial,
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Banner />
        <Services />
        <Offers />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default App;
