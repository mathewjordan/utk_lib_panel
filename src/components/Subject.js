import React, {Component} from 'react';
import _ from 'lodash';

import {DataAssets} from '../data/DataAssets'
import SubjectAssets from "./SubjectAssets";
import Error from "./Error";

class Subject extends Component {

    componentDidUpdate() {
        const current = this.props.activeSubject

        if (current) {
            const key = "utk_lib_panel_recent"
            const recent = JSON.parse(sessionStorage.getItem(key))
            let store = [current]

            if (recent)
                store = _.concat([current], _.slice(recent, 0, 6));

            sessionStorage.setItem(key, JSON.stringify(_.uniqBy(store, 'id')))
        }
    }

    renderSubject (data, active) {

        if (active) {
            const subject = data.subjects[_.findIndex(data.subjects, {
                'id': active.id
            })]

            if (subject)
                return <SubjectAssets subject={subject} />
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
                    {this.renderSubject(DataAssets, this.props.activeSubject)}
                </div>
            </div>
        )
    }
}

export default Subject;
