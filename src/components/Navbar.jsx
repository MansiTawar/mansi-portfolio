import "../styles/navbar.css";

function Navbar(){
    return(
        <>
        <nav className="navbar">
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