import '../CSS/footer.css';
import SocialMedia from './SocialMedia';

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
            <SocialMedia/>
        </div>  
    );
}