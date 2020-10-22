import React, { useEffect } from 'react';
import ApiUsers from '../api/Users'
import './UserProfile.css'


function UserProfile(props) {
    /* const [openAlert, setOpenAlert] = useState({
        open: false,
        description: ''
    }) */

    useEffect(() => {
        if (typeof props.auth.userData === 'undefined') {
            ApiUsers.getUserByName(props.auth.user.username)
                .then(res => {props.auth.setUserData(res.data[0]); console.log(res.data[0])})
        }
    })


    return (
        <div className='Body'>
            {props.auth.userData &&
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={'https://zira-backend.s3-sa-east-1.amazonaws.com/' + props.auth.userData.profile_photo} alt="Admin" className="rounded-circle" width="150"/>
                                        <div className="mt-3">
                                            <h4>{props.auth.userData.first_name}</h4>
                                            <button class="btn btn-outline-primary">Update profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Nickname</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {props.auth.userData.username}
                                        </div>
                                    </div>
                                <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {props.auth.userData.first_name + props.auth.userData.last_name}
                                        </div>
                                    </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                     {props.auth.userData.email}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Birth date</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.auth.userData.birth_date}
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default UserProfile;