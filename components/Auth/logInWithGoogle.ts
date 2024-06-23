import { useAuth } from '@realm/react';

export const LogInWithGoogle = () => {
  const { logInWithGoogle, result } = useAuth();
  const performLogin = () => {
    // Get an access token using a third-party library
    // or build your own solution. You must define this function.
    // const token = getGoogleToken();
    // logInWithGoogle(token);
  };
  // Handle `result`...
};
