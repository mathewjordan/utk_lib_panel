import React, {Component} from 'react';
import { Placeholder } from 'semantic-ui-react'

class PlaceholderHome extends Component {

    render() {

        return (
            <div className="utk-home-wrap">
                <div className="container utk-home-container">
                    <div className="utk-home">
                        <div className="utk-home--main">
                            <div>
                                <h3>Find Materials</h3>
                                <Placeholder>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='medium' />
                                        <Placeholder.Line length='long' />
                                        <Placeholder.Line />
                                        <Placeholder.Line length='medium' />
                                        <Placeholder.Line />
                                        <Placeholder.Line length='medium' />
                                        <Placeholder.Line length='short' />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            </div>
                            <div>
                                <h3>Library Resources</h3>
                                <Placeholder>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='medium' />
                                        <Placeholder.Line length='short'/>
                                        <Placeholder.Line length='long' />
                                        <Placeholder.Line length='medium' />
                                        <Placeholder.Line length='short'/>
                                        <Placeholder.Line length='long'/>
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            </div>
                            <div>
                                <h3>About UT Libraries</h3>
                                <Placeholder>
                                    <Placeholder.Header image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Header>
                                </Placeholder>
                            </div>
                            <div>
                                <h3>Help For</h3>
                                <Placeholder>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='medium' />
                                        <Placeholder.Line length='short'/>
                                        <Placeholder.Line length='long' />
                                        <Placeholder.Line length='medium' />
                                        <Placeholder.Line length='short'/>
                                        <Placeholder.Line length='long'/>
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            </div>
                        </div>
                        <div className="utk-home--aside">
                            <div className="utk-home--hours">
                                <h3>Today's Hours</h3>
                                <div>
                                    <h4>Hodges</h4>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </div>
                                <div>
                                    <h4>Pendergrass</h4>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </div>
                                <div>
                                    <h4>Devine</h4>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </div>
                                <div>
                                    <h4>Hoskins</h4>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default PlaceholderHome;
