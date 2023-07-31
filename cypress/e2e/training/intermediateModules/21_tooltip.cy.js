
describe('ToolTip', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
    });

    it("tooltip example", () => {
        cy.get("#toolTipButton").realHover();
        cy.get("#buttonToolTip").should('be.visible');
        cy.get(".tooltip-inner").should('have.text','You hovered over the Button');
    });

    it.only("tooltip on link example", () => {
        cy.contains("a","Contrary").realHover();
        cy.get("#contraryTexToolTip").should('be.visible');
        cy.get(".tooltip-inner").should('have.text','You hovered over the Contrary');
    });
});
