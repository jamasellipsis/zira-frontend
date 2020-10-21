import React from 'react';
import Carousel from 'react-elastic-carousel';
import './carou.css';
import ApiClasses from '../../api/Classes'


  /*This component creates the carousel */
class ClassesCarousel extends React.Component {
    state = {
        classes: []
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

        ApiClasses.getAll()
            .then(response => {
                this.setClasses(response.data)
            })
    }
    render() {
    return (
        <Carousel breakPoints={this.breakPoints} enableAutoPlay autoPlaySpeed={3000}>
        {/*Individual cards: */}
        {this.state.classes.map((i) => {
            return(
            <div className="col mx-auto mb-5" style={{height:"500px", overflow:"hidden"}}>
                <div className="card rounded w-100 shadow" style={{height:"100%", overflow:"hidden"}}>
                    <div className="row mw-100 mx-auto" style={{height:"35%", overflow:"hidden"}}>
                        <img className="img-fluid rounded w-100" alt="" src={i.photourl}></img>
                    </div>
                    <div className="card-body h-20" style={{height:"13%", overflow:"hidden"}}>
                        <h5 className="card-title text-bold">{i.title}</h5>
                    </div>
                    <div className="card-body" style={{height:"28%", overflow:"hidden"}}>
                        <p className="card-title">{i.description}</p>
                    </div>
                    <div className="card-body my-0 py-0" style={{height:"4%"}}>
                        <a href="/" className="card-link">Read More</a>
                    </div>
                    <div className="row" style={{height:"17%", overflow:"hidden"}}>
                        <div className="col-4 my-auto">
                            <a href="/"><img src={i.teacher_photo} className="rounded-circle img-thumbnail my-auto ml-4" alt="teacher"></img></a>
                        </div>
                        <div className="col-6 m-auto">
                            <h6 className="card-title text-bold my-auto text-left">{i.teache_name}</h6>
                        </div>
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

export default ClassesCarousel;