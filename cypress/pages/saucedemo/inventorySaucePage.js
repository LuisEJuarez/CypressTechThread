class inventorySaucePage{
    elements = {
        titleSpan: () => cy.get('.title')
    }
}

module.exports = new inventorySaucePage();