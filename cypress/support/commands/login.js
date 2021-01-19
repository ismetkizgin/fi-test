Cypress.Commands.add("testLogin", () => {
  cy.fixture("user.json").then((user) => {
    cy.log("must open to login page");
    cy.visit("/login");

    cy.log(user.EmailAddress);
    cy.get('[name="EmailAddress"]').type(user.EmailAddress);
    cy.log(user.Password);
    cy.get('[name="Password"]').type(user.Password);

    cy.log("Should be click the Login button");
    cy.get(".login__button").click().url().should("include", "/");
  });
});
