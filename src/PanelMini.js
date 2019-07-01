import React, {Component} from 'react';

import Search from "./components/Search";
import ResearchToolsMini from "./components/ResearchToolsMini";

class PanelMini extends Component {

  render() {

    return (
      <div className="utk-panel-wrap utk-panel-mini-wrap">
        <div className="container utk-panel-container">
            <div className="utk-panel">
            <Search/>
            <ResearchToolsMini />
          </div>
        </div>
      </div>
    );
  }
}

export default PanelMini;
