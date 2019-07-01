import React, {Component} from 'react';

import SubjectMini from "./SubjectMini";

class ResearchToolsMini extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="utk-panel--research-tools">
                <div className="utk-research-tools">
                    <SubjectMini activeSubject={39783} />
                    <SubjectMini activeSubject={39811} />
                </div>
            </div>
        )
    }
}

export default ResearchToolsMini;
