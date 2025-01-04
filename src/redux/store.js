import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Ensure this is imported
import { reducer } from './reducer';

const store = createStore(
 reducer,
  composeWithDevTools() // Use Redux DevTools extension here
);

export default store;
