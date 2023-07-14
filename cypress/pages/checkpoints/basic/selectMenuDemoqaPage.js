class selectMenuDemoqaPage {

    elements = {
        selectGroup: () => cy.get('#withOptGroup'), //input#react-select-2-input
        selectOne: () => cy.get('#selectOne'), //input#react-select-3-input
        oldSelect: () => cy.get('select#oldSelectMenu'),
        multiSelectDropDown: () => cy.get('div[class=" css-yk16xz-control"]').last(), //input#react-select-4-input
        multiSelectStandard: () => cy.get('select#cars'),
        newSelectDisplayedValues: () => cy.get('div[class=" css-1uccc91-singleValue"]'),  //Length of this is 2
        multiSelectDisplayedValues: () => cy.get('div.css-1rhbuit-multiValue'),
        optionsContainer: () => cy.get('div[class=" css-26l3qy-menu"]')
    }

    chooseOptionFromTheOldSelect(option){
        this.elements.oldSelect().select(option);
    }

    chooseOptionFromTheMultiSelectStandard(option){
        this.elements.multiSelectStandard().select(option);
    }

    ClickOnSelectGroup(){
        this.elements.selectGroup().click();
    }

    ClickOnSelectOne(){
        this.elements.selectOne().click();
    }

    ClickOnMultiSelectDropDown(){
        this.elements.multiSelectDropDown().click();
    }
}

module.exports = new selectMenuDemoqaPage();