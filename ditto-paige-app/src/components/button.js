import React, {Component} from 'react';
import '../myCSS/button.css'

class Button extends Component {

    render() {
      console.log(this.props.buttonDis)

      return (
          <button type="button" className='button'
            onClick = {this.props.onClick} >
            {/* <Image
              style={styles.button}
              source={require('./myButton.png')}
            /> */}
            <img src = {this.props.buttonDis} alt ='dog' />
          </button>
      );
    }
}

export default Button;
