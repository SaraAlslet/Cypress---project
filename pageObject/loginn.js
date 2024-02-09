
export default class Login {
loginButton=()=>cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]')
.first().click();

userEmail(email){
    cy.get('#username').type(email);
}

loginButton2=()=>cy.get('#login-submit').click();

userpassword(pass){
    cy.get('#password').type(pass);
}
passwordButton=()=>cy.get('#login-submit').click();







}

//export const login = new Login();