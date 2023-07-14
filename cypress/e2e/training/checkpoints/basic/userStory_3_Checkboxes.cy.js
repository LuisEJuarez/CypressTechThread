import checkboxesDemoqaPage from "../../../../pages/checkpoints/basic/checkboxesDemoqaPage";
import checkboxesData from "../../../../fixtures/checkpoints/basic/checkboxes.json";

describe('validate the functionality of the checkboxes and ensure works properly', () => {

    /*
        More tests can be added, like these others that I have identified:
            1.- Validate the parent node checkbox has 'half-check' class when his childs are not full selected.
            2.- Validate the parent node checkbox has 'check' class when his childs are full selected.
            3.- Validate the parent node checkbox has 'uncheck' class when his childs are unchecked.
            4.- Validate the expand and collapse individual buttons that are at left of the parent nodes..
    */

    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('setup is not a function');
            return false;
        });

        cy.visit('https://demoqa.com/checkbox');
    });

    it('Validate expand all button is working and all checkboxes are displayed', () => {
        checkboxesDemoqaPage.elements.expandAllButton().should('exist');
        checkboxesDemoqaPage.expandAll();
        checkboxesData.forEach(checkbox => {
            checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkbox.chekboxName}`).parent().should('be.visible');
        });
    });

    it('Validate collapse all button is working and all checkboxes are hidden', () => {
        checkboxesDemoqaPage.elements.expandAllButton().should('exist');
        checkboxesDemoqaPage.expandAll();

        //Just validate that there are more than 1 checkboxes displayed
        checkboxesDemoqaPage.elements.inputCheckbox().its('length').should('be.gt',16);

        checkboxesDemoqaPage.collapseAll();
        
        //Validate that there is only the first checkbox displayed
        checkboxesDemoqaPage.elements.inputCheckbox().should('have.length', 1);
    });

    it('Validate all checkboxes are checked when the first parent node is clicked and names are displayed on the bottom message', () => {
        checkboxesDemoqaPage.elements.expandAllButton().should('exist');
        checkboxesDemoqaPage.expandAll();

        //Click on first node
        checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkboxesData[0].chekboxName}`).parent().click();
        checkboxesDemoqaPage.elements.resultMessage().should('exist').should('contain','You have selected :');

        checkboxesData.forEach((checkbox) => {
            //To verify that the checkbox is checked
            checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkbox.chekboxName}`).parent()
                .find('span.rct-checkbox > svg')
                .should('have.class','rct-icon-check');
            
            //To verify that the checkbox is visible
            checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkbox.chekboxName}`).parent()
                .find('span.rct-checkbox').should('be.visible')

            //To verify that the name of the checkbox is displayed on the message
            checkboxesDemoqaPage.elements.resultMessage().should('contain',checkbox.nodeName);
        });
    });

    it('Negatvie test - Validate all checkboxes are Unchecked when the first parent node is clicked tiwce and the bottom message is hidden', () => {
        checkboxesDemoqaPage.elements.expandAllButton().should('exist');
        checkboxesDemoqaPage.expandAll();

        //Click on first node
        checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkboxesData[0].chekboxName}`).parent().click();
        checkboxesDemoqaPage.elements.resultMessage().should('exist').should('contain','You have selected :');

        //Click on first node Again
        checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkboxesData[0].chekboxName}`).parent().click();
        checkboxesDemoqaPage.elements.resultMessage().should('not.exist');

        checkboxesData.forEach((checkbox) => {
            //To verify that the checkbox is unchecked
            checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkbox.chekboxName}`).parent()
                .find('span.rct-checkbox > svg')
                .should('have.class','rct-icon-uncheck');
        });
    });

    it('Validate that checkboxes that are not a parent nodes can be checked individually', () => {
        checkboxesDemoqaPage.elements.expandAllButton().should('exist');
        checkboxesDemoqaPage.expandAll();

        //Get random checkboxes from the fixture data
        let randomCount = Math.floor(Math.random() * Object.keys(checkboxesData).length);
        randomCount = randomCount > 0 ? randomCount : 1;
        let randomChecks = [];
        let tmp;

        for(let i = 0;i < randomCount;i++){
            tmp = Cypress._.sample(checkboxesData);
            if(randomChecks.indexOf(tmp) == -1)
                randomChecks[i] = tmp;
        }
        
        tmp = 0;
        randomChecks.forEach((checkbox) => {
            //Only select child nodes like "notes,commands,react,angular,veu,public"
            if(!checkbox.parent){
                checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkbox.chekboxName}`).parent().click();
                checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${checkbox.chekboxName}`).parent()
                .find('span.rct-checkbox > svg')
                .should('have.class','rct-icon-check');
                tmp+=1;
            }
        });

        cy.log(`Only ${tmp} checkboxes were checked`);
    });

    it('Validate that a checkbox can be checked and unchecked not matter if it is parent or child', () => {
        checkboxesDemoqaPage.elements.expandAllButton().should('exist');
        checkboxesDemoqaPage.expandAll();

        //Get a random checkbox from the fixture data
        let randomChecks = Cypress._.sample(checkboxesData);

        //Check the checkbox
        checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${randomChecks.chekboxName}`).parent().click();
        checkboxesDemoqaPage.elements.resultMessage().should('exist');
        //To verify that the checkbox is checked
        checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${randomChecks.chekboxName}`).parent()
            .find('span.rct-checkbox > svg')
            .should('have.class','rct-icon-check');

        //Uncheck the checkbox
        checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${randomChecks.chekboxName}`).parent().click();
        checkboxesDemoqaPage.elements.resultMessage().should('not.exist');
        //To verify that the checkbox is unchecked
        checkboxesDemoqaPage.elements.inputCheckbox().filter(`#${randomChecks.chekboxName}`).parent()
            .find('span.rct-checkbox > svg')
            .should('have.class','rct-icon-uncheck');
    });
});