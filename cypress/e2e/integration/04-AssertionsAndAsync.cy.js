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

    // Assertion chaining
    // cy.get("#hello_paragraph").should("have.text", "Hello World!");
    // cy.get("#hello_paragraph").should('have.attr', 'id', 'hello_paragraph');

    // use this way instead of above one
    cy.get("#hello_paragraph")
      .should("have.text", "Hello World!")
      .and("have.attr", "id", "hello_paragraph")
      .and("exist")
      .and("be.visible");
  });

  it("Explicit Assertions", () => {
    cy.visit("https://techglobal-training.com/frontend");
    cy.get(".cards").contains("Html Elements").click();

    expect(true).to.equal(true);

    cy.get("#main_heading").as("heading").should("have.text", "Html Elements");

    cy.get("#main_heading")
      .invoke("text")
      .then((el) => {
        const ele = el;
        cy.log(ele);

        expect(ele).to.equal("Html Elements");
      });

    //   cy.get('#myLocator').getText()

    cy.get("#main_heading").then(function ($el) {
      const ele = $el.text();

      expect(ele).to.equal("Html Elements");
    });

    cy.get("div").contains("Paragraphs").as("parapHeader");

    // Hello World!
    // I like automation testing!

    // this web element returns 2
    cy.get("@parapHeader")
      .nextAll()
      .first()
      .should("have.text", "Hello World!");

    cy.get("@parapHeader")
      .nextAll()
      .last()
      .should("have.text", "I like automation testing!");

    const arr = ["Hello World!", "I like automation testing!"];

    cy.log(cy.get("@parapHeader").nextAll());

    cy.get("@parapHeader")
      .nextAll()
      .each(($el, index) => {
        const ele = $el.text();
        expect(ele).to.equal(arr[index]);
      });

    cy.get("#main_heading").then(function ($el) {
      const ele = $el.text();

      expect(ele).to.include("Elements");
    });

    cy.get("#main_heading").then(($el) => {
      const ele = $el.attr("id");
      cy.log(ele);

      expect(ele).to.exist;
    });

    cy.get("#main_heading").then(($el) => {
      const ele = $el.attr("id");
      cy.log(ele);

      expect(ele).to.eq("main_heading");
    });

    cy.get("[id*='paragraph']").then(($el) => {
      cy.log($el);
      expect($el).to.have.length(2);
    });

    cy.get("#checkbox_1").then(($el) => {
      expect($el).to.be.enabled;
    });

    cy.get("#checkbox_1").then(($el) => {
      expect($el).not.to.be.checked;
    });

    // cy.get("div")
    //   .contains("Paragraphs")
    //   .should("have.css", "color", "rgb(105, 105, 105)");

    cy.get("div")
      .contains("Paragraphs")
      .then(($el) => {
        const prop = $el.css("color");

        expect(prop).to.be.equal("rgb(105, 105, 105)");
      });

    cy.get("#main_heading").then(($el) => {
      expect($el).to.be.visible;
    });
  });

  it("More Examples of Async", () => {
    cy.visit("https://techglobal-training.com/frontend");
    cy.get(".cards").contains("Html Elements").click();

    cy.get("div").contains("Paragraphs").as("parapHeader");

    const arr = ["Hello World!", "I like automation testing!"];

    cy.log(cy.get("@parapHeader").nextAll());

    cy.get("@parapHeader")
      .nextAll()
      .each(($el, index) => {
        const ele = $el.text();
        expect(ele).to.equal(arr[index]);
      });

    for (let i = 0; i < arr.length; i++) {
      cy.get("@parapHeader").nextAll().eq(i).should("have.text", arr[i]);
    }

    cy.get("#main_heading")
      .invoke("text")
      .then((el) => {
        // This will come as a regular JS object: String
        // it means, it's not chainable with any Cypress Command anymore, because Cypress doesn't recognize this
        // element anymore
        const ele = el;
        cy.log(ele);

        expect(ele).to.equal("Html Elements");

        cy.wrap(ele).should("eq", "Html Elements");
      });

    cy.get("#main_heading")
      .invoke("attr", "id")
      .then((el) => {
        cy.wrap(el).should("eq", "main_heading");
      });

    cy.get("#main_heading").then(($el) => {
      expect($el.attr("id")).to.equal("main_heading");

      // This will be a fail because cypress doesn't know what '$el.attr('id')' is
      // $el.attr('id').should()

      // using cy.wrap() we are introducing it back to cypress
      cy.wrap($el.attr("id")).should("eq", "main_heading");
    });
  });
});
