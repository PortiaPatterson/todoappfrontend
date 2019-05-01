// Component file to work out how many tasks there are that need to be done for the ToDo App

import React, {Component } from 'react';

class TaskTally extends Component {

    render () {
        return (
            <div>
                <h4>There are {this.props.taskTally} Tasks to do.</h4>
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
export default TaskTally;