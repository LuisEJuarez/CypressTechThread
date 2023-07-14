import buttonsDemoqaPage from "../../../../pages/checkpoints/basic/buttonsDemoqaPage";

describe('validate the functionality of the buttons and ensure works properly', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('setup is not a function');
            return false;
        });

        cy.visit('https://demoqa.com/buttons');
    });

    it('validate double click button wortks', () => {
        buttonsDemoqaPage.elements.doubleClick().should('be.visible');
        buttonsDemoqaPage.doubleClickOnButton();
        buttonsDemoqaPage.elements.doubleClickMessage().should('contain', 'You have done a double click');
    });

    it('validate right click button wortks', () => {
        buttonsDemoqaPage.elements.rightClick().should('be.visible');
        buttonsDemoqaPage.rightClickOnButton();
        buttonsDemoqaPage.elements.rightClickMessage().should('contain', 'You have done a right click');
    });

    it('validate normal click button wortks', () => {
        buttonsDemoqaPage.elements.normalClick().should('be.visible');
        buttonsDemoqaPage.normalClickOnButton();
        buttonsDemoqaPage.elements.normalClickMessage().should('contain', 'You have done a dynamic click');
    });

    it('validate that double click button does not work when click or right click it', () => {
        buttonsDemoqaPage.elements.doubleClick().should('be.visible');

        buttonsDemoqaPage.elements.doubleClick().rightclick();
        buttonsDemoqaPage.elements.doubleClickMessage().should('not.exist');

        buttonsDemoqaPage.elements.doubleClick().click();
        buttonsDemoqaPage.elements.doubleClickMessage().should('not.exist');
    });

    it('validate that right click button does not work when click or double click it', () => {
        buttonsDemoqaPage.elements.rightClick().should('be.visible');

        buttonsDemoqaPage.elements.rightClick().dblclick();
        buttonsDemoqaPage.elements.rightClickMessage().should('not.exist');

        buttonsDemoqaPage.elements.rightClick().click();
        buttonsDemoqaPage.elements.rightClickMessage().should('not.exist');
    });

    it('validate that click button does not work when rigth click it', () => {
        buttonsDemoqaPage.elements.normalClick().should('be.visible');

        buttonsDemoqaPage.elements.normalClick().rightclick();
        buttonsDemoqaPage.elements.normalClickMessage().should('not.exist');
    });

});