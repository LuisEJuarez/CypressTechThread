describe("Origin demo", () => {

    it("Testing a fake login", function () {
        cy.visit("https://mocklab-demo.herokuapp.com/login?type=real");
        cy.get('img[alt="Google sign-in"]').click();

        cy.origin("https://accounts.google.com/", () => {
            cy.get('#af-error-container').should('be.visible');
            cy.go('back');
        });

        cy.get('img[alt="Google sign-in"]').should('be.visible');
    });

});