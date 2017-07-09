import React, {Component} from 'react';
import Button from './button'
import  OrderButton from './orderButton'
//import '../myCSS/home.css'


class DetailsPage extends Component {
    render() {
      console.log(this.props.activeSize);
      var currentDetails = this.props.activePageLoad[this.props.activePage-1];
      return (
        <div className='detailsPage'>
          <div>
            <img src = {'/eyewear-selector' +currentDetails.images.frontal } />
            <img src = {'/eyewear-selector' +currentDetails.images.side } />
          </div>
          <h1>
            {currentDetails.brand}
          </h1>
          <h1>
            {currentDetails.name}
          </h1>
          <h1>
            {currentDetails.price}
          </h1>
          <span dangerouslySetInnerHTML={{__html: currentDetails.description}} />
          <h1>Select Size</h1>
          <div>
            {currentDetails.sizes.map((n,i)=>
              <div
                key={n}
                onClick={e=>this.props.onSetSize(n)}
              >
                <input
                  type="radio"
                  value={n}
                  checked={this.props.activeSize === n }
                />
                {n}
              </div>
            )}
          </div>
          <OrderButton />
        </div>
      );
    }
}

export default DetailsPage;
