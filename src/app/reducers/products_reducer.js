import _ from 'lodash';
import { READ_PRODUCTS } from '../actions/types';

const PRODUCTS = [
  { title: 'Cocacola', pages: 101 },
  { title: 'beer', pages: 39 },
  { title: 'orrage', pages: 85 },
  { title: 'sting', pages: 1 }
];

export default function(state = PRODUCTS, action) {
  switch(action.type) {
  case READ_PRODUCTS:
    return _.filter(PRODUCTS, products => products.title.match(action.payload))
  default:
    return state;
  }
}
