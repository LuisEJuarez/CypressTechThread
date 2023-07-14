class selectableDemoqaPage {

    elements = {
        verticalListContainer: () => cy.get('#demo-tabpane-list'),
        listButton: () => cy.get('#demo-tab-list'),
        gridlListContainer: () => cy.get('#demo-tabpane-grid'),
        gridButton: () => cy.get('#demo-tab-grid')
    }

    clickOnListButton(){
        this.elements.listButton().click();
    }

    clickOnGridButton(){
        this.elements.gridButton().click();
    }
}

module.exports = new selectableDemoqaPage();