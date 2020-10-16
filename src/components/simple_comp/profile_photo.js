import React from 'react';
import { Container, Image } from 'react-bootstrap';

class ProfilePhoto extends React.Component{
    render(){
        return(
            <Container>
                <Image 
                src={this.props.photo}
                roundedCircle className="img-fluid"></Image>
            </Container>
        )}
};

export default ProfilePhoto;