import React from 'react'
import { Modal, Form, Button} from 'react-bootstrap' 

function Alerta(props) {

    return (
        <Modal show={props.show.open} 
          onHide={() => props.setShow({open: false})} className='w-100'>
          <Form className='p-5' >
            <div className='text-center'>
              <h2>{props.show.description}</h2>
              {props.btn && <Button variant="primary" className='mt-4 btnZira w-100' onClick={() => props.setShow(false)} > {props.btnTitle} </Button>}
            </div>
          </Form>
        </Modal>
    )
  }


export default Alerta
