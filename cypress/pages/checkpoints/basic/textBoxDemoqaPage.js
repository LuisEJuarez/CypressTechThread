class textBoxDemoqaPage {

    elements = {
        userName: () => cy.get('input#userName'),
        userEmail: () => cy.get('input#userEmail'),
        userCurrentAddress: () => cy.get('textarea#currentAddress'),
        userPermanentAddress: () => cy.get('textarea#permanentAddress'),
        sumbitButton: () => cy.get('#submit'),
        userNameLabel: () => cy.get('p#name'),
        userEmailLabel: () => cy.get('p#email'),
        userCurrentAddressLabel: () => cy.get('p#currentAddress'),
        userPermanentAddressLabel: () => cy.get('p#permanentAddress'),
    }

    typeUserName(userName){
        this.elements.userName().type(userName);
    }

    typeUserEmail(userEmail){
        this.elements.userEmail().type(userEmail);
    }

    typeUserCurrentAddress(userCurrentAddress){
        this.elements.userCurrentAddress().type(userCurrentAddress);
    }

    typeUserPermanentAddress(userPermanentAddress){
        this.elements.userPermanentAddress().type(userPermanentAddress);
    }

    clickSubmitButton(){
        this.elements.sumbitButton().click();
    }
}

module.exports = new textBoxDemoqaPage();