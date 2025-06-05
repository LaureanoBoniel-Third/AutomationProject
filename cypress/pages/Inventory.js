const Inventory = {

    verifyUrl: function() {
        cy.url().should('include', '/inventory.html')
    },
    verifyLogo: function() {
        cy.get('.app_logo').should('be.visible').and('contain', 'Swag Labs')
    },
    verifyNumberOfItems: function() {
        cy.get('.inventory_item').should('have.length', 6)
    }
}
export default Inventory