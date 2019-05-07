import React, { Component } from 'react';
// These files are imported from the components folder
import AppHeader from './Components/AppHeader';
import NewTask from './Components/NewTask';
import ExistingTasks from './Components/ExistingTasks';
import TaskTally from './Components/TaskTally';
//This file is the CSS styling file that holds all the formatting details
import './App.css';
// file imported so that you can use someone else's code to create a unique id
import uuidv1 from 'uuid/v1';
import { PassThrough } from 'stream';

class App extends Component {
  // this code allows the New Task details added in the NewTask component to be displayed here
  state = {
    tasks: []
  }
// this is how to define a function using lastest methodology ES6, and it maintainss a link to ther term
// 'this' so it is defined
  newTask = (newTaskText) => {
    let existingTaskList = this.state.tasks;
    

    // this allows us to hold a unique number for each task
    const taskId = uuidv1();

    // this 
    const currentTask = {
      currentTaskDescr: newTaskText,
      id: taskId,
      completed: false
    };

    existingTaskList.push(currentTask);

    this.setState({ tasks: existingTaskList });
  }

  // creates a function to delete a particular task
    deleteTask = (taskId) => {
    const currentTaskList = this.state.tasks;

    const filteredTask = currentTaskList.filter(function (item, index) {
      return item.id !== taskId;
    });

    this.setState({
      tasks: filteredTask
    });
    } 
    // creates a function that completes a particular task when it's been 
    // clicked on the ExistingTask component
      //

  render() {


    return ( 
      // This brings in the Bootstrap and App.css style stuff, the text in turquoise between the div 
      //sections is the individual component files that are being called eg AppHeader
      <div id="div1" className="container">

        <div className="row div2">
          <div className="col-sm-12">
            <AppHeader />
          </div>
        </div>
        <div className=" row div2">
          <div className="col-sm-12">
            {/* This is taking the value from the text entered in the text box, 
      it's also in NewTask component file */}
            <NewTask newTaskFunction = {this.newTask} />
          </div>
        </div>

        <div className="row div2">
          <div class="col-sm-12">
            <TaskTally taskTally={this.state.tasks.length} />
          </div>
        </div>

        {
          // this is looping through the array 'tasks' created in 'state' at the top and then returning
          // the tasks line by line so we can see them. So 'task' is an individual instance of each record
          // could be given any name like footPatrol, so 'this' takes the value of whatever particular thing
          // you are doing
          this.state.tasks.map( (item, index) => {
            return <ExistingTasks task={item} key={index} deleteTask={this.deleteTask} //completeTask={this.completeTask} 
            />
        })
        }

      </div>
    );
  }
}

export default App;