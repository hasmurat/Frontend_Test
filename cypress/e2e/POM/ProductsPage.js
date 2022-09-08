export default class ProductsPage {

    clickOnAProduct (product) {
        cy.get(".inventory_item")
        .find(".inventory_item_description")
        .contains(product)
        .click()
    }

    clickAddToChartButton(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

    addProductToChartDirectly(product){
        cy.get(".inventory_item")
        .find(".inventory_item_description")
        .contains(product)
        .parent().next()
        .contains("Add to cart").click()
    }

}