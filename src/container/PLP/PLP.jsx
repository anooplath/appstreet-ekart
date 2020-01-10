/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PLPComponent from '../../component/PLP/PLPComponent';

class PLP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      currentPage: 1,
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
    this.fetchProducts();
    console.log(this.state.products);
  }
  onLoadMore(e) {
    e.preventDefault();
    this.setState(
      {
        currentPage: this.state.currentPage + 1,
      },
      this.fetchProducts
    );
  }

  fetchProducts() {
    fetch(
      `https://assignment-appstreet.herokuapp.com/api/v1/products?page=${this.state.currentPage}`
    )
      .then(res => res.json())
      .then(products =>
        this.setState(state => ({
          products: state.products.concat(products.products),
        }))
      )
      .catch(error => {
        console.log('Error: ', error);
      });
  }
  render() {
    console.log('aaaa', this.state.products);
    if (this.state.products.length) {
      return (
        <React.Fragment>
          <PLPComponent
            data={this.state.products}
            onLoadMore={this.onLoadMore}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div>Loading...</div>
        </React.Fragment>
      );
    }
  }
}
export default PLP;
