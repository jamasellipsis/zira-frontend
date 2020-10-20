import React, {useState} from 'react'
import { Modal, Form, Button, InputGroup, FormControl } from 'react-bootstrap' 

function Alerta(props) {
    const [show, setShow] = useState(true);
  

    return (
        <Modal show={props.show} 
          onHide={() => props.setShow(false)} >
          <Form className='p-5' >
            <div className='text-center' >
              
              <Button variant="primary" className='mt-4 btnZira'> {props.btnTitle} </Button>
            </div>
          </Form>
        </Modal>
    )
  }


export default Alerta
