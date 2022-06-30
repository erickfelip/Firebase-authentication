import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, RouteProps } from "react-router-dom";

import { RootState } from "../../store";

interface Props extends RouteProps {
  component: any;
  children: any;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const { authenticated } = useSelector((state: RootState) => state.auth);

  return authenticated ? children : <Navigate to="/signIn" />;
};

export default PrivateRoute;
