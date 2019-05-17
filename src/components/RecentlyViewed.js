import React, {Component} from 'react';
import _ from 'lodash';

class RecentlyViewed extends Component {

    constructor(props) {
        super(props);

        this.state ={
            recent: null
        }
    }

    updateSubject = (item, e) => {
        this.props.updateSubject({
            status: true,
            subjectSlug: item.slug,
            subjectTitle: item.title
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {

        let recentlyViewed = JSON.parse(sessionStorage.getItem("utk_lib_panel_recent"))

        this.setState({
            recent : _.slice(_.pullAllWith(recentlyViewed, [nextProps.current], _.isEqual), 0, 5)
        })

    }

    render() {

        let {recent} = this.state;

        if (recent && recent.length > 0) {
            return (
                <div className="utk-recently-viewed">
                    <h5>Recently Viewed</h5>
                    <ul>
                        {recent.map((item) => (
                            <li>
                                <a data-slug={item.slug}
                                   data-title={item.title}
                                   onClick={() => this.updateSubject(item)} >{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else if (recent && recent.length == 0) {
            return (
                <div className="utk-recently-viewed"></div>
            )
        } else {
            return null
        }
    }
}

export default RecentlyViewed;
