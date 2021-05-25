import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import { getQueriesForElement } from "@testing-library/dom";

var cx = classNames.bind(styles);
var styles = {
  link: { color: "red" },
  activeLink: { color: "green" },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
