
describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
describe("Primeiro test", () => {
  it("deve passar", () => {
    expect(true).to.equal(true);
  });
});
