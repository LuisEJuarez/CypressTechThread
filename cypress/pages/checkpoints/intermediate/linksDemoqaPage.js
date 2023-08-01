class linksDemoqaPage {

    elements = {
        createdLink: () => cy.get('a#created')
    }

    clickCreatedLink(){
        this.elements.createdLink().click();
    }

}

module.exports = new linksDemoqaPage();