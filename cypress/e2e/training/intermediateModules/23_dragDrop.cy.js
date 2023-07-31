// You need a plugin/dependecy:
// npm install npm install --save-dev @4tw/cypress-drag-drop

describe('Drag Drop', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/droppable`);
    });

    it("dragdrop example", () => {
        cy.get("#draggable").drag("#droppable",{force: true});
    });

});
