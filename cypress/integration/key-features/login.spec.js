/// <reference types="Cypress" />

const { email, password } = require("../../config");

context("Login", () => {
  it("should go to login page on click on Homepage's login button", () => {
    // Open the homepage
    cy.visit("/");
    // Click on login button
    cy.get("a[href='/login']").click();
    // Check for the redirection
    cy.url().should("eq", `${Cypress.config().baseUrl}/login`);
  });

  it("should login user on form submit", () => {
    // Open login page
    cy.visit("/login");
    // Fill email
    cy.get("input[name='email']").type(email);
    // Fill pasword but don't display value in GUI
    cy.get("input[name='password']").type(password, {
      log: false
    });
    // Submit form by clicking (or add {enter} in the last field)
    cy.get("button[type='submit']").click();
    // Check for the redirection
    cy.url().should("eq", `${Cypress.config().baseUrl}/app/dashboard`);
    // Check something on the page that confirms the login success
    cy.get("#navbar a").contains("Samuel");
  });
});
