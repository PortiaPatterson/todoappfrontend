import React, { Component } from 'react';
// These files are imported from the components folder
import AppHeader from './Components/AppHeader';
import NewTask from './Components/NewTask';
import ExistingTask from './Components/ExistingTask';
import TaskTally from './Components/TaskTally';
//This file is the CSS styling file that holds all the formatting details
import './App.css';
// file imported so that you can use someone else's code to create a unique id
import uuidv1 from 'uuid/v1';
import { PassThrough } from 'stream';

class App extends Component {
  // this code tells React that we will be using and managing data, and that we will be putting it 
  // into an array called tasks.
  state = {
    tasks: []
  }
  // this is how to define a function using lastest methodology ES6, and it maintainss a link to ther term
  // 'this' so it is defined
  newTask = (newTaskText) => {
    let existingTaskList = this.state.tasks;


    // this allows us to hold a unique number for each task
    const taskId = uuidv1();

    // this describes what an individual instance of something in the currentTask array 
    // should look like
    const currentTask = {
      currentTaskDescr: newTaskText,
      id: taskId,
      completed: false,
      date:"01-01-2019"
    };

    existingTaskList.push(currentTask);

    // change the data according to what ive just stated above
    this.setState({ tasks: existingTaskList });
  }

  // creates a function to delete a particular task,the detail from this is referred to in the
  // Render section below where it sends a prop called deleteTask(which is really a reference to the 
  // deleteTask function described below) to the ExistingTask component by using the code
  // deleteTask={this.deleteTask}, and this sends the outcome of whatever happened in deleteTask function
  // to the DELETE button section where it uses this code when the DELETE button is clicked
  // onClick ={() => this.props.deleteTask(this.props.task.id)}
  deleteTask = (taskId, currentTaskDescr) => {
    // this checks if you really want to delete the data and only goes ahead with the delete if you do
    const shouldDelete = window.confirm(`Are you sure you want to delete?  ${currentTaskDescr}`);
    if (shouldDelete === true){
    
    // this creates a new array that is populated with the data provided from the filter function
    const filteredTask = this.state.tasks.filter(function (item, index) {
      return item.id !== taskId;
    });

    this.setState({
      tasks: filteredTask
    });
  }
  }
  // creates a function that completes a particular task that's been 
  // clicked DONE on the ExistingTask component
  
  completeTask = (taskId) => {
    // this needs to return the whole individual record not just a part so although you check that 
    // complete part has been ticked, you MUST SEND THE WHOLE RECORD so that it can be added a record
    // to the new array, updatedTask which is created by the .map transformation
     const updatedTask = this.state.tasks.map(function (item, index) {
       if (item.id === taskId ) {
              item.completed = true;
              return item;
       } else {
         return item;
       }
  
     });
     console.log(updatedTask);

   this.setState({
      tasks: updatedTask
     });

};


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
          <NewTask newTaskFunction={this.newTask} />
        </div>
      </div>

      <div className="row div2">
        <div className="col-sm-12">
          <TaskTally taskTally={this.state.tasks.length} />
        </div>
      </div>


      {/* // this is looping through the array 'tasks' created in 'state' at the top and then returning
      // the tasks line by line so we can see them. So 'task' is an individual instance of each record
      // could be given any name like footPatrol, so 'this' takes the value of whatever particular thing
      // you are doing. Remember when you see completeTask={this.completeTask}, the 1st completeTask 
      is the prop name or reference for the completeTask function which is enclosed in the brackets
      and has to be prefixed by this. so we get the right instance of the record*/}
      {/*Remember the ExistingTask component ONLY renders one instance of the array at a time; it onlu
      shows 1 line of data at time  */}
      {
        this.state.tasks.map((item, index) => {
          return <ExistingTask 
          currentTaskDescr={item.currentTaskDescr} 
          id={task.id}
          key={index} 
          completed = {item.completed}
          date={item.date} 
          deleteTask={this.deleteTask} 
          completeTask={this.completeTask} 
          
          />
        })
      }

    </div>
  )
} 
}


export default App;