import React from 'react';


function ClassCardSearch(props) {
    console.log(props)
    return (
        <div className='d-flex justify-content-start border-bottom border-secondary' >
            <img src={'https://zira-backend-b.s3-sa-east-1.amazonaws.com/' + props.class.class_photo} className='w-25 h-25 m-4' alt='class-img' />
            <div className='d-flex justify-content-around flex-column m-4 overflow-auto w-50' >
                <h2 className='m-0 text-left' > {props.class.name} </h2>
                <p className='m-0 text-left'> {props.class.description} </p>
            </div>
        </div>    
    )
}

export default ClassCardSearch;