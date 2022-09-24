const request = require("supertest");
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET /films/{id}", () => {
  test("deve retornar o filme meu amigo totoro", () => {
    request(ApiUrl) // o return nao é obrigatorio, pode tirar
      .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
      .expect(200) //esse expect é do supertest
      .then((response) => {
        expect(response.body.title).toEqual("My Neighbor Totoro"); //nome tem que ser exato que ta na api
      });
  });

  test("deve retornar 404 ao passar um id inválido ", () => {
    request(ApiUrl)
      .get("/films/000")
      .expect(404)
      .then((response) => {
        expect(response.statusCode).toEqual(404); //ou retorna um vazio
        //tem varias opções de retorno no response.
      });
  });
});

describe("GET /people", () => {
  test("Deve retornar 200 e encontrar a personagem Chihiro", () => {
    request(ApiUrl)
      .get("/people")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ name: "Chihiro Ogino" })])); //acessando objeto
        //doc: https://jestjs.io/pt-BR/docs/expect#expectarraycontainingarray 
        //doc: https://jestjs.io/pt-BR/docs/expect#expectobjectcontainingobject 
      });
   });
});
