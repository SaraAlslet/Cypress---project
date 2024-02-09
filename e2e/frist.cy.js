
import { boards } from "../pageObject/boards.js";
import Login  from "../pageObject/loginn.js";
const loginPage = new Login();

// describe('login ',function(){

//login
//     it.only('login with vaild email and password',function(){
//         cy.visit('/home');
//         loginPage.loginButton();

//         cy.origin('https://id.atlassian.com', ()=>{
//             // const loginn = Cypress.require <Login> '../pageObject/loginn.js';
//             const Login = Cypress.require('../pageObject/loginn') ;
//             const loginn = new Login();
//             loginn.userEmail('saraalsyedalemam@hotmail.com');
//             loginn.loginButton2();
//             loginn.userpassword('1991book@@');
//             loginn.passwordButton();
           

//         });
//         //cy.visit('https://trello.com/');
//     });
// });

describe('create and delete workspace ', function () {
    beforeEach('login', function () {
        cy.visit('/home');
                cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]')
                .first()
                .click();
                cy.origin('https://id.atlassian.com/', function(){
                    cy.get('#username').type('saraalsyedalemam@hotmail.com');
                    cy.get('#login-submit').click();
                    cy.get('#password').type('1991book@@');
                    cy.get('#login-submit').click();})
        
        // cy.visit('/home');
        

        // cy.origin('https://id.atlassian.com/',() => {
        //     const loginn = Cypress.require('../pageObject/loginn.js');
        //     const login = new Login();
        //     login.userEmail('saraalsyedalemam@hotmail.com');
        //     login.loginButton2();
        //     login.userpassword('1991book@@');
        //     login.passwordButton();



        // });

     });
    it('create new workspace', function () {

        //new workspace
        boards.clickCreateButton();
        boards.choosecreateButton();
        boards.enterWorkSpaceName();
        boards.inputNameFiled();
        boards.inputchooseType();
        boards.submitButton();
        boards.showLaterBut();
    });
    //write this fun in console  setTimeout(() => { debugger; }, 3000);

    it('delete workspace', function () {

        //new workspace
        boards.clickCreateButton();
        boards.choosecreateButton();
        boards.enterWorkSpaceName();
        boards.inputNameFiled();
        boards.inputchooseType();
        boards.submitButton();
        boards.showLaterBut();
        
        //delete 
        boards.chooseLastWorkSpace();
        cy.wait(3000);
        boards.settingButton();
        boards.chooseWorkspaceSitting();
        boards.deleteWorkspaceBut();
        boards.interWorkspaceName();
        boards.confirmDeleteBut();
    });


});

