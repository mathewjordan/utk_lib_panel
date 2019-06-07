import React, {Component} from 'react';
import { Tab, Menu, Label } from 'semantic-ui-react'

import SubjectDatabase from "./SubjectDatabase";
import SubjectMedia from "./SubjectMedia";
import SubjectGuide from "./SubjectGuide";

class SubjectAssets extends Component {

    constructor(props) {
        super(props);

        this.state ={
            id: this.props.subjectHeader.id,
            buildDatabase: false,
            buildGuides: false,
            paneDatabase: [],
            paneGuides: []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            buildDatabase: false
        });
    }

    buildDatabasePane (data, id) {

        let build = this.state.buildDatabase;

        if (data.featured_databases.length !== 0 && build === false) {

            let panes = [
                {
                    menuItem: (
                        <Menu.Item key='messages'>
                            Databases<Label>{data.total_databases}</Label>
                        </Menu.Item>
                    ),
                    render: () => <Tab.Pane attached={false}><div className="utk-subject-guide--databases utk-subject-guide--asset">
                        <div className="utk-subject-guide--asset--header">
                            <h5>Recommended Databases</h5>
                            <a>View All Databases <span className='icon-open-right'></span></a>
                        </div>
                        <ul>
                            {data.featured_databases.map((item, key) => (
                                <SubjectDatabase key={key}
                                                 unique={id + '-' +  key}
                                                 instance={key}
                                                 item={item}/>
                            ))}
                        </ul>
                    </div></Tab.Pane>
                    }
                ]

            this.setState({
                id: id,
                buildDatabase: true,
                paneDatabase: panes
            });
        }
    }

    buildGuidesPane (data, id) {

    }

    render() {

        const {id, title} = this.props.subjectHeader
        const {subjectData} = this.props

        this.buildDatabasePane(subjectData, id)
        this.buildGuidesPane(subjectData, id)

        return (
            <div className={`utk-subject-guide`} data-subject-id={id}>
                <div className="utk-subject-guide--header">
                    <h4>{title}</h4>
                </div>
                <Tab menu={{ secondary: true }}
                     panes={this.state.paneDatabase}
                     className="utk-subject-guide--assets" />
            </div>
        )
    }
}

export default SubjectAssets;
