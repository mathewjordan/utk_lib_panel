import React, {Component} from 'react';
import { Tab, Button, Select, Input } from 'semantic-ui-react'

class Search extends Component {

    render() {

        const panes = [
            { menuItem: 'OneSearch', render: () =>
                <Tab.Pane attached={false}>
                    <Input type='text'
                           placeholder='Search catalog for books and more...'
                           action>
                        <input />
                        <Select compact
                                options={onesearchOptions}
                                defaultValue='onesearch' />
                        <Button type='submit'>Submit</Button>
                    </Input>
                </Tab.Pane>
            },
            { menuItem: 'lib.utk.edu', render: () =>
                <Tab.Pane attached={false}>
                    <Input type='text'
                           placeholder='Find hours, services, and more...'
                           action>
                        <input />
                        <Button type='submit'>Submit</Button>
                    </Input>
                </Tab.Pane>
            }
        ]

        const onesearchOptions = [
            { key: 'onesearch', text: 'One Search', value: 'onesearch' },
            { key: 'ut-collections', text: 'UT Collections', value: 'ut-collections' },
            { key: 'course-reviews', text: 'Course Reviews', value: 'course-reviews' },
        ]

        return (
            <div className="utk-panel--search">
                <div className="utk-search">
                    <h3>Search University Libraries</h3>
                    <Tab menu={{ secondary: true }} panes={panes} />
                </div>
            </div>
        )
    }
}

export default Search;
