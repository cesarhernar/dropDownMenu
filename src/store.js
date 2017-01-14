import { createStore } from 'redux';
import hoverReducer from './reducers/hoverReducer';

const store = createStore(hoverReducer);

export default store;