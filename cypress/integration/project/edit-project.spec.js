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

  context("The first project information should be edited.", () => {
    it("Should be click three dots in first project card. Should be open drop down menu. ", () => {
      cy.log("Should be click three dots in first project card.");
      cy.get(
        ":nth-child(2) > .card > .card-body > .row-1 > .col-1 > .list-button > .mat-menu-trigger > .mat-icon"
      ).click();

      cy.log("Should be open drop down menu");
      cy.get(".mat-menu-content").should("be");
    });

    it("Should be click edit button", () => {
      cy.get(".mat-menu-content > :nth-child(2)").click();
    });

    it("Project information must be entered.", () => {
      cy.log("Should be project name entered.");
      cy.get('[name="ProjectName"]').type("{selectall}{backspace}Test Project");
      cy.log("Should be project description entered.");
      cy.get('[name="Description"]').type(
        "{selectall}{backspace}Test Project Description"
      );
    });

    it("The Save button should be clicked.", () => {
      cy.get("form.ng-dirty > .btn").click();
    });

    it("The registration complete notification should appear.", () => {
      cy.get("notification__success").should("be");
    });
  });

  context("Card information should be updated.", () => {
    it("The project name must be updated.", () => {
      cy.get(
        ":nth-child(2) > .card > .card-body > .row-1 > .col-11 > .card-title"
      ).contains("Test Project");
    });

    it("The project description must be updated.", () => {
      cy.get(":nth-child(2) > .card > .card-body > .card-text").contains(
        "Test Project Description"
      );
    });
  });
});
