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
        let timeout = that.props.instance * 20
        setTimeout(function() {
            that.setState({
                delay : ""
            });
        }, timeout);
    }

    render() {

        const {item, featured} = this.props

        console.log(item)

        const entities = new Entities();

        let featuredClass = ''

        if (featured)
            featuredClass = 'utk-featured '

        return (
            <li className={featuredClass + this.state.delay}>
                <a href={item.friendly_url}>
                    <h5>{item.name}</h5>
                </a>
                <div dangerouslySetInnerHTML={{__html: entities.decode(item.description)}} />
            </li>
        )
    }
}

export default SubjectDatabase;
