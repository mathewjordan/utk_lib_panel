import React, {Component} from 'react';
import { Tab, Button, Select, Input } from 'semantic-ui-react'
import SearchForm from "./SearchForm";

const onesearchOptions = [
    { key: 'onesearch', text: 'One Search', value: 'onesearch' },
    { key: 'ut-collections', text: 'UT Collections', value: 'ut-collections' },
    { key: 'course-reviews', text: 'Course Reserves', value: 'course-reviews' },
]

class Search extends Component {

    render() {

        const panes = [
            { menuItem: 'OneSearch', render: () =>
                <SearchForm selection='onesearch'
                            options={onesearchOptions}
                            placeholder='Search for books, articles, and more...' />
            },
            { menuItem: 'Our Website', render: () =>
                <SearchForm selection='libraries'
                            placeholder='Search our website for services and more...' />
            }
        ]

        return (
            <div className="utk-panel--search">
                <div className="utk-search">
                    <Tab menu={{ text: true }} panes={panes} className="utk-search-tabs" />
                </div>
            </div>
        )
    }
}

export default Search;
