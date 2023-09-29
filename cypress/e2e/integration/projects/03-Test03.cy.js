describe("Test Case 02 - Validate the login form", () => {
  it("Validate the login form", () => {
    cy.visit("https://techglobal-training.com/frontend/project-2");

    cy.get("#username").type("TechGlobal"); // Enter the username as “TechGlobal”

    cy.get("#password").type("Test1234"); // Enter the password as “Test1234”

    cy.get('button[type="submit"]').click(); // Click on the “LOGIN” button

    cy.get("#logout").click(); //Click on the “LOGOUT” button

    cy.get('h1[class="is-size-3"]').should("be.visible"); //Validate that the login form is displayed
  });
});
