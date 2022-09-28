const request = require("supertest");
const linkApi = "https://servicodados.ibge.gov.br/api/v1";

describe("Teste API IBGE", () => {
  it("Retorno do país pesquisado", async () => {
    const result = { nome: "Brasil" };
    await request(linkApi)
      .get("/localidades/paises")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining(result)])
        );
      });
  });

  it("Retorno da macroregiao pesquisada", async () => {
    const result = { nome: "Nordeste" };
    await request(linkApi)
      .get("/localidades/regioes")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining(result)])
        );
      });
  });
  
  it("Retorno do minicipio pesquisado", async () => {
    const result = { nome: "Paraty" };
    await request(linkApi)
      .get("/localidades/estados/RJ/municipios")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining(result)])
        );
      });
  });

  it("Retorno do status 404", async () => {
    await request(linkApi)
    .get("/localidades/estados/RJ/municipio")
    .expect(404);
  });

  it("Retorno do minicipio inexistente", async () => {
    const result = { nome: "Brasil" };
    await request(linkApi)
      .get("/localidades/estados/RJ/municipios")
      .expect(200)
      .then((response) => {
        expect(response.body).not.toEqual(
          expect.arrayContaining([expect.objectContaining(result)])
        );
      });
  });
});
