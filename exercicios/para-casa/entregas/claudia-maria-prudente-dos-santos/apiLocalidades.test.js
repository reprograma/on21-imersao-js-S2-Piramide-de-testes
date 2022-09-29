const request = require("supertest");
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET localidades/distritos/{id}", () => {
  test("deve retornar 200 e encontrar distrito 'São José do Rio Preto'", () => {
    request(ApiUrl)
      .get("/distritos/160030312")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toEqual("Fazendinha");
      });
  });

  test("deve retornar 200 ao passar um id inválido e retornar array vazio", () => {
    request(ApiUrl)
      .get("/distritos/123")
      .expect(200)
      .then((response) => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveLength(0);
      });
  });
  test("deve retornar 404 passando rota errada'", async () => {
    await request(ApiUrl)
      .get("/distrito/160030312")
      .expect(404)
      .then((response) => {
        expect(response.statusCode).toEqual(404);
      });
  });
});

describe("GET /regioes", () => {
  test("deve retornar 200 e encontrar 'Norte'", async () => {
    await request(ApiUrl)
      .get("/regioes")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toEqual("Norte");
      });
  });
  test("deve retornar 404 passando rota errada'", async () => {
    await request(ApiUrl)
      .get("/regiao")
      .expect(404)
      .then((response) => {
        expect(response.statusCode).toEqual(404);
      });
  });
});
