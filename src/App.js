import React, { Component } from 'react';
// These files are imported from the components folder
import AppHeader from './Components/AppHeader';
import NewTask from './Components/NewTask';
import ExistingTasks from './Components/ExistingTasks';
import TaskTally from './Components/TaskTally';
//This file is the CSS styling file that holds all the formatting details
import './App.css';




class App extends Component {
  render() {

    return (
    // This brings in the Bootstrap and App.css style stuff
       <div id ="div1" className="container">

          <div className="row div2">
            <div className="col-sm-12">
              <AppHeader />
            </div>
          </div>

          <div className="row div2">
              <div className="col-sm-12">
                <NewTask />
              </div>
            </div>

            <div className="row div2">
              <div class="col-sm-12">
               <TaskTally />
              </div>
            </div>

            <div className="row div2">
              <div className="col-sm-12">
                <ExistingTasks />
              </div>
            </div>

       </div>
    );
  }
}

export default App;
