describe("Environment Variable Demo", () => {
 it("Demo", () => {
        cy.log(`Printing Environment variable value: ${Cypress.env("demoVar")}`);
        cy.log(`Printing Environment variable value: ${Cypress.env("demoQA")}`);
        cy.log(`Printing Environment variable value: ${Cypress.env("theInternet")}`);
        cy.log(`Printing Environment variable value: ${Cypress.env("angular")}`);
    });
});
