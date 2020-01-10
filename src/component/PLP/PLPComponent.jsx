import React from 'react';
import ProductTile from './ProductTile';
import './PLP.css';
import { Button } from 'react-bootstrap';
class PLPComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProductTile data={this.props.data} />
        <div>
          <Button onClick={this.props.onLoadMore} className="loadMore btn">
            Load More
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default PLPComponent;
