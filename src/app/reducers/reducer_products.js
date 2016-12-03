import _ from 'lodash';
import { SELECT_PRODUCT } from '../actions/types';


const PRODUCTS =[
    {'title':'AA'},
    {'title':'BB'},
    {'title':'CC'},
    {'title':'DD'},
    {'title':'EE'},
    {'title':'FF'},
    {'title':'GG'}
]
/*
export default function(state= PRODUCTS, action){
  switch (action.type) {
      case SELECT_PRODUCT:
        return _.filter(PRODUCTS, product => product.title.match(action.payload))
      default:
      return state;
  }
}
*/
