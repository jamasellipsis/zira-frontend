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
            <div className='d-flex flex-column w-100' >
                <Login auth={props.auth} openModal={openLogin} setOpenModal={setOpenLogin} />
                <Alert show={openAlert} setShow={setOpenAlert} />
                <div className='d-flex justify-content-between m-3' >
                    <div className='d-flex flex-column justify-content-around pr-5  col-lg-8' >
                        <h1 className='text-left mb-3'>{classObj.name}</h1>
                        <p className='text-left' >{classObj.description}</p>
                        <h4 className='text-left'>{teacher.first_name + ' ' + teacher.last_name } </h4>
                        <button onClick={enroll} className="btn btn-primary btnZira w-50 mt-4">Enroll now!!!!!</button>
                    </div>
                    <img src={'https://zira-backend.s3-sa-east-1.amazonaws.com/' + classObj.class_photo} className='col-lg-4 pl-0' alt='class-img' />
                </div>
            </div>
            /* In case of the code passed as params doesn't exist */
            : <div><h1>This code of class doesn't exist</h1></div>
}

export default Class;