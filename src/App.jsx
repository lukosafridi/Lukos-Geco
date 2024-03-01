import React from "react"
import Header from "./components/header/Header"
import { BrowserRouter, Route, Router } from "react-router-dom"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
