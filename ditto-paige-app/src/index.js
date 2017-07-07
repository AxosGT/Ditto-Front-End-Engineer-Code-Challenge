import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import setMyApp from './reducers/index';
import ContainerApp from './containers/containerApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(setMyApp);

ReactDOM.render(
  <Provider store={store}>
      <ContainerApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
