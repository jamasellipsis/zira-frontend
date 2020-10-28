import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carou.css';
import ApiClasses from '../../api/Classes';
import ApiUsers from '../../api/Users';

/*Classes's info for testing front*/
const classes = [{
    photourl:require('../../assets/other_photos/finance.jpg'),
    name:"Finances",
    description:"In this course, you’ll learn the basic fundamentals of corporate finance. You’ll identify foundational concepts in corporate finance, such as NPV, Compound and Simple Interest, and Annuities versus Perpetuities. You’ll also learn how to apply the NPV framework to calculating fixed-income valuation and Equity, using hypothetical examples of corporate projects. By the end of this course, you’ll have honed your skills in calculating risk and returns to optimize investments, and be able to assess the right set of financial information to achieve better returns for your firm.",
    teacherPhoto:require('../../assets/sample_profile_photos/0.jpg'),
    teacherName:"Francisco Perez"
  },
  {
    photourl:require('../../assets/other_photos/ux.jpg'),
    name:"UI/UX Design",
    description:"This design-centric course examines the broad question of what an interface is and what role a designer plays in creating a user interface. Learning how to design and articulate meaning using color, type, and imagery is essential to making interfaces function clearly and seamlessly. Through a series of lectures and visual exercises, you will focus on the many individual elements and components that make up the skillset of an interface designer. By the end of this course, you will be able to describe the key formal elements of clear, consistent, and intuitive UI design, and apply your learned skills to the design of a static screen-based interface.",
    teacherPhoto:require('../../assets/sample_profile_photos/33.jpg'),
    teacherName:"Diana Ortiz"
  },
  {
    photourl:require('../../assets/other_photos/art.jpg'),
    name:"Contemporary Art",
    description:"What is contemporary art? In this course, you’ll consider this question through more than 70 works of art made between 1980 and the present, with a focus on art from the past decade. You’ll hear directly from artists, architects, and designers from around the globe about their creative processes, materials, and inspiration.",
    teacherPhoto:require('../../assets/sample_profile_photos/31.jpg'),
    teacherName:"Camila Garcia"
  },
  {
    photourl:require('../../assets/other_photos/software.jpg'),
    name:"Design paterns",
    description:"This course extends object-oriented analysis and design by incorporating design patterns to create interactive applications. Through a survey of established design patterns, you will gain a foundation for more complex software applications. Finally, you will identify problematic software designs by referencing a catalog of code smells.",
    teacherPhoto:require('../../assets/sample_profile_photos/2.jpg'),
    teacherName:"Jhon Ramirez"
  },
  {
    photourl:require('../../assets/other_photos/digital-marketing.jpg'),
    name:"Digital Marketing",
    description:"The proliferation of digital technology gives businesses a diverse new set of tools to reach, engage, monitor, and respond to consumers to an unprecedented degree. The aggregated and voluminous digital data can also be leveraged to better target specific consumer segments. Following the Digital Marketing Channels: The Landscape, this course aims to give you a deeper understanding of core processes of planning a digital marketing campaign and the role of various digital channels in an integrated marketing communication.",
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