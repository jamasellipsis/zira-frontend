import React from 'react';

/* Social networks icons */
const linkedinIcon = require('../../assets/icons/twitter.png')

/*Member's info*/
const members = [{
    photourl:require('../../assets/team_photos/miguel.jpg'),
    name:"Miguel A. Chipamocha",
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
    name:"Juan D. Suarez",
    rol:"Game Developer",
    linkedinurl:"https://www.linkedin.com/in/juandavidsuarez/",
},];

/* Out Team section */
class OurTeam extends React.Component{
    render (){
        return (
            <div className="container-fluid mt-4 pt-4" style={{backgroundColor:"#94D0D3"}}>
                <h2>Our Team</h2>
                <div className="row mt-4">
                    {/*Individual cards: */}
                    {members.map((i) => {
                        return(
                            <div className="col-sm-2 mx-auto">
                                <div className="card border-0" style={{backgroundColor:"#94D0D3"}}>
                                    <img className="img-fluid rounded-circle w-90 mx-auto" alt="" src={i.photourl}></img>
                                    <div className="card-body">
                                        <h4 className="card-title text-bold">{i.name}</h4>
                                        <h5 className="card-title">{i.rol}</h5>
                                        <a href={i.linkedinurl} target="_blank" rel="noopener noreferrer"> <img src={linkedinIcon} alt="linkedin"></img> </a>
                                    </div>
                                </div>
                            </div>        
                        )
                    })
                    }                
                </div>
            </div>
        )}
}

export default OurTeam;