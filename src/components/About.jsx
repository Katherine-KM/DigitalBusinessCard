import React from "react"

export default function About() {
    return (
        <section className="about--container">
            <h4 className="about--about-header"> About </h4> 
            <p> I am a software engineer dedicated to building and enhancing software to make people's days better, simpler, and more enjoyable. </p> 
            <h4 className="about--secondary-header"> Skills </h4>
            <ul className="about--skills-list"> 
                <li> HTML</li> 
                <li> CSS </li>
                <li> JavaScript </li>
                <li> APIs </li>
                <li> React.js </li>
                <li> Node.js </li>
                <li> Express.js </li>
                <li> MongoDB</li>
            </ul>
            <h4 className="about--secondary-header"> Interests </h4> 
            <p> My favorite activity is spending time with my family, friends, and animals. </p>  
        </section>
    )
}