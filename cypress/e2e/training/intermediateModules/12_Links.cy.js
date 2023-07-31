describe('validate the functionality of the links and ensure works properly', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/links');
    });

    it("first approch, not click on the link", () => {
        cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com");
        cy.get("#simpleLink").should("have.attr", "target", "_blank");
    });

    it("second approch, remove the target", () => {
        cy.get("#simpleLink").invoke("removeAttr", "target").click();
        cy.url().then((url) => {
            expect(url).to.be.equal('https://demoqa.com/')
        });
    });

});

describe.only('intercepting API(SPYING) requests after clicking on a button', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/links');
        cy.intercept('GET', 'https://demoqa.com/created').as('linkStatus');
    });

    it("first approch, not click on the link", () => {
        cy.get("a#created").click();
        cy.wait('@linkStatus').then((request) => {
            cy.log('This is request intercept', request);
            expect(request.response.statusCode).to.be.equal(201);
            expect(request.response.statusMessage).to.be.equal("Created");
        });
    });

});