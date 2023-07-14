import radioButtonsDemoqaPage from "../../../../pages/checkpoints/basic/radioButtonsDemoqaPage";

describe('validate the functionality of the radio buttons and ensure works properly', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('setup is not a function');
            return false;
        });

        cy.visit('https://demoqa.com/radio-button');
    });

    it('validate Yes radio button can be checked', () => {
        radioButtonsDemoqaPage.elements.yesRadio().should('exist');
        radioButtonsDemoqaPage.checkYesRadio();
        radioButtonsDemoqaPage.elements.messageContainer().should('exist').should('contain','You have selected');
        radioButtonsDemoqaPage.elements.successMessage().should('contain', 'Yes');
    });

    it('validate Impressive radio button can be checked', () => {
        radioButtonsDemoqaPage.elements.impressiveRadio().should('exist');
        radioButtonsDemoqaPage.checkImpressiveRadio();
        radioButtonsDemoqaPage.elements.messageContainer().should('exist').should('contain','You have selected');
        radioButtonsDemoqaPage.elements.successMessage().should('contain', 'Impressive');
    });

    it('validate No radio button cannot be checked', () => {
        radioButtonsDemoqaPage.elements.noRadio().should('exist').should('be.disabled');
        radioButtonsDemoqaPage.elements.noRadio().parent().click();
        radioButtonsDemoqaPage.elements.noRadio().should('be.disabled');
        radioButtonsDemoqaPage.elements.messageContainer().should('not.exist');
        radioButtonsDemoqaPage.elements.successMessage().should('not.exist');
    });

});