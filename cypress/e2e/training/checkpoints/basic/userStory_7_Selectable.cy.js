import selectableDemoqaPage from "../../../../pages/checkpoints/basic/selectableDemoqaPage";

describe('validate the functionality of the selectable objects and ensure works properly', () => {

    /*
    These tests randomnly click on a selectable object to check the functionality, more test can be impelmented to select one by one object
    and then verify the rest.
    */

    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('setup is not a function');
            return false;
        });

        cy.visit('https://demoqa.com/selectable');

        //get length of the li elements from the list tab
        selectableDemoqaPage.elements.verticalListContainer().find('li').its('length').as('countListItems');
        //get length of the li elements from the grid tab
        selectableDemoqaPage.elements.gridlListContainer().find('li').its('length').as('countGridItems');
    });

    it('Validate that everytime an element from list tab is selected, it should be active and other does not', function () {
        selectableDemoqaPage.clickOnListButton();
        //get a random number between 0 and the number of the li elements. This will be the index of the element that will be clicked,
        //the rest will be validated as not selected.
        let randomIndex = Math.floor(Math.random() * this.countListItems);
        randomIndex = (randomIndex == this.countListItems) ? randomIndex-1 : randomIndex;

        cy.log(`Index to use is: ${randomIndex}`);
        selectableDemoqaPage.elements.verticalListContainer().find('li').eq(randomIndex).click().should('have.class', 'active');

        for(let i=0; i<this.countListItems; i++){
            if(i!=randomIndex)
                selectableDemoqaPage.elements.verticalListContainer().find('li').eq(i).should('not.have.class', 'active');
        }
    });

    it('Validate that everytime an element from grid tab is selected, it should be active and other does not', function () {
        selectableDemoqaPage.clickOnGridButton();
        //get a random number between 0 and the number of the li elements. This will be the index of the element that will be clicked,
        //the rest will be validated as not selected.
        let randomIndex = Math.floor(Math.random() * this.countGridItems);
        randomIndex = (randomIndex == this.countGridItems) ? randomIndex-1 : randomIndex;

        //Note: notice that index are different from the text on the objects, meaning that index 5 si not the object with the text Five
        cy.log(`Index to use is: ${randomIndex}`);
        selectableDemoqaPage.elements.gridlListContainer().find('li').eq(randomIndex).click().should('have.class', 'active');

        for(let i=0; i<this.countGridItems; i++){
            if(i!=randomIndex)
                selectableDemoqaPage.elements.gridlListContainer().find('li').eq(i).should('not.have.class', 'active');
        }
    });

});