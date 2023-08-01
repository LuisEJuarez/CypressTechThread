class loadDelayPage {

    elements = {
        buttonAfterDelay: () => cy.get('button[class="btn btn-primary"]')
    }

}

module.exports = new loadDelayPage();