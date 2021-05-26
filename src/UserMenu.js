import { connect } from "react-redux";
import authSelectors from "./redux/auth/auth-selectors";
import authOperations from "./redux/auth/auth-operations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  mail: {
    marginRight: 10,
  },
  name: {
    fontWeight: 700,
    marginRight: 20,
  },
};

const UserMenu = ({ mail, name, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.mail}>User e-mail: {mail}</span>
    <span style={styles.name}>User name: {name}</span>
    <button type="button" onClick={onLogout}>
      Logout 🟥
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.userName(state),
  mail: authSelectors.userMail(state),
});
const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
