import React, { Suspense } from "react";
import { Route as RouteDom } from "react-router-dom";

interface IRoute {
  path: string;
  Component?: React.FC;
  exact?: boolean;
}

const Route: React.FC<IRoute> = ({ Component, ...rest }) => {
  return (
    <RouteDom
      {...rest}
      render={(props: any) => (
        <Suspense fallback={<div>Loading...</div>}>
          {Component && <Component {...props} />}
        </Suspense>
      )}
    />
  );
};

export default Route;
