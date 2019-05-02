// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class ExistingTasks extends Component {

    render() {
        return (
            <div className="row myleft-div">
                {/* <h4>Your Task List</h4> */}
                <div className="col-sm-12 col-md-6">
                    {/* this displays any task details given */}
                    {this.props.existingTaskList}
                </div>
                <div className="col-sm-6 col-md-3">
                    <button type="button">DONE</button>
                </div>
                <div className="col-sm-6 col-md-3" >
                    <button type="button">DELETE</button>
                </div>

            </div>
        );
    }
}
export default ExistingTasks;