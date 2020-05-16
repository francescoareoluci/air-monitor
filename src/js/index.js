import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import "../css/reset.css";
import "../css/loader.css";
import "../css/style.css";
import App from '../components/router'
import store from "./store/store";


ReactDOM.render(
    <Provider store={store}>
        {App()}
    </Provider>,
    document.getElementById('root')
);
  