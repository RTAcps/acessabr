import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import Header from "./components/Header";
import CuratorItem from "./components/Curator";
import Footer from "./components/Footer";
import Places from "./components/Places";
import Routes from "./routes";

const CONFIG = {
  state: "SP",
  city: "Campinas",
};

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} state={CONFIG.state} />
      <Routes city={CONFIG.city} state={CONFIG.state} />
      <Places />
      <CuratorItem />
    </div>
    <Footer />
  </div>,
  document.getElementById("root")
);
