# QA Engineer Test

- This framework is about Frontend Automation Testing and it supports Page Object Model design pattern
- Tools: Cypress 10.7.0 version, Mocha Framework, JavaScript, Mochawesome Reporter, Chai library for assertions
- For headless exewcution : npx cypress run --spec "cypress\e2e\TESTS\EndToEnd_Test.cy.js"
- For execution with test runner : npx cypress open
- Framework generates mochawesome reporter


## Folder Structure

    ├── ...
    │
    |
    ├──── POM                       # Interaction methods and locators for each web page
    |    ├── BasePage.js            # Common methods and locators used in whole application
    |    |── ChartPage.js           # ChartPage methods and locators
    |    ├── CheckOutPage.js        # CheckOutPage methods and locators
    │    ├── LoginPage.js           # LoginPage methods and locators
    |    ├── OverviewPage.js        # OverviewPage methods and locators
    |    ├── ProductsPage.js        # ProductsPage methods and locators
    |
    |
    |──── TESTS                     # Test suite
    │    ├──EndToEnd_Test.cy.js     # Automated test scripts for end to end testing
    |    
    |  
    |
    ├──── reporter                  # Test Report for the tests executed
    |     ├── index.html            # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows


### Test case for E2E test
    Given I login the application
    When I click on "Sauce Labs Backpack" product in the Product Page
    And I add "Sauce Labs Backpack" product to chart
    And I navigate to Products Page
    And I add "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" products to chart directly
    And I remove "Sauce Labs Bolt T-Shirt" product from Chart
    Then I verify "Sauce Labs Backpack" and "Sauce Labs Bike Light" are in the ChartPage
    When I click on checkout button
    And I type information of buyer
    And I click on the continue button
    Then I verify "Sauce Labs Backpack" and "Sauce Labs Bike Light" are in the Overview Page
    When I click on finish button
    And I log out of the application
 