describe('Variables and Aliases DEMO', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/modal-dialogs`);

    });

    // it("Return Variables Misconception", () => {
    //     const getText = cy.get('#showSmallModal').text();
    //     cy.log(getText);
    // });

    it("Closures & Variables", () => {
        cy.get('#showSmallModal').then(($modalbutton) => {
            const smallModalText = $modalbutton.text();
            cy.log(smallModalText);

            $modalbutton.click();
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, {matchCase: false});
        });
    });

    // it("Context misconception", () => {
    //     cy.log(smallModalText);   //Trying to use the variable from previous IT
    // });

//ALIAS did not work using the THIS context if we use arrow functions
    it("Using Alias ", function(){ // () => {
        cy.get('#showSmallModal').invoke('text').as('invokeText');

        cy.get('#showSmallModal').then( ($modalbutton) =>{
            const textFromButton = $modalbutton.text();
            cy.log(textFromButton);

            cy.wrap(textFromButton).as('wrapText');


        });
    });

    it("Sharing content ", function() {  
        cy.log(this.invokeText);
        cy.log(this.wrapText);
    });

});