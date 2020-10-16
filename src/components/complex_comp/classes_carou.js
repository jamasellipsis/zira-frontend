import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carou.css';


/*Classes's info*/
const classes = [{
    photourl:require('../../assets/other_photos/class1.jpg'),
    title:"Finanzas",
    description:"Game Developer",
    teacher_photo:require('../../assets/sample_profile_photos/0.jpg'),
    teache_name:"Pepe"
  },
  {
    photourl:require('../../assets/other_photos/class2.jpg'),
    title:"Diseño",
    description:"Full-stack Developer",
    teacher_photo:require('../../assets/sample_profile_photos/33.jpg'),
    teache_name:"Pepe"
  },
  {
    photourl:require('../../assets/other_photos/class1.jpg'),
    title:"Anderson Castiblanco",
    description:"Front-End Developer",
    teacher_photo:require('../../assets/sample_profile_photos/31.jpg'),
    teache_name:"Pepe"
  },
  {
    photourl:require('../../assets/other_photos/class2.jpg'),
    title:"Santiago Gallego",
    description:"Back-End Developer",
    teacher_photo:require('../../assets/sample_profile_photos/2.jpg'),
    teache_name:"Pepe"
  },
  {
    photourl:require('../../assets/other_photos/class1.jpg'),
    title:"Juan D. Suarez",
    description:"Game Developer",
    teacher_photo:require('../../assets/sample_profile_photos/32.jpg'),
    teache_name:"Pepe"
  },];
  
  
  
class ClassesCarou extends React.Component {
    constructor(props) {
    super(props)
    this.breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false  },
        { width: 550, itemsToShow: 2, pagination: false },
        { width: 850, itemsToShow: 3, pagination: false  },
        { width: 1150, itemsToShow: 4, pagination: false },
        { width: 1450, itemsToShow: 5, pagination: false  },
        { width: 1750, itemsToShow: 6, pagination: false  },
    ]
    }
    render() {
    return (
        <Carousel breakPoints={this.breakPoints} enableAutoPlay autoPlaySpeed={3000}>
        {/*Individual cards: */}
        {classes.map((i) => {
            return(
            <div className="col mx-auto">
                <div className="card rounded w-100 shadow">
                    <img className="img-fluid rounded w-100 mx-auto" alt="" src={i.photourl}></img>
                    <div className="card-body">
                        <h4 className="card-title text-bold">{i.title}</h4>
                        <p className="card-title">{i.description}</p>
                    </div>
                    <div className="card-body border">
                        <a href="#"><img src={i.teacher_photo} className="" alt="teacher"></img></a>
                        <h4 className="card-title text-bold">{i.teache_name}</h4>
                    </div>
                </div>
            </div>
            )
            })
        }
        </Carousel>
    )
    }
}

/* Classes carousel section takes carousel from ClassesCarou*/
class ClassesCarousel extends React.Component{
    render (){
        return (
            <div className="container-fluid pt-4">
                <div className="row">
                    <h2 className="mx-auto">Meet our Teachers</h2>    
                </div>
                <div className="row">
                    <ClassesCarou/>
                </div>
            </div>
        )}
}

export default ClassesCarousel;