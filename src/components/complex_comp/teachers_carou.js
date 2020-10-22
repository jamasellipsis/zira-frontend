import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carou.css';
/*
import ApiClasses from '../../api/Classes';
import ApiUsers from '../../api/Users';
*/
/*Teacher's info for testing front-end*/
const teachers = [{
  photourl:require('../../assets/sample_profile_photos/0.jpg'),
  name:"Miguel A. Chipamocha",
  rol:"Game Developer",
},
{
  photourl:require('../../assets/sample_profile_photos/33.jpg'),
  name:"Alejandro Castiblanco",
  rol:"Full-stack Developer",
},
{
  photourl:require('../../assets/sample_profile_photos/31.jpg'),
  name:"Anderson Castiblanco",
  rol:"Front-End Developer",
},
{
  photourl:require('../../assets/sample_profile_photos/2.jpg'),
  name:"Santiago Gallego",
  rol:"Back-End Developer",
},
{
  photourl:require('../../assets/sample_profile_photos/32.jpg'),
  name:"Juan D. Suarez",
  rol:"Game Developer",
},];

class TeachersCarou extends React.Component {
/*    state = {
      teachers: []
    }

    setTeachers = teacher => {
      this.setState({...this.state, teachers: teacher})
    }
*/
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
/*
      const classes = [];
      ApiClasses.getAll()
          .then(response => {
              this.classes.push(response.data)
          })
      this.classes.map((aClass) => {
        ApiUsers.getUserById(aClass.teacherid)
        .then(response => {
            this.setTeachers(response.data)
        }) 
      })
*/
    }
    render() {
      return (
        <Carousel breakPoints={this.breakPoints} enableAutoPlay autoPlaySpeed={3000}>
          {/*Individual cards: */}
          {teachers.map((i) => {
              return(
              <div className="col mx-auto" key={i.name}>
                <div className="card border-0">
                <img className="img-fluid rounded-circle w-90 mx-auto" alt="" src={i.photourl}></img>
                <div className="card-body">
                  <h4 className="card-title text-bold">{i.name}</h4>
                  <h5 className="card-title">{i.rol}</h5>
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

  export default TeachersCarou;