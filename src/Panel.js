import React, {Component} from 'react';

import OneSearch from "./components/OneSearch";
import ResearchTools from "./components/ResearchTools";

const api = {
  authorize_url: 'https://lgapi-us.libapps.com/1.2/oauth/token',
  libguides_url: 'https://lgapi-us.libapps.com/1.2/az',
  client_id: "406",
  client_secret: "70a2cdb608f280d3b85a0f97f4b8bad3",
}

class Panel extends Component {

  constructor(props) {

    super(props);

    this.state ={
      authorization: null,
      libguides: null
    }

  }

  libAuthorize() {

    let {authorize_url, client_id, client_secret} = api

    const credentials =
        'client_id=' + client_id +
        '&client_secret=' + client_secret +
        '&grant_type=client_credentials'

    let post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: credentials
    };

    fetch(authorize_url, post)
        .then(response => response.json())
        .then(data => {
          if (data !== null) {
            this.setState({
              authorization: data
            });

            this.libGetData(data.access_token);
          }
        })

  }

  libGetData(access_token) {

    let {libguides_url} = api

    let get = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + access_token
      }
    };

    axios.get(libguides_url, get)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    // fetch(libguides_url, get)
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data !== null) {
    //         this.setState({
    //           libguides: data
    //         });
    //       }
    //     })

  }

  componentDidMount() {
    this.libAuthorize()
  }

  render() {
    return (
      <div className="App">
        <OneSearch/>
        <ResearchTools/>
      </div>
    );
  }
}

export default Panel;
