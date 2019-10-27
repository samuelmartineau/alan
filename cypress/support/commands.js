// custom commands to login user to Alan

Cypress.Commands.add("loginAs", (email, password) => {
  return cy
    .request({
      url: "https://api.alan.com/auth/login",
      method: "POST",
      body: { email, password }
    })
    .then(resp => {
      // Guys... it has taken me 10 minutes to understand your localstorage system
      window.localStorage.setItem("refreshToken", resp.body.refresh_token);
      window.localStorage.setItem("token", resp.body.token);
    });
});
