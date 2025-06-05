const Login = {
    loginBtn: "#login-button",
    passwordInput: "#password",
    usernameInput: "#user-name",
    
    typeUsername: function() {
        cy.get(this.usernameInput).type("standard_user")
    },

    typePassword: function() {
        cy.get(this.passwordInput).type("secret_sauce")
    },

    clickLogin: function(){
        cy.get(this.loginBtn).click()
    }

}
export default Login