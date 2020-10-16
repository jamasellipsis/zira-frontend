import React from 'react';
import Banner from '../components/complex_comp/banner'
import Card from '../components/complex_comp/card_info'
import Testimonial from '../components/complex_comp/testimonial'
import Demo from '../components/complex_comp/demo';


function Home(props) {
  return (
    <div>
        <Banner/>
        <Card/>
        <Testimonial/>
        <Demo/>
    </div>
    
  );
}

export default Home;