import React, {useState} from 'react'
import { Button, Alert } from 'react-bootstrap'


function Alerta(props) {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success" className='alerta'>
        <Alert.Heading>{props.title}</Alert.Heading>
          <p>
            {props.description}
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
                {props.close || 'Close'}
            </Button>
          </div>
        </Alert>
      </>
    );
  }


export default Alerta
