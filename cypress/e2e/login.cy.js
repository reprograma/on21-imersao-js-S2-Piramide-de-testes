describe("Login", () => {
  it("login successful", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".login").click();
    cy.get("#email").type("teste2021@teste.com.br");
    cy.get("#passwd").type("teste");
    cy.get("#SubmitLogin > span").click();
  });
});
