import linksDemoqaPage from "../../../../pages/checkpoints/intermediate/linksDemoqaPage";

describe('validate the functionality of cypress intercept', () => {
    
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/links`);
    });

    it('Intercept created link', () => {
        cy.intercept('GET','https://demoqa.com/created').as('createdLink');

        linksDemoqaPage.clickCreatedLink();

        //Validate status code and status message
        cy.wait('@createdLink').then((response) => {
            expect(response.response.statusCode).to.eq(201);
            expect(response.response.statusMessage).to.eq("Created");
        });
    });


});