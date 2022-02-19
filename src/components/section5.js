import "../sass/App.css"
import groupbox from "../images/Group-box.svg"

function Section5() {
    return(
        <div className="section5">
            <img src={groupbox}></img>
            <h3>Powering your business</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nemo 
               <br/> expedita voluptas culpa sapiente.</p>

            <input type="name" placeholder="Your email"></input> <button>Start free trial</button>

            <p className="p-grey">7 days free trial. No credit card required.</p>
        </div>
    )
}


export default Section5;