import ContainerSelector from '../containers/containerSelector';
import ContainerDetailsPage from '../containers/containerDetailsPage';
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode();
  };

  render() {
    // console.log(this.props.activePageLoad);
    // console.log(this.props.activePage);
    return(
      <div>
        <h1>DITTO</h1>
        <hr></hr>
        {!!this.props.activePage && <ContainerDetailsPage /> }
        <ContainerSelector />
      </div>

    );
  }
}

export default App;
