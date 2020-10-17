import React, { useEffect, useState } from 'react';
import ClassCard from '../components/simple_comp/class_card_search'
import ApiClasses from '../api/Classes'

function Learn() {
  const [data, setData] = useState([])

  useEffect(() => {
    ApiClasses.getAll()
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
    <div>
      <h2 className='text-left ml-3 mt-2' > Find Classes </h2>
      <form className="form-inline d-flex justify-content-start md-form form-sm border w-50 ml-3 mt-3 " style={{borderRadius:'10px'}}>
        <i className="fas fa-search ml-3" aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75 bg-transparent" type="text" placeholder="Any topic or teacher"
          aria-label="Search"/>
      </form>
      {data.map((value) => {
        return <ClassCard title= {value.name} description={value.description} time='10 hrs' max='muchas personas' price={value.cost}/>
      })}
    </div>
  );
}

export default Learn;