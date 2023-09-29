class AlertsPage {
  getWarningButton() {
    return cy.get("#warning_alert");
  }

  getConfirmationButton() {
    return cy.get("#confirmation_alert");
  }

  getPromptButton() {
    return cy.get("#prompt_alert");
  }
}

export default AlertsPage;
