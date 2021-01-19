describe("Sign Up Test", () => {
  context("Should display the log in page and signup form should open.", () => {
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

    it("Should be sign up tab click.", () => {
      cy.get(".login__formContent > :nth-child(2)").click();
    });
  });

  context(
    "User information must be entered and the sign up button must be clicked.",
    () => {
      it("Should be user information entered.", () => {
        cy.log("Should be first name entered.");
        cy.get('[name="FirstName"]').type("İsmet");
        cy.log("Should be last name entered.");
        cy.get('[name="LastName"]').type("Kizgin");
        cy.log("Should be email address entered");
        cy.get('[name="EmailAddress"]').type(
          `ismet${Math.floor(Math.random() * 1000 + 1)}@hotmail.com`
        );
        cy.log("Should be password entered");
        cy.get('[name="Password"]').type("password");
      });

      it("The Register button should be clicked.", () => {
        cy.get(".login__button").click();
      });

      it("The registration complete notification should appear.", () => {
        cy.get("notification__success").should("be");
      });
    }
  );
});
