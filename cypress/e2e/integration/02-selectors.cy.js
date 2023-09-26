/// <reference types= "Cypress"/>

describe("Cypress Selectors", () => {
  it("Practice Web Elements using -get and contains", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.get(".CardGrids_CardGrids__qDdyI").as("allCards");

    cy.get("@allCards");

    // Handling more than 1 web element
    // Locates the first web element
    cy.get(".cards").first();

    // Locates the web element based on its index
    cy.get(".cards").eq(0);

    // Locates the last web element
    cy.get(".cards").last();

    // This will be searching for HTML cards in all DOM
    cy.contains("Html Elements");

    cy.get(".cards"); // returns 20/20
    // This will be searching 'Html Elements' inside the elements ONLY has class name 'cards'
    cy.contains(".cards", "Html Elements");

    // This will do the same thing as above in more explicit way.
    // It will look for card with 'Html Elements' visible text ONLY inside the class name with '.Header_Header__Z9Z4k'
    cy.get(".CardGrids_CardGrids__qDdyI").contains("Html Elements");

    // This will fail because 'Html Elements' card that we are looking for is not in this parent element
    // cy.get(".Header_Header__Z9Z4k").contains("Html Elements");
  });

  it("Practice Web Elements using - find()", () => {
    cy.visit("https://techglobal-training.com/frontend");

    // It will locate the web elements with visible text 'Html Elements' in the '.cards'
    cy.get(".cards").contains("Html Elements").click();

    cy.get("#radio-button-group .radio");

    cy.get("#radio-button-group").find("div");

    cy.get("#radio-button-group").contains("C#");
  });

  it("Practice Web Elements using - next(), prev(), nextAll(), prevAll()", () => {
    cy.visit("https://techglobal-training.com/frontend");

    // It will locate the web elements with visible text 'Html Elements' in the '.cards'
    cy.get(".cards").contains("Html Elements").click();

    // next() will locate immediate 'next' sibling of web elemen that contains 'Paragraphs' text.
    cy.get("div").contains("Paragraphs").next();

    // prev() will locate immediate 'previous' sibling of web elemen id with #testing_paragraph
    cy.get("#testing_paragraph").prev();

    // nextAll() will locate ALL 'next' subling elements of web elemen that contains 'Paragraphs' text
    cy.get("div").contains("Paragraphs").nextAll();

    cy.get("#testing_paragraph").prevAll();

    cy.get('#checkbox-button-group').find('#apple_check').contains('Apple').as('appleElement')

    // cy.get('@appleElement').then(($text) => {
    //     const ele = $text.text()

    //     cy.log(ele)
    // })

  });
});
