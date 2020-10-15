import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-image" style={{backgroundImage:"url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80)"}}>
            <h2 className="mb-4 light-text text-left ml-5">
                Interactive Live Classes
            </h2>
            <a href="/join" className=" float-left btn btn-primary btnZira ml-5">Join for free</a>
            </div>
        </div>
    );
}

export default Banner;