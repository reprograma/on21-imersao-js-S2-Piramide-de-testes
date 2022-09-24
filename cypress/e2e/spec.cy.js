
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("My first test", () => {
  it("1,2,3 testando", () => {
    expect(true).to.equal(true)
  })
})