export const syncErrorHandling = {
  flexible: true,
  onError: (_session, error) => {
    console.log(error);
  },
};
