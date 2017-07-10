import React, {Component} from 'react';

class SelectorOption extends Component {

    render() {
      return (
          <button
            type="button"
            className="selector_option"
            onClick={this.props.onClick}
          >
            <div>
              <img src={this.props.img} />
            </div>
            <div>
              <div className="title font_small">{this.props.brand}</div>
              <div className="text_light">{this.props.name}</div>
            </div>
          </button>
      );
    }
}

export default SelectorOption;
