import React, {Component} from 'react';
import { Tab } from 'semantic-ui-react'

import SubjectDatabase from "./SubjectDatabase";
import SubjectMedia from "./SubjectMedia";
import SubjectGuide from "./SubjectGuide";

class SubjectAssets extends Component {
    render() {

        const {id, title} = this.props.subjectHeader
        const {associated_libguides, featured_databases, total_databases} = this.props.subjectData

        const panes = [
            { menuItem: 'Databases', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Research Guides', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
            { menuItem: 'More Resources', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> }
        ]

        console.log(featured_databases)

        return (
            <div className={`utk-subject-guide`} data-subject-id={id}>
                <div className="utk-subject-guide--header">
                    <h4>{title}</h4>
                    {/*<SubjectGuide guides={associated_libguides} />*/}
                </div>
                <Tab menu={{ secondary: true }} panes={panes} className="utk-subject-guide--assets" />
                {/*<div className="utk-subject-guide--databases utk-subject-guide--asset">*/}
                    {/*<div className="utk-subject-guide--asset--header">*/}
                        {/*<h5>Recommended Databases</h5>*/}
                        {/*<a>View All <span>{total_databases}</span></a>*/}
                    {/*</div>*/}
                    {/*<ul>*/}
                        {/*{featured_databases.map((item, key) => (*/}
                            {/*<SubjectDatabase key={key}*/}
                                             {/*unique={id + '-' +  key}*/}
                                             {/*instance={key}*/}
                                             {/*item={item}/>*/}
                        {/*))}*/}
                    {/*</ul>*/}
                {/*</div>*/}
                {/*<div className="utk-subject-guide--media utk-subject-guide--asset">*/}
                    {/*<div className="utk-subject-guide--asset--header">*/}
                        {/*<h5>Other Helpful Resources</h5>*/}
                    {/*</div>*/}
                    {/*<ul>*/}
                        {/*{assets.additional.map((item, key) => (*/}
                            {/*<SubjectMedia key={key}*/}
                                          {/*instance={key}*/}
                                          {/*item={item}/>*/}
                        {/*))}*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default SubjectAssets;
