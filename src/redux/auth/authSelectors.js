export const selectAuth = state => state.auth;

export const selectAuthAuthenticated = state => selectAuth(state).authenticated;
export const selectUser = state => selectAuth(state).user;
