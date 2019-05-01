// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class ExistingTasks extends Component {

    render() {
        return (
            <div>
                <p><b>A FIRST TASK</b>
                    <input type="submit" value="DONE"/>
                    <input type="submit" value="DEL" />
                </p>
                    
                <p><b>A SECOND TASK</b>
                    <input type="submit" value="DONE" />
                    <input type="submit" value="DEL" />
                </p> 

            </div>
        );
    }
}
export default ExistingTasks;