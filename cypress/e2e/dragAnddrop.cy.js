describe("drag and drop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Dragging to add ingredient", () => {
    const dataTransfer = new DataTransfer();
    cy.get(".ContolPanelImage").first().trigger("dragstart", { dataTransfer });
    cy.get(".Ingredient")
      .first()
      .should("have.css", "border", "2px solid rgb(220, 220, 220)");
    cy.get(".inner-container").trigger("drop", { dataTransfer });
    cy.get(".control-price").should("have.text", "Total price:12₪");
  });

  it("Dragging to remove ingredient", () => {
    const dataTransfer = new DataTransfer();
    cy.get(".ContolPanelImage").first().trigger("dragstart", { dataTransfer });
    cy.get(".inner-container").trigger("drop", { dataTransfer });
    cy.get(".sim-imgs").eq(1).trigger("dragstart", { dataTransfer });
    cy.get(".trash").trigger("drop", { dataTransfer });
    cy.get(".control-price").should("have.text", "Total price:2₪");
  });
});
