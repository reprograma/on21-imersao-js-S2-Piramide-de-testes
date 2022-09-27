const request = require("supertest");
const assert = require("assert");
const { doesNotMatch } = require("assert");
const apiURL = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET API IBGE", () => {
  test("Deve retornar um array contendo 5 elementos", () => {
    request(apiURL)
      .get("/regioes")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.length).toEqual(5);
      });
  });

  test("Deve retornar um array contendo o país de nome Brasil", () => {
    request(apiURL)
      .get("/paises/76")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ nome: "Brasil" })])
        );
      });
  });

  test("Deve retornar uma array vazia ao passar um id inválido de UF", () => {
    request(apiURL)
      .get("/estados/0")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveLength(0);
      });
  });

  test("Deve encontrar o município de nome Cabo Frio", () => {
    request(apiURL)
      .get("/estados/33/municipios")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ nome: "Cabo Frio" }),
          ])
        );
      });
  });

  test("Deve verificar que item 0 do array retornado tem nome Acre", () => {
    request(apiURL)
      .get("/estados?orderBy=nome")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body[0]).toEqual(
          expect.objectContaining({ nome: "Acre" })
        );
      });
  });
});
