const Inventory = {

    verifyUrl: function() {
        cy.url().should('include', '/inventory.html')
    },
    verifyLogo: function() {
        cy.get('.app_logo').should('be.visible').and('contain', 'Swag Labs')
    },
    verifyNumberOfItems: function() {
        cy.get('.inventory_item').should('have.length', 6)
    }, 
    selectRandomItem: function() {
        cy.get('[data-test="inventory-item"]').then(($items) => {
            const max = $items.length;
            const randomNumber = Math.floor(Math.random() * (max - 1) + 1);
            cy.log(`Random number of items to add: ${randomNumber}`);
            
            for (let i = 0; i < randomNumber; i++) {
                cy.wrap($items[i])
            }
        });
    }
};
export default Inventory