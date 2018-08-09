import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    render(){
        if(this.state.hasError) {
            return <h1>THERE IS AN ERROR!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;