import React, {Component} from 'react';
import { Tab, Menu, Label } from 'semantic-ui-react'

import SubjectDatabase from "./SubjectDatabase";
import SubjectGuide from "./SubjectGuide";

class SubjectAssets extends Component {

    constructor(props) {
        super(props);

        this.state ={
            id: this.props.subjectHeader.id,
            renderedId: null,
            update: false,
            buildDatabase: false,
            buildGuides: false,
            databasePanes: [],
            guidePanes: [],
            allDatabases: 'utk-show-all'
        }
    }

    updateState = () => {
        this.setState({
            buildDatabase: false,
            buildGuides: false,
            update: false
        });
        if (this.props.subjectData.featured_databases.length === 0)
            this.setState({
                allDatabases: 'utk-show-all utk-show-all-enabled'
            });
        else
            this.setState({
                allDatabases: 'utk-show-all'
            });
    }

    toggleDatabases = () => {
        this.setState({
            allDatabases: 'utk-show-all utk-show-all-enabled'
        });
    }

    checkIfFeatured = (number) => {
        if (number.length)
            return <h5>Recommended Databases</h5>
        else
            return null
    }

    showAllDatabases (data) {
        if (data.featured_databases.length !== data.total_databases && this.state.allDatabases === 'utk-show-all')
            return <a className="utk-show-all--toggle" onClick={this.toggleDatabases}>Show All {this.props.subjectTitle} Databases</a>
        else
            return null
    }

    componentDidMount() {
        this.setState({
            renderedId: this.props.subjectHeader.id
        });
        if (this.props.subjectData.featured_databases.length === 0)
            this.setState({
                allDatabases: 'utk-show-all utk-show-all-enabled'
            });
        else
            this.setState({
                allDatabases: 'utk-show-all'
            });
    }

    componentWillReceiveProps() {
        this.updateState()
    }

    buildDatabasePane (data, id) {

        const build = this.state.buildDatabase;

        console.log(data)

        if (data.total_databases !== 0 && build === false) {

            let databasePanes =
                {
                    menuItem: (
                        <Menu.Item key='messages' onClick={this.updateState}>
                            Databases<Label>{data.total_databases}</Label>
                        </Menu.Item>
                    ),
                    render: () =>
                        <Tab.Pane attached={false}>
                            <div className="utk-subject-guide--databases utk-subject-guide--asset">
                                <div className="utk-subject-guide--asset--header">
                                    {this.checkIfFeatured(data.featured_databases)}
                                </div>
                                <ul>
                                    {data.featured_databases.map((item, key) => (
                                        <SubjectDatabase key={key}
                                                         featured={true}
                                                         unique={id + '-' +  key}
                                                         instance={key}
                                                         item={item}/>
                                    ))}
                                    {this.showAllDatabases(data)}
                                </ul>
                            </div>
                            <div className={`utk-subject-guide--databases utk-subject-guide--asset ${this.state.allDatabases}`}>
                                <div className="utk-subject-guide--asset--header">
                                    <h5>More Databases</h5>
                                </div>
                                <ul>
                                    {data.other_databases.map((item, key) => (
                                        <SubjectDatabase key={key}
                                                         unique={id + '-' +  key}
                                                         instance={key}
                                                         item={item}/>
                                    ))}
                                </ul>
                            </div>
                        </Tab.Pane>
                }

            this.setState({
                renderedId: id,
                buildDatabase: true,
                databasePanes: databasePanes
            });

        } else if (data.featured_databases.length === 0 && build === false) {
            this.setState({
                renderedId: id,
                buildDatabase: true,
                databasePanes: {}
            });
        }
    }

    buildGuidesPane (data, id) {

        const build = this.state.buildGuides;

        if (data.associated_libguides.length !== 0 && build === false) {

            let guidePanes =
                {
                    menuItem: (
                        <Menu.Item key='messages'>
                            Research Guides<Label>{data.associated_libguides.length}</Label>
                        </Menu.Item>
                    ),
                    render: () =>
                        <Tab.Pane attached={false}>
                            <div className="utk-subject-guide--guides utk-subject-guide--asset">
                                <div className="utk-subject-guide--asset--header">
                                    <h5>Research Guides</h5>
                                </div>
                                <ul>
                                    {data.associated_libguides.map((item, key) => (
                                        <SubjectGuide key={key}
                                                      unique={id + '-' +  key}
                                                      instance={key}
                                                      item={item}/>
                                    ))}
                                </ul>
                            </div>
                        </Tab.Pane>
                }


            this.setState({
                renderedId: id,
                buildGuides: true,
                guidePanes: guidePanes
            });

        } else if (data.associated_libguides.length === 0 && build === false) {
            this.setState({
                renderedId: id,
                buildDatabase: true,
                databasePanes: {}
            });
        }

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
                     defaultActiveIndex={0}
                     panes={[this.state.databasePanes, this.state.guidePanes]}
                     className="utk-subject-guide--assets" />
            </div>
        )
    }
}

export default SubjectAssets;
