import { Modal, Form, Button, InputGroup, FormControl  } from 'react-bootstrap' 
import React, {useState} from 'react';
import { Auth } from 'aws-amplify'
/* import Alerta from '../components/complex_comp/Alert' */


function Register(props) {
    const [openModal, setOpenModal] = useState(props.open)
    const [error, setError] = useState({cognito: null})

    const submit = async e => {
        e.preventDefault()
        // Get info from form and store it inside userData 
        const formData = new FormData(e.target),
            userData = Object.fromEntries(formData.entries())

        // AWS cognito
        const { name, username, email, password } = userData

        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email: email,
                    name: name
                }
            })
            setError({cognito: null})
        }catch(error){
            setError({cognito: error.message})
        }
    }

    return (
        <>
        <div >
            <Button className="nav-link ml-2 btnSignup" onClick={() => setOpenModal(true)}>Sign up</Button>
            <Modal show={openModal} onHide={() => setOpenModal(false)}>
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
                    <FormControl name='name' placeholder="Name"/>
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