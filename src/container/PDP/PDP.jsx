/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PDPComponent from '../../component/PDP/PDPComponent';

class PDP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {},
      selected_variation: [],
      attr_option: [],
      selected_option_ids: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, e) {
    let tempArr = this.state.selected_option_ids;
    let selected_option_ids = new Object();
    Object.keys(tempArr).forEach(function(key) {
      if (key === e.target.name) {
        selected_option_ids[key] = e.target.value;
      } else {
        selected_option_ids[key] = tempArr[key];
      }
    });
    this.setState(
      { selected_option_ids: selected_option_ids },
      this.updateSelectedVariation
    );
    console.log('idddd', e.target.name, e.target.value);
  }

  componentDidMount() {
    console.log('component did mount', this.props.match.params.id);
    fetch(
      `https://assignment-appstreet.herokuapp.com/api/v1/products/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(product =>
        this.setState({ product }, this.getSelectedVariationData(product))
      )
      .catch(error => {
        console.log('Error: ', error);
      });
    console.log(this.state.product);
  }

  render() {
    if (this.state.product && this.state.product.success) {
      return (
        <React.Fragment>
          <PDPComponent
            data={this.state.product}
            selectedVariation={this.state.selected_variation}
            attr_option={this.state.attr_option}
            handleClick={this.handleClick}
            selected_option_ids={this.state.selected_option_ids}
          />
        </React.Fragment>
      );
    } else {
      console.log(this.state.products);
      return (
        <React.Fragment>
          <div>Loading...</div>
        </React.Fragment>
      );
    }
  }

  updateSelectedVariation() {
    this.state.product.product_variations.map(prod => {
      let tempStr = Object.values(this.state.selected_option_ids)
        .map(function(v) {
          return v;
        })
        .join('_');
      let tempStrRev = Object.values(this.state.selected_option_ids)
        .map(function(v) {
          return v;
        })
        .reverse()
        .join('_');
      if (
        tempStr === prod.sign.join('_') ||
        tempStrRev === prod.sign.join('_')
      ) {
        this.setState({ selected_variation: prod });
      }
    });
  }

  getSelectedVariationData(product) {
    // this.setState({ selected_option_ids: product.selected_option_ids });
    var selected_option_ids = new Object();
    product.product_variations.map(prod => {
      if (product.selected_option_ids.join('_') === prod.sign.join('_')) {
        this.setState({ selected_variation: prod });
        product.options.forEach(function(option) {
          if (product.selected_option_ids.includes(option._id)) {
            selected_option_ids[option.attrib_id] = option._id;
          }
        });
      }
    });
    this.setState({ selected_option_ids: selected_option_ids });
    console.log(selected_option_ids);
    let attr_option = [];
    product.attributes.forEach(function(attr) {
      attr_option[attr.name] = [];
      attr_option[attr.name].id = attr._id;
      attr_option[attr.name].data = [];
      product.options.forEach(function(option) {
        if (attr._id === option.attrib_id) {
          attr_option[attr.name].data.push(option);
        }
      });
    });
    this.setState({ attr_option });
  }
}
export default PDP;
