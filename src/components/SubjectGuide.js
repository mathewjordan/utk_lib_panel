import React, {Component} from 'react';

class SubjectGuide extends Component {

    render() {

        return (
            <div className="utk-panel--subject-guide">
                <div className="utk-subject-guide">
                    <h4>{this.props.activeSubject}</h4>
                    <p className="description">For disciplines relating to <a href="#">Anatomy Table</a>, <a href="#">Biology</a> and <a href="#">Environment Studies</a>.</p>
                </div>
            </div>
        )
    }
}

export default SubjectGuide;
