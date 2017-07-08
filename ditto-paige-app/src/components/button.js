import React, {Component} from 'react';
import '../myCSS/button.css'

class Button extends Component {

    render() {
      console.log(this.props.buttonDis)

      return (
          <button type="button" className='button'
            onClick = {this.props.onClick} >
            <img src = {this.props.buttonImg} />
            <h1>{this.props.buttonBrand}</h1>
            <h1>{this.props.buttonName}</h1>
          </button>
      );
    }
}

export default Button;
