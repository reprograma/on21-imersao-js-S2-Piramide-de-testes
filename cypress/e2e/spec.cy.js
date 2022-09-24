describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("Meu primeiro teste", () => {
  it("Checked", () => {
    expect(true).to.equal(true);
  });
});
