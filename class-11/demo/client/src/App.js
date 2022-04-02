import React from "react";
import "./App.css";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  async componentDidMount() {
    let url = `http://localhost:3001/cats`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ cats: response.data});
  }

  render() {
    return (
      <div className="App">
        <h1>Hexx's World of Kitty Cats!</h1>
        {this.state.cats.map(cat => (
          <>
            <h2>{cat.name}</h2>
            <p>This cat is {cat.color} colored. They live in {cat.location}.</p>
          </>
        ))}
      </div>
    );
  }
}

export default App;
