//Test Case 01 - Validate the login form
describe("Test Case 01 - Validate the login form", () => {
  it("Validate the login form", () => {
    //1 - Navigate to https://techglobal-training.com/frontend/project-2
    cy.visit("https://techglobal-training.com/frontend/project-2");

    //2 - Validate that the username input box is displayed
    cy.get("#username").should("be.visible");

    //3 - Validate that the username input box is not required
    cy.get("#username").should("not.have.attr", "required");

    //4 - Validate that the label of the username input box is “Please enter your username”
    cy.contains("label", "Please enter your username").should("be.visible");

    //5 - Validate that the password input box is displayed
    cy.get("#password").should("be.visible");

    //6 - Validate that the password input box is not required
    cy.get("#password").should("not.have.attr", "required");

    //7 - Validate that the label of the password input box is “Please enter your password”
    cy.get('label[for="password"]').should(
      "have.text",
      "Please enter your password"
    );

    //8 - Validate the “LOGIN” button is displayed
    cy.get('button[type="submit"]').should("be.visible");

    //9 - Validate the “LOGIN” button is clickable

    cy.get('button[type="submit"]').should("be.enabled");

    //10 - Validate that the button text is “LOGIN”
    cy.get("button").contains("LOGIN").should("have.text", "LOGIN");

    //11 - Validate the “Forgot Password?” link is displayed
    cy.get("a").contains("Forgot Password?").should("be.visible");

    //12 - Validate that the “Forgot Password?” link is clickable
    cy.get("a").contains("Forgot Password?").should("not.be.disabled");

    //13 - Validate that the link text is “Forgot Password?”
    cy.get("a")
      .contains("Forgot Password?")
      .should("have.text", "Forgot Password?");
  });
});
