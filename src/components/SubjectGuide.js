import React, {Component} from 'react';
import { Dropdown, Input } from 'semantic-ui-react'

class SubjectGuide extends Component {

    render() {

        const {guides} = this.props

        console.log(guides)

        if (guides) {
            return (
                <React.Fragment>
                    <Dropdown
                        text='Find Research Guides'
                        icon='angle down'
                        floating
                        labeled
                        direction='left'
                        className='icon utk-research-guide--browse'
                    >
                        <Dropdown.Menu>
                            <Input icon='search'
                                   iconPosition='left'
                                   className='search' />
                            <Dropdown.Menu scrolling>
                                {guides.map((item, key) => (
                                    <Dropdown.Item key={key}
                                                   value={item.url}
                                                   text={item.name} />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/*<p className="description">Resources for <a href="#">Anatomy Table</a>, <a*/}
                    {/*href="#">Biology</a> and <a href="#">Environment Studies</a>.</p>*/}
                </React.Fragment>
            )
        } else {
            return null
        }

    }
}

export default SubjectGuide;
