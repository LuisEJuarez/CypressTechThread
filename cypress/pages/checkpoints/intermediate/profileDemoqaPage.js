class profileDemoqaPage {

    elements = {
        mainHeader: () => cy.get('div[class="main-header"]'),
        userNameValue: () => cy.get('#userName-value')
    }

}

module.exports = new profileDemoqaPage();