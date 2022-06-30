import React, { FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../Button";
import { RootState, TypedDispatch } from "../../store";
import { signout } from "../../store/actions/authActions";

const Header: FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch<TypedDispatch>();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  return (
    <nav className="navbar is-spaced has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to={!authenticated ? "/" : "/dashboard"}
          >
            AppName
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-items">
            {!authenticated ? (
              <div className="buttons">
                <Button
                  type={null}
                  text="Sign up"
                  onClick={() => history("/signup")}
                  className="is-primary"
                />
                <Button
                  type={null}
                  text="Sign in"
                  onClick={() => history("/signin")}
                />
              </div>
            ) : (
              <Button
                type={null}
                text="Sign out"
                onClick={logoutClickHandler}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
