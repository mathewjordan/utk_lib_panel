import React, {Component} from 'react';

import SubjectMini from "./SubjectMini";

const panelElement = document.getElementById('utk-panel-mini')
const dataSubjects = JSON.parse(panelElement.getAttribute('data-subjects'))

class ResearchToolsMini extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active : ''
        }
    }

    componentDidMount() {
        this.setState({
            active : dataSubjects[0].id
        })
    }

    handleClick = (e, id) => {
        e.stopPropagation();
        e.preventDefault()
        this.setState({
            active : parseInt(e.target.attributes.getNamedItem('data-subject-id').value)
        })
    }

    renderTitles () {
        return dataSubjects.map(subject => {

            let activeClass = null;

            if (subject.id === this.state.active)
                activeClass = 'active-item'

            return (
                    <a href="#"
                       data-subject-id={subject.id}
                       className={activeClass}
                       onClick={this.handleClick.bind(this)}>{subject.title}</a>
                )
            }
        )
    }

    renderPanes () {
        return dataSubjects.map(subject => {

            let activeItem = false;

            if (subject.id === this.state.active) {
                activeItem = true
            }

            return (
                    <SubjectMini active={activeItem} activeSubject={subject.id} />
                )
            }
        )
    }

    render() {
        if (dataSubjects)
            return (
                <div className="utk-panel--research-tools">
                    <div className="utk-research-tools utk-research-tools-mini">
                        <div className='utk-research-tools-mini--options'>
                            {this.renderTitles()}
                        </div>
                        <div className='utk-research-tools-mini--panes'>
                            {this.renderPanes()}
                        </div>
                    </div>
                </div>
            )
        else
            return null
    }
}

export default ResearchToolsMini;
