import React from 'react';
import ZiraCharacs from '../components/complex_comp/zira_characs'
import OurTeam from '../components/complex_comp/our_team';

function LandingPage(props) {
  return (
    <div>
        {/*Banner section */}
        <div className="jumbotron jumbotron-image mb-0 landingjumbotron px-0"></div>
        <a href="./" className="btn btnZira my-2" style={{height:"2.5rem"}}><p>Check our Website</p></a>
        <ZiraCharacs/>
        {/*About Us section */}
        <div className="card mb-3 py-2" style={{backgroundColor:"#9DA6A6"}}>
          <div className="row no-gutters">
            <div className="col-10 mx-auto">
              <div className="card-body">
                <h1 className="card-title light-text">Why?</h1>
                <p className="quotation-text mt-3">"When I was in my university, I really enjoyed the 15 minutes before, and after the class, it was a natural networking and a way of making new friends. I enjoyed the classroom and the blackboard, my classmates’ opinions and expressions, these elements enriched my learning process.</p>
                <p className="quotation-text mt-3">But virtual classes as we know them, haven’t integrated all these elements to make me feel like in a real classroom. Despite I’ve adapted to pre-recorded classes or asynchronous education models, I really miss the physical classroom and I know, many of you too."</p>
                <p className="quotation-text mt-3">Anderson Castiblanco, Team Member</p>
                <h3 className="mt-3 light-text">That’s why we created Zira!</h3>
                <h4 className="mt-3 light-text">We want to offer an interactive virtual classroom and platform that allows networking and lets people take and offer classes everywhere.</h4>
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/jamasellipsis" className="btn btnZira mb-4" style={{height:"2.5rem"}} target="_blank" rel="noopener noreferrer"><p>Check out Zira's Github</p></a>
        <OurTeam/>
        {/*Video section*/}
        <div className="row"  style={{backgroundColor:"#9DA6A6"}}>
          <div className="col-sm-12">
            <div style={{height:"4rem"}}>
                <h1 className="light-text text-center py-4" style={{fontWeight:"bold"}}>Demo</h1>
            </div>
            <div class="embed-responsive embed-responsive-1by1 w-50 my-3 mx-auto">
              <iframe class="embed-responsive-item" src="https://youtu.be/4e9t6RNb_gU" allowfullscreen title="Zira Demo"></iframe>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default LandingPage;