Cypress.session.clearAllSavedSessions();

//****It needs to uncomment the BeforeEach hook from the e2e.js file 

describe('PGlobal hooks cookies', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });

    it("Success login preserved", () => {
        cy.get("#userName-value").should('be.visible').and('have.text',"test");
    });

    it("Success login preserved", () => {
        cy.get("#userName-value").should('be.visible').and('have.text',"test");
    });

    it("Counting the cookies", () => {
        cy.getCookies().then( (cookies) => {
            cy.log('Cookies: ',cookies);
            expect(cookies).to.have.length(12);
        });
    });

});