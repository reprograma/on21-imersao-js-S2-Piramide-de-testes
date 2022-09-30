const request = require("supertest");
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("Testa GET /localidades/", () => {
  test("deve retornar 200 e encontrar a região Nordeste", () => {
    request(ApiUrl)
        .get("/regioes/2")
        .expect(404)
        .then((response) => {
             expect(response.body.nome).toEqual("Nordeste");
        });
    });

  
    test("deve retornar 200 e  localizar o id 2901", () => {
      request(ApiUrl)
        .get("/estados/ba/mesorregioes/2901")
        .expect(200)
        .then((response) => {
          expect(response.body[0].id).toEqual(2901);
        });
    });
  

  test("deve retornar 200 e o distrito de Abaíra", () => {
    request(ApiUrl)
      .get("/localidades/estados/ba/distritos")
      .expect(200)
      .then((response) => {
            expect(response.body[0].nome).toEqual('Abaíra');
        });
    });

  test("deve retornar 200 e encontrar informações do município de  Abaré", () => {
    request(ApiUrl)
      .get("/municipios/2900207/")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Abaré");
      });
  });

  test("deve retornar 404 e e não encontrar informaçoes das microrregião de Cotegipe ",  () => {
     request(ApiUrl)
        .get('/estados//ba/microrregioes')
        .expect(404)
        .then(response => {
            expect(response.body.nome).toEqual('Cotegipe')
      })
  });

});
