describe("Edit Project Test", () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  context(
    "User information must be entered and the login button must be clicked.",
    () => {
      it("User must login", () => {
        cy.testLogin();
      });
    }
  );

  context("The first project should be deleted..", () => {
    it("Should be click three dots in first project card. Should be open drop down menu. ", () => {
      cy.log("Should be click three dots in first project card.");
      cy.get(
        ":nth-child(2) > .card > .card-body > .row-1 > .col-1 > .list-button > .mat-menu-trigger > .mat-icon"
      ).click();

      cy.log("Should be open drop down menu");
      cy.get(".mat-menu-content").should("be");
    });

    it("Should be click delete button", () => {
      cy.get(".mat-menu-content > :nth-child(3)").click();
    });

    it("A warning window should open and click the yes button.", () => {
      cy.log("A warning window should open.");
      cy.get(".content-container").should("be");
      cy.log("Should be click the yes button.");
      cy.get(".warning-button__yes").click();
    });

    it("The registration complete notification should appear.", () => {
      cy.get("notification__success").should("be");
    });
  });
});
