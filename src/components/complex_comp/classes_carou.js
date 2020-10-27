import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carou.css';
import ApiClasses from '../../api/Classes';
import ApiUsers from '../../api/Users';

/*Classes's info for testing front*/
const classes = [{
    photourl:require('../../assets/other_photos/class1.jpg'),
    name:"Finances",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui orci, congue a enim non, ultricies porttitor erat. Mauris vel ornare diam. Sed vel maximus enim. Morbi aliquam non mauris vel imperdiet. Ut blandit massa eget ultrices aliquam. Donec ut nulla nec metus facilisis congue. Aenean vitae viverra lorem. Nam congue lobortis molestie. Phasellus vitae vulputate orci. Vestibulum eu eros leo. Nullam pulvinar elit est, eget aliquet neque dapibus eu. Nam vestibulum sodales mi quis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lobortis arcu mollis ullamcorper dictum.Lore",
    teacherPhoto:require('../../assets/sample_profile_photos/0.jpg'),
    teacherName:"Francisco Perez"
  },
  {
    photourl:require('../../assets/other_photos/class2.jpg'),
    name:"Design",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui orci, congue a enim non, ultricies porttitor erat. Mauris vel ornare diam. Sed vel maximus enim. Morbi aliquam non mauris vel imperdiet. Ut blandit massa eget ultrices aliquam. Donec ut nulla nec metus facilisis congue. Aenean vitae viverra lorem. Nam congue lobortis molestie. Phasellus vitae vulputate orci. Vestibulum eu eros leo. Nullam pulvinar elit est, eget aliquet neque dapibus eu. Nam vestibulum sodales mi quis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lobortis arcu mollis ullamcorper dictum.Full-stack Developer",
    teacherPhoto:require('../../assets/sample_profile_photos/33.jpg'),
    teacherName:"Diana Ortiz"
  },
  {
    photourl:require('../../assets/other_photos/class1.jpg'),
    name:"Painting",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui orci, congue a enim non, ultricies porttitor erat. Mauris vel ornare diam. Sed vel maximus enim. Morbi aliquam non mauris vel imperdiet. Ut blandit massa eget ultrices aliquam. Donec ut nulla nec metus facilisis congue. Aenean vitae viverra lorem. Nam congue lobortis molestie. Phasellus vitae vulputate orci. Vestibulum eu eros leo. Nullam pulvinar elit est, eget aliquet neque dapibus eu. Nam vestibulum sodales mi quis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lobortis arcu mollis ullamcorper dictum.Front-End Developer",
    teacherPhoto:require('../../assets/sample_profile_photos/31.jpg'),
    teacherName:"Camila Garcia"
  },
  {
    photourl:require('../../assets/other_photos/class2.jpg'),
    name:"Design paterns",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui orci, congue a enim non, ultricies porttitor erat. Mauris vel ornare diam. Sed vel maximus enim. Morbi aliquam non mauris vel imperdiet. Ut blandit massa eget ultrices aliquam. Donec ut nulla nec metus facilisis congue. Aenean vitae viverra lorem. Nam congue lobortis molestie. Phasellus vitae vulputate orci. Vestibulum eu eros leo. Nullam pulvinar elit est, eget aliquet neque dapibus eu. Nam vestibulum sodales mi quis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lobortis arcu mollis ullamcorper dictum.Back-End Developer",
    teacherPhoto:require('../../assets/sample_profile_photos/2.jpg'),
    teacherName:"Jhon Ramirez"
  },
  {
    photourl:require('../../assets/other_photos/class1.jpg'),
    name:"Digital Marketing",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui orci, congue a enim non, ultricies porttitor erat. Mauris vel ornare diam. Sed vel maximus enim. Morbi aliquam non mauris vel imperdiet. Ut blandit massa eget ultrices aliquam. Donec ut nulla nec metus facilisis congue. Aenean vitae viverra lorem. Nam congue lobortis molestie. Phasellus vitae vulputate orci. Vestibulum eu eros leo. Nullam pulvinar elit est, eget aliquet neque dapibus eu. Nam vestibulum sodales mi quis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed lobortis arcu mollis ullamcorper dictum.Game Developer",
    teacherPhoto:require('../../assets/sample_profile_photos/32.jpg'),
    teacherName:"Silvana Perez"
  },];

  /*This component creates the carousel */
class ClassesCarousel extends React.Component {
    state = {
        classes: [],
    }

    setClasses = clas => {
        this.setState({...this.state, classes: clas})
    }

    constructor(props) {
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1, pagination: false  },
            { width: 400, itemsToShow: 2, pagination: false  },
            { width: 550, itemsToShow: 3, pagination: false },
            { width: 850, itemsToShow: 4, pagination: false  },
            { width: 1750, itemsToShow: 6, pagination: false  },
        ]

        
    }

    componentDidMount() {
        ApiClasses.getAll()
            .then(response => {
                this.setClasses(response.data)
                this.state.classes.forEach((aClass) => {
                    ApiUsers.getUserById(aClass.teacherId)
                    .then(response => {
                        aClass.teacherPhoto = response.data[0].profile_photo;
                        aClass.teacherName = response.data[0].username;
                        console.log(aClass)
                    })
                })
            })
    }
    render() {
        if (classes[0]) {
            return (
                <Carousel breakPoints={this.breakPoints} enableAutoPlay autoPlaySpeed={3000}>
                {/*Individual cards: */}
                {classes.map(i => {
                    return(
                    <div className="col mx-auto mb-5" style={{height:"500px", overflow:"hidden"}}>
                        <div className="card rounded w-100 shadow" style={{height:"100%", overflow:"hidden"}}>
                            <div className="row mw-100 mx-auto" style={{height:"35%", overflow:"hidden"}}>
                                <img className="img-fluid rounded w-100" alt="" src={i.photourl}></img>
                            </div>
                            <div className="card-body h-20" style={{height:"13%", overflow:"hidden"}}>
                                <h5 className="card-title text-bold">{i.name}</h5>
                            </div>
                            <div className="card-body" style={{height:"27%", overflow:"hidden"}}>
                                <p className="card-title">{i.description}</p>
                            </div>
                            <div className="card-body my-0 py-0" style={{height:"4%"}}>
                                <a href="/" className="card-link">Read More</a>
                            </div>
                            {classes[0].teacherName &&
                            <div className="row" style={{height:"17%", overflow:"hidden"}}>
                                <div className="col-6 m-auto">
                                    <h6 className="card-title m-auto">{i.teacherName}</h6>
                                </div>
                                <div className="col-4 m-auto">
                                    <a href="/"><img src={i.teacherPhoto} className="rounded-circle img-thumbnail m-auto" alt="teacher"></img></a>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    )
                    })
                }
                </Carousel>
            )
        }
        else {
            return <></>
        }
    }
}

export default ClassesCarousel;