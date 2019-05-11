import React, {Component} from 'react';
import './App.css';

const api = {
  endpoint: 'https://lgapi-us.libapps.com/1.2/oauth/token',
  client_id: "406",
  client_secret: "70a2cdb608f280d3b85a0f97f4b8bad3",
}

class App extends Component {

  constructor(props) {

    super(props);

    this.state ={
      authorization: null
    }

  }

  libAuthorize() {

    let {endpoint, client_id, client_secret} = api

    const credientals =
        'client_id=' + client_id +
        '&client_secret=' + client_secret +
        '&grant_type=client_credentials'

    let post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: credientals
    };

    fetch(endpoint, post)
        .then(response => response.json())
        .then(data => {
          if (data !== null) {
            this.setState({
              authorization: data
            })
          }
        })

  }

  componentDidMount() {
    this.libAuthorize()
  }

  render() {
    return (
        <div className="App">
          nada
        </div>
    );
  }
}

export default App;
