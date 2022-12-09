import "./App.css"
import { useState } from "react"
import Inputs from "./Components/inputs"
import Buttons from './Components/button'
import Strengthmeter from "./Components/strengthmeter"

function App() {
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      <div className="form-container">
        <h2 className="title">
          Register to Access
        </h2>
        <Inputs value={password} onChange={setPassword} />
        <Strengthmeter password={password} />
        <Buttons />
      </div>
    </div>
  )
}

export default App
