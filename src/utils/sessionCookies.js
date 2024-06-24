let sessionCookies = [];

const setSessionCookies = (cookies) => {
  sessionCookies = cookies;
};

const getSessionCookies = () => sessionCookies;

module.exports = { setSessionCookies, getSessionCookies };
