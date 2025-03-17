import ReactDom from "react-dom/client"
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";

const root = ReactDom.createRoot(document.getElementById("root"));
console.log("welcome to my portfolio")
root.render(
    <>
    <Hero/>
    <About/>
    <Technologies/>
    <Projects/>
    <Contact/>
    </>
)