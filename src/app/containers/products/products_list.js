/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class ProductsList extends Component {
  renderList() {
    return this.props.product.map((product) => {
      return (
        <li
          key={product.title}
          onClick={() => this.props.selectBook(product)}
          className="list-group-item">
          {product.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.product
  };
}
export default connect(mapStateToProps, actions)(ProductsList);
*/
