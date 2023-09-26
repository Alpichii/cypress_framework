/// <reference types= "Cypress"/>

// Group of tests
describe("My First Test", () => {
  // This is individual test block
  it("Visit TechGlobal training home page", () => {
    cy.visit("https://techglobal-training.com/");

    // command to reload the page
    cy.reload();

    cy.visit("https://techglobal-training.com/frontend");

    // command to navigate back in the browser
    // cy.go('back')
    cy.go(-1);

    // command to navigate forward in the browser
    // cy.go('forward')
    cy.go(1);

    cy.go("back");

    // Validating title
    cy.title().should("eq", "Techglobal Training | Home");

    //Validating URL
    cy.url().should("eq", "https://techglobal-training.com/");
  });

  it("My First Test", () => {
    expect(true).to.equal(true);

    cy.visit("https://techglobal-training.com/");
    cy.get("#logo").click();

    cy.get("#logo").should("be.visible");
  });
});
