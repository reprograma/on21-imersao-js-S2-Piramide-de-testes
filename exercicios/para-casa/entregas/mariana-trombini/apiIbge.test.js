const request = require("supertest")
const urlApiIbge = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe("GET", () => {
  test("Deve retornar 200 e localizar a Irlanda", () => {
    request(urlApiIbge)
        .get("/paises/372")
        .expect(200)
        .then(response => {
            expect(response.body[0].nome).toEqual("Irlanda")
      })
  })
  test("Deve retornar 200 e encontrar o distrito de São Roque da Fartura do estado de SP", () => {
    request(urlApiIbge)
      .get("/estados/sp/distritos/")
      .expect(200)
      .then((response) => {
        expect(response.body[4].nome).toBe("São Roque da Fartura");
      });
  });
  test("Deve retornar a região Sul do Brasil", () => {
    request(urlApiIbge)
      .get("/regioes/4")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Sul");
      });
  });
  test("Deve retornar 200 e o estado de São Paulo", () => {
    request(urlApiIbge)
        .get("/estados/sp")
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual("São Paulo")
      })
  });
  test("Deve retornar 200 ao localizar as regiões imediatas de Tocantinópolis", () => {
    request(urlApiIbge)
        .get("/regioes-imediatas/170008")
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.objectContaining({nome: "Tocantinópolis"}))
      })
  })
  test("Deve retornar 200 ao localizar a propriedade sigla com valor SP ", () => {
    request(urlApiIbge)
        .get("/estados/sp")
        .expect(200)
        .then(response => {
          expect(response.body).toEqual(expect.objectContaining({sigla: 'SP'}))
      })
  });
  test("Deve retornar 404 se uma Unidade da Federação inválida for fornecida", () => {
    request(urlApiIbge)
        .get("/estados/x/distritos/")
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
      })
  })
  test("Deve retornar um array vazio caso não localize o pais", () => {
    request(urlApiIbge)
        .get("/paises/13")
        .then(response => {
            expect(response.body).toEqual([])
      })
  })
})