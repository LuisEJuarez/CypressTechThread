require('@cypress/xpath');

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("http://www.uitestingplayground.com/dynamicid");
    });

    it("cy.contains example",() => {
        cy.contains("Button with Dynamic ID").should('have.text','Button with Dynamic ID');
    });

    it("cy.find example",() => {
        cy.get('div').find('button').should('have.text','Button with Dynamic ID');
    });

    it("css selector using an attribute example",() => {
        cy.get('button[class="btn btn-primary"]').should('have.text','Button with Dynamic ID');
    });

    it("css selector using a class example",() => {
        cy.get('.btn-primary').should('have.text','Button with Dynamic ID');
    });

    //We need to install an xpath dependency  npm i @cypress/xpath  and then require('@cypress/xpath');
    it("xpath example",() => {
        cy.get('.btn-primary').should('have.text','Button with Dynamic ID');
    });

});