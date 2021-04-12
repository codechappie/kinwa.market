import React from 'react';
import ReactDom from 'react-dom';
import WatsyApp from './WatsyApp';

// slick css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import './assets/css/general.css'
import './assets/css/styles.css'

ReactDom.render(
  // <React.StrictMode>
    <WatsyApp />
  // </React.StrictMode>
  ,document.getElementById('root')
);
