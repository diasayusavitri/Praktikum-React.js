import React, { Component } from 'react'
import { Alert } from 'reactstrap';

class Bootstrap extends Component {
    constructor(props) {
        super (props)

        this.state = {
            
        }
    }

        render () {
        return (
        <div>
            <Alert color="primary">
                This is a primary alert - check it out!
            </Alert>
            <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
        </div>
        )
    }
} 
export default Bootstrap;