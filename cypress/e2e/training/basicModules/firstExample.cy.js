describe('Locators in Cypress', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should have title tag with value', function(){
        cy.title().should('eq','Swag Labs');
    });

    it('URL should be value', function(){
        cy.url().should('eq','https://www.saucedemo.com/');
    });

    it('URL have HTTPS', function(){
        cy.location('protocol').should('contains','https');
    });

    it('Hostname should be www.saucedemo.com', function(){
        cy.location('hostname').should('eq','www.saucedemo.com');
    });

    it('Should redirect /inventory.html', function(){
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.location('pathname').should('eq','/inventory.html');
    });
});