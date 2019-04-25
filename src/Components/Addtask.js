// Code to do a Task Component for the ToDo App
import react, {Component } from 'react';

class addTask extends Component {

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