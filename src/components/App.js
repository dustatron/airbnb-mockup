import React from "react";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import OffersList from "./OffersList";
import Experiences from "./Experiences";
import Involvement from "./Involvement";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <OffersList />
      <Experiences />
      <Involvement />
      <Footer />
    </React.Fragment>
  );
}

export default App;
