import React from 'react'; 
  
function InputPhoto(props) { 
    const onFileChange = event => {
      props.setPhoto(event.target.files[0]);
    }
    return ( 
        <div> 
            <div> 
                <input type="file" onChange={onFileChange} />
            </div> 
            {/* {this.fileData()}  */}
        </div> 
    ); 
  } 
  
  export default InputPhoto; 