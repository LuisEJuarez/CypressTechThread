class linksDemoqaPage {

    elements = {
        simpleLink: () => cy.get('a#simpleLink'),
        dynamicLink: () => cy.get('a#dynamicLink')
    }

    clickSimpleLink(){
        this.elements.simpleLink().click();
    }

    clickDynamicLink(){
        this.elements.dynamicLink().click();
    }
}

module.exports = new linksDemoqaPage();