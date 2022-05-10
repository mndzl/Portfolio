import '../CSS/intouch.css';
import picture from '../media/picture.jpeg'

export default function InTouch(){
    return (
        <div className="intouch-container">
            <img src={picture} className="intouch-picture" />
            <div className="intouch-social">
                <span className="intouch-msg">Let's talk!</span>
                <div className="intouch-social-container">
                    <a href="https://www.instagram.com/mendezluis3/"><i className="intouch-i fa fa-instagram"></i></a>
                    <a href="#"><i className="intouch-i fa fa-twitter"></i></a>
                    <a href="#"><i className="intouch-i fa fa-linkedin"></i></a>
                    <a href="#"><i className="intouch-i fa fa-envelope"></i></a>
                </div>
            </div>
        </div>
    );
}