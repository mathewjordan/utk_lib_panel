import React, {Component} from 'react';
import { Dropdown, Input } from 'semantic-ui-react'
import _ from 'lodash';

import {DataSubjects} from '../Data/DataSubjects';
import RecentlyViewed from "./RecentlyViewed";

class ResearchTools extends Component {

    constructor(props) {
        super(props);

        this.state ={
            availableOptions: DataSubjects
        }

        this.updateSubject = this.updateSubject.bind(this);
    }

    backButton () {
        return (
            <a className="utk-collapse-research-tools"
                   onClick={this.collapseResearchTools.bind(this)}>
            <span className="icon-left-big"></span> Reset Options
            </a>
        )

    }

    dropdownText (subject) {
        if (!subject)
            return 'Filter by Subject'
        else
            return subject.title
    }

    collapseResearchTools = (e) => {
        e.preventDefault()
        e.stopPropagation()

        this.props.guideExpanded({
            status: false,
            subjectID: null,
            subjectTitle: null
        });
    }

    selectSubject = (e, option) => {
        /*
         * real magic happens here.
         */

        this.props.guideExpanded({
            status: true,
            subjectID: option.value,
            subjectTitle: option.text
        });
    }

    updateSubject = (update) => {
        this.props.guideExpanded({
            status: true,
            subjectID: update.subjectID,
            subjectTitle: update.subjectTitle
        });
    }

    onInputFocus = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    applyFilter = (e) => {
        const searchQuery = e.target.value

        if(searchQuery == '') {
            this.setState({
                availableOptions: DataSubjects
            })
            return
        }

        let filtered = _.filter(this.state.availableOptions, function(o) {

            // find matching strings, regex this in future for more flexible results.
            return _.startsWith(_.lowerCase(o.title), _.lowerCase(searchQuery))
        });

        this.setState({availableOptions: filtered})
    }

    render() {

        return (
            <div className="utk-panel--research-tools">
                <div className="utk-research-tools">
                    <h3>Research Tools</h3>
                    <Dropdown
                        text={this.dropdownText(this.props.activeSubject)}
                        icon='icon-down-open'
                        floating
                        labeled
                        button
                        className='icon'
                        onChange={this.applyFilter}
                    >
                        <Dropdown.Menu>
                            <Input icon='search'
                                   iconPosition='left'
                                   className='search'
                                   onFocus={this.onInputFocus}
                                   onClick={this.onInputFocus} />
                            <Dropdown.Menu scrolling>
                                {this.state.availableOptions.map(option => (
                                    <Dropdown.Item key={option.id}
                                                   value={option.id}
                                                   text={option.title}
                                                   onClick={this.selectSubject.bind(option)} />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown.Menu>
                    </Dropdown>
                    {this.backButton(this.props.activeSubject)}
                    <RecentlyViewed current={this.props.activeSubject}
                                    updateSubject={this.updateSubject}/>
                </div>
            </div>
        )
    }
}

export default ResearchTools;
