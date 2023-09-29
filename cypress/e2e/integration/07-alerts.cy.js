import AlertsPage from "../../pages/AlertsPage";

describe("Alerts", () => {
  const alertPage = new AlertsPage();

  beforeEach(() => {
    // Clicking the card here to go Alerts page
    cy.clickLink("Alerts");
  });

  it("Handling the Warning Alerts", () => {
    cy.on("window:alert", (str) => {
      console.log(str);
      expect(str).to.equal("You are on TechGlobal Training application.");
    });

    /**
     * When you set up an event listener using cy.on('window:alert', (str) => {...}),
     * Cypress will register this listener and will have it ready to execute its callback function whenever an alert event is triggered.
     *
     * When the click action is executed and if it triggers an alert, the previously registered event listener will catch this alert event
     * and execute the callback function provided, regardless of where the click command is in relation to the event listener in your code.
     *
     * This doesn't mean that Cypress "waits" for the event to occur before moving on to the next command. Rather, it sets up the event listener,
     * continues executing the next commands in the queue, and will execute the event listener’s callback when the event occurs.
     */
    alertPage.getWarningButton().click();
  });

  it("Handling the Confirmation Alerts", () => {
    // Cypress will handle both Warning and Confirmation alerts by clicking "OK" implicitly.
    // Since we want to get the text of the alert, that's why we are using callback here.
    // cy.on("window:confirm", (str) => {
    //   console.log(str);
    //   expect(str).to.equal("Would you like to stay on TechGlobal Training application?");
    // });

    // Clicking cancel on the confirmation alert
    cy.on("window:confirm", (str) => {
      console.log(str);
      expect(str).to.equal(
        "Would you like to stay on TechGlobal Training application?"
      );
      return false;
    });

    alertPage.getConfirmationButton().click();
  });

  it("Handling the Prompt Alerts", () => {
    // cy.window() is a command that yields the global window object of the page under test.
    // You often use it to interact with or manipulate the properties of the 'window' object, such as
    // stubbing (replacing) the 'prompt' method, but it does not listen for or handle event by itself.

    // Handle prompt alert "Cancel" action
    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").returns(null);
    // });

    // If you give empty string in returns, it will not prompt any text and click OK
    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").returns("");
    // });

    // If you give string in returns, it will prompt the given string and click OK
    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").returns("Jafet Garcia");
    // });

    // Get the message of prompt alert and validate it, and click cancel
    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").callsFake((message) => {
    //     expect(message).to.equal("What would you like to say to TechGlobal?");

    //     return null;
    //   });
    // });


    // Get the message, validate it and click OK.
    cy.window().then((win) => {
        cy.stub(win, "prompt").callsFake((message) => {
          expect(message).to.equal("What would you like to say to TechGlobal?");
  
          return 'My Message';
        });
      });

    alertPage.getPromptButton().click();
  });
});
