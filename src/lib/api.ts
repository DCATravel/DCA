type AuthClient = {
  auth: {
    login: () => void;
  };
};

/**
 * Local placeholder kept only for the legacy AuthCallback page.
 * Replace this with a real auth provider when the portal requires login.
 */
export const client: AuthClient = {
  auth: {
    login: () => {
      console.info('Auth provider is not configured for this frontend yet.');
      window.location.assign('/');
    },
  },
};
