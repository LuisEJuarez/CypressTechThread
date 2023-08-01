class loginDemoqaPage {

    elements = {
        welcomeLabel: () => cy.get('#userForm >div > h2'),
        userName: () => cy.get('#userName'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('#login').last(),
        newUserButton: () => cy.get('#newUser'),
        invalidMessage: () => cy.get('#name'),
        logoutButton: () => cy.get('#submit'),
        loggedInMessage: () => cy.get('#loading-label')
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    clickNewUserButton(){
        this.elements.newUserButton().click();
    }

    inputUserName(username){
        this.elements.userName().type(username);
    }

    inputPassword(password){
        this.elements.password().type(password);
    }

    login(username,password){
        this.inputUserName(username);
        this.inputPassword(password);
        this.clickLoginButton();
    }

}

module.exports = new loginDemoqaPage();