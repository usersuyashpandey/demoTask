import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import ManageRoutes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ManageRoutes />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
