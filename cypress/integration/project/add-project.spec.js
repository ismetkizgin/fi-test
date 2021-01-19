describe("Add Project Test", () => {
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

  context("A new project should be created.", () => {
    it("Should be project insertion button click.", () => {
      cy.get(".fas").click();
    });

    it("Project information must be entered.", () => {
      cy.log("Should be project name entered.");
      cy.get('[name="ProjectName"]').type("Test Project");
      cy.log("Should be project description entered.");
      cy.get('[name="Description"]').type("Test Project Description");
    });

    it("The Save button should be clicked.", () => {
      cy.get("form.ng-dirty > .btn").click();
    });

    it("The registration complete notification should appear.", () => {
      cy.get("notification__success").should("be");
    });
  });
});
