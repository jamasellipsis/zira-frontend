import React from 'react'; 
  
function InputPhoto(props) { 
    const onFileChange = event => {
      props.setPhoto(event.target.files[0]);
    }
    return ( 
        <div>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={onFileChange}/>
                <label className="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div> 
    ); 
  } 
  
  export default InputPhoto; 