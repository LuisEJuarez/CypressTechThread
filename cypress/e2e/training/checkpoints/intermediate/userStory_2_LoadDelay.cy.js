import loadDelayPage from "../../../../pages/checkpoints/intermediate/loadDelayPage";

describe("Validate that the page is loaded", () =>{
    beforeEach(() => {
        cy.visit("http://uitestingplayground.com/loaddelay");
    });

    it('Confirm that button "Button Appearing After Delay" is displayed', () => {  
        loadDelayPage.elements.buttonAfterDelay().should('be.visible').and('exist');
    });

});