// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class ExistingTasks extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-8">
                {/* this displays any task details given */}
                        {this.props.existingTaskList}
                </div>
                <div className="col-sm-6 col-md-2">
                    <button type="button">DONE</button>
                </div>
                <div className="col-sm-6 col-md-2" >
                    <button type="button">DELETE</button>
                </div>

            </div>
        );
    }
}
export default ExistingTasks;