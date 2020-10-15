import React from 'react';
import { Container, Image } from 'react-bootstrap';

const ProfilePhoto = () => {
    return (
        <Container>
            <Image 
            src={require('../../assets/sample_profile_photos/31.jpg')}
            roundedCircle></Image>
        </Container>
    );
}

export default ProfilePhoto;