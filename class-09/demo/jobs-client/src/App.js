import React from "react";
import "./App.css";
import axios from 'axios';
import Jobs from './Jobs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount = async () => {
    const url = `${process.env.REACT_APP_SERVER}/jobs`;
    const response = await axios.get(url);
    this.setState({ jobs: response.data });
  }

  render() {
    return (
      <div className="App">
        <h1>Jobs available at Vault Tec!</h1>
        <Jobs jobs={this.state.jobs} />
      </div>
    )
  }
}

export default App;
