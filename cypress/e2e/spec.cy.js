describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io') // cypress visita esse site
    //pode colocar o cypress clica em tal coisa
  })
})

describe("Meu primeiro teste", () => {
  it("Passa por favor", () => {
    expect(true).to.equal(true)
  })
})