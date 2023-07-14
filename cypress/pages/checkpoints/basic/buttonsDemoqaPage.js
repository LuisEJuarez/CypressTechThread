class buttonsDemoqaPage {

    elements = {
        doubleClick: () => cy.get('#doubleClickBtn'),
        rightClick: () => cy.get('#rightClickBtn'),
        normalClick: () => cy.get('button[class="btn btn-primary"]').last(),
        doubleClickMessage: () => cy.get('#doubleClickMessage'),
        rightClickMessage: () => cy.get('#rightClickMessage'),
        normalClickMessage: () => cy.get('#dynamicClickMessage')
    }

    doubleClickOnButton(){
        this.elements.doubleClick().dblclick();
    }

    rightClickOnButton(){
        this.elements.rightClick().rightclick();
    }

    normalClickOnButton(){
        this.elements.normalClick().click();
    }

}

module.exports = new buttonsDemoqaPage();