import React, {Component} from 'react';

import sample from "./media/sample.jpg";

import Search from "./components/Search";
import ResearchTools from "./components/ResearchTools";
import Subject from "./components/Subject";

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state ={
      panelFocus: 'search',
      activeSubject: null,
      guideExpanded: false
    }

    this.guideExpanded = this.guideExpanded.bind(this);
  }

  guideExpanded(status) {
    if (status.status) {
      this.setState({
        panelFocus: 'research-tools',
        activeSubject: {
          title: status.subjectTitle,
          id: status.subjectID,
        },
        guideExpanded: true
      });
    } else {
      this.setState({
        panelFocus: 'search',
        activeSubject: null,
        guideExpanded: false
      });
    }
  }

  render() {

    let {panelFocus, activeSubject} = this.state


    return (
      <div className={`utk-panel-wrap utk-panel-focus-${panelFocus}`}>
        <div className="utk-panel-underlay">
          <img src={sample} />
          <div className="utk-panel-underlay--fade-horz"></div>
          <div className="utk-panel-underlay--fade-vert"></div>
        </div>
        <div className="container utk-panel-container">
            <div className="utk-panel">
            <Search/>
            <ResearchTools activeSubject={activeSubject}
                           guideExpanded={this.guideExpanded}/>
            <Subject activeSubject={activeSubject}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
