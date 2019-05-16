import React, {Component} from 'react';

class SubjectGuideAssets extends Component {
    render() {

        const {disciplines, assets} = this.props

        return (
            <React.Fragment>
                <p className="description">Resources for <a href="#">Anatomy Table</a>, <a
                    href="#">Biology</a> and <a href="#">Environment Studies</a>.</p>
                <div className="utk-subject-guide--resources">
                    <div className="utk-subject-guide--databases utk-subject-guide--resource">
                        <h5>Recommended Databases</h5>
                        <ul>
                            {assets.databases.map(option => (
                                <li>
                                    <a href="#">
                                        <h5>{option.name}</h5>
                                        <span>{option.description}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="utk-subject-guide--journals utk-subject-guide--resource">
                        <h5>Other Helpful Resources</h5>
                        <ul>
                            {assets.additional.map(option => (
                                <li><a href="#">{option.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SubjectGuideAssets;
