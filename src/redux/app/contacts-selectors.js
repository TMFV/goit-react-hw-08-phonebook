import { createSelector } from "@reduxjs/toolkit";

const getIsLoading = (state) => state.app.loading;
const getFilter = (state) => state.app.filters;
const getContacts = (state) => state.app.contacts;

// add memo
const getVisibleFilterArray = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    let newArr = contacts.filter(({ name }) =>
      name.toUpperCase().includes(filter)
    );
    return [...newArr];
  }
);
export default {
  getIsLoading,
  getFilter,
  getContacts,
  getVisibleFilterArray,
};
