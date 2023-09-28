describe('iFrames in Cypress', () => {

    it('iFrames', () => {
        cy.visit("https://techglobal-training.com/frontend");

        cy.contains('IFrames').click()


        // This will not work since the content is inside the iFrame
        // cy.get('#first_name').type('username')

        //0.contentDocument.body will return the iframe body in the browser.

        cy.get('#form_frame').its('0.contentDocument.body')
        .should('not.be.empty')
        .find('#first_name').type('username')

        cy.get('#form_frame').its('0.contentDocument.body')
        .should('not.be.empty')
        .find('#last_name').type('lastname')

        cy.get('#form_frame').its('0.contentDocument.body')
        .should('not.be.empty')
        .find('#submit').click()


        cy.get('#result').should('be.visible')

    })
})