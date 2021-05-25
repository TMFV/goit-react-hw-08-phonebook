//export default authSelectors;
const isAuthenticated = (state) => state.auth.token;

export default {
  isAuthenticated,
};
