import React, {Component} from 'react';
import SubjectDatabase from "./SubjectDatabase";
import SubjectMedia from "./SubjectMedia";
import SubjectGuide from "./SubjectGuide";

class SubjectAssets extends Component {
    render() {

        const {id, title, assets, meta} = this.props.subject

        return (
            <React.Fragment>
                <div className="utk-subject-guide--header">
                    <h4>{title}</h4>
                    <SubjectGuide guides={assets.guides} />
                </div>
                <div className="utk-subject-guide--assets">
                    <div className="utk-subject-guide--databases utk-subject-guide--asset">
                        <div className="utk-subject-guide--asset--header">
                            <h5>Recommended Databases</h5>
                            <a>View All <span>{meta.database_count}</span></a>
                        </div>
                        <ul>
                            {assets.databases.map((item, key) => (
                                <SubjectDatabase key={key}
                                                 unique={id + '-' +  key}
                                                 instance={key}
                                                 item={item}/>
                            ))}
                        </ul>
                    </div>
                    <div className="utk-subject-guide--media utk-subject-guide--asset">
                        <div className="utk-subject-guide--asset--header">
                            <h5>Other Helpful Resources</h5>
                        </div>
                        <ul>
                            {assets.additional.map((item, key) => (
                                <SubjectMedia key={key}
                                              instance={key}
                                              item={item}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SubjectAssets;
