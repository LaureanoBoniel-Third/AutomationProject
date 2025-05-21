const Login = {
    loginBtn: "#login-button",
    passwordInput: "#password",
    usernameInput: "#user-name",
    
    typeUsername: function() {
        cy.get(this.usernameInput).type("standard_user")
    }

}
export default Login