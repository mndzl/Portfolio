import "../CSS/Navbar.css";

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <span className="nav-logo">
                    <a href="#">LUIS MENDEZ</a>
                </span>
            </div>
            <div className="nav-right">
                <span className="nav-about">
                    <a href="#about">ABOUT ME</a>
                </span>
                <span className="nav-projects">
                    <a href="#projects">PROJECTS</a>
                </span>
            </div>
        </div>
    );
}