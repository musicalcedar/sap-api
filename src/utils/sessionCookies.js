let sessionCookies = [];

const setSessionCookies = (cookies) => {
  sessionCookies = cookies;
};

const getSessionCookies = () => sessionCookies;

const useSessionCookies = (axiosInstance) => {
  const sessionCookies = getSessionCookies();
  axiosInstance.defaults.headers.Cookie = sessionCookies.join(";");
};

module.exports = { setSessionCookies, getSessionCookies, useSessionCookies };
