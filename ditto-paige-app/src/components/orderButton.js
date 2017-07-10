import React, {Component} from 'react';

class OrderButton extends Component {

    render() {
      return (
          <button type="button" className='order-button padding_large'
            onClick = {this.props.onClick} >
            BUY NOW
          </button>
      );
    }
}

export default OrderButton;
