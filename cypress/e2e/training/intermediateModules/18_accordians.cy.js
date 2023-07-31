describe('Accordians', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/accordian`);
    });

    it("Accordians example", () => {
        cy.get('#section2Heading').click();
        //Checking if the first description is display
        cy.get('#section1Heading').next().should('have.css' , 'display', 'none');
        //Checking if the second description is display
        cy.get('#section2Heading').next().should('have.css' , 'display', 'block').and('contain','2000 years old').and('have.class','show');
    });

});
