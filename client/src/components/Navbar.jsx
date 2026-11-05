import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";


function Navbar() {

const[menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);


    return(
        <nav className="navbar">
            <a href="#home" className="nav-logo" onClick={closeMenu}>
                GABRIEL<span></span>
            </a>
          
          <div className={`nav-links ${menuOpen ? "active" : ""}`}> 
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#videos" onClick={closeMenu}>Acoustic covers</a>
          <a href="#performances" onClick={closeMenu}>Performances</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>


             <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="mobile-instagram"
        >
          <FaInstagram  size={18} />
          Instagram
        </a>
         </div>

            <a
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="nav-instagram"
      >
        Instagram <FaInstagram  size={16} />
      </a>

      <button className="menu-toggle" onClick={()=> setMenuOpen(!menuOpen)}
       aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
       aria-expanded={menuOpen} >

        {menuOpen ? <X size={25}/> : <Menu size={25} />}
       </button>
        </nav>
    );
}

export default Navbar;
