import React, { Component } from 'react';
import Button from './button'
import '../myCSS/Selector.css'

class Selector extends Component {

    render() {
      return (
        <div>
          {this.props.activePage ?
            <h1 className = 'DetSelector'><b>Select Your Eyewear</b></h1>:
            <h1 className = 'Selector'><b>Select Your Eyewear</b></h1>
          }
          {this.props.activePageLoad.map((n,nInx)=>
              <Button
                onClick={(e)=>
                  {e.preventDefault();
                  this.props.onChangePage(nInx+1);
                  this.props.onSetSize(n.sizes[0])}
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
