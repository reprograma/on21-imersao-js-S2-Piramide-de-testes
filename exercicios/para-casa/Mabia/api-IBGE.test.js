const request = require("supertest");
const ApiUrl =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos";

describe("GET /localidades/estados/{UF}/distritos", () => {
  test("deve retornar o estado de São Paulo ", () => {
    const estado = "SP";
    return request(ApiUrl)
      .get(`${ApiUrl}/localidades/estados/sp/distritos`)
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Adamantina");
      });
  });
});

describe("GET/localidades/estados/{UF}/distritos", () => {
  test("Deve retornar o estado de Belo Horizonte", () => {
    request(ApiUrl)
      .get(`${ApiUrl}/localidades/estados/distritos/`)
      .expect(200)
      .then((response) => {
        expect(response.body.municipio.name).toEqual("caete");
      });
  });
});

describe("GET/localidades/estados/{UF}/municipios", () => {
  test("Deve retornar o municipio", () => {
    request(ApiUrl)
      .get(`${ApiUrl}/localidades/estados/municipios/`)
      .expect(200)
      .then((response) => {
        expect(response.body.municipio.name).toEqual("Caete");
      });
  });
});

describe("GET/localidades/estados/{UF}/distritos", () =>{
  test("Deve retornar o estado de Sao Paulo", async () => {
       await request(ApiUrl)
      .get('/localidades/estados/BA/distritos')
      .expect(200)
      .then(response => {
          // const nameMunicipio = 
          expect(response.body[0].nome).toEqual("Abaíraaa")
      })
  })

})