import React from 'react';
import { NavLink } from 'react-router-dom';
class ProductTile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.props.data.map(product => {
            return (
              <div className="col-md-3 col-sm-6 col-6 plp-tile">
                <NavLink to={`/products/${product._id}`}>
                  <img
                    class="plp-image"
                    src={product.images[0]}
                    alt={product.name}
                  />
                  <h5>{product.name}</h5>
                  <div className="plp-price">
                    &#8377;&nbsp;{this.priceFormat(product.sale_price)}
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
  priceFormat(price) {
    return price.toFixed(2);
  }
}

export default ProductTile;
