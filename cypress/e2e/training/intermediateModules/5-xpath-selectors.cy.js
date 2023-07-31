require('@cypress/xpath');

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("http://www.uitestingplayground.com/classattr");
    });

    //We need to install an xpath dependency  npm i @cypress/xpath  and then require('@cypress/xpath');
    it("how to find an element by its text with xpath",() => {
        cy.xpath('//*[text()="Correct variant is"]').should('be.visible');
    });

    it("how to find an element by its attr with xpath",() => {
        cy.xpath('//pre[@class=" language-html"]').should('be.visible').and('contain.text','button');
    });

    it("how to find an element by contains something on its class attr with xpath",() => {
        cy.xpath('//button[contains(@class,"btn-primary")]').should('be.visible').and('have.css','background-color','rgb(0, 123, 255)');
        cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`).should('be.visible').and('have.css','background-color','rgb(0, 123, 255)');
    });
});