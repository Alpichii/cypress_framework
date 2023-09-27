describe("Basic Commands", () => {
  it("Validate Buttons", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.get(".cards").contains("Html Elements").click();

    cy.get("#register_button").should("be.visible").click();

    cy.get(".mt-1").should("have.text", "You clicked on “Register”");

    cy.get("#signin_button").should("be.visible").click();

    cy.get(".mt-1").should("have.text", "You clicked on “Sign in”");
  });

  it("Validate Checkbox & Radio buttons", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.get(".cards").contains("Html Elements").click();

    // cy.get('#checkbox_1').as('apple').should('not.be.checked')

    // cy.get('@apple').check().should('be.checked')

    cy.get("#checkbox_1")
      .should("not.be.checked")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");

    //WebElement ele = driver.findElement(By.Css('asdasdasd))

    // ele.click
    // Assert.assertTrue(ele.isSelected())
    // ele.click
    // Assert.assertFalse(ele.isSelected())
    // ele.click
    // Assert.assertTrue(ele.isSelected())

    // cy.get('#apple_check').check()

    cy.get("#radio_1_option_1")
      .should("not.be.checked")
      .check()
      .should("be.checked");

    cy.get("#radio_1_option_3")
      .should("not.be.checked")
      .check()
      .should("be.checked");
  });

  it("Validate Text Input", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.get(".cards").contains("Html Elements").click();

    cy.get("#text_input1").type("MyName").clear();
    cy.get("#text_input2").type("lastName").clear();
  });

  it("Validate Calendar Input", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.get(".cards").contains("Html Elements").click();

    cy.get("#date_input1").type("10/10/2023{enter}");

    cy.get("#date_input2").clear().type("10/10/2023{enter}");
  });

  it("Validate Dropdown Input", () => {
    cy.visit("https://techglobal-training.com/frontend");

    cy.get(".cards").contains("Html Elements").click();

    cy.get("#company_dropdown1").select("Microsoft");
  });
});
