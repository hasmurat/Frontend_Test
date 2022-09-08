export default class BasePage {

    clickBurgerMenu(){
        cy.get("#react-burger-menu-btn").click()
    }

    logoutTheApp(){
        this.clickBurgerMenu()
        cy.get('#logout_sidebar_link', { timeout: 10000 }).click()
    }

    navigateToShoppingChart(){
        cy.get('.shopping_cart_link').click()
    }
   
    backToProductsPage(){
        this.clickBurgerMenu()
        cy.get("#inventory_sidebar_link", { timeout: 10000 }).click()
    }

    verifySelectedProductInThePage(product){
        cy.contains(product).should("be.visible")
    }

}