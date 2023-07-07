class homeSaucePage{

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('input#password'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(pwd){
        this.elements.passwordInput().type(pwd);
    }

    clickLoginBtn(){
        this.elements.loginBtn().click();
    }

}

module.exports = new homeSaucePage();