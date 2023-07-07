//Allow the test complete all commands
describe('Retry-Ability Session', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/');  //command

        cy.get('.new-todo') //command
            .type('todo-A{enter}') //command
            .type('todo-B{enter}');//command
    });

    it('Should have 2 <li> elements', () => {
        cy.get('.todo-list li')//command
            .should('have.length', 2);//assertion
    });
});