export const loginRequest = (email, password) => {
    return {
      method: 'POST',
      url: '/login',
      body: {
        email: email,
        password: password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };
  };