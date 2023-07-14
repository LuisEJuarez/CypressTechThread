class radioButtonsDemoqaPage {

    elements = {
        yesRadio: () => cy.get('#yesRadio'),
        impressiveRadio: () => cy.get('#impressiveRadio'),
        noRadio: () => cy.get('#noRadio'),
        successMessage: () => cy.get('.text-success'),
        messageContainer: () => cy.get('p[class="mt-3"]')
    }

    checkYesRadio(){
        this.elements.yesRadio().check({ force: true });
    }

    checkImpressiveRadio(){
        this.elements.impressiveRadio().check({ force: true });
    }
}

module.exports = new radioButtonsDemoqaPage();