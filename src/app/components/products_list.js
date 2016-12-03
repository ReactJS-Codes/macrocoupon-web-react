/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ProductsList extends Component {
  renderList() {
    return this.props.products.map((products) => {
      return (
        <li
          key={products.title}
          onClick={() => this.props.selectBook(products)}
          className="list-group-item">
          {products.title}
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
    products: state.products
  };
}
export default connect(mapStateToProps, actions)(ProductsList);
*/
