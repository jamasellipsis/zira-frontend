import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carou.css';

/* Social networks icons */
const linkedinIcon = require('../../assets/icons/linkedin.png')

/*Member's info*/
const members = [{
    photourl:require('../../assets/team_photos/miguel.jpg'),
    name:"Miguel A. Cipamocha",
    rol:"Game Developer",
    linkedinurl:"https://www.linkedin.com/in/miguel-cipamocha/",
},
{
    photourl:require('../../assets/team_photos/alejandro.jpeg'),
    name:"Alejandro Castiblanco",
    rol:"Full-stack Developer",
    linkedinurl:"https://www.linkedin.com/in/alejocasti/",
},
{
    photourl:require('../../assets/team_photos/anderson.jpeg'),
    name:"Anderson Castiblanco",
    rol:"Front-End Developer",
    linkedinurl:"https://www.linkedin.com/in/andergcp/",
},
{
    photourl:require('../../assets/team_photos/santiago.jpeg'),
    name:"Santiago Gallego",
    rol:"Back-End Developer",
    linkedinurl:"https://www.linkedin.com/in/santiago--gallego/",
},
{
    photourl:require('../../assets/team_photos/juan.jpeg'),
    name:"Juan David Suarez",
    rol:"Game Developer",
    linkedinurl:"https://www.linkedin.com/in/juandavidsuarez/",
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
                                <a href={i.linkedinurl} target="_blank" rel="noopener noreferrer" style={{height:"20%"}}> <img src={linkedinIcon} alt="linkedin" style={{height:"15%"}}></img> </a>
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