describe('Excel playground', () => {

    it('read data from excel', () => {
        cy.parseXlsx("cypress/fixtures/example.xlsx").then( (jsonData) => {
            cy.log(jsonData);
            cy.log(jsonData[0].data);

            let data = jsonData[0].data;
            let dataLength = data.length;

            data.forEach( (row) => {
                cy.log(row[0]);
                cy.log(row[1]);
            });

            data.forEach( (row) => {
                cy.writeFile("cypress/fixtures/excelExample.json",{
                    columnName: row[0],
                    rowContent: row[1],
                });
            });

        });
    });

});