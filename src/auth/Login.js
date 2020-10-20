import { Modal, Form, Button, InputGroup, FormControl } from 'react-bootstrap' 
import React, {useState} from 'react';
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'
import ApiUsers from '../api/Users'
import './Login.css'

function Login(props) {
  const history = useHistory()
  const [error, setError] = useState({cognito: null})

  const submit = async e => {
    e.preventDefault()
    const formData = new FormData(e.target),
          userData = Object.fromEntries(formData.entries())


    // AWS cognito
    const { username, password } = userData

    ApiUsers.getUserByName(username).then((res) => {props.auth.setUserData(res.data[0])})

    try {
      const user = await Auth.signIn(username, password)
      props.auth.setAuthStatus(true)
      props.auth.setUser(user)
      setError({cognito: null})
      history.push('/dashboard')
    }catch(error){
      setError({cognito: error.message})
    }
  }

    return (
    <div>
      <Modal show={props.openModal}
        onHide={() => props.setOpenModal(false)} >
        <Form className='p-5' onSubmit={submit} >
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
                <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/email.png')} width='20px' alt='username' /></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl name='username' placeholder="Username"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/password.png')} width='20px' alt='password' /></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control name='password' type="password" placeholder="Password" />
            </InputGroup>
            {/* <Form.Check name='check' type="checkbox" label="Check me out" className='mt-4 mb-4'/> */}
            <Button variant="primary" type="submit" className='mt-4 btnZira'> Log in </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Login;