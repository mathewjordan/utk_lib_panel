import React, {Component} from 'react';

const Entities = require('html-entities').AllHtmlEntities;

class SubjectDatabase extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            delay: 'utk-delay-render'
        };

        this.state = this.initialState;
    }

    componentWillMount () {
        let that = this;
        let timeout = that.props.instance * 110
        setTimeout(function() {
            that.setState({
                delay : ""
            });
        }, timeout);
    }

    render() {

        const {item} = this.props
        const entities = new Entities();

        return (
            <li className={this.state.delay}>
                <a href={item.url}>
                    <h5>{item.name}</h5>
                </a>
                <div dangerouslySetInnerHTML={{__html: entities.decode(item.description)}} />
            </li>
        )
    }
}

export default SubjectDatabase;
