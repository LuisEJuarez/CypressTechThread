describe('Iframes', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
    });

    it("test frames", () => {
        cy.get('#frame1').then( function($iframe){
            const $body = $iframe.contents().find("body");
            cy.wrap($body).should('have.text', 'Parent frame');

            cy.wrap($body).find('iframe').then(function($childIframe){
                const $childBody = $childIframe.contents().find("body"    );
                cy.wrap($childBody).find('p').should('have.text','Child Iframe');
            });
        });
    });

});

describe.only('Write on an input inside an Iframe', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/iframe`);
    });

    it("test input inside an iframes", () => {
        cy.get('#mce_0_ifr').then( ($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body).find('p').type('{selectAll}{del}Hello world');
            cy.wrap($body).find('p').should("have.text", "Hello world");
        });
    });

});