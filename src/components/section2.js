import "../sass/App.css"
import section2Img from "../images/section2-img.png"
import icon02 from "../images/Icon02.svg"
import icon03 from "../images/Icon03.svg"
import icon04 from "../images/Icon04.svg"


function Section2() {
  return (
    <div className="section2">
        <h2>Explore the solutions</h2>
        <p className="p-class">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
         <br/> nulla pariatur excepteur sint occaecat cupidatat.</p>

        <div className="explore-div">
          <div className="power-div">
            <h3>Powerful suite of tools</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit 
              <br/> esse cillum dolore pariatur. Excepteur sint occaecat 
             <br/> cupidatat non proident, sunt in culpa.</p>

            <div className="box grey">
              <p><b>Building the Simple ecosystem</b>
             <br/> Take collaboration to the next level with security and administrative features built for teams.</p>
              <img src={icon03}/>
            </div>
            <div className="box">
              <p><b>Building the Simple ecosystem</b>
             <br/> Take collaboration to the next level with security and administrative features built for teams.</p>
              <img src={icon02}/>
            </div>
            <div className="box">
              <p><b>Building the Simple ecosystem</b>
             <br/> Take collaboration to the next level with security and administrative features built for teams.</p>
              <img src={icon04}/>
            </div>


          </div>

          <img src={section2Img}></img>
        </div>
        
    </div>
    
  );
}

export default Section2;
