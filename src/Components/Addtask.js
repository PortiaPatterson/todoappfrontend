// Example code for how you might do a new component for the ToDo App

import react, {Component } from 'react';

class AddTask extends Component {

    render () {
        return (
            <div className="row addTaskRow">
                <div className="col-8">
                    <input type="text" />
                    </div>
                <div className="col-4">
                    <input type="button" value ="Add"/>        
                    </div>
                </div>

        );
    }
}
export default AddTask;