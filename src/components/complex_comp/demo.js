import React from 'react';


const Demo = () => {
    return (
        <div className="row"  style={{backgroundColor:"#cccccc"}}>
          <div className="col-sm-12" style={{backgroundColor:"white"}}>
            <div style={{height:"4rem"}}>
                <h1 className="light-text text-center py-4" style={{fontWeight:"bold", color: 'white'}}>Demo</h1>
            </div>
            <div class="embed-responsive embed-responsive-1by1 w-50 my-3 mx-auto">
            <iframe width="767" height="432" src="https://www.youtube.com/embed/4e9t6RNb_gU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    );
}

export default Demo;