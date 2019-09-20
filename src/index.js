import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AccountProvider from "./providers/AccountProvider";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, } from "react-router-dom";


ReactDOM.render(
  <AccountProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AccountProvider>,
document.getElementById('root')
);

