import ContainerLoadPage from '../containers/containerLoadPage';
import ContainerHome from '../containers/containerHome';
import React, { Component } from 'react';
//import {eyewear} from '../eyewear-selector/'
import {eyewear} from '../eyewear-selector/eyewear';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode(eyewear);
  };

  render() {
    switch (this.props.activePage){
      case 'LoadPage':
        return <ContainerLoadPage />
      case 'home':
        return <ContainerHome />
      default:
        return(
          <h1>page failed to become active</h1>
        );
    }

  }
}

export default App;