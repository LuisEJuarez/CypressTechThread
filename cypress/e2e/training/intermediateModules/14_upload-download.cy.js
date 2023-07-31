//** Here we need to instal a dependency: 
//For Upload ==== npm install --save-dev cypress-file-upload
//For Download ==== npm install --save-dev cy-verify-downloads


describe('Upload - Download', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`);
    });

    it("upload", () => {
        cy.get('#uploadFile').attachFile('example.json');
        cy.get('#uploadedFilePath').should('contain','example.json');
    });

    it("download", () => {
        cy.get('#downloadButton').click();
        cy.verifyDownload('sampleFile.jpeg');
    });

});