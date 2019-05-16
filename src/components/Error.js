import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <div>
                <h4>Something wen't wrong.</h4>
                <p>The subject you have selected does not have data associated with it.</p>
            </div>
        )
    }
}

export default Error;
