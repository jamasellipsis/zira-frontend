import React from 'react';
import ProfilePhoto from '../simple_comp/profile_photo'

const Testimonial = () => {
    return (
        <div className="container-fluid py-3" style={{backgroundColor:"#94D0D3"}}>
            <div className="row py-3 mx-5">
                    <ProfilePhoto photo={require('../../assets/sample_profile_photos/31.jpg')}/>
                    <p className="quotation-text mt-3">“It's wonderful to have access to such a wide range of interesting subjects taught by enthusiastic teachers in the comfort of our own home. I meet new people every class, create new valuable contacts and enjoy interactive classes.”
- Maria C, Garcia, ME</p>                    
            </div>
        </div>
    );
}

export default Testimonial;