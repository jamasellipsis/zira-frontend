import React from 'react';
import TeachersCarou from './teachers_carou';

/* Meet Our Teachers section */
class MeetTeachers extends React.Component{
    render (){
        return (
            <div className="container-fluid pt-4">
                <div className="row">
                    <h2 className="mx-auto">Meet our Teachers</h2>    
                </div>
                <div className="row">
                    <TeachersCarou/>
                </div>
            </div>
        )}
}

export default MeetTeachers;