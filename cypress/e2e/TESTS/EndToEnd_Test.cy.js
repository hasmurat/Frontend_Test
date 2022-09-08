import { information } from '../../fixtures/example.json'
import LoginPage from '../POM/LoginPage'
import BasePage from '../POM/BasePage'
import ProductsPage from '../POM/ProductsPage'
import ChartPage from '../POM/ChartPage'
import CheckOutPage from '../POM/CheckOutPage'
import OverviewPage from '../POM/OverviewPage'

const loginPage = new LoginPage()
const basePage = new BasePage()
const productPage = new ProductsPage()
const chartPage = new ChartPage()
const checkOutPage = new CheckOutPage()
const overviewPage = new OverviewPage()

context('E2E Test', () => {

    beforeEach(() => {
        //I login the application
        loginPage.loginTheApp()
    })
    
    it('Buys an item from the site', () => {

        //I click on "Sauce Labs Backpack" product in the Product Page
       productPage.clickOnAProduct("Sauce Labs Backpack")

        //I add "Sauce Labs Backpack" product to chart
        productPage.clickAddToChartButton()

        //I navigate to Products Page
        basePage.backToProductsPage()

        //I add "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" products to chart directly
        productPage.addProductToChartDirectly("Sauce Labs Bike Light")
        productPage.addProductToChartDirectly("Sauce Labs Bolt T-Shirt")

        //I navigate to Products Page
        basePage.navigateToShoppingChart()

        //I remove "Sauce Labs Bolt T-Shirt" product from Chart
        chartPage.removeProductFromChart("Sauce Labs Bolt T-Shirt")

        //I verify "Sauce Labs Backpack" and "Sauce Labs Bike Light" are in the ChartPage
        basePage.verifySelectedProductInThePage("Sauce Labs Backpack")
        basePage.verifySelectedProductInThePage("Sauce Labs Bike Light")

        //I click on checkout button
        chartPage.clickCheckOutButton()

        //I type information of buyer
        checkOutPage.typeInformationOfBuyer(information.fist_name, information.last_name, information.zip_code)
        
        //I click on the continue button
        checkOutPage.clickContinueButton()

        //I verify "Sauce Labs Backpack" and "Sauce Labs Bike Light" are in the Overview Page
        basePage.verifySelectedProductInThePage("Sauce Labs Backpack")
        basePage.verifySelectedProductInThePage("Sauce Labs Bike Light")

        //I click on finish button
        overviewPage.clickFinishbutton()

        //I log out of the application
        basePage.logoutTheApp()

    })
})