import '../CSS/intouch.css';
import picture from '../media/picture.jpeg'
import SocialMedia from './SocialMedia';

export default function InTouch(){
    return (
        <div className="intouch-container">
            <img src={picture} className="intouch-picture" />
            <div className="intouch-call">
                <span className="intouch-msg">Let's talk!</span>
                <div className="intouch-socialmedia"><SocialMedia/></div>

                <div id='about'></div>
            </div>

        </div>
    );
}