import React, { Component } from 'react';
import Button from './button'
//import '../myCss/rePage.css'


class Selector extends Component {

    render() {
      return (
        <div>

          <h1>Select Your Eyewear</h1>
          {this.props.activePageLoad.map((n,nInx)=>
              <Button
                onClick={(e)=>
                  {e.preventDefault();
                  // this.props.onChoseNum(n,this.props.activeAddress);
                  this.props.onChangePage(nInx+1)}
                }
                buttonImg={'/eyewear-selector' + n.images['frontal-sm']}
                buttonBrand={ n.brand}
                buttonName={ n.name}
                key={n.id}
              />
          )}
        </div>
      );
    }
}

export default Selector;
