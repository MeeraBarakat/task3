describe("Menu orders", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("first order", () => {
    cy.get(".choose-btn").first().click({ force: true });
    cy.get(".Cart")
      .first()
      .should("have.css", "border", "4px solid rgb(15, 125, 235)");
    cy.contains("Finish").click();
    cy.url().should("include", "/order");
    cy.get(".price-Ing-title").last().should("have.text", "Total price: 16₪");
  });

  it("second order", () => {
    cy.get(".choose-btn").eq(1).click({ force: true });
    cy.get(".Cart")
      .eq(1)
      .should("have.css", "border", "4px solid rgb(15, 125, 235)");
    cy.contains("Finish").click();
    cy.url().should("include", "/order");
    cy.get(".price-Ing-title").last().should("have.text", "Total price: 29₪");
    cy.contains("Order").click();
  });

  it("last order", () => {
    cy.get(".choose-btn").last().click({ force: true });
    cy.get(".Cart")
      .last()
      .should("have.css", "border", "4px solid rgb(15, 125, 235)");
    cy.contains("Finish").click();
    cy.url().should("include", "/order");
    cy.get(".price-Ing-title").last().should("have.text", "Total price: 18₪");
    cy.contains("Order").click();
  });
});
