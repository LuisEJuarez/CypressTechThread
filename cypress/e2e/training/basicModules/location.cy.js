let username = "standard_user";
let password = "secret_sauce";

describe('Location demo',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should have title tag with value "Swag Labs"',()=>{
        cy.title().should('eq','Swag Labs')
    });

    it('Should have URL tag with value "https://www.saucedemo.com/"',()=>{
        cy.url().should('eq','https://www.saucedemo.com/')
    });

    it('Should be HTTPS',()=>{
        cy.location('protocol').should('contain','https');
    });

    it('the hostname should be www.saucedemo.com"',()=>{
        cy.location('hostname').should('contain', 'www.saucedemo.com');
    });

    it('Should redirect /inventory.html',()=>{
        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click();

        cy.location('pathname').should('eq', '/inventory.html');
    });
});