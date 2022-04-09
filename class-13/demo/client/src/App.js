import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import axios from 'axios';
import Cats from './Cats';
import CreateCat from "./CreateCat";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  // this function fires off as soon as this component gets rendered to the browser
  componentDidMount() {
    this.handleGetCats();
  }

  handleGetCats = async () => {
    let url = `http://localhost:3001/cats`;
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ cats: response.data});
  }

  handleCreateCat = async (newCatInfo) => {
    let url = `http://localhost:3001/cats`;
    // we are sending the new cat data in the response.body
    await axios.post(url, newCatInfo);
    // const newCat = response.data;
    // this.setState({
    //   // spread operator
    //   cats: [...this.state.cats, newCat]
    // })

    // alternatively...
    this.handleGetCats();
  }

  handleDeleteCat = async (id) => {
    let url = `http://localhost:3001/cats/${id}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data.message);
      // const filteredCats = this.state.cats.filter(cat => cat._id !== id);
      // this.setState({cats: filteredCats});

    // alternatively...
      this.handleGetCats();
    } catch(error) {
      console.error(error);
    }
  }

  handleUpdateCat = async (catToBeUpdated) => {
    try {
      const url = `http://localhost:3001/cats/${catToBeUpdated._id}`;
      axios.put(url, catToBeUpdated);
      
      const updatedCats = this.state.cats.map(existingCat => {
        if (existingCat._id === catToBeUpdated._id) {
          return catToBeUpdated;
        } else {
          return existingCat;
        }
      });
      this.setState({ cats: updatedCats });

    // alternatively...
      // this.handleGetCats();
    } catch (error) {
      console.error(error);
      // normall I would have an Error component that would pop up with an error message 
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hexx's World of Kitty Cats!</h1>
        <Cats cats={this.state.cats} handleDeleteCat={this.handleDeleteCat} handleUpdateCat={this.handleUpdateCat} />
        <CreateCat handleCreateCat={this.handleCreateCat} />
      </div>
    );
  }
}

export default App;
