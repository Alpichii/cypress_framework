describe("Interacting Multiple Tabls", () => {
  it("Multiple Tabs - Apple", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.contains("Multiple Windows").click();

    // This validation will check if the web element has a target attribute with '_blank' value
    cy.get("#apple").should("have.attr", "target", "_blank");

    // cy.get('#apple').click()

    // Here, we are manipulating the "target" attribute of the web element with the help of JQuery invoke() method
    // and removing its "target" attribute remporarily, so it will open the link in the same tab.
    cy.get("#apple").invoke("removeAttr", "target").click();

    cy.url().should("include", "apple");

    cy.url().then((url) => {
      cy.log(`Page URL is: ${url}`);
    });
  });

  it("Multiple Tabs - Apple", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.contains("Multiple Windows").click();

    cy.get('#tesla').invoke('removeAttr', 'target').click()


    cy.url().should('include', 'tesla')

  });
});
