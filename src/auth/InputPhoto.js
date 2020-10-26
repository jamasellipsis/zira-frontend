import React, { useState } from 'react'; 
  
function InputPhoto(props) {
    const [ImagePhoto, setImage] = useState(require("../assets/icons/profile_photo.svg"))
    const onFileChange = event => {
      props.setPhoto(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]))
    }
    return (
      <>
        <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" onChange={onFileChange}/>
            <label className="custom-file-label" for="customFile">Profile Photo</label>
        </div>
        <img src={ImagePhoto} className="m-3 px-2" style={{maxWidth:"70%"}}></img>
      </>
    ); 
  } 
  
  export default InputPhoto;