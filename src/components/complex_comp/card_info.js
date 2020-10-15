import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="card-body">
            <h2 className="card-title" style={{fontWeight:"bold"}}>Interactive Live Classes</h2>
            <p className="card-text">Explore any interest over live video chat and interactive classes! Discover fun, social, and innovative learning experiences.</p>
            <p className="card-text">Classes from $10.</p>
            <a href="/learn" className="btn btn-primary btnZira">Find a Class</a>
            </div>
        </div>  
    );
}

export default Card;