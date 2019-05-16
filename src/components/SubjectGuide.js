import React, {Component} from 'react';

import {DataGuide} from './DataGuide'
import {Dropdown} from "semantic-ui-react/dist/commonjs/modules/Dropdown";

class SubjectGuide extends Component {

    render() {

        console.log(DataGuide)
        var offset = 0;

        return (
            <div className="utk-panel--subject-guide">
                <div className="utk-subject-guide">
                    <h4>{this.props.activeSubject}</h4>
                    <p className="description">Resources for <a href="#">Anatomy Table</a>, <a href="#">Biology</a> and <a href="#">Environment Studies</a>.</p>
                    <div className="utk-subject-guide--resources">
                        <div className="utk-subject-guide--databases utk-subject-guide--resource">
                            <h5>Recommended Databases</h5>
                            <ul>
                                {DataGuide.databases.map(option => (
                                    <li>
                                        <a href="#">
                                            <h5>{option.name}</h5>
                                            <span>{option.description}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="utk-subject-guide--journals utk-subject-guide--resource">
                            <h5>Other Helpful Resources</h5>
                            <ul>
                                {DataGuide.additional.map(option => (
                                    <li><a href="#">{option.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubjectGuide;
