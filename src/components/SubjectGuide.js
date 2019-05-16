import React, {Component} from 'react';

import {DataGuide} from './DataGuide'
import {Dropdown} from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import _ from 'lodash';
import SubjectGuideAssets from "./SubjectGuideAssets";
import Error from "./Error";

class SubjectGuide extends Component {

    renderSubjectGuide (subject) {
        if (subject)
            return <SubjectGuideAssets disciplines={subject.disciplines} assets={subject.assets} />
        else
            return <Error />

    }

    render() {

        const {activeSubject} = this.props;

        if (activeSubject) {

            const {slug, title} = activeSubject;
            const subject = DataGuide.subjects[_.findIndex(DataGuide.subjects, {
                'slug': activeSubject.slug
            })]

            return (
                <div className="utk-panel--subject-guide">
                    <div className={`utk-subject-guide utk-subject-guide--${slug}`}>
                        <h4>{title}</h4>
                        {this.renderSubjectGuide(subject)}
                    </div>
                </div>
            )

        } else {

            return null

        }
    }
}

export default SubjectGuide;
