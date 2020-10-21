import React, { useState, useEffect } from 'react';
import Learn from './Learn'
import { useHistory } from 'react-router-dom'
import ApiUsers from '../api/Users'
import './Dashboard.css'

function Dashboard(props) {
  const history = useHistory()
  const [classes, setClasses] = useState(null)
  const [user, setUser] = useState()

  useEffect(() => {
    if (!user) {
      ApiUsers.getUserByName(props.auth.user.username).then((res) => {setUser(res.data[0])})
    }
    if (!classes && user) {
      ApiUsers.getClasses(user.id)
        .then(response => {
          setClasses(response.data)
        })
    }
  })
  console.log("these are the classes---->", classes);
  return (
    <div>
      {!props.auth.isAuthenticated ? history.push('/') : 
      <div className='d-flex classDashboard' >
          <div className='container col-lg-3 col-12 border-right border-secondary p-0'> 
            <div className='d-flex flex-column overflow-auto mt-3 pb-3 text-left border-bottom border-secondary pl-3' style={{maxHeight: '33%'}}>
              <div className="row p-2 mb-2" style={{backgroundColor:"#40b9c1", width:"100%"}}>
                <h4 className="light-text"> Past classes </h4>
              </div>              
              {!classes ? <p>No past classes</p> :
                classes.map(clas => {
                  return clas.user_classes[0].status === 'past' ?
                    (<p>{clas.name}</p>)
                  : <></>
                })}
            </div>
            <div className='d-flex flex-column overflow-auto mt-3 pb-3 text-left border-bottom border-secondary pl-3' style={{maxHeight: '33%'}}>
              <div className="row p-2 mb-2" style={{backgroundColor:"#40b9c1", width:"100%"}}>
                <h4 className="light-text"> Current classes </h4>
              </div>
              {!classes ? <p>No current classes</p> :
                classes.map(clas => {
                  return clas.user_classes[0].status === 'current' ?
                    (<p>{clas.name}</p>)
                  : <></>
                })}
            </div>
          </div>
          <Learn className='col-lg-9 col-md-12 overflow-auto'/>
      </div>}
    </div>
  );
}

export default Dashboard;