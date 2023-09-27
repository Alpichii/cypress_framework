describe("Cypress Assertion Types", () => {
  it("Default Assertions", () => {
    // This will fail if the page doesn't send text/html with a 200 status.
    cy.visit("https://techglobal-training.com/frontend");
    cy.get(".cards").contains("Html Elements").click();

    cy
      // there is a default assertion that if this button
      // exist in the DOM before proceeding
      .get("#register_button");
    // before issuing the click, this button must be "actionable"
    // it connot be disabled, covered, or hidden from the view.
    // .click()

    // Since we didn't click enter after we send a date input,
    cy.get("#date_input1").type("10/10/2023");

    // this click() action will fail because it will be covered by calendar content before it
    // which prevents us to take an action on the below element
    // cy.get("#date_input2").click()

    // This is not necessary, because Cypress already checks if this element is on the DOM or not by default
    cy.get("#register_button").should("be.visible");

    // This negative assertion will work since it's not on the DOM at all
    cy.get(".mt-1").should("not.exist");
  });

  it("Implicit Assertions", () => {
    cy.visit("https://techglobal-training.com/frontend");
    cy.get(".cards").contains("Html Elements").click();

    // This assertion checks if this element has exact text equals to "Html Elements"
    cy.get("#main_heading").as("heading").should("have.text", "Html Elements");

    // This assertion checks if the element CONTAINS the substring 'Elements'
    cy.get("@heading").should("contain.text", "Elements");

    // This is similar to 'contains.text' and checks if the text contains the expected text
    cy.get("@heading").should("include.text", "Elements");

    // This checks if the element has an attribute with name "id"
    cy.get("@heading").should("have.attr", "id");

    // This checks the element has an attirbute named "id" with the value 'main_heading
    cy.get("@heading").should("have.attr", "id", "main_heading");

    // This checks if this web element returns exactly length of 2 web elements.
    cy.get("[id*='paragraph']").should("have.length", 2);

    // Checks whether element is interactable.
    cy.get("#checkbox_1").should("be.enabled");

    cy.get("#checkbox_1").should("not.be.checked");

    // Checks if paragraphs text have CSS color value with 'rgb(105, 105, 105)'
    cy.get("div")
      .contains("Paragraphs")
      .should("have.css", "color", "rgb(105, 105, 105)");
  });

  it("Explicit Assertions", () => {
    cy.visit("https://techglobal-training.com/frontend");
    cy.get(".cards").contains("Html Elements").click();

    expect(true).to.equal(true);

    cy.get("#main_heading").as("heading").should("have.text", "Html Elements");

    cy.get("#main_heading").invoke("text").then((el) => {
        const ele = el;
        cy.log(ele);

        expect(ele).to.equal("Html Elements");
      });

    cy.get("#main_heading").then(function ($el) {
      const ele = $el.text();

      expect(ele).to.equal("Html Elements");
    });

  });
});
