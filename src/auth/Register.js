import { Modal, Form, Button, InputGroup, FormControl  } from 'react-bootstrap' 
import React, {useState} from 'react';
import { Auth } from 'aws-amplify'
import ApiUsers from '../api/Users'
import InputPhoto from './InputPhoto'
import Alert from '../components/complex_comp/Alert'
import DatePicker from "react-datepicker";
import './Datepickers.css';


function Register(props) {
    const [error, setError] = useState({cognito: null})
    const [photo, setPhoto] = useState(null)
    const [openAlert, setOpenAlert] = useState({
        open: false,
        description: ''
    })
    const [userData, setUserData] = useState({birth_date: null})

    const submit = async e => {
        e.preventDefault()
        // Get info from form and store it inside userData 
        const formData = new FormData(e.target)
            setUserData({...userData, ...Object.fromEntries(formData.entries())})

        // AWS cognito
        const { first_name, username, email, password, last_name, birth_date } = userData

        
        try {
            let data = null
            if (photo) {
                data = new FormData();
                data.append( 
                    "profile_photo", 
                    photo,
                    photo.name
                );
                data.append('username', username)
                data.append('first_name', first_name)
                data.append('last_name', last_name)
                data.append('email', email)
                data.append('password', password)
                data.append('status', 'Active')
                data.append('birth_date', birth_date)
                console.log(data)
            }
            else { 
                setError({cognito: 'Pls set a profile photo'})
                return
            }
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email: email,
                    name: first_name
                }
            })
                        
            ApiUsers.singUpUser(data).then(() => {
                setOpenAlert({open: true, description: 'Te has registrado con exito, revisa tu correo :D'})
            })

            setTimeout(() => {
                props.setOpenModal(false)
            }, 2000)

            setError({cognito: null})
        }catch(error){
            console.log(error);
            setError({cognito: error.message})
        }
    }

    return (
        <>
        <div >
            <Modal show={props.openModal} onHide={() => props.setOpenModal(false)}>
            <Alert show={openAlert} setShow={setOpenAlert} />
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
                <InputGroup className="my-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/name.png')} width='20px' alt='username' /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name='username' placeholder="Username"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/name.png')} width='20px' alt='name' /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name='first_name' placeholder="First name"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/name.png')} width='20px' alt='name' /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name='last_name' placeholder="Last name"/>
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
                                
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className='gray'><img src={require('../assets/icons/calendar-black.svg')} width='20px' alt='password' /></InputGroup.Text>
                    </InputGroup.Prepend>

                        <DatePicker 
                            id="birth_date"
                            selected={userData.birth_date}
                            onChange={date => setUserData({...userData, birth_date: date}  )}
                            placeholderText="Birth Day"
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />

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