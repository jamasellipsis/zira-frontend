import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carou.css';

/* Social networks icons */
const linkedinIcon = require('../../assets/icons/linkedin.png')
const twitterIcon = require('../../assets/icons/twitter.png')
const githubIcon = require('../../assets/icons/github.png')

/*Member's info*/
const members = [{
    photourl:require('../../assets/team_photos/miguel.jpg'),
    name:"Miguel A. Cipamocha",
    rol:"Game Developer",
    linkedinurl:"https://www.linkedin.com/in/miguel-cipamocha/",
    twitterurl: "https://twitter.com/Miguel_C06",
    githuburl: "https://github.com/MiguelCF06"
},
{
    photourl:require('../../assets/team_photos/alejandro.jpeg'),
    name:"Alejandro Castiblanco",
    rol:"Full-stack Developer",
    linkedinurl:"https://www.linkedin.com/in/alejocasti/",
    twitterurl: "https://twitter.com/AlejoPrieto7",
    githuburl: "https://github.com/AlejoCasti"
},
{
    photourl:require('../../assets/team_photos/anderson.jpeg'),
    name:"Anderson Castiblanco",
    rol:"Front-End Developer",
    linkedinurl:"https://www.linkedin.com/in/andergcp/",
    twitterurl: "https://twitter.com/Andergcp",
    githuburl: "https://github.com/andergcp"
},
{
    photourl:require('../../assets/team_photos/santiago.jpeg'),
    name:"Santiago Gallego",
    rol:"Back-End Developer",
    linkedinurl:"https://www.linkedin.com/in/santiago--gallego/",
    twitterurl: "https://twitter.com/santiag57521897",
    githuburl: "https://github.com/Santiago-Gallego"
},
{
    photourl:require('../../assets/team_photos/juan.jpeg'),
    name:"Juan David Suarez",
    rol:"Game Developer",
    linkedinurl:"https://www.linkedin.com/in/juandavidsuarez/",
    twitterurl: "https://twitter.com/juandsuarezz1",
    githuburl: "https://github.com/juandsuarezz"
},];

/* Out Team section */
class OurTeam extends React.Component{
    constructor(props) {
        super(props)
        this.breakPoints = [
          { width: 1, itemsToShow: 1, pagination: false  },
          { width: 700, itemsToShow: 2, pagination: false },
          { width: 800, itemsToShow: 3, pagination: false },
          { width: 850, itemsToShow: 4, pagination: false },
          { width: 1060, itemsToShow: 5, pagination: false  },
        ]
      }
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"#94D0D3"}}>
                <div className="row mx-auto">
                    <h1 className="mx-auto mt-3">Our Team</h1>
                </div>
                <Carousel breakPoints={this.breakPoints} enableAutoPlay autoPlaySpeed={3000} style={{backgroundColor:"#94D0D3"}}>
                {/*Individual cards: */}
                {members.map((i) => {
                    return(
                        <div className="col mx-auto mt-3" key={i.name}>
                        <div className="card border-0" style={{backgroundColor:"#94D0D3", height:"100%"}}>
                            <img className="img-fluid rounded-circle w-90 mx-auto" alt="" src={i.photourl} style={{maxHeight:"50%"}}></img>
                            <div className="card-body mx-auto" style={{height:"50%", width:"80%"}}>
                                <h5 className="card-title">{i.name}</h5>
                                <p className="card-title mx-auto" style={{width:"80%"}}>{i.rol}</p>
                                <div className="row">
                                    <div className="col-4">
                                        <a href={i.linkedinurl} className="mx-auto" target="_blank" rel="noopener noreferrer" style={{maxWidth:"100%"}}> <img src={linkedinIcon} alt="linkedin" style={{height:"50%"}}></img> </a>
                                    </div>
                                    <div className="col-4">
                                        <a href={i.twitterurl} className="mx-auto" target="_blank" rel="noopener noreferrer" style={{maxWidth:"100%"}}> <img src={twitterIcon} alt="linkedin" style={{height:"50%"}}></img> </a>
                                    </div>
                                    <div className="col-4">
                                        <a href={i.githuburl} className="mx-auto" target="_blank" rel="noopener noreferrer" style={{maxWidth:"100%"}}> <img src={githubIcon} alt="linkedin" style={{height:"50%"}}></img> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>  
                    )
                    })
                }
                </Carousel>
            </div>
            
        )}
    }

export default OurTeam;