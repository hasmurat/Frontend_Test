export default class LoginPage {

    loginTheApp(){
        cy.visit(Cypress.env('BASE_URL'))
            .get('#user-name')
            .type(Cypress.env('USERNAME'))
            .get('#password')
            .type(Cypress.env('PASSWORD'))
            .get('#login-button')
            .click()
    }

}