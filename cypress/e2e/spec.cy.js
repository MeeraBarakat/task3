describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Finish').click();
    cy.url().should('include', '/order');
    cy.get('.price-Ing-title').last().should('have.text', 'Total price: 2₪');
    cy.visit('http://localhost:3000');
    cy.get('.buttons').click({multiple: true});
    cy.contains('Finish').click();
    cy.url().should('include', '/order');
    cy.get('.price-Ing-title').last().should('have.text', 'Total price: 2₪');
    cy.visit('http://localhost:3000');
    cy.get('.choose-btn').first().click({force: true});
    cy.contains('Finish').click();
    cy.url().should('include', '/order');
    cy.get('.price-Ing-title').last().should('have.text', 'Total price: 16₪');
    cy.visit('http://localhost:3000');
    cy.get('.choose-btn').first().click({force: true});
    cy.contains('Clear').click();
    cy.contains('Finish').click();
    cy.url().should('include', '/order');
    cy.get('.price-Ing-title').last().should('have.text', 'Total price: 2₪');
    cy.visit('http://localhost:3000');
    cy.contains('Clear').should('have.css', 'background-color','rgb(255, 57, 57)');
    cy.get('.buttons').first().click();
    cy.get('.control-price').should('have.text', 'Total price:12₪');
    cy.contains('-').first().click();
    cy.get('.control-price').should('have.text', 'Total price:2₪');
  });
})