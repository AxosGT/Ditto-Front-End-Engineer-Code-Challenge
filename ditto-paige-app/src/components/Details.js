import React, {Component} from 'react';
import OrderButton from './OrderButton'

class Details extends Component {
    render() {
      var currentDetails = this.props.activePageLoad[this.props.activePage-1];
      return (
        <div className="details">
          <div className="details_grid">
            <div>
              <img className="details_glasses_image" src={'/eyewear-selector' + currentDetails.images.frontal} />
            </div>
            <div>
              <img className="details_glasses_image" src={'/eyewear-selector' + currentDetails.images.side} />
            </div>
          </div>
          <h1 className="title font_huge padding_small">{currentDetails.brand}</h1>
          <div className="title text_light padding_small">{currentDetails.name}</div>
          <div className="title padding_small">
            {Number(currentDetails.price)
              .toLocaleString('us-US', { style: 'currency', currency: 'USD' })
              .slice(0,-3)
            }
          </div>
          <div className="details_grid">
            <div
              className="details_grid_element details_description text_light padding_small"
              dangerouslySetInnerHTML={{__html: currentDetails.description}}>
            </div>
            <div className="details_grid_element details_form padding_medium">
              <h1
                className="title"
                style={{textAlign:'left'}}
              >
                Select Size
              </h1>
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
                    <label className="details_form_label text_light font_small">
                      {n}
                    </label>
                  </div>
                )}
                <OrderButton
                  onClick={(e)=>
                    {e.preventDefault();
                    this.props.onBuyPost(
                      {'purchase-sku-id': currentDetails['sku-id'],
                        'purchase-price': Number(currentDetails.price)*100,
                        'purchase-sku-size': this.props.activeSize + '',
                        'purchase-datatime':  new Date().toISOString()
                      }
                    )}
                  }
                />
              </div>
            </div>
          </div>
        <div className="padding_large"></div>
        </div>
      );
    }
}

export default Details;
