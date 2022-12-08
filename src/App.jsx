import { useState } from 'react'

import "./App.css"
import Inputs from "./Components/inputs"
import Strengthmeter from './Components/strengthmeter'

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <h2 className="title">
          Register to Access
        </h2>
        <Inputs ></Inputs>
        <Strengthmeter ></Strengthmeter>
      </div>
    </div>
  )
}

export default App
