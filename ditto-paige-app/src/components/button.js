import React, {Component} from 'react';
import '../myCSS/button.css'

class Button extends Component {

    render() {
      return (
          <button type="button" className='button'
            onClick = {this.props.onClick} >
            <img src = {this.props.buttonImg} />
            <p>
              <span><b>{this.props.buttonBrand}</b></span>
              <br></br>
              <span>{this.props.buttonName}</span>
            </p>
          </button>
      );
    }
}

export default Button;
