import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
