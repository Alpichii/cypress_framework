describe("Test Case 02 - Validate the login form", () => {
  it("Validate the login form", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");

    cy.get("#username").type("TechGlobal"); // Enter the username as “TechGlobal”

    cy.get("#password").type("Test1234"); // Enter the password as “Test1234”

    cy.get('button[type="submit"]').click(); // Click on the “LOGIN” button

    cy.get("#success_lgn")
      .should("be.visible")
      .and("have.text", "You are logged in"); // Validate the success message is displayed as “You are logged in”

    cy.get("#logout").should("be.visible").and("have.text", "LOGOUT"); // Validate the logout button displayed with the text “LOGOUT”
  });
});
