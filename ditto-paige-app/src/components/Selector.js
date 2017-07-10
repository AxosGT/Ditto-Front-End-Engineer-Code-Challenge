import React, { Component } from 'react';
import SelectorOption from './SelectorOption'

class Selector extends Component {

    render() {
      return (
        <div className="selector">
          <h1 className={`title ${this.props.activePage ? 'font_large' : 'font_huge'}`}>Select Your Eyewear</h1>
          <div className="selector_grid">
            {this.props.activePageLoad.map((n,nInx)=>
              <div className="selector_grid_element">
                <SelectorOption
                  onClick={(e)=>
                    {e.preventDefault();
                    this.props.onChangePage(nInx+1);
                    this.props.onSetSize(n.sizes[0])}
                  }
                  img={'/eyewear-selector' + n.images['frontal-sm']}
                  brand={n.brand}
                  name={n.name}
                  key={n.id}
                />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Selector;
