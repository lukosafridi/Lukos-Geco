import React from "react"
import Header from "./components/header/Header"
import { BrowserRouter, Route, Router } from "react-router-dom"
import Hero from "./components/hero/Hero"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <div className="head-main">
          <Header />
        </div>
        <div className="hero-main">
          <Hero />
        </div>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
