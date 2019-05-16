import React, {Component} from 'react';
import _ from 'lodash';

import {DataGuide} from '../data/DataGuide'
import SubjectGuideAssets from "./SubjectGuideAssets";
import Error from "./Error";

class SubjectGuide extends Component {

    componentDidUpdate() {

        const current = this.props.activeSubject
        const key = "utk_lib_panel_recent"
        const recent = JSON.parse(sessionStorage.getItem(key))
        let store = [current]

        if (recent)
            store = _.concat([current], _.slice(recent, 0, 5));

        sessionStorage.setItem(key, JSON.stringify(_.uniqBy(store, 'slug')))
    }

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
