import React, { lazy } from "react";
import { Redirect, Switch } from "react-router-dom";

import Route from "./Route";

const Home = lazy(() => import("../pages/Home/Home"));

interface IRoutes {
  history: any;
}

const Routes: React.FC<IRoutes> = ({ history }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home" Component={Home} />

      <Route path="*" Component={() => <div> Não Foi Encontrado </div>} />
    </Switch>
  );
};

export default Routes;
