import "./App.css"
import Inputs from "./Components/inputs"
import Buttons from './Components/button'
import Strengthmeter from "./Components/strengthmeter"

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <h2 className="title">
          Register to Access
        </h2>
        <Inputs ></Inputs>
        <Strengthmeter></Strengthmeter>
        <Buttons></Buttons>
      </div>
    </div>
  )
}

export default App
