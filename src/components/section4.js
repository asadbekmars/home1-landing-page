import "../sass/App.css"
import facebook from "../images/facebook.svg"
import tinder from "../images/tinder.svg"
import airbnb from "../images/airbnb.svg"
import hubspot from "../images/hubspot.svg"
import amazon from "../images/amazon.svg"
import womanImg from "../images/woman-face.png"
import iconImg from "../images/icon-woman.svg"



function Section4() {
    return(
        <div className="section4">
            <h2>Trusted by over 20,000 companies 
            <br/> all over the world</h2>

            <p className="p-class">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis 
            <br/> landit libero cursus mattis.</p>

            <div className="company-div">
                <img src={facebook}></img>
                <img src={tinder}></img>
                <img src={airbnb}></img>
                <img src={hubspot}></img>
                <img src={amazon}></img>
            </div>

            <div className="comment-div">
                <span>
                    <img className="icon-img" src={iconImg}></img>
                    <img  src={womanImg}></img>
                </span>

                <p>“ I love this product and would recommend it to anyone. Could be not 
                    easier to use, and our multiple websites are wonderful. We get nice 
                    comments all the time. “</p>
                <h5>Darya Finger</h5>

                <p className="p-ceo">CEO & Co-Founder <a>@Dropbox</a></p>
            </div>
         </div>
    )
}


export default Section4;