import React from 'react';


const Demo = () => {
    return (
        <div className="row"  style={{backgroundColor:"#7F8585"}}>
          <div className="col-sm-12">
            <div style={{height:"4rem"}}>
                <h1 className="light-text text-center py-4" style={{fontWeight:"bold"}}>Demo</h1>
            </div>
            <div class="embed-responsive embed-responsive-16by9 mx-auto my-auto">
                <iframe class="embed-responsive py-5" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen title="DemoZira"></iframe>
            </div>
          </div>
        </div>
    );
}

export default Demo;