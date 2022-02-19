import "../sass/App.css"
import blueLogo from "../images/blue-box.svg"
//import path from "../images/Path-blue.svg"



function Footer() {
    return(
       <div className="footer">
           <div className="box">
               <img src={blueLogo}></img>
               <p>Terms · Privacy Policy</p>
           </div>

           <div className="link">
               <p>Products</p>
               <a href="#">Web Studio</a>
               <a href="#">DynamicBox Flex</a>
               <a href="#">Programming Forms</a>
               <a href="#">Integrations</a>
               <a href="#">Command-Line</a>
           </div>
           <div className="link">
               <p>Resources</p>
               <a href="#">Documentation</a>
               <a href="#">Tutorials & Guides</a>
               <a href="#">Blog</a>
               <a href="#">Support Center</a>
               <a href="#">Partners</a>
           </div>
           <div className="link">
               <p>Company</p>
               <a href="#">Home</a>
               <a href="#">About us</a>
               <a href="#">Company values</a>
               <a href="#">Pricing</a>
               <a href="#">Privacy Policy</a>
           </div>
           <div className="link">
               <p>Subscribe</p>
               <p className="f-p">Get the latest news and articles to 
                  <br/> your inbox every month.</p>

               {/* <input type="text" placeholder="Your email">
                   <img src={path}></img></input> */}
           </div>
       </div> 
    );
}

export default Footer;