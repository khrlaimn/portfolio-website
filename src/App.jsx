import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <main className="main">
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
}

export default App;
