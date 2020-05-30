import React, {Component} from 'react';
import _ from 'lodash';

import SubjectAssets from "./SubjectAssets";
import Error from "./Error";

const libGuidesEndpoint = 'https://www.lib.utk.edu/wp-json/libguides/subject/';

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
            if (data === null || id !== current.id) {
                this.fetchSubjectData(current.id)
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

        if (data && this.props.activeSubject) {
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
                {this.renderSubject(this.state.data)}
            </div>
        )
    }
}

export default Subject;
