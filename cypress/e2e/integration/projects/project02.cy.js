describe("Login Form Tests", () => {
  const url = "https://techglobal-training.com/frontend/project-2";
  const username = "TechGlobal";
  const password = "Test1234";

  const visitPage = () => cy.visit(url);
  const login = (user, pass) => {
    cy.get("#username").type(user);
    cy.get("#password").type(pass);
    cy.get("#login_btn").contains("LOGIN").click();
  };

  beforeEach(() => visitPage());

  it("Test Case 01 - Validate the login form", () => {
    cy.get("#username")
      .should("be.visible")
      .should("not.have.attr", "required");
    cy.get("label").contains("Please enter your username");
    cy.get("#password")
      .should("be.visible")
      .should("not.have.attr", "required");
    cy.get("label").contains("Please enter your password");
    cy.get("#login_btn")
      .contains("LOGIN")
      .should("be.visible")
      .and("be.enabled");
    cy.get("a")
      .contains("Forgot Password?")
      .should("be.visible")
      .and("not.be.disabled");
  });

  it("Test Case 02 - Validate the valid login", () => {
    login(username, password);
    cy.contains("You are logged in").should("be.visible");
    cy.get("button").contains("LOGOUT").should("be.visible");
  });

  it("Test Case 03 - Validate the logout", () => {
    login(username, password);
    cy.get("button").contains("LOGOUT").click();
    cy.get('h1[class="is-size-3"]').should("be.visible");
  });

  it("Test Case 04 - Validate the Forgot Password? Link and Reset Password modal", () => {
    cy.get("a").contains("Forgot Password?").click();
    cy.contains("Reset Password").should("be.visible");
    cy.get(".delete").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("label").contains(
      "Enter your email address and we'll send you a link to reset your password."
    );
    cy.get("button").contains("SUBMIT").should("be.visible").and("be.enabled");
  });

  it("Test Case 05 - Validate the Reset Password modal close button", () => {
    cy.get("a").contains("Forgot Password?").click();
    cy.get("body").should("be.visible");
    cy.contains("#modal_title").should("not.exist");
  });

  it("Test Case 06 - Validate the Reset Password form submission", () => {
    cy.get("a").contains("Forgot Password?").click();
    cy.get("#email").type("test@example.com");
    cy.get("button").contains("SUBMIT").click();
    cy.contains(
      "A link to reset your password has been sent to your email address."
    ).should("be.visible");
  });

  it("Test Case 07 - Validate the invalid login with the empty credentials", () => {
    login(" ", " ");
    cy.get('p[id="error_message"]')
      .contains("Invalid Username entered!")
      .should("be.visible");
  });

  it("Test Case 08 - Validate the invalid login with the wrong username", () => {
    login("John", password);
    cy.contains("Invalid Username entered!").should("be.visible");
  });

  it("Test Case 09 - Validate the invalid login with the wrong password", () => {
    login(username, "1234");
    cy.contains("Invalid Password entered!").should("be.visible");
  });

  it("Test Case 10 - Validate the invalid login with the wrong username and password", () => {
    login("John", "1234");
    cy.contains("Invalid Username entered!").should("be.visible");
  });
});
