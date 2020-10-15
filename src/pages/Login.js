import React from 'react';
import Navbar from '../components/complex_comp/navbar_nologged';
import Footer from '../components/complex_comp/footer';

function Login() {
  return (
    <div>
        <Navbar/>
        <p>This is Login</p>
        <Footer/>
    </div>
  );
}

export default Login;