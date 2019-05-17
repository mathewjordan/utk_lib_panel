import React, {Component} from 'react';

class SubjectGuideDatabase extends Component {

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

        return (
            <li className={this.state.delay}>
                <a href={item.url}>
                    <h5>{item.name}</h5>
                    <span>{item.description}</span>
                </a>
            </li>
        )
    }
}

export default SubjectGuideDatabase;
