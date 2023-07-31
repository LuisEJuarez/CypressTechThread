describe("cy.viwport() demo", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("angular")}/angularjs-protractor-practice-site/`)
    });

    it("Device name", () => {
        cy.viewport('iphone-6');
        cy.get('#mobile_menu_toggler').should('exist');
    });

    it("Specific viewport", () => {
        cy.viewport(500,600);
        cy.get('#mobile_menu_toggler').should('exist');
    });
});
