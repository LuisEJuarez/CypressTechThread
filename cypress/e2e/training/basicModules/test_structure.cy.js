/*
Topics:
-> Desribe and Context
-> It and Specify
-> Unit testing Demo
*/

//Dummy Application

let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let divide = (a,b) => a / b;
let multiply = (a,b) => a * b;

//Cypress Test
//Describe - Context -> Group tests, nest multiple instances. (means same)
describe('Unit testing of oour dumy application',() => {

    context('Math with POSITIVE numbers', () => {
        //it or specify -> means same again. It use for indiviudla test case
        it('should add positive numbres', () => {
            expect(add(2,2)).to.eq(4);
        });

        it('should subtract positive numbres', () => {
            expect(subtract(4,2)).to.eq(2);
        });

        it('should divide positive numbres', () => {
            expect(divide(4,2)).to.eq(2);
        });

        it('should multiply positive numbres', () => {
            expect(multiply(4,2)).to.eq(8);
        });
    });

    describe('Mah with DECIMAL numbers', ()=>{
        it('should add decimal numbres', () => {
            expect(add(2.2,2.2)).to.eq(4.4);
        });

        it('should subtract decimal numbres', () => {
            expect(subtract(5,2.5)).to.eq(2.5);
        });
    });

});