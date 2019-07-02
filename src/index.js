import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './Panel';
import PanelMini from './PanelMini';

import './scss/styles.scss';

if (document.getElementById('utk-panel')) {
    ReactDOM.render(<Panel />, document.getElementById('utk-panel'));
}
if (document.getElementById('utk-panel-mini')) {
    const panelElement = document.getElementById('utk-panel-mini')
    const dataSubjects = JSON.parse(panelElement.getAttribute('data-subjects'))
    ReactDOM.render(<PanelMini subjects={dataSubjects}/>, document.getElementById('utk-panel-mini'));
}
