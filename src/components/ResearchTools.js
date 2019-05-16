import React, {Component} from 'react';
import { Dropdown, Input, Checkbox } from 'semantic-ui-react'
import _ from 'lodash';

import {DataSubjects} from '../Data/DataSubjects';

class ResearchTools extends Component {

    constructor(props) {
        super(props);

        this.state ={
            availableOptions: DataSubjects
        }
    }

    backButton () {
        return (
            <a className="utk-collapse-research-tools"
                   onClick={this.collapseResearchTools.bind(this)}>
            <i className="material-icons-round">cancel</i> Reset Options
            </a>
        )

    }

    dropdownText (subject) {
        if (!subject)
            return 'Search by Subject'
        else
            return subject.title
    }

    collapseResearchTools = (e) => {
        e.preventDefault()
        e.stopPropagation()

        this.props.guideExpanded({
            status: false,
            subjectSlug: null,
            subjectTitle: null
        });
    }

    selectSubject = (e, option) => {
        /*
         * real magic happens here.
         */

        this.props.guideExpanded({
            status: true,
            subjectSlug: option.value,
            subjectTitle: option.text
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
                    <h3>Find Research Tools</h3>
                    <Dropdown
                        text={this.dropdownText(this.props.activeSubject)}
                        icon='angle down'
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
                                    <Dropdown.Item key={option.slug}
                                                   value={option.slug}
                                                   text={option.title}
                                                   onClick={this.selectSubject.bind(option)}  />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="utk-research-tools--option">
                        Subject <Checkbox slider /> Type
                    </div>
                    {this.backButton(this.props.activeSubject)}
                </div>
            </div>
        )
    }
}

export default ResearchTools;
