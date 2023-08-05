import loginPage from "../../../pages/checkpoints/intermediate/loginDemoqaPage";

describe('Sharing an array objects', () => {

    beforeEach(function () {
        cy.fixture('personsObject.json').as('testData');
    });

    it('Getting user information on my fixture',function () {
        cy.get("@testData").its('persons').then( (persons) => {
            cy.log(persons);
            persons.forEach((user) => {
                cy.visit(`${Cypress.env("demoQA")}/login`)

                if(user.id >= 0 && user.id <= 3){
                    cy.log(user.id);
                    cy.log(user.name);
                    cy.log(user.email);
                    
                    loginPage.login(user.username, "test");
                    loginPage.elements.invalidMessage().should('be.visible');
                }

                cy.clearCookies();
                cy.clearLocalStorage();
            });
        });
    });

});