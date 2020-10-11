import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

function Menu () {
    return (
        <div className="container-fluid">
            <ul className='menu'>
                <Link className='option' to='/teach'>
                    <li>Teach</li>
                </Link>
                <Link className='option' to="/learn">
                    <li>Learn</li>
                </Link>
                <Link className='option' to='/login'>
                    <li>Login</li>
                </Link>
                <Link className='option' to='/join'>
                    <li>Join</li>
                </Link>
            </ul>
        </div>
    )
}


export default Menu
