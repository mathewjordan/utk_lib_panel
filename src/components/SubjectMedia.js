import React, {Component} from 'react';

class SubjectMedia extends Component {

    constructor(props) {
        super(props);

        this.state ={
            delay: 'utk-delay-render'
        }
    }

    componentWillMount () {
        let that =  this;
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
                </a>
            </li>
        )
    }
}

export default SubjectMedia;
