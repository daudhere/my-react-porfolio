import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.Linkedin.com/in/daud825" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>   
        <a href="https://www.github.com/daudhere" target="_blank" rel="noopener noreferrer">
        <FaGithub/>
        </a>
       
        <FaTwitterSquare/>
        
        <a href="https://www.instagram.com/d.au.d" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        </div>
    </nav>
  )
}

export default Navbar