import React from 'react';
import {Provider} from 'react-redux';
import Movies from './src/Movies/index';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Movies />
    </Provider>
  );
};

export default App;
