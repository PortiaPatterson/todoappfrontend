import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// this file, Header.js is imported from the components folder
import Header from './Components/Header';

class App extends Component {
  render() {

    const headers = ["Header 1", "Header 2", "Header 3"];

    // The file that we just imported from the Component folder is used here:
     
    // You can add more headers but you must encapsulate them within 1 element like a div eg
    // <div>
    //   <Header headerText="To do App"/>
    //   <Header headerText="Geoff"/>
    //   <Header headerText="Susan"/>
    //   <Header headerText="Hello"/>
    // </div>

    // The code below is a more efficient way to do the code above.

    return (

      // This brings in the Bootstrap stuff
      
    <div className="container">
      { 
        headers.map(function(header, index) {
          return <Header headerText={header} key={index} />;
        })
      }
    </div>
    );
  }
}

export default App;
