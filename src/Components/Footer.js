import '../CSS/footer.css';

export default function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-info">
                <div className="footer-left">
                    <div className="footer-title">
                        LUIS MENDEZ
                    </div>
                    <span className="footer-left-title">
                        Quick links
                    </span>
                    <ul className="footer-links">
                        <li className="footer-links-item">
                            <a href="#">Blog</a>
                        </li>
                        <li className="footer-links-item">
                        <a href="#">Gronno</a>
                        </li>
                        <li className="footer-links-item">
                        <a href="#">School Manager</a>
                        </li>
                        <li className="footer-links-item">
                        <a href="#">Bar Weights</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-right">
                    <div className="footer-social">
                        <a href="https://www.instagram.com/mendezluis3/"><i className="footer-i fa fa-instagram"></i></a>
                        <a href="#"><i className="footer-i fa fa-twitter"></i></a>
                        <a href="#"><i className="footer-i fa fa-linkedin"></i></a>
                        <a href="#"><i className="footer-i fa fa-github"></i></a>
                        <a href="#"><i className="footer-i fa fa-envelope"></i></a>
                    </div>
            </div>
        </div>  
    );
}