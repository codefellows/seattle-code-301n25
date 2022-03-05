import React from 'react';
import './App.css';
import Header from './Header';
import Parent from './Parent';
import Container from 'react-bootstrap/Container'
import OverdraftModal from './OverdraftModal'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showOverdraft = () => {
    this.setState({show: true});
  }

  onHide = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <Container className="App">
        <Header />
        <Parent showOverdraft={this.showOverdraft} />
        <OverdraftModal show={this.state.show} handleClose={this.onHide} />
      </Container>
    );
  }
}

export default App;
