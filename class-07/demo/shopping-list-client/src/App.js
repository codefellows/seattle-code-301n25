import React from "react";
import "./App.css";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      suppliesList: []
    }
  }

  getFood = async () => {
    const url = 'http://localhost:3001/shopping-list?type=food';
    const shoppingListResponse = await axios.get(url);
    console.log('response from axios: ', shoppingListResponse.data.items);
    this.setState({shoppingList: shoppingListResponse.data.items});
  }

  getSupplies = async () => {
    const url = 'http://localhost:3001/shopping-list?type=supplies';
    const shoppingListResponse = await axios.get(url);
    console.log('response from axios: ', shoppingListResponse.data.items);
    this.setState({suppliesList: shoppingListResponse.data.items});
  }

  render() {
    console.log(this.state.shoppingList);
    return (
      <div className="App">
        <h1>Hexx's Shopping List</h1>
        <button onClick={this.getFood}>Get Food List</button>
        <button onClick={this.getSupplies}>Get Supply List</button>

        <ul>
          {this.state.shoppingList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          {this.state.suppliesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
