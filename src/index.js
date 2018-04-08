import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import store from 'reducers/store';
import "assets/css/material-dashboard-react.css";
import indexRoutes from "routes/index.jsx";

import registerServiceWorker from './registerServiceWorker';

const hist = createBrowserHistory();

ReactDOM.render(

  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();