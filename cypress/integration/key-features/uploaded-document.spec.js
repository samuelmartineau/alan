/// <reference types="Cypress" />

const { email, password } = require("../../config");

context("Uploaded Document", () => {
  it("should list document uploaded in the right section", () => {
    // Custom command to login without using the interface
    cy.loginAs(email, password);
    // Open protected homepage
    cy.visit("/app/dashboard");
    // Click on the tab with "Demandes" name
    cy.get("h4")
      .contains("Demandes")
      .click();

    // Check some predictable data - that not the case
    cy.get(".UploadedDocumentContainer .document-type").contains(
      "Facture n° 1"
    );
    // Check something else
    cy.get(".UploadedDocumentContainer .document-status").contains("Traité");
  });
});
