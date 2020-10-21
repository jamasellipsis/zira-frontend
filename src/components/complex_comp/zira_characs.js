import React from 'react';


const characs = [{
    photourl:require('../../assets/sample_profile_photos/interaction.jpg'),
    title:"Interactivity",
    description:"Zira allows video and voice interactions between participants inside the virtual rooms, almost like in a real classroom"
},
{
    photourl:require('../../assets/sample_profile_photos/interaction.jpg'),
    title:"Networking",
    description:"You can get in the classes before it begins, and can stay after it finishes, the perfect time for getting new contacts and friends"
},
{
    photourl:require('../../assets/sample_profile_photos/interaction.jpg'),
    title:"From Everywhere",
    description:"You can teach and learn from everywhere around the world"
}];

class ZiraCharacs extends React.Component{
    render (){
        return (
            <div className="container-fluid my-4">
                <h2>Create High Engaging Live Classes</h2>
                <div className="row mt-4">
                    {characs.map((i) => {
                        return(
                            <div className="col-sm-4">
                                <div className="card border-0">
                                    <img className="img-fluid rounded-circle w-50 mx-auto" alt="" src={i.photourl}></img>
                                    <div className="card-body">
                                        <h3 className="card-title">{i.title}</h3>
                                        <p className="card-text">{i.description}</p>
                                    </div>
                                </div>
                            </div>        
                        )
                    })
                    }                
                </div>
            </div>
        )}
}

export default ZiraCharacs;