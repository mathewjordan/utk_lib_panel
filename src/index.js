import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';
import PlaceholderHome from './PlaceholderHome';

import './scss/styles.scss';

ReactDOM.render(<Panel />, document.getElementById('utk-panel'));
ReactDOM.render(<PlaceholderHome />, document.getElementById('utk-placeholder'));
