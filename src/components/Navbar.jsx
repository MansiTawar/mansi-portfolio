import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar(){

    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-inner">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Certificate</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </nav>

        </>
    );
}

export default Navbar;