// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class NewTask extends Component {
// This allows us to make changes; it says when the New Task description is entered these details 
// are set and then the details are passed to the newTaskFunction.
state = {
    // Empty variable created so that it can be filled later
    newTaskText: ""
}

// take in the New Task Text and then put this detail in the newTaskText variable created above
onTaskTextChanged = (event) => {
    this.setState({newTaskText: event.target.value});
}

// When the button Add New Task is clicked, pass the details from newTaskText 
// variable to the newTaskFunction
onTaskAddedClicked

    render() {
        return (
            <div>
                <h4>Please Enter a Task</h4>
    {/* Set new onChange and onClick DOM events to be the ones stated to they are referred to above 
    in the 'state' section */}
                    <input type="text" onChange={this.onTaskTextChanged} />
                    <button type="button" onCLick={this.onTaskAddedClicked}>
                        Add New Task
                    </button>

            </div>

        );
    }
}
export default NewTask;