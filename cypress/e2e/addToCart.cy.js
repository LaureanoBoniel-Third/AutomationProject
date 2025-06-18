import Login from '../pages/Login.js'
import Inventory from '../pages/Inventory.js'

describe('Selecting Items and verify to Cart', () => {

  it('Add items to cart', () => {
    cy.visit('https://www.saucedemo.com/')
    Login.typeUsername()
    Login.typePassword()
    Login.clickLogin()
    Inventory.verifyUrl()
    Inventory.verifyLogo()
    Inventory.verifyNumberOfItems()
    Inventory.selectRandomItem()
  })

})