describe("Alerts", () => {
  it("Handling the Warning Alerts", () => {
    cy.visit("https://techglobal-training.com/frontend");

    // Clicking the card here to go Alerts page
    cy.contains("Alerts").click();

    cy.on("window:alert", (str) => {
      console.log(str);
      expect(str).to.equal("You are on TechGlobal Training application.");
    });

    cy.get("#warning_alert").click();
  });

  it("Handling the Confirmation Alerts", () => {
    cy.visit("https://techglobal-training.com/frontend");

    // Clicking the card here to go Alerts page
    cy.contains("Alerts").click();

    // cy.on("window:confirm", (str) => {
    //   console.log(str);
    //   expect(str).to.equal("Would you like to stay on TechGlobal Training application?");
    // });

    cy.get("#confirmation_alert").click();

    // Clicking cancel on the confirmation alert
    cy.on("window:confirm", (str) => {
      console.log(str);
      expect(str).to.equal(
        "Would you like to stay on TechGlobal Training application?"
      );
      return false;
    });

    // cy.get("#confirmation_alert").click();
  });

  it("Handling the Prompt Alerts", () => {
    cy.visit("https://techglobal-training.com/frontend");

    // Clicking the card here to go Alerts page
    cy.contains("Alerts").click();

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(null);
    });

    cy.get("#prompt_alert").click();
  });
});
