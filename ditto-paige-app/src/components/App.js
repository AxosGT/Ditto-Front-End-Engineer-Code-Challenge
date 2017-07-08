import ContainerLoadPage from '../containers/containerLoadPage';
import ContainerHome from '../containers/containerHome';
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode('loadPage');
  };

  render() {
    console.log(this.props.activePageLoad);
    switch (this.props.activePage){
      case 'loadPage':
        return <ContainerLoadPage />
      case 'home':
        return <ContainerHome />
      default:
        return(
          <div>
            <h1>page failed to become active</h1>
          </div>

        );
    }

  }
}

export default App;
