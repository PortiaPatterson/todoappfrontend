// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class ExistingTasks extends Component {

    render() {
        return (
            <div className="row myleft-div">
                {/* <h4>Your Task List</h4> */}
                <div className="col-sm-12 col-md-6">
                    {/* this displays any task details given */}
                    {this.props.task.currentTaskDescr}-{this.props.task.completed ? "Yes":"No"}
                </div>
                <div className="col-sm-6 col-md-3">
                {/* this passes the id of the record to be completed to the completeTask function 
                on the App.js.NOTE THE onClick is done in 1 go instead of going to another function to send 
                the details to the App.js file as is done on the NewTask component. This way is neater */}
                    <button type="button" onClick={() => this.props.completeTask(this.props.task.id)}>DONE</button>
                </div>
                <div className="col-sm-6 col-md-3" >
                {/* this will take the id value from the task chosen to be deleted and 
                // then pass it to the App component so it is filtered out when the looping
                // is done to delete a particular task */}
                    <button type="button" onClick ={() => this.props.deleteTask(this.props.task.id)}>DELETE</button>
                </div>

            </div>
        );
    }
}
export default ExistingTasks;