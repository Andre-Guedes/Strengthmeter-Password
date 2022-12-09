import "./inputs.css"
import "./strengthmeter.css"

const Inputs = ({value, onChange}) => {
    const shPswd = () => {
        const pass = document.querySelector("#password")

        pass.attributes.type.value === "password" ? 
            (pass.setAttribute("type", "text"), pass.classList.add("hide")) : 
            (pass.setAttribute("type", "password"), pass.classList.remove("hide"))
    }

    function handleChange(event) {
        onChange(event.target.value)
    }

    return(
        <div className="container">
            <div className="inputs">
                <input type="name" placeholder="Type your name"/>
                <input type="email" placeholder="Type your e-mail"/>
                <input type="password" id="password" placeholder="Type your password" value={value} onChange={handleChange}/>
                <div className="showMsg" onClick={shPswd}></div>
            </div>
            {/* <div className="strength"></div> */}
        </div>
    )
}

export default Inputs