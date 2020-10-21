import { Modal, Form, Button, InputGroup, FormControl  } from 'react-bootstrap' 
import React, {useState} from 'react';
import { Auth } from 'aws-amplify'
import ApiUsers from '../api/Users'
import InputPhoto from './InputPhoto'
/* import Alerta from '../components/complex_comp/Alert' */


function Register(props) {
    const [error, setError] = useState({cognito: null})
    const [photo, setPhoto] = useState(null)

    const submit = async e => {
        e.preventDefault()
        // Get info from form and store it inside userData 
        const formData = new FormData(e.target),
            userData = Object.fromEntries(formData.entries())

        // AWS cognito
        const { first_name, username, email, password } = userData

        
        try {
            let formDataa = null
            if (photo) {
                formDataa = new FormData();
                formDataa.append( 
                    "myFile", 
                    photo,
                    photo.name
                );
            }
            const Data = {
                ...userData,
                profile_photo: formDataa
            }
            ApiUsers.singUpUser(formDataa)
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
            return
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email: email,
                    name: first_name
                }
            })
            
            
            setError({cognito: null})
            props.setOpenModal(false)
        }catch(error){
            console.log(photo);
            setError({cognito: error.message})
        }
    }

    return (
        <>
        <div >
            <Modal show={props.openModal} onHide={() => props.setOpenModal(false)}>
            <Form className='p-5' onSubmit={submit}>
                <div className='text-center' >
                <img src= {require('../assets/name_and_logo/GreenLogo.png')} className='mb-5' alt='Zira-logo' />
                {error.cognito && (
                    <div className="error container help is-danger">
                        <div className="row justify-content-center">
                        {error.cognito}
                        </div>
                    </div>
                )}
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/name.png')} width='20px' alt='username' /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name='username' placeholder="Username"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/name.png')} width='20px' alt='name' /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name='first_name' placeholder="Name"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/email.png')} width='20px' alt='email' /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name='email' placeholder="Email"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/password.png')} width='20px' alt='password' /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </InputGroup>
                <InputPhoto photo={photo} setPhoto={setPhoto} />
               {/*  <Form.Check name='check' type="checkbox" label="Check me out" className='mt-4 mb-4'/> */}
                <Button variant="primary" type="submit" className='mt-4 btnZira' > Sign up </Button>
                </div>
            </Form>
            </Modal>
        </div>
        </>
    );
    
}

export default Register;