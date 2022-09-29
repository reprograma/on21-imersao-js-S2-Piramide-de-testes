describe("Login válido", () => {
  it("deve carregar página de login", () => {
    cy.visit("https://habitica.com/static/home");
    cy.get(".navbar > .btn").click();
    cy.wait(1000);
  });

  it("deve inserir as informações do usuário e realizar o login", () => {
    cy.get("#usernameInput").type("testeaparecida@gmail.com");
    cy.get("#passwordInput").type("testeaparecida");
    cy.get(":nth-child(7) > .btn").click();
  });
});


