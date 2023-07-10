import homeSaucePage from "../../../pages/saucedemo/homeSaucePage";
import inventorySaucePage from "../../../pages/saucedemo/inventorySaucePage";

describe('POM Implementation',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should load inventory page',()=>{
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLoginBtn();

        inventorySaucePage.elements.titleSpan().should('have.text', 'Products');
    });

    it('Should display locked out message',()=>{
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('Should display incorrect username message',()=>{
        homeSaucePage.typeUsername('otherUser');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.clickLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Should display incorrect password message',()=>{
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('tmp');
        homeSaucePage.clickLoginBtn();

        homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});