const request = require("supertest");
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET/estado", () => {
  test("deve retornar o estado da Paraíba", () => {
    request(ApiUrl)
      .get("/regioes/2/estados")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ nome: "Paraíba" })])
        );
      });
  });

  test("deve retornar 404 ao passar uma região inválida", () => {
    request(ApiUrl)
      .get("/localidades/regioes/sertão/estados")
      .expect(404)
      .catch((err) => {
        expect(err.statusCode).toEqual(404);
      });
  });
});

describe("GET/município", () => {
  test("deve retornar o município de João Pessoa", () => {
    request(ApiUrl)
      .get("/estados/25/municipios")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ nome: "João Pessoa" }),
          ])
        );
      });
  });

  test("deve retornar 404 ao passar um estado inválido", () => {
    request(ApiUrl)
      .get("/localidades/estados/PP/municipios")
      .expect(404)
      .catch((err) => {
        expect(err.statusCode).toEqual(404);
      });
  });
});
