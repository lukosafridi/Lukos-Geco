import React from "react"
import Header from "./components/header/Header"
import { BrowserRouter, Route, Router } from "react-router-dom"
import Hero from "./components/hero/Hero"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <div className="head-div">
          <Header />
        </div>
        
          <Hero />
        

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
