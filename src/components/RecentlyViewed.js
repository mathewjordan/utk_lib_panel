import React, {Component} from 'react';

class RecentlyViewed extends Component {

    constructor(props) {
        super(props);

        this.state ={
            recent: null
        }
    }

    render() {

        if (this.state.return) {
            return (
                <div>
                    recently viewed
                </div>
            )
        } else {
            return null
        }
    }
}

export default RecentlyViewed;
