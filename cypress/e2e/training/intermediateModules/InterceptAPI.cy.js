describe('intercepting API(SPYING)', () => {
    beforeEach(() => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/');
        cy.title().should('have.text','TodoMVC');

    });

    it("initial validation", () => {

    });

});