import loginDemoqaPage from "../../../../pages/checkpoints/intermediate/loginDemoqaPage";
import profileDemoqaPage from "../../../../pages/checkpoints/intermediate/profileDemoqaPage";

describe("Validate the correct/incorrect login of demoQA/login. Implement POM", () =>{
    const username = "test";
    const validPassword = "Test1234*";
    const invalidPassword = "invalid";

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);

        //Validate the welcome message
        loginDemoqaPage.elements.welcomeLabel().should('be.visible').and('contain','Welcome');
    });

    it("Invalid login, validate the error message", () => {
        //do the login
        loginDemoqaPage.login(username,invalidPassword);

        //validate the invalid message is displayed
        loginDemoqaPage.elements.invalidMessage().should('be.visible').and('have.text','Invalid username or password!');

    });

    it("valid login, validate profile page", () => {
        //do the login
        loginDemoqaPage.login(username,validPassword);

        //validate the invalid message is displayed
        profileDemoqaPage.elements.mainHeader().should('be.visible').and('have.text','Profile');
        //validate the username is displayed
        profileDemoqaPage.elements.userNameValue().should('be.visible').and('have.text',username);
        //validate the url has the profile word
        cy.url().should('eq', `${Cypress.env("demoQA")}/profile`);

    });

});