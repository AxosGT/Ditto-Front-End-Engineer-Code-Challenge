import React, {Component} from 'react';
import Button from './button'
//import '../myCSS/home.css'


class DetailsPage extends Component {

    render() {
      var currentDetails = this.props.activePageLoad[this.props.activePage-1];
      return (
        <div className='detailsPage'>
          <h1>
            {this.props.activePage}
            <img src = {'/eyewear-selector' +currentDetails.images.frontal } />
            <img src = {'/eyewear-selector' +currentDetails.images.side } />
          </h1>
        </div>
      );
    }
}

export default DetailsPage;
