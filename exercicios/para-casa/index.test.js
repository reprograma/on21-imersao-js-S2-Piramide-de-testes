const request = require("supertest");
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET /films/{id}", () => {
  test("deve retornar o filme meu amigo totoro", () => {
    return request(ApiUrl)
      .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual("My Neighbor Totoro");
      });
  });

  it("Get the title to filme ´Sen to Chihiro no kamikakushi´", () => {
    request(ApiUrl)
      .get("/films/dc2e6bd1-8156-4886-adff-b39e6043af0c")
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual("Spirited Away");
      });
  });
});

it("and the return is 404", () => {
  request(ApiUrl)
    .get("/films/dc2e6bd1-8156-4886-adff-b39e6043af0x")
    .expect(404)
    .then((response) => {
      expect(response.statusCode).toEqual("404");
    });
});

it("and the return is 200 and found the chihiro´s character", () => {
  request("ApiUrl")
    .get("/people/")
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "Chihiro Ogino" }),
        ])
      );
    });
});
