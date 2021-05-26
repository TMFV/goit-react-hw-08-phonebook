import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ContactsView from "./views/ContactsView";
import AppBar from "./AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <AppBar />
        <>
          <Route exact path="/" component={HomeView} />
          <PublicRoute path="/register" redirectTo="/contacts" restricted>
            <Route path="/register" component={RegisterView} />
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <Route path="/login" component={LoginView} />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <Route path="/contacts" component={ContactsView} />
          </PrivateRoute>
        </>
      </div>
    );
  }
}

const mapDispatchToProrps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProrps)(App);
