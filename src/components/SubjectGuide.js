import React, {Component} from 'react';

class SubjectGuide extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            delay: 'utk-delay-render'
        };

        this.state = this.initialState;
    }

    componentWillMount () {
        let that = this;
        let timeout = that.props.instance * 20
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
                </a>
            </li>
        )
    }
}

export default SubjectGuide;
