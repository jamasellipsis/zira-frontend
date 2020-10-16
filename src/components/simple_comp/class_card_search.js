import React from 'react';


function ClassCardSearch() {
    return (
        <div className='d-flex justify-content-start border-bottom border-secondary' >
            <img src='https://image.freepik.com/foto-gratis/amigos-camisetas-hablando-calle_23-2148218922.jpg' className='w-25 h-25 m-4' alt='class-img' />
            <div className='d-flex justify-content-around flex-column m-4 overflow-auto w-50' >
                <h2 className='m-0 text-left' > Titulo </h2>
                <p className='m-0 text-left'> In this one time class, students will learn about the stock market and what it means to invest in stocks </p>
                <div className='d-flex justify-content-between' >
                    <p className='m-0'> 60 Minuts </p>
                    <p className='m-0'> 1 - 10 people </p>
                    <p className='m-0'> $10 / Class </p> 
                </div>
            </div>
        </div>    
    )
}

export default ClassCardSearch;