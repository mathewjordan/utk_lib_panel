import React, {Component} from 'react';

import OneSearch from "./components/OneSearch";
import ResearchTools from "./components/ResearchTools";

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state ={
      priority: 'OneSearch'
    }
  }

  render() {
    return (
      <div className="container utk-panel-container">
        <div className="utk-panel">
          <OneSearch/>
          <ResearchTools/>
        </div>
      </div>
    );
  }
}

export default Panel;
