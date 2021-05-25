import { NavLink } from "react-router-dom";

const styles = {
  link: {
    margin: 5,
    display: "block",
    color: "red",
  },
  activeLink: {
    margin: 5,
    display: "block",
    color: "green",
  },
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
