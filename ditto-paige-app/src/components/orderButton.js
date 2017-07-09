import React, {Component} from 'react';
import '../myCSS/button.css'

class OrderButton extends Component {

    render() {
      return (
          <button type="button" className='button'
            onClick = {this.props.onClick} >
            <h1>BUY NOW</h1>
          </button>
      );
    }
}

export default OrderButton;
