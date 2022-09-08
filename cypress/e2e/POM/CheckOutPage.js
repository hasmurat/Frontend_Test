export default class CheckOutPage {
    
    typeInformationOfBuyer(firstName, lastname,zipCode){
        cy.get('[data-test="firstName"]').type(firstName)
        .get('[data-test="lastName"]').type(lastname)
        .get('[data-test="postalCode"]').type(zipCode)
    }

    clickContinueButton(){
        cy.get('[data-test="continue"]').click()
    }

    

}