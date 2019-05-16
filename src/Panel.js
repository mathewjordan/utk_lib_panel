import React, {Component} from 'react';

import sample from "./media/sample2.jpg";

import OneSearch from "./components/OneSearch";
import ResearchTools from "./components/ResearchTools";
import SubjectGuide from "./components/SubjectGuide";

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state ={
      panelFocus: 'onesearch',
      activeSubject: null,
      guideExpanded: false
    }

    this.guideExpanded = this.guideExpanded.bind(this);
  }

  guideExpanded(status) {
    if (status.status) {
      this.setState({
        panelFocus: 'research-tools',
        activeSubject: status.subjectTitle,
        guideExpanded: true
      });
    } else {
      this.setState({
        panelFocus: 'onesearch',
        activeSubject: null,
        guideExpanded: false
      });
    }
  }

  render() {

    let {panelFocus, activeSubject, guideExpanded} = this.state


    return (
      <div className={`utk-panel-wrap utk-panel-focus-${panelFocus}`}>
        <div className="utk-panel-underlay">
          <img src={sample} />
          <div className="utk-panel-underlay--fade-horz"></div>
          <div className="utk-panel-underlay--fade-vert"></div>
        </div>
        <div className="container utk-panel-container">
            <div className="utk-panel">
            <OneSearch/>
            <ResearchTools activeSubject={activeSubject}
                           guideExpanded={this.guideExpanded}/>
            <SubjectGuide activeSubject={activeSubject}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
