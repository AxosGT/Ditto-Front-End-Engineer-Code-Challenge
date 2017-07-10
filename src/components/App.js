import ContainerSelector from '../containers/containerSelector';
import ContainerDetails from '../containers/containerDetails';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onPageLode();
  };

  render() {
    return(
      <div className="app">
        <h1 className="title app_title">DITTO</h1>
        {!!this.props.activePage && <ContainerDetails /> }
        <ContainerSelector />
      </div>

    );
  }
}

export default App;
