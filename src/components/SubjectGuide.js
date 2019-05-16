import React, {Component} from 'react';

import {DataGuide} from '../data/DataGuide'
import SubjectGuideAssets from "./SubjectGuideAssets";
import Error from "./Error";

class SubjectGuide extends Component {

    renderSubjectGuide (data, active) {

        if (active) {
            const subject = data.subjects[_.findIndex(data.subjects, {
                'slug': active.slug
            })]

            if (subject)
                return <SubjectGuideAssets guide={subject} />
            else
                return <Error />
        } else {
            return null
        }
    }

    render() {

        return (
            <div className="utk-panel--subject-guide">
                <div className={`utk-subject-guide`}>
                    {this.renderSubjectGuide(DataGuide, this.props.activeSubject)}
                </div>
            </div>
        )
    }
}

export default SubjectGuide;
