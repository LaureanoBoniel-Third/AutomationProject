import Login from '../pages/Login.js'
import Inventory from '../pages/Inventory.js'

describe('Login to SauceLab', () => {

  it('Navigate to SauceLab', () => {
    cy.visit('https://www.saucedemo.com/')
    Login.typeUsername()
    Login.typePassword()
    Login.clickLogin()
    Inventory.verifyUrl()
    Inventory.verifyLogo()
    Inventory.verifyNumberOfItems()
  })

})