import React from "react"

export default function Info() {
    return (
        <section className="info--container">
            <h1> Katherine Marcott </h1> 
            <h2> Software Engineer </h2> 
            <h3> Katherinesoftwareengineer@gmail.com </h3>
            <button className="info--btn-portfolio btn"> <a href="https://katherinemarcott.netlify.app/" rel="noreferrer" target="_blank"> Portfolio </a></button>
            <button className="info--btn-linkedin btn"> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/katherinemarcott/"><img src="./images/Vector.png" alt="LinkedIn"/> LinkedIn </a> </button>
        </section>
    )
}