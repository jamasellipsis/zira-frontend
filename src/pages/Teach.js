import React from 'react';
import { Button } from 'react-bootstrap';
import ProfilePhoto from '../components/simple_comp/profile_photo';

const Teach = (props) => {
  return (
    <div>
      {/*Jumbotron */}
      <div className="jumbotron jumbotron-image mb-0" style={{backgroundImage:"url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80)"}}>
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
            <p className="quotation-text mt-3">“It's wonderful to have access to such a wide range of interesting subjects taught by enthusiastic teachers in the comfort of our own home. My kids also enjoy being able to interact through video conferencing not just with the teachers, but with fellow class mates.”
- Jennifer D., Augusta, GA</p>                    
        </div>
      </div>
    </div>
  )
}

export default Teach;