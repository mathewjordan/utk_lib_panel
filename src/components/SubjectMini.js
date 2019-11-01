import React, {Component} from 'react';
import _ from 'lodash';

import SubjectAssets from "./SubjectAssets";
import Error from "./Error";

const libGuidesEndpoint = 'https://www.lib.utk.edu/wp-json/libguides/subject/';

class SubjectMini extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: null
        }
    }

    componentDidMount() {
        let {data, id} = this.state;
        const current = this.props.activeSubject

        if (current) {
            const key = "utk_lib_panel_recent"
            const recent = JSON.parse(sessionStorage.getItem(key))

            if (data === null || id !== current) {

                /*
                 * checks session storage for modern browser stored data.
                 * gets local data if exists, else fetches from endpoint.
                 */

                if (_.some(recent, ['id', current]))
                    this.getSessionData(recent, current)

                else
                    this.fetchSubjectData(current)

            } else {
                let store = [current]

                if (recent)
                    store = _.concat([current], recent)

                sessionStorage.setItem(key, JSON.stringify(_.uniqBy(store, 'id')))
            }
        }
    }

    getSessionData (recent, id) {
        let localData = _.find(recent, { 'id': id})

        this.setState({
            data: localData.libguides,
            id: id
        });

        return null
    }

    fetchSubjectData (id) {

        console.log(libGuidesEndpoint + id)

        fetch(libGuidesEndpoint + id, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data,
                    id: id
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null
    }

    renderSubject = (data) => {
        if (data && this.props.activeSubject) {
            if (data)
                return <SubjectAssets subjectTitle={this.props.title}
                                      subjectHeader={this.props.activeSubject}
                                      subjectData={data} />

            else
                return <Error />

        } else {
            return null

        }
    }

    render() {

        let activeClass = '';

        if (this.props.active)
            activeClass = 'active-item'

        return (
            <div className={`utk-panel--subject-guide ${activeClass}`}>
                {this.renderSubject(this.state.data)}
            </div>
        )
    }
}

export default SubjectMini;
