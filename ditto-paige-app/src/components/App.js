import ContainerSelector from '../containers/containerSelector';
import ContainerDetailsPage from '../containers/containerDetailsPage';
import React, { Component } from 'react';
import '../myCSS/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode();
  };

  render() {
    return(
      <div className = 'AppFont'>
        <h1 className = 'App'> <b>DITTO</b></h1>
        <hr></hr>
        {!!this.props.activePage && <ContainerDetailsPage /> }
        <ContainerSelector />
      </div>

    );
  }
}

export default App;
