const TOKEN_KEY = 'jwt';
export const logins = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
}