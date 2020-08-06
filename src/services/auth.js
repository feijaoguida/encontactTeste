export const USER_KEY = "@EnContact_token";
export const isAuthenticated = () => localStorage.getItem(USER_KEY) !== null;
export const getUser = () => localStorage.getItem(USER_KEY);
export const login = (user) => {
  localStorage.setItem(USER_KEY, user);
};
export const logout = () => {
  localStorage.removeItem(USER_KEY);
};
