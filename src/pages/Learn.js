import React from 'react';
import ClassCard from '../components/simple_comp/class_card_search'

function Learn() {
  return (
    <div>
      <h2 className='text-left ml-3 mt-2' > Find Classes </h2>
      <form className="form-inline d-flex justify-content-start md-form form-sm border w-50 ml-3 mt-3 " style={{borderRadius:'10px'}}>
        <i className="fas fa-search ml-3" aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75 bg-transparent" type="text" placeholder="Any topic or teacher"
          aria-label="Search"/>
      </form>
      <ClassCard/>
      <ClassCard/>
    </div>
  );
}

export default Learn;