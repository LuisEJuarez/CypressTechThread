let externalVariable = "test";

describe('Basics variables', () => {

    beforeEach(function () {
        cy.visit("http://www.uitestingplayground.com/dynamicid");
    });

    it('Find by text',function () {
        cy.contains("button", "Button with Dynamic ID").invoke('text').then ((text) => {
            cy.log(text);
            externalVariable = text;
            cy.wrap(externalVariable).as('textFromContains');
            cy.log(externalVariable);
        });
        cy.get('@textFromContains').then((text) => {
            cy.log("Contains text: " + text);
        });
    });

    it('Sharing context by Alias',function () {
        externalVariable = this.textFromContains;
        cy.log(externalVariable);
    });

});