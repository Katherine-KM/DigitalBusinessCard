import React from "react"
import Img from "./components/Img.jsx"
import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
    return (
        <section className="business-card">
            <Img />
            <Info />
            <About />
            <Footer />
        </section>
        )
}