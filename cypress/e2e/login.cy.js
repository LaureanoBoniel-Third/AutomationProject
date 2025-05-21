import Login from '../pages/Login.js'

describe('Login to SauceLab', () => {
  it('Navigate to SauceLab', () => {
    cy.visit('https://www.saucedemo.com/')
    Login.typeUsername()
  })
})