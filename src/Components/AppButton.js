// Code to add Buttons component for the ToDo App

import React, {Component } from 'react';

class AppButton extends Component {

    render () {
        return (
        
                    // <h1><b>My To Do Application</b></h1>
                <div>
                {/* <div className=".button-div"> */}
                    <input type="submit" value="DONE" />
                    <input type="submit" value="DEp" />
                {/* </div> */}
                </div>
    // Example code from class 
            // <div className="row addTaskRow">
            //     <div className="col-8">
            //         <input type="text" />
            //         </div>
            //     <div className="col-4">
            //         <input type="button" value ="Add"/>        
            //         </div>
            //     </div>

        );
    }
}
export default AppButton;