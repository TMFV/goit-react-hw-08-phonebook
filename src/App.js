import React, { Component } from "react";
import { Route } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import appActions from "./redux/app/app-actions";
import appOperations from "./redux/app/app-operations";
import { connect } from "react-redux";
import selectors from "./redux/app/contacts-selectors";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ContactsView from "./views/ContactsView";
import AppBar from "./AppBar";

class App extends Component {
  /*   componentDidMount() {
    this.props.fetchContacts();
  } */

  render() {
    console.log(this.props.contacts);
    console.log(this.props.filter);
    console.log(this.props.visibleArray);

    return (
      <div className="App">
        <AppBar />
        <>
          <Route path="/" exact component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </>
        {/*  <h1>Phonebook</h1>
        {this.props.isLoadingContacts && <h2>Loading ...</h2>}
        <ContactForm onSubmitData={this.props.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={this.props.filterSet} />
        <ContactList
          contacts={this.props.visibleArray}
          del={this.props.contactDelete}
        /> */}
      </div>
    );
  }
}
/* const mapStateToProps = (state) => ({
  isLoadingContacts: selectors.getIsLoading(state),
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  visibleArray: selectors.getVisibleFilterArray(state),
});

const mapDispatchToProrps = (dispatch) => ({
  fetchContacts: () => dispatch(appOperations.fetchContacts()),
  formSubmitHandler: (contactData) =>
    dispatch(appOperations.addContact(contactData)),
  contactDelete: (contactId) =>
    dispatch(appOperations.deleteContact(contactId)),
  filterSet: (str) => dispatch(appActions.filterSet(str)),
}); */
//export default connect(mapStateToProps, mapDispatchToProrps)(App);
export default App;
