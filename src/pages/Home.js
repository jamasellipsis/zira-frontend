import React from 'react';
import Navbar from '../components/complex_comp/navbar_nologged'
import Footer from '../components/complex_comp/footer'
import Banner from '../components/complex_comp/banner'
import Card from '../components/complex_comp/card_info'
import Testimonial from '../components/complex_comp/testimonial'
import Demo from '../components/complex_comp/demo';

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Card/>
        <Testimonial/>
        <Demo/>
        <Footer/>
    </div>
    
  );
}

export default Home;