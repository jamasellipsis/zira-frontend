import React from 'react';
import Banner from '../components/complex_comp/banner'
import Card from '../components/complex_comp/card_info'
import Testimonial from '../components/complex_comp/testimonial'
import Demo from '../components/complex_comp/demo';
import ZiraCharacs from '../components/complex_comp/zira_characs'
import OurTeam from '../components/complex_comp/our_team';
import MeetTeachers from '../components/complex_comp/meet_teachers';
import ClassesCarousel from '../components/complex_comp/classes_carou';

function Home(props) {
  return (
    <div>
        <Banner/>
        <Card/>
        <ClassesCarousel/>
        <Testimonial/>
        <ZiraCharacs/>
        <OurTeam/>
        <MeetTeachers/>
        <Demo/>
    </div>
    
  );
}

export default Home;