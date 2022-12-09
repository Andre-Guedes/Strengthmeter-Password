import { useState } from "react";

import "./inputs.css"
import "./strengthmeter.css"

const Inputs = () => {
    const [pswd, setpswd] = useState()
    
    const incPswd = (e) => {
        setpswd(e.target.value)
        strength(pswd)
    }
    
    function strength(password) {
        let i = 0
        if(password.length > 6) i++
        if(password.length >= 10) i++
        if(/[A-Z]/.test(password)) i++
        if(/[a-z]/.test(password)) i++
        if(/[0-9]/.test(password)) i++
        if(/\s+/g.test(password)) i++
        if(/\W|_/.test(password)) i++
        return containerStrength(i)
    }
    
    function containerStrength(i) {
        const container = document.querySelector(".container")

        if(i<3) {
            container.classList.add("weak")
            container.classList.remove("medium")
            container.classList.remove("strong")
        }
        if(i>=3 && i<5) {
            container.classList.remove("weak")
            container.classList.add("medium")
            container.classList.remove("strong")
        }
        if(i>=5) {
            container.classList.remove("weak")
            container.classList.remove("medium")
            container.classList.add("strong")
        }
    }
    
    const shPswd = () => {
        const pass = document.querySelector("#password")

        pass.attributes.type.value === "password" ? 
            (pass.setAttribute("type", "text"), pass.classList.add("hide")) : 
            (pass.setAttribute("type", "password"), pass.classList.remove("hide"))
    }

    return(
        <div className="container">
            <div className="inputs">
                <input type="name" placeholder="Type your name"/>
                <input type="email" placeholder="Type your e-mail"/>
                <input type="password" id="password" placeholder="Type your password" onChange={incPswd}/>
                <div className="showMsg" onClick={shPswd}></div>
            </div>
            <div className="strength"></div>
        </div>
    )
}

export default Inputs