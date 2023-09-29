describe("Keyboard & Mouse Actions", () => {
  it("Keyboard actions", () => {
    cy.clickLink("Html Elements");

    // This command just to showcase how cypress trigger('mouseover') command is flaky
    // and we are using extra library to workaround it
    // cy.get('#dropdown-button').realHover()

    cy.get("#text_input1")
      .realClick()
      .realPress("A")
      .realPress("Tab")
      .realPress("KeyB")
      .realPress("ArrowLeft")
      .realPress("b")
      .realPress("ArrowRight")
      .realPress("B")
      .realPress("Backspace");
  });

  it("Click, Right Click, and Double Click", () => {
    cy.clickLink("Actions");
    cy.get("button[id$='click']").as("buttons");

    cy.get("@buttons").first().realClick();
    cy.get("@buttons").eq(1).rightclick();
    cy.get("@buttons").last().dblclick();
  });

  it("Drag and Drop", () => {
    cy.clickLink("Actions");


    cy.get('#drag_element').drag('#drop_element')
    
  });
});
