import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Something wen't wrong.</h4>
                <p>The subject you have selected does not have data associated with it.</p>
            </React.Fragment>
        )
    }
}

export default Error;
