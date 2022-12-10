describe("Ingredients", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Only bread orders", () => {
    cy.contains("Finish").click();
    cy.url().should("include", "/order");
    cy.get(".price-Ing-title").last().should("have.text", "Total price: 2₪");
    cy.contains("Order").click();
  });

  it("Clear Order", () => {
    cy.get(".buttons").first().click();
    cy.contains("Clear").click();
    cy.contains("Finish").click();
    cy.contains("Order").click();
  });

  it("Add and remove ingredients", () => {
    cy.get(".buttons").click({ multiple: true });
    cy.contains("Finish").click();
    cy.url().should("include", "/order");
    cy.get(".price-Ing-title").last().should("have.text", "Total price: 2₪");
    cy.contains("Order").click();
  });
});
