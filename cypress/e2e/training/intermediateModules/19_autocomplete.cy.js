describe('AutoComplete', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
    });

    it("AutoComplete example", () => {
        cy.get(".auto-complete__value-container").first().type('Y');
        cy.contains('#react-select-2-option-0', 'Yellow').click();
        cy.get('.css-1rhbuit-multiValue').should('have.text','Yellow');
    });

});
