import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import ApiClasses from '../api/Classes'
import ApiUsers from '../api/Users'
import Alert from '../components/complex_comp/Alert'
import "react-datepicker/dist/react-datepicker.css";
import InputPhoto from '../auth/InputPhoto'


function CreateClass(props) {
    const history = useHistory()
    const [Data, setData] = useState({
        description: '',
        name: '',
        cost: '', 
        date_start: new Date(),
        date_end: new Date(),
        status: 'Active',
        teacherId: null,
        class_photo: null
    })
    const [openAlert, setOpenAlert] = useState({
        open: false,
        description: ''
    })
    function setPhoto(photo) {
        setData({...Data, class_photo: photo})
    }


    function submit () {

        if (Data.class_photo) {
            const data = new FormData();
            data.append( 
                "class_photo", 
                Data.class_photo,
                Data.class_photo.name
            );
            data.append('description', Data.description)
            data.append('name', Data.name)
            data.append('cost', Data.cost)
            data.append('date_start', Data.date_start)
            data.append('date_end', Data.date_end)
            data.append('status', Data.status)
            data.append('teacherId', Data.teacherId)
            ApiClasses.createClass(data)
            .then(response => {
                setTimeout(function() {
                    history.push('/dashboard')
                  }, 2000);
                  setOpenAlert({open: true, description: 'Your class was created successfully'})
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else { 
            setOpenAlert({open: true, description: 'set a class photo'})
            return
        }

        
    }

    useEffect(() => {
        if (!Data.teacherId) {
            ApiUsers.getUserByName(props.auth.user.username).then((res) => {setData({...Data, teacherId:res.data[0].id})})
          }
    })

    return !props.auth.isAuthenticated ? history.push('/') :
    <>
            <Alert show={openAlert} setShow={setOpenAlert} />
            <div className='container'>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={e => {setData({...Data, name: e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label for="cost">Cost</label>
                    <input type="text" className="form-control" id="cost" onChange={e => {setData({...Data, cost: e.target.value})}}/>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="3" onChange={e => {setData({...Data, description: e.target.value})}}></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor="date_start">Start date</label>
                    <DatePicker id="date_start" selected={Data.date_start} onChange={date => setData({...Data, date_start: date})} className='m-3'/>
                    <label htmlFor="date_end">End date</label>
                    <DatePicker id="date_end" selected={Data.date_end} onChange={date => setData({...Data, date_end: date}  )} className='m-3'/>
                </div>
                <div className='form-group'>
                    <InputPhoto setPhoto={setPhoto} />
                </div>
                <div>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
            </>
}

export default CreateClass;