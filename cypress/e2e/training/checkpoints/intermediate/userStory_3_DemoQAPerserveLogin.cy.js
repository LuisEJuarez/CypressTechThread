import loginDemoqaPage from "../../../../pages/checkpoints/intermediate/loginDemoqaPage";
import profileDemoqaPage from "../../../../pages/checkpoints/intermediate/profileDemoqaPage";

Cypress.session.clearAllSavedSessions();

describe('Perserve Login of the DemoQA site', () => {
    const username = "test";
    const validPassword = "Test1234*";

    //Perform de login and save the session
    beforeEach(() => {
        cy.session('myDemoQASession', () => {
            cy.visit(`${Cypress.env("demoQA")}/login`);
            loginDemoqaPage.login(username,validPassword);
            cy.url().should('include', 'profile');
        });
    });

    it("Check if session was saved", () => {
        cy.visit(`${Cypress.env("demoQA")}/login`);

        //Validate that username is displayed
        profileDemoqaPage.elements.userNameValue().should('be.visible').and('have.text',username);

        //Validate Logout button
        loginDemoqaPage.elements.logoutButton().should('be.visible');

        //Validate logged in message
        loginDemoqaPage.elements.loggedInMessage().should('be.visible').and('contain','You are already logged in. View your');
    });

});
