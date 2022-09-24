describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("Meu primeiro tests", () => {
  it("passa por favor", () => {
    expect(true).to.equal(true)
  })
})