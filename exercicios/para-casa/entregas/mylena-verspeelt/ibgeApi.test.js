const request = require("supertest");
var api = request("https://servicodados.ibge.gov.br/api/v1/localidades");

describe("Testes Distritos", () => {
  test("Deve retornar o nome do distrito de Agrestina/PE", () => {
    api
      .get("/distritos/260030205")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ nome: "Agrestina" }),
          ])
        );
      });
  });
  test("Deve retornar o ID do distrito de Afrânio/PE", () => {
    api
      .get("/distritos/260020305")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ id: 260020305 })])
        );
      });
  });
  test("Informa um distrito com ID inexistente e deve retornar um array vazio", () => {
    api
      .get("/distritos/0000")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([]);
      });
  });
});

describe("Testes Municípios", () => {
  test("Deve retornar o ID do município Caruaru/PE", () => {
    api
      .get("/municipios/2604106")
      .expect(200)
      .then((response) => {
        expect(response.body.id).toBe(2604106);
      });
  });
  test("Deve retornar o nome do município de Cachoeirinha/PE", () => {
    api
      .get("/municipios/2603108")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Cachoeirinha");
      });
  });
  test("Deve retornar a mesoregião do município de Recife/PE", () => {
    api
      .get("/municipios/2611606")
      .expect(200)
      .then((response) => {
        expect(response.body.microrregiao.mesorregiao.nome).toEqual(
          "Metropolitana de Recife"
        );
      });
  });
});

describe("Teste Regiões", () => {
  test("Deve retornar nome da Região Norte", () => {
    api
      .get("/regioes/1")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Norte");
      });
  });

  test("Deve retornar a sigla da Região Nordeste (NE)", () => {
    api
      .get("/regioes/2")
      .expect(200)
      .then((response) => {
        expect(response.body.sigla).toEqual("NE");
      });
  });
});
