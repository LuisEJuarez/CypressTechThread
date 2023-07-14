import selectMenuDemoqaPage from "../../../../pages/checkpoints/basic/selectMenuDemoqaPage";
import testsData from "../../../../fixtures/checkpoints/basic/selectMenuData.json"

describe('validate the functionality of the select objects menu and ensure works properly', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            expect(err.message).to.include('setup is not a function');
            return false;
        });

        cy.visit('https://demoqa.com/select-menu');
    });

    testsData.forEach((test) => {
        it(test.testName, () =>{
            //*****select and verify first element
            selectMenuDemoqaPage.ClickOnSelectGroup();
            selectMenuDemoqaPage.elements.optionsContainer().find('div[id*="react-select-2-option-"]')
                .filter( `:contains("${test.selectGroup}")` ).click();
            selectMenuDemoqaPage.elements.newSelectDisplayedValues().first().should('contain',test.selectGroup);

            //*****select and verify second element
            selectMenuDemoqaPage.ClickOnSelectOne();
            selectMenuDemoqaPage.elements.optionsContainer().find('div[id*="react-select-3-option-"]')
                .filter(`:contains("${test.selectOne}")`).click();
            selectMenuDemoqaPage.elements.newSelectDisplayedValues().last().should('contain',test.selectOne);

            //*****select and verify third element
            selectMenuDemoqaPage.chooseOptionFromTheOldSelect(test.oldSelect);
            selectMenuDemoqaPage.elements.oldSelect().find(':selected').should('contain',test.oldSelect);

            //*****select and verify fourth element
            selectMenuDemoqaPage.ClickOnMultiSelectDropDown();
            for(let i = 0; i < Object.keys(test.multiSelectDropDown).length; i++){
                selectMenuDemoqaPage.elements.optionsContainer().find('div[id*="react-select-4-option-"]')
                    .filter(`:contains("${Object.values(test.multiSelectDropDown)[i]}")`).click();
            }
            selectMenuDemoqaPage.ClickOnMultiSelectDropDown();
            for(let i = 0; i < Object.keys(test.multiSelectDropDown).length; i++){
                selectMenuDemoqaPage.elements.multiSelectDisplayedValues().find('div.css-12jo7m5')
                    .filter(`:contains("${Object.values(test.multiSelectDropDown)[i]}")`).should('contain',Object.values(test.multiSelectDropDown)[i])
            }

            //*****select and verify fifth element
            selectMenuDemoqaPage.chooseOptionFromTheMultiSelectStandard(test.multiSelectStandard);
            selectMenuDemoqaPage.elements.multiSelectStandard().find(':selected').should('contain',test.multiSelectStandard);
        });
    });

});