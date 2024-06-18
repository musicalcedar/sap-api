let sessionCookies = [];

export const setSessionCookies = (cookies) => {
  sessionCookies = cookies;
};

export const getSessionCookies = () => sessionCookies;
