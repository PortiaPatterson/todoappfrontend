// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class NewTask extends Component {
// 'state' allows us to make changes and track the value of those changes;
//  it says when the New Task description is entered these details 
// are set and then the details are passed to the newTaskFunction.
state = {
    // Empty variable created so that it can be filled later
    newTaskText: ""
}

// take in the New Task Text and then put this detail in the newTaskText variable created above, 'event'
// refers to the change happening, 'target' is the text box being typed in, 'value' is the detail
onTaskTextChanged = (event) => {
    this.setState({newTaskText: event.target.value});
}

// When the button Add New Task is clicked, pass the details from newTaskText variable to the 
// newTaskFunction in the App.js file. As it's a prop the details don't change, they're only passed,
// newTaskProp
onTaskAddedClicked = () => {
   this.props.newTaskProp(this.state.newTaskText);

 }

    render() {

        return (
            <div>
                <h4>Please Enter a Task</h4>
    {/* Set new onChange and onClick DOM events to be equal to the ones stated below,
    // they are also referred to in the 'state' statement above.
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