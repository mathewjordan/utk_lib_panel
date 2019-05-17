import React, {Component} from 'react';

class SubjectGuide extends Component {

    render() {

        const {guides} = this.props

        console.log(guides)

        return (
            <React.Fragment>
                <p className="description">Resources for <a href="#">Anatomy Table</a>, <a
                    href="#">Biology</a> and <a href="#">Environment Studies</a>.</p>
            </React.Fragment>
        )
    }
}

export default SubjectGuide;
