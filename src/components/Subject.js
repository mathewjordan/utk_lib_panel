import React, {Component} from 'react';
import _ from 'lodash';

import {DataAssets} from '../data/DataAssets'
import SubjectAssets from "./SubjectAssets";
import Error from "./Error";

const libGuidesEndpoint = 'https://libguides.herokuapp.com/';

class Subject extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: null
        }
    }

    componentDidUpdate() {
        let {data, id} = this.state;
        const current = this.props.activeSubject

        if (current) {
            const key = "utk_lib_panel_recent"
            const recent = JSON.parse(sessionStorage.getItem(key))

            if (data === null || id !== current.id) {

                /*
                 * checks session storage for modern browser stored data.
                 * gets local data if exists, else fetches from endpoint.
                 */

                if (_.some(recent, ['id', current.id]))
                    this.getSessionData(recent, current.id)

                else
                    this.fetchSubjectData(current.id)

            } else {
                current.libguides = data
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
        if (data) {
            if (data)
                return <SubjectAssets subjectHeader={this.props.activeSubject}
                                      subjectData={data} />

            else
                return <Error />

        } else {
            return null

        }
    }

    render() {

        return (
            <div className="utk-panel--subject-guide">
                <div className={`utk-subject-guide`}>
                    {this.renderSubject(this.state.data)}
                </div>
            </div>
        )
    }
}

export default Subject;
