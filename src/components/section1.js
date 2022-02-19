import "../sass/App.css"
import homeImg from "../images/illustration-home.svg"
import videoPlayerImg from "../images/Icon.svg"

function Section1() {
  return (
    <div className="section1">
      <h1>Make your website</h1>
      <h3>wonderful</h3>
      <p>Our landing page template works on all devices, so you only have to 
         <br/> set it up once, and get beautiful results forever.</p>

        <div className="start">
          <a href="#">Start free trial</a>
          <a href="#">Learn more</a>
        </div>
        
        <img src={homeImg}></img>

        <div className="video-player">
           <img href={videoPlayerImg}></img><span> Watch the full video (2min) </span>
        </div>
        
        <div className="white-box"></div>
        <div className="white-box little"></div>


        
    </div>
    
  );
}

export default Section1;