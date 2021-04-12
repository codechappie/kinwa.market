import React from "react";
import { Provider } from 'react-redux'
import { store } from './store/store'


import WatsyRouter from "./routes/WatsyRouter";

const WatsyApp = () => {

  return (
    <Provider store={store}>
      <WatsyRouter />
    </Provider>
  );
};

export default WatsyApp;
