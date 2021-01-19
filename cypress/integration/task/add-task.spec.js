describe("Add Task Test", () => {
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

  context("A new task must be added.", () => {
    it("Should be click the İssue board go button.", () => {
      cy.get(
        ":nth-child(2) > .card > .card-body > :nth-child(4) > .btn"
      ).click();
    });

    it("Should click task insertion button.", () => {
      cy.get(
        ".table-responsive > :nth-child(1) > :nth-child(1) > .p-2"
      ).click();
    });

    it("Should be task information entered.", () => {
      cy.log("Should be task name entered.");
      cy.get('[name="TaskName"]').type("Test Task Name");
      cy.log("Should be task description entered.");
      cy.get('[name="Description"]').type("Test Task Description");
      cy.log("Should be task due date entered.");
      cy.get('[name="DueDate"]').type("12/30/2021");
      cy.log("The user must be selected..");
      cy.get('[name="UserID"]').select("1");
    });

    it("The Save button should be clicked.", () => {
      cy.get("form.ng-dirty > .btn").click();
    });

    it("The registration complete notification should appear.", () => {
      cy.get("notification__success").should("be");
    });
  });
});
