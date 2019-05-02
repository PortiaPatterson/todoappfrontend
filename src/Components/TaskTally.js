// Component file to work out how many tasks there are that need to be done for the ToDo App

import React, {Component } from 'react';

class TaskTally extends Component {

    render () {
        return (
            <div>
                <h4>There are {this.props.taskTally} Tasks to do.</h4>
            </div>

        );
    }
}
export default TaskTally;