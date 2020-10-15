import React from 'react';


function Home(props) {
  console.log(props.auth.user)
  return (
    <div>
        {props.auth.user && props.auth.isAuthenticated &&  (<p>Hola {props.auth.user.username} </p>)}
    </div>
    
  );
}

export default Home;