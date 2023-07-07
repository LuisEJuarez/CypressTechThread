//Hooks are from Mocha
//Are helpful to set conditions to run before tests and so on

/*
Oreder:
1.- before -> Executed once, as soon as the first TS is executed
2.- beforeEach -> Executed before EACH TS
3.- testExecution 
4.- afterEach -> Executed once after EACH TS
5.- after -> Executed once, as soon as the last TS is executed
*/

describe('Hooke demo',()=>{
    before(()=>{
        cy.log('Before');
    });

    beforeEach(()=>{
        cy.log('Before Each');
    });

    it('TC #1',()=>{
        console.log('TC #1');
    });

    it.skip('TC #2',()=>{
        console.log('TC #2');
    });

    it.only('TC #3',()=>{
        console.log('TC #3');
    });

    afterEach(()=>{
        cy.log('After Each');
    });

    after(()=>{
        cy.log('After');
    });
});