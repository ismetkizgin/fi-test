describe("Login Test", () => {
  context("Should display the log in page.", () => {
    it("Should display the log in page.", function () {
      cy.visit("/");
      cy.url().url().should("include", "/login");
    });

    it("There should be login and signup tabs.", () => {
      cy.log("must have a login tab");
      cy.get(".login__formContent > :nth-child(1)");
      cy.log("must have a sign up tab");
      cy.get(".login__formContent > :nth-child(2)");
    });
  });

  context(
    "User information must be entered and the login button must be clicked.",
    () => {
      it("User must login", () => {
        cy.testLogin();
      });
    }
  );
});
