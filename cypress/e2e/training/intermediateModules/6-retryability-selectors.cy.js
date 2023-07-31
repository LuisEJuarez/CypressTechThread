describe("Retry ability demo", () => {

    it("visit with delay",() => {
        cy.visit("http://www.uitestingplayground.com/loaddelay");
    });

    it("visit with delay and timeout",() => {
        cy.visit("http://www.uitestingplayground.com/loaddelay",{timeout: 0});
    });

    it("client delay button",() => {
        cy.visit("http://www.uitestingplayground.com/loaddelay");
        cy.get('.btn').click();
        cy.get('.bg-success').should('be.visible');
    });

    it.only("progress bar",() => {
        cy.visit("http://www.uitestingplayground.com/progressbar");
        cy.get('#startButton').click();
        cy.get('#progressBar',{timeout: 30000}).should('have.text','100%');
    });

});