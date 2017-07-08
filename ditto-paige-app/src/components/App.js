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
    console.log(this.props.activePageLoad);
    return(
      <div>
        <h1>DITTO</h1>
        {this.props.activePage?<ContainerDetailsPage />:'' }
        <ContainerSelector />
      </div>

    );


    // switch (this.props.activePage){
    //   case 'Selector':
    //     return <ContainerSelector />
    //   case 'detailsPage':
    //     return <ContainerDetailsPage />
    //   default:
    //     return(
    //       <div>
    //         <h1>page failed to become active</h1>
    //       </div>
    //
    //     );
    // }

  }
}

export default App;
