describe("File Handling", () => {
  beforeEach(() => {
    cy.clickLink("File Download & Upload");
  });

  let fileName;
  it("File Download", () => {
    cy.get("#file_download").click();


    fileName = "SampleText.txt";

    // This command read the given path, and returns true if it can find the file in the given path
    // Returns false if it can not find the path, and it fail your test.
    cy.readFile(`cypress/downloads/${fileName}`);
  });

  it("File Upload", () => {


    cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`)

    // Way to upload more than 1 file for the websites allowing you to upload multiple files at a time.
    // cy.get('#file_upload').selectFile([`cypress/downloads/${fileName}`, `my/Second/filePath.txt`])

    // {action: 'drag-drop'} will give you option to drag the file into upload area.
    // cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`, {action: 'drag-drop'})

    cy.get('#file_submit').realClick()

    cy.get('#result').should('have.text', `You uploaded ${fileName}`)

  });
});
