import React from 'react';
import Demo from '../components/complex_comp/demo';
import ZiraCharacs from '../components/complex_comp/zira_characs'
import OurTeam from '../components/complex_comp/our_team';


function LandingPage(props) {
  return (
    <div>
        {/*Banner section */}
        <div className="jumbotron jumbotron-image mb-0 landingjumbotron px-0">
            <h1 className="green-text text-left ml-2 ml-md-5" style={{fontSize:"10rem", fontWeight:"bold"}}>Zira</h1>
            <h2 className="mb-4 green-text text-left ml-2 ml-md-5">
                Interactive Live Classes
            </h2>
        </div>
        <ZiraCharacs/>
        {/*About Us section */}
        <div className="card border-0 mb-4">
            <div className="card-body">
            <h2 className="card-title" style={{fontWeight:"bold"}}>Our inspiration</h2>
            <p className="card-text" style={{fontSize:"1.2rem"}}>Explore any interest over live video chat and interactive classes! Discover fun, social, and innovative learning experiences.</p>
            <p className="card-text">Classes from $10.</p>
            <a href="/learn" className="btn btn-primary btnZira">Check our Github</a>
            </div>
        </div> 
        <OurTeam/>
        <Demo/>
    </div>
    
  );
}

export default LandingPage;