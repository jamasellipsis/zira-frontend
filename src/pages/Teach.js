import React from 'react';
import { Button } from 'react-bootstrap';
import ProfilePhoto from '../components/simple_comp/profile_photo';

const bannerPhoto = require('../assets/other_photos/banner.svg')
const Teach = (props) => {
  return (
    <div>
      {/*Jumbotron */}
      <div className="jumbotron jumbotron-image mb-0 jumbotronImg">
          <h2 className="mb-4 light-text text-center">
              Share your knowledge with the world
          </h2>
          <Button className="mx-auto btnSignup mt-1" href="/CreateClass">Create a Class</Button>
      </div>
      {/* Info section */}
      <div className="card-body">
        <h3 className="card-title" style={{fontWeight:"bold"}}>Create Interactive classes for many people around the world</h3>
        <p className="card-text">Establish the name, description, price and date for your new class.</p>
        <p className="card-text">Publish it and begin to earn money sharing your knowledge.</p>
      </div>
      {/* Testimonial*/}
      <div className="container-fluid py-3" style={{backgroundColor:"#94D0D3"}}>
        <div className="row py-3 mx-5">
            <ProfilePhoto photo={require('../assets/sample_profile_photos/31.jpg')}/>
            <p className="quotation-text mt-3">“I love teaching Design, but the platforms I knew doesn't allow me to create an interactive class, I miss real spaces. Zira allows me to offer a great experience for my students, I earn extra money and I can have students from many places around the world.”
- Erika M., Diaz, BO</p>                    
        </div>
      </div>
    </div>
  )
}

export default Teach;