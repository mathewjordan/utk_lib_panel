import React, {Component} from 'react';

import Search from "./components/Search";
import ResearchToolsMini from "./components/ResearchToolsMini";

class PanelMini extends Component {

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
      <div className={`utk-panel-wrap utk-panel-mini-wrap utk-panel-focus-${panelFocus}`}>
        <div className="container utk-panel-container">
            <div className="utk-panel">
            <Search/>
              <ResearchToolsMini guideExpanded={this.guideExpanded}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelMini;
