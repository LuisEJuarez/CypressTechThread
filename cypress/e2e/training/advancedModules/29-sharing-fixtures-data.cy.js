describe('Sharing a fixture', () => {

    beforeEach(function () {
        cy.fixture('users.json').as('testData');
    });

    it('Accesing the shared fixture#1',function () {
        cy.get("@testData").then((testData) => {
            cy.log(testData);
            cy.log(testData[0].name);
        });
    });

    it('Accesing the shared fixture#1',function () {
        
    });

    it('Accesing the shared fixture#1',function () {
        
    });
});