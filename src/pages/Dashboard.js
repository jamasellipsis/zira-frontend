import React from 'react';
import Learn from './Learn'
import { useHistory } from 'react-router-dom'
import './Dashboard.css'

function Dashboard(props) {
  const history = useHistory()
  return (
    <div>
      {!props.auth.isAuthenticated ? history.push('/') : 
      <div className='d-flex classDashboard' >
          <div className='d-flex flex-column col-lg-3 col-md-12 border-right border-secondary p-0'> 
            <div className='d-flex flex-column overflow-auto mt-3 pb-3 text-left border-bottom border-secondary pl-3' style={{height: '33%'}}>
            <h5> Past classes </h5>
            <p>Primera clase</p>
            <p>Primera clase</p>
            </div>
            <div className='d-flex flex-column overflow-auto mt-3 pb-3 text-left border-bottom border-secondary pl-3' style={{height: '33%'}}>
            <h5> Current classes </h5>
            <p>Primera clase</p>
            <p>Primera clase</p>
            </div>
            <div className='d-flex flex-column overflow-auto mt-3 pb-3 text-left border-bottom border-secondary pl-3' style={{height: '33%'}}>
            <h5> Future classes </h5>
            <p>Primera clase</p>
            <p>Primera clase</p>
            </div>
          </div>
          <Learn className='col-lg-9 col-md-12 overflow-auto'/>
      </div>}
    </div>
  );
}

export default Dashboard;