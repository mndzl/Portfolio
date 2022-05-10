import "../CSS/Navbar.css";

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <span className="nav-logo">
                    LUIS MENDEZ
                </span>
            </div>
            <div className="nav-right">
                <span className="nav-about">
                    <a href="#">ABOUT ME</a>
                </span>
                <span className="nav-projects">
                    <a href="#">PROJECTS</a>
                </span>
                <span className="nav-contact">
                    <a href="#">CONTACT</a>
                </span>

            </div>
        </div>
    );
}