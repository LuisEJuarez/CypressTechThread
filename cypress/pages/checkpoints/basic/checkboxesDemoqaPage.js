class checkboxesDemoqaPage {

    elements = {
        expandAllButton: () => cy.get('[class="rct-option rct-option-expand-all"]'),
        collapseAllButton: () => cy.get('[class="rct-option rct-option-collapse-all"]'),
        inputCheckbox: () => cy.get('input[type="checkbox"]'),
        resultMessage: () => cy.get('#result')
    }

    expandAll(){
        this.elements.expandAllButton().click();
    }

    collapseAll(){
        this.elements.collapseAllButton().click();
    }
}

module.exports = new checkboxesDemoqaPage();