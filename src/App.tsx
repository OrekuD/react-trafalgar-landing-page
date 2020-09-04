import React from "react";
import "./App.scss";
import {
  Header,
  Footer,
  Banner,
  Services,
  Offers,
  Testimonial,
  Articles,
} from "./components";

const App = () => (
  <>
    <Header />
    <Banner />
    <Services />
    <Offers />
    <Testimonial />
    <Articles />
    <Footer />
  </>
);

export default App;
