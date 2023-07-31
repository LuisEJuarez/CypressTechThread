describe('Broken images', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/broken`);
    });

    it("Image assertion", () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]')
            .should('be.visible')
            .and( ($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });

    it("Broken Image assertion", () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
            .should('be.visible')
            .and( ($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });

});

describe.only('Broken images', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/broken_images`);
    });

    it("First Image assertion", () => {
        cy.get('div > img').first().should('be.visible')
        .and( ($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });

    it("Last Image assertion", () => {
        cy.get('div > img').last().should('be.visible')
        .and( ($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });

});