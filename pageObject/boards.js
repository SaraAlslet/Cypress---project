class Boards{
   //create workspace
   createButton= ()=> cy.get('[data-testid="header-create-menu-button"]');

   clickCreateButton=()=>this.createButton().click();

   choosecreateButton= ()=>cy.get('[data-testid="header-create-team-button"]').click();

   enterWorkSpaceName=()=>cy.get('[data-testid="header-create-team-name-input"]').type('project2{enter}');

   inputNameFiled=()=>cy.get('[data-testid="header-create-team-type-input"]').click();

   inputchooseType=()=>cy.get('[data-testid="header-create-team-type-input-education"]').click(); 

   submitButton=()=>cy.get('[data-testid="header-create-team-submit-button"]').click({force: true});

   showLaterBut=()=>cy.get('[data-testid="show-later-button"]').should('be.visible').click();


   //delete workspace
   chooseLastWorkSpace=()=>cy.get('[data-testid="home-team-tab-name"]').last().should('have.text','project2').click();

   settingButton=()=>cy.get('[data-testid="admin-settings-dropdown-button"]').click();

   chooseWorkspaceSitting=()=>cy.get('.BmRHtH7FIX0jcL').eq(0).click(); 
   deleteWorkspaceBut=()=>cy.get('[data-testid="delete-workspace-button"]').click();
   interWorkspaceName=()=>cy.get('#confirmWorkspaceName').type('project2{enter}');
   confirmDeleteBut=()=>cy.get('[data-testid="delete-workspace-confirm-button"]');

}

export const boards = new Boards();  //object
