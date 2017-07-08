import React, { Component } from 'react';
import Button from './button'
//import '../myCss/rePage.css'


class LoadPage extends Component {

    render() {
      return (
        <div>
          <h1>DITTO</h1>
          <h1>Select Your Eyewear</h1>
          {this.props.activePageLoad.map((n)=>
              <Button
                onClick={(e)=>
                  {e.preventDefault();
                  // this.props.onChoseNum(n,this.props.activeAddress);
                  this.props.onChangePage('home')}
                }
                buttonImg={'/eyewear-selector' +  n.images.frontal}
                buttonBrand={ n.brand}
                buttonName={ n.name}
                key={n.id}
              />
          )}
        </div>
      );
    }
}

export default LoadPage;
