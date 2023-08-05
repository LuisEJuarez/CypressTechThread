describe('using a fixture', () => {

    it('Loading the file and display data of the fixture', () => {
        cy.fixture('example.json').then( (testData) => {
            cy.log(testData);
            cy.log(testData.name);
        });
    });

});