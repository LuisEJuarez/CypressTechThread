describe.skip("Click challenge", () => {

    beforeEach(() => {
        cy.visit("http://www.uitestingplayground.com/click");
    });

    it("class assertions",() => {
        cy.get('#badButton').click().should('have.class','btn btn-success');
    });

    it("background assertions",() => {
        cy.get('#badButton').click().should('have.css','background-color', 'rgb(40, 167, 69)');
    });

});


// We need a dependency      npm install -D cypress-real-events
describe.skip("Hover challenge", () => {

    beforeEach(() => {
        cy.visit("http://www.uitestingplayground.com/mouseover");
    });

    it("hover with cypress workaround",() => {
        cy.get('.text-primary').trigger('mouseover');
    });

    it("hover with real events dependecy",() => {
        cy.get('.text-primary').realHover();
    });

});

describe("Dynamic table challenge", () => {

    beforeEach(() => {
        cy.visit("http://www.uitestingplayground.com/dynamictable");
    });

    it("Chrome CPU test",() => {
        cy.get('div[role="row"] span').each(($cell) => {
            if($cell.text().includes('Chrome')){
                cy.log(`I have found the ${$cell.text()} row`);
                let chromeRowValues = [];
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().next().text());
                chromeRowValues.push($cell.next().next().next().text());
                chromeRowValues.push($cell.next().next().next().next().text());

                cy.log("Chrome row values", chromeRowValues);

                chromeRowValues.forEach((chromeValue) => {
                    if(chromeValue.includes("%")){
                        cy.log(chromeValue);
                        cy.get('.bg-warning').should('have.text',`Chrome CPU: ${chromeValue}`);
                    }
                });
            }
            
        });
    });

});