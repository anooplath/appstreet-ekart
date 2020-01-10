import React from 'react';
import ImageSlider from './ImageSlider';
import './PDP.css';
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Button,
} from 'react-bootstrap';
class PLPComponent extends React.Component {
  render() {
    const {
      images,
      name,
      mark_price,
      sale_price,
      sale_msg,
    } = this.props.selectedVariation;
    console.log('attr', this.props);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6 col-12">
            <ImageSlider images={images} />
          </div>
          <div className="col-md-6 col-12">
            <h5 className="seperator name">{name}</h5>
            <div className="description seperator">
              {this.props.data.primary_product.desc}
            </div>
            <div className="price seperator">
              &#8377;&nbsp;{this.priceFormat(sale_price)}&nbsp;
              <del>&#8377;&nbsp;{this.priceFormat(mark_price)}</del>
              <div>
                You save &#8377;&nbsp;
                {this.priceFormat(mark_price - sale_price)} ({sale_msg})
              </div>
              <div>Local taxes included (wherever applicable)</div>
            </div>
            {Object.keys(this.props.attr_option).map(attr => {
              return (
                <div className="options seperator">
                  <div>
                    {this.props.attr_option[attr].data.length}
                    {` ${attr} avaialable`}
                  </div>
                  <ButtonToolbar>
                    <ToggleButtonGroup
                      type="radio"
                      name={this.props.attr_option[attr].id}
                      defaultValue={
                        this.props.selected_option_ids[
                          this.props.attr_option[attr].id
                        ]
                      }
                      onChange={this.props.handleClick}
                    >
                      {this.props.attr_option[attr].data.map(option => {
                        return (
                          <ToggleButton
                            variant="outline-secondary"
                            className="mr-2"
                            value={option._id}
                          >
                            {option.name}
                          </ToggleButton>
                        );
                      })}
                    </ToggleButtonGroup>
                  </ButtonToolbar>
                </div>
              );
            })}
            <Button className="mt-2" size="lg" block>
              Add to cart
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  priceFormat(price) {
    return price.toFixed(2);
  }
}

export default PLPComponent;
