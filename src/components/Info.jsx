import React from "react"

export default function Info() {
    return (
        <section className="info--container">
            <h1> Katherine Marcott </h1> 
            <h2> Software Engineer </h2> 
            <h3> katherinemarcott.netlify.app </h3>
            <button className="info--btn-email btn"> <img src="./images/Icon.png" alt="Email"/> Email </button>
            <button className="info--btn-linkedin btn"> <img src="./images/Vector.png" alt="LinkedIn"/> LinkedIn </button>
        </section>
    )
}