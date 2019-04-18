import React, { Component } from 'react';

// This is how we create our Header object for our Page by defining 
// it as a class using the function render.
class Header extends Component {
    
    render () {

        return (
        // this will be used to state the text here that is brought in from the App.js file 
            <h1 style={styles.header}>{this.props.headerText}</h1>
        );
    }
}

const styles = {
    // This allows you to state a colour that can be applied to any headers, one change here 
    // can applied overall.
    header : {
        color:"red"
    }

};
export default Header;