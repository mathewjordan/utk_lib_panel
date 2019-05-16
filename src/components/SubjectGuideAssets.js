import React, {Component} from 'react';

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
                            {assets.databases.map(item => (
                                <li>
                                    <a href={item.url}>
                                        <h5>{item.name}</h5>
                                        <span>{item.description}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="utk-subject-guide--journals utk-subject-guide--asset">
                        <h5>Other Helpful Resources</h5>
                        <ul>
                            {assets.additional.map(item => (
                                <li><a href={item.url}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SubjectGuideAssets;
