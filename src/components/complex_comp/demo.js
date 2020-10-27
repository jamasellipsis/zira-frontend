import React from 'react';


const Demo = () => {
    return (
        <div className="row"  style={{backgroundColor:"#9DA6A6"}}>
          <div className="col-sm-12">
            <div style={{height:"4rem"}}>
                <h1 className="light-text text-center py-4" style={{fontWeight:"bold"}}>Demo</h1>
            </div>
            <div class="embed-responsive embed-responsive-1by1 w-50 my-3 mx-auto">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    );
}

export default Demo;