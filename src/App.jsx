import React from "react"
import Header from "./components/header/Header"
import { BrowserRouter, Route, Router } from "react-router-dom"
import Hero from "./components/hero/Hero"
import Releasedgames from "./components/releasedgames/Releasedgames"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <div className="head-div">
            <Header />
          </div>
          <div className="hero-app">
          <Hero />
          </div>
          <div className="released-games-main">
            <Releasedgames />
          </div>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
