import linksDemoqaPage from "../../../../pages/checkpoints/basic/linksDemoqaPage";

describe('validate the functionality of the links and ensure works properly', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('setup is not a function');
            return false;
        });

        cy.visit('https://demoqa.com/links');
    });

    it('Verify that links work', () => {
        linksDemoqaPage.elements.simpleLink().then(($a) => {
            const href = $a.prop('href');
            cy.request(href).its('body').should('include','<title>DEMOQA</title>');
        });

        linksDemoqaPage.elements.dynamicLink().then(($a) => {
            const href = $a.prop('href');
            cy.request(href).its('body').should('include','<title>DEMOQA</title>');
        });
    });

    it('Verify link properties and text', () => {
        linksDemoqaPage.elements.simpleLink().should('have.attr','href');
        linksDemoqaPage.elements.simpleLink().should('have.prop','href').and('equal','https://demoqa.com/');
        linksDemoqaPage.elements.simpleLink().should('have.attr','target');
        linksDemoqaPage.elements.simpleLink().should('have.prop','target').and('equal','_blank');
        linksDemoqaPage.elements.simpleLink().should('have.prop','id').and('equal','simpleLink');
        linksDemoqaPage.elements.simpleLink().should('contain','Home');

        linksDemoqaPage.elements.dynamicLink().should('have.attr','href');
        linksDemoqaPage.elements.dynamicLink().should('have.prop','href').and('equal','https://demoqa.com/');
        linksDemoqaPage.elements.dynamicLink().should('have.attr','target');
        linksDemoqaPage.elements.dynamicLink().should('have.prop','target').and('equal','_blank');
        linksDemoqaPage.elements.dynamicLink().should('have.prop','id').and('equal','dynamicLink');
        linksDemoqaPage.elements.dynamicLink().should('contain','Home');
    });

});