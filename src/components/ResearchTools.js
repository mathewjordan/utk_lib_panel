import React, {Component} from 'react';
import { Dropdown, Input } from 'semantic-ui-react'
import _ from 'lodash';

import {DataSubjects} from './DataSubjects';

class ResearchTools extends Component {

    constructor(props) {
        super(props);

        this.state ={
            expanded: false,
            subjectSlug: null,
            subjectTitle: null,
            availableOptions: DataSubjects
        }
    }

    dropdownText (title) {
        if (!title)
            return 'Search by Subject'
        else
            return this.state.subjectTitle
    }

    selectSubject = (e, option) => {
        /*
         * real magic happens here.
         */

        this.setState({
            subjectSlug: option.value,
            subjectTitle: option.text
        })
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

        console.log ()

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
                        text={this.dropdownText(this.state.subjectTitle)}
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
                </div>
            </div>
        )
    }
}

export default ResearchTools;
