import { combineReducers } from 'redux'
import plp from './container/PLP/reducer';
import pdp from './container/PDP/reducer';
export default combineReducers({
  plp,
  pdp
})