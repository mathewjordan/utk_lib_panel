import React, {Component} from 'react';

import SubjectMini from "./SubjectMini";

class ResearchToolsMini extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active : ''
        }
    }

    componentDidMount() {
        this.setState({
            active : this.props.subjects[0].id
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
        if (this.props.subjects.length > 1)
            return this.props.subjects.map(subject => {

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
        else
            return
    }

    renderPanes () {
        return this.props.subjects.map(subject => {

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
        if (this.props.subjects)
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
