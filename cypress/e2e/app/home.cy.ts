describe("template spec Home", () => {
  it("Renders the default elements on the screen", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="cypress-home"]')
    .should("exist")
    .should("have.text", "HomePage")
  });
});
