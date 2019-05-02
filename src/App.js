import React, { Component } from 'react';
// These files are imported from the components folder
import AppHeader from './Components/AppHeader';
import NewTask from './Components/NewTask';
import ExistingTasks from './Components/ExistingTasks';
import TaskTally from './Components/TaskTally';
//This file is the CSS styling file that holds all the formatting details
import './App.css';


class App extends Component {
// this code allows the New Task details added in the NewTask component to be displayed here
state = {
  tasks:[]
}

newTask(newTaskText) {
  let existingTaskList = this.state.tasks;
  existingTaskList.push(newTaskText);
  this.setState({tasks: existingTaskList});
}


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
            <NewTask newTaskFunction={this.newTask.bind(this)}/> 
          </div>
        </div>

        <div className="row div2">
          <div class="col-sm-12">
            <TaskTally taskTally = {this.state.tasks.length} />
          </div>
        </div>

         {
        // this is looping through the array 'tasks' created in 'state' at the top and then returning
        // the tasks line by line so we can see them
          this.state.tasks.map(function(item, index) {
              return<ExistingTasks  existingTaskList = {item} key = {index} />
             })
          } 
          
      </div >
    );
  }
}

export default App;