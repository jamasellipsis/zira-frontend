import React from 'react';
import ProfilePhoto from '../simple_comp/profile_photo'

const Testimonial = () => {
    return (
        <div className="container-fluid" style={{backgroundColor:"#94D0D3"}}>
            <div className="row py-3">
                    <ProfilePhoto/>
                    <p className="quotation-text mt-3">“It's wonderful to have access to such a wide range of interesting subjects taught by enthusiastic teachers in the comfort of our own home. My kids also enjoy being able to interact through video conferencing not just with the teachers, but with fellow class mates.”
- Jennifer D., Augusta, GA</p>                    
            </div>
        </div>
    );
}

export default Testimonial;