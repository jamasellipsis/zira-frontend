import React, { useState, useEffect } from 'react';
import Learn from './Learn'
import { useHistory } from 'react-router-dom'
import ApiUsers from '../api/Users'
import './Dashboard.css'

function Dashboard(props) {
  const history = useHistory()
  const [classes, setClasses] = useState(null)

  useEffect(() => {
    if (!classes && props.auth.userData) {
      ApiUsers.getClasses(props.auth.userData.id)
        .then(response => {
          setClasses(response.data)
        })
    }
  })

  return (
    <div>
      {!props.auth.isAuthenticated ? history.push('/') : 
      <div className='d-flex classDashboard' >
          <div className='d-flex flex-column col-lg-3 col-md-12 border-right border-secondary p-0'> 
            <div className='d-flex flex-column overflow-auto mt-3 pb-3 text-left border-bottom border-secondary pl-3' style={{height: '33%'}}>
              <h5> Past classes </h5>
              {!classes ? <p></p> :
                classes.map(clas => {
                  return clas.user_classes[0].status === 'past' ?
                    (<p>{clas.name}</p>)
                  : <></>
                })}
            </div>
            <div className='d-flex flex-column overflow-auto mt-3 pb-3 text-left border-bottom border-secondary pl-3' style={{height: '33%'}}>
              <h5> Current classes </h5>
              {!classes ? <p></p> :
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