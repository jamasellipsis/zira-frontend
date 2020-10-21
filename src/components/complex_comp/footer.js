import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import './footer.css';


const Footer = () => {
    return (
        <div className="container-fluid" style={{backgroundColor:"#40b9c1"}}>
            <div className="row">

                {/* Left column - Contact us form*/}
                <div className="col-lg-4 col-md-6 text-center my-2">
                    <h3 className="light-text" style={{marginTop:"5%", fontWeight:"bold"}}>Contact us</h3>
                    <Form className="px-4">
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="light-text">Name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label className="light-text">Phone</Form.Label>
                            <Form.Control type="number"/>
                        </Form.Group>
                        <Form.Label className="light-text">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <br />
                        <Button variant="primary" type="submit" className="btn btnSend">
                            Send
                        </Button>
                    </Form>
                </div>

                {/* Central column - Zira mission and social networks*/}
                <div className="col-lg-4 col-md-6 my-2">
                    <Navbar.Brand href="/" style={{marginTop:"5%"}}>
                        <img
                        alt='ZiraLogo'
                        src={require('../../assets/name_and_logo/WhiteLogo.png')}
                        width="30"
                        height="30"
                        className="d-inline-block align-top">
                        </img>
                    </Navbar.Brand>
                    <Navbar.Brand href="/">
                    <img
                    alt='ZiraLogo'
                    src={require('../../assets/name_and_logo/WhiteName.png')}
                    height="40"
                    className="d-inline-block align-top">
                    </img>
                    </Navbar.Brand>
                    <div className="container-fluid">
                        <br /> <br />
                        <p className="quotation-text light-text">This project was developed with passion and love for the 
                        Full-stack Developer program in Holberton School.</p>
                        <br /> <br />
                    </div>
                    
                    <div className="container">
                        <a href="https://www.instagram.com/?hl=es-la"><img
                        alt='Instagram'
                        src={require('../../assets/icons/instagram.png')}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        style={{margin:"10px"}}>
                        </img></a>
                        <a href="https://www.youtube.com/user/Google?hl=es"><img
                        alt='Youtube'
                        src={require('../../assets/icons/youtube.png')}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        style={{margin:"10px"}}>
                        </img></a>
                        <a href="https://es-la.facebook.com"><img
                        alt='Facebook'
                        src={require('../../assets/icons/facebook.png')}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        style={{margin:"10px"}}>
                        </img></a>
                        <a href="https://twitter.com/?lang=es"><img
                        alt='Twitter'
                        src={require('../../assets/icons/twitter.png')}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        style={{margin:"10px"}}>
                        </img></a>
                    </div>
                </div>

                {/*Right column - Contact info */}
                <div className="col-lg-4 col-md-12 my-lg-auto my-4">
                    <div className="row mx-auto justify-content-center">
                        <img
                            alt='Whatsapp'
                            src={require('../../assets/icons/whatsapp.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            style={{margin:"10px"}}>
                        </img>
                        <h4 className="light-text my-auto"> 318 372 2244</h4>
                    </div>
                    <div className="row mx-auto justify-content-center">
                        <img
                            alt='Email'
                            src={require('../../assets/icons/arroba.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            style={{margin:"10px"}}>
                        </img>
                        <h4 className="light-text my-auto"> unmail@zira.com</h4>
                    </div>
                    <div className="row mx-auto justify-content-center">
                        <img
                            alt='Location'
                            src={require('../../assets/icons/locationpin.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            style={{margin:"10px"}}>
                        </img>
                        <h4 className="light-text my-auto"> calle falsa 123</h4>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 light-text">© 2020 Copyright: Zira
            </div>          
        </div>
    );
};

export default Footer;