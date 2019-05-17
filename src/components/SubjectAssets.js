import React, {Component} from 'react';
import SubjectDatabase from "./SubjectDatabase";
import SubjectMedia from "./SubjectMedia";
import SubjectGuide from "./SubjectGuide";

class SubjectAssets extends Component {
    render() {

        const {id, title, assets} = this.props.subject

        return (
            <React.Fragment>
                <h4>{title}</h4>
                <SubjectGuide guides={assets.guides} />
                <div className="utk-subject-guide--assets">
                    <div className="utk-subject-guide--databases utk-subject-guide--asset">
                        <h5>Recommended Databases</h5>
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
                        <h5>Other Helpful Resources</h5>
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
