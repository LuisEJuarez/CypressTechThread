import textBoxDemoqaPage from "../../../../pages/checkpoints/basic/textBoxDemoqaPage";

describe('validate the functionality of the text boxes and ensure works properly', () => {

    /*
    Here we can also implement fixtures to test different data.
    */

    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('setup is not a function');
            return false;
        });

        cy.visit('https://demoqa.com/text-box');
    });

    it('Verify that all fields can be filled and labels are displayed after click on sumbit button', () => {
        const user = "Luis Juarez";
        const email = "luis.juarez@testemail.com";
        const currentAddress = "JPG street 23400 Alph";
        const permanentaAddress = "Lemon street 13456 Lato";

        textBoxDemoqaPage.typeUserName(user);
        textBoxDemoqaPage.typeUserEmail(email);
        textBoxDemoqaPage.typeUserCurrentAddress(currentAddress);
        textBoxDemoqaPage.typeUserPermanentAddress(permanentaAddress);
        textBoxDemoqaPage.clickSubmitButton();

        textBoxDemoqaPage.elements.userNameLabel().should('contain',`Name:${user}`);
        textBoxDemoqaPage.elements.userEmailLabel().should('contain',`Email:${email}`);
        textBoxDemoqaPage.elements.userCurrentAddressLabel().should('contain',`Current Address :${currentAddress}`);
        textBoxDemoqaPage.elements.userPermanentAddressLabel().should('contain',`Permananet Address :${permanentaAddress}`);
    });

    it('Negative Test: Verify that if the email is not valid, form wont be submitted and label wont be displayed', () => {
        const email = "luis.juarez";

        textBoxDemoqaPage.typeUserEmail(email);
        textBoxDemoqaPage.clickSubmitButton();

        textBoxDemoqaPage.elements.userEmail().should('have.class','field-error form-control');
        textBoxDemoqaPage.elements.userEmailLabel().should('not.exist');
    });
});