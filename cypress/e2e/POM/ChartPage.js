export default class ChartPage {

    clickCheckOutButton(){
        cy.get('[data-test="checkout"]').click()
    }

    removeProductFromChart(product){
        cy.get(".cart_item_label")
            .contains(product).parent()
            .contains("Remove").click()
    }


}