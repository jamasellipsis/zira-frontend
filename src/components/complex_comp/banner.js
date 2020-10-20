import React, {useState} from 'react';
import Register from '../../auth/Register'
import { Button } from 'react-bootstrap';
import './banner.css';

const Banner = (props) => {
    const [openSignUp, setOpenSignUp] = useState(false)
    return (
        <div>
            <div className="jumbotron jumbotron-image mb-0" style={{backgroundImage:"url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80)"}}>
                <h2 className="mb-4 light-text text-left ml-5">
                    Interactive Live Classes
                </h2>
                <Button className="nav-link mx-lg-2 mx-auto btnSignup ml-5 mt-1" onClick={() => setOpenSignUp(true)}>Join for free</Button>
                <Register auth={props.auth} openModal={openSignUp} setOpenModal={setOpenSignUp} />
            </div>
        </div>
    );
}

export default Banner;