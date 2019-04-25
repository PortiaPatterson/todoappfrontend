// Code to add a Header component for the ToDo App

import react, {Component } from 'react';

class AddHeader extends Component {

    render () {
        return (
            <div className="row div2">
                <div className="col-sm-12">
                    <h1><b>My To Do Application</b></h1>
                </div>
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
export default AddHeader;