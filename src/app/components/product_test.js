/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import TestProduct from '../containers/products/products_list';


class AppTest extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const value = event.target.value
    this.props.searchBooks(value);
    this.setState({ term: value });
  }

  render() {
    return (
      <div>
        <TestProduct />
      </div>
    );
  }
};

export default connect(null, actions)(AppTest);
*/
