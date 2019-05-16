import React, {Component} from 'react';
import SubjectGuideDatabase from "./SubjectGuideDatabase";
import SubjectGuideMedia from "./SubjectGuideMedia";

class SubjectGuideAssets extends Component {
    render() {

        const {title, disciplines, assets} = this.props.guide

        return (
            <React.Fragment>
                <h4>{title}</h4>
                <p className="description">Resources for <a href="#">Anatomy Table</a>, <a
                    href="#">Biology</a> and <a href="#">Environment Studies</a>.</p>
                <div className="utk-subject-guide--assets">
                    <div className="utk-subject-guide--databases utk-subject-guide--asset">
                        <h5>Recommended Databases</h5>
                        <ul>
                            {assets.databases.map((item, key) => (
                                <SubjectGuideDatabase key={key}
                                                      instance={key}
                                                      item={item}/>
                            ))}
                        </ul>
                    </div>
                    <div className="utk-subject-guide--journals utk-subject-guide--asset">
                        <h5>Other Helpful Resources</h5>
                        <ul>
                            {assets.additional.map((item, key) => (
                                <SubjectGuideMedia key={key}
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

export default SubjectGuideAssets;
