import React, {Component} from 'react';
import { Dropdown, Input } from 'semantic-ui-react'

class SubjectGuide extends Component {

    render() {

        const {guides} = this.props

        const options = guides.map((item, key) => (
            {
                key: key,
                text: item.name,
                value: item.url
            }
        ))

        if (guides) {
            return (
                <React.Fragment>
                    <Dropdown
                        text='Find Research Guides'
                        direction='left'
                        options={options}
                        className='icon utk-research-guide--browse'
                    >
                    </Dropdown>
                </React.Fragment>
            )
        } else {
            return null
        }

    }
}

export default SubjectGuide;
