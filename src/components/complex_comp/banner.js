import React, {useState} from 'react';
import Register from '../../auth/Register'
import { Button } from 'react-bootstrap';
import './banner.css';

const Banner = (props) => {
    const [openSignUp, setOpenSignUp] = useState(false)
    return (
        <div>
            <div className="jumbotron jumbotron-image mb-0 landingjumbotron">
            </div>
            <Button className="nav-link mx-auto btnZira mt-3" onClick={() => setOpenSignUp(true)}>Join for free</Button>
            <Register auth={props.auth} openModal={openSignUp} setOpenModal={setOpenSignUp} />
        </div>
    );
} 

export default Banner;