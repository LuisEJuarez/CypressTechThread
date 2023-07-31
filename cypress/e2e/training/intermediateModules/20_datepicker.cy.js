describe('DatePicker', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/date-picker`);
    });

    it("DatePicker example", () => {
        cy.get("#datePickerMonthYearInput").click();
        cy.get('select.react-datepicker__month-select').select('4');
        cy.get('select.react-datepicker__year-select').select('1986');
        cy.get('.react-datepicker__month').contains('20').click();
        cy.get("#datePickerMonthYearInput").should('have.value','05/20/1986');
    });


    //You can install npm install --save-dev @testing-library/cypress

    it("DatePicker example with testing depedency", () => {
        cy.get("#datePickerMonthYearInput").click();
        cy.get('select.react-datepicker__month-select').select('4');
        cy.get('select.react-datepicker__year-select').select('1986');
        cy.findByText('20').click();
        cy.get("#datePickerMonthYearInput").should('have.value','05/20/1986');
        
    });
});
