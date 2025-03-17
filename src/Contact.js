import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <section>
            <h2>Contact me</h2>
            <p>Feel free to reach out</p>
            <p>My email is mahannilipour@gmail.com</p>
            <div>
                <a href="https://www.linkedin.com/in/mahan-nilipour-68a808322/" target="_blank"><FaLinkedin size={30}/></a>
                <a href="https://github.com/MahanNilipour" target="_blank"><FaGithub size={30}/></a>
            </div>
        </section>
    )
}

export default Contact