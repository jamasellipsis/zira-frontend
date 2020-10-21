import React, { useEffect, useState } from 'react';
import ApiClasses from '../api/Classes'
import ApiUsers from '../api/Users'
import ApiUserClass from '../api/userClass'
import Alert from '../components/complex_comp/Alert'
import Login from '../auth/Login'


function Class(props) {
    const [classObj, setClass] = useState(null)
    const [teacher, setTeacher] = useState(null)
    const [openAlert, setOpenAlert] = useState({
        open: false,
        description: ''
    })
    const [openLogin, setOpenLogin] = useState(false)

    useEffect(() => {
        if (!classObj) {
            ApiClasses.getById(props.match.params.idClass)
            .then((response) => {
                setClass(response.data[0])              
            })
        }
        if (!teacher && classObj) {
            ApiUsers.getUserById(classObj.teacherId)
            .then((response) => {
                setTeacher(response.data[0])
            })
        }
    })

    const enroll = e => {
        e.preventDefault()
        if (!props.auth.isAuthenticated) {
            setOpenLogin(true)
            return
        }
        else{
            if (props.auth.userData.id !== classObj.teacherId) {
                ApiUserClass.joinClass({userId: props.auth.userData.id, classId: classObj.id, status: 'current'})
                .then(_ => {
                    setTimeout(function() {
                        setOpenAlert({open: false, description: 'Te has registrado!'})
                      }, 2000);
                    setOpenAlert({open: true, description: 'Te has registrado!'})
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                setOpenAlert({open: true, description:'No puedes registrate a tu misma clase'})
            }
        }
    }

    return classObj && teacher ?
            <div className='d-flex flex-column' >
                <Login auth={props.auth} openModal={openLogin} setOpenModal={setOpenLogin} />
                <Alert show={openAlert} setShow={setOpenAlert} />
                <div className='container d-flex justify-content-between' >
                    <div className='d-flex flex-column justify-content-around' >
                        <h1 className='text-left'>{classObj.name}</h1>
                        <p>{classObj.description}</p>
                        <h2 className='text-left'>{teacher.first_name + ' ' + teacher.last_name } </h2>
                        <button onClick={enroll} className="btn btn-primary btnZira w-50">Enroll now!!!!!</button>
                    </div>
                    <img src='https://image.freepik.com/foto-gratis/amigos-camisetas-hablando-calle_23-2148218922.jpg' className='w-25 h-25 m-4' alt='class-img' />
                </div>
                <div className='d-flex justify-content-around' style={{background: '#cccccc'}} >
                    <div className='p-3'>
                        <h3>Class Duration</h3>
                        <h4>duracion</h4>
                    </div>
                    <div className='p-3'>
                        <h3>Class Size</h3>
                        <h4>Cuanta people</h4>
                    </div>
                    <div className='p-3'>
                        <h3>Price per Learner (USD)</h3>
                        <h4>{classObj.cost}</h4>
                    </div>
                </div>
            </div>
            /* In case of the code passed as params doesn't exist */
            : <div><h1>This code of class doesn't exist</h1></div>
}

export default Class;