// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class ExistingTasks extends Component {

    render() {
        return (
            <div className="row myleft-div">
                {/* <h4>Your Task List</h4> */}
                <div className="col-sm-12 col-md-4">
                    {/* this displays any task details given */}
                    {/* this will use a Boolean value that will do whatever is in the 1st option, which is to
                    use the style class .completed which is defined in App.css to set the text to red and 
                    strike-through it if the task has been completed i.e. it's true 
                    and whatever's in the 2nd option if it's false */}
                    <p className ={this.props.completed ? "completed capitalise":"notcompleted capitalise"}> {this.props.currentTaskDescr}</p>
                
                </div>
                /* date prop value added in */
                <div className="col-sm-12 col-md-2">
                    {/* this displays any task details given */}
                    {/* this will use a Boolean value that will do whatever is in the 1st option, which is to
                    use the style class .completed which is defined in App.css to set the text to red and 
                    strike-through it if the task has been completed i.e. it's true 
                    and whatever's in the 2nd option if it's false */}
                    <p className ={this.props.date }></p>
                </div> 
                
                // <div className="col-sm-12 col-md-6">
                //     {/* this displays any task details given */}
                //     {/* this will use a Boolean value that will do whatever is in the 1st option, which is to
                //     use the style class .completed which is defined in App.css to set the text to red and 
                //     strike-through it if the task has been completed i.e. it's true 
                //     and whatever's in the 2nd option if it's false */}
                //     <p className ={this.props.task.completed ? "completed capitalise":"notcompleted capitalise"}> {this.props.currentTaskDescr}</p>
                
                // </div>
                <div className="col-sm-6 col-md-3">
                {/* this passes the id of the record to be completed to the completeTask function 
                on the App.js.NOTE THE onClick is done in 1 go instead of going to another function to send 
                the details to the App.js file as is done on the NewTask component. This way is neater */}
                    <button type="button" onClick={() => this.props.completeTask(this.props.id)}
                    >DONE</button>
                </div>
                <div className="col-sm-6 col-md-3" >
                {/* this will take the id value from the task chosen to be deleted and 
                // then pass it to the App component so it is filtered out when the looping
                // is done to delete a particular task. You must pass any data u require to the function
                explicitly eg this.props.deleteTask(this.props.task.id, this.props.task.currentTaskDescr */}
                    <button type="button" onClick ={() => this.props.deleteTask(this.props.id, this.props.currentTaskDescr)}>DELETE</button>
                </div>

            </div>
        );
    }
}
export default ExistingTasks;