
 import "../sass/App.css"
import blueIcon from "../images/blue-Icon1.svg"
import blueIcon2 from "../images/blue-Icon2.svg"
import blueIcon3 from "../images/blue-Icon3.svg"
import blueIcon4 from "../images/blue-Icon4.svg"
import blueIcon5 from "../images/blue-Icon5.svg"
import blueIcon6 from "../images/blue-Icon6.svg"


// const blueDatas =[
//     {
//         name:"Initial Contact",
//         pname:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     },
//     {
//         name:"Initial Contact",
//         pname:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     },
//     {
//         name:"Initial Contact",
//         pname:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     },
//     {
//         name:"Initial Contact",
//         pname:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     },
//     {
//         name:"Initial Contact",
//         pname:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     },
//     {
//         name:"Initial Contact",
//         pname:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     }
// ]

// function boxchaqish(){
//     const discoverDiv = document.querySelector(".discover-div")
//     for( let blueData of blueDatas){
//         const div = document.createElement("div")
//         div.classList.add("box")
//         const h5 = document.createElement("h5")
//         const p = document.createElement("p")

//         h5.innerText = blueData.name
//         p.innerText = blueData.pname

//         div.append(h5, p)
//         discoverDiv.appendChild(div)

//     }
// }

function Section3() {
    return(
    <div className="section3">
        <h2>How Simple works</h2>
        <p className="p-class">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            <br/> nulla pariatur excepteur sint occaecat cupidatat.</p>
    
    {/* <div className="black-bg"></div> */}
        <div className="discover-div">
            <div className="blue-box">
                <img src={blueIcon}></img>
                <h5>Initial Contact</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    <br/> adipiscing elit.</p>
            </div>
            <div className="blue-box">
                <img src={blueIcon2}></img>
                <h5>Discovery Session</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    <br/> adipiscing elit.</p>
            </div>
            <div className="blue-box">
                <img src={blueIcon3}></img>
                <h5>Contracting</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    <br/> adipiscing elit.</p>
            </div>

            <div className="blue-box">
                <img src={blueIcon4}></img>
                <h5>Fast Prototyping</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    <br/> adipiscing elit.</p>
            </div>
            <div className="blue-box">
                <img src={blueIcon5}></img>
                <h5>Design Phase</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    <br/> adipiscing elit.</p>
            </div>
            <div className="blue-box">
                <img src={blueIcon6}></img>
                <h5>Develop & Launch</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    <br/> adipiscing elit.</p>
            </div>
         </div>
       
    </div>
    )
}

export default Section3;