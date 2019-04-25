// Code to do a Task Component for the ToDo App
import React, { Component } from 'react';

class NewTask extends Component {

    render() {
        return (
            <div>
                <h3>Please Enter a Task</h3>
                <form>
                    <input type="text" name="Task input box" value="" />
                    <input type="submit" value="ADD" />
                </form>

            </div>

        );
    }
}
export default NewTask;